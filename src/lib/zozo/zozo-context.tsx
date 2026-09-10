import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ACHIEVEMENTS,
  type TopicKey,
  type ZozoCommand,
  type ZozoCommandType,
  type ZozoExpression,
} from "./types";

const STORAGE_KEY = "zozo.progress.v1";

type ProgressMap = Partial<Record<TopicKey, number>>;

interface ZozoState {
  connected: boolean;
  toggleConnection: () => void;
  expression: ZozoExpression;
  setExpression: (e: ZozoExpression, holdMs?: number) => void;
  activity: string;
  setActivity: (a: string) => void;
  progress: ProgressMap;
  addProgress: (topic: TopicKey, amount: number) => void;
  resetProgress: () => void;
  earnedAchievements: string[];
  commandLog: ZozoCommand[];
  sendCommand: (type: ZozoCommandType, payload?: Record<string, unknown>) => void;
  reactCorrect: () => void;
  reactWrong: () => void;
  speak: (text: string) => void;
}

const ZozoContext = createContext<ZozoState | null>(null);

export function ZozoProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(true);
  const [expression, setExpressionState] = useState<ZozoExpression>("happy");
  const [activity, setActivity] = useState("Waiting for a new adventure");
  const [progress, setProgress] = useState<ProgressMap>({});
  const [commandLog, setCommandLog] = useState<ZozoCommand[]>([]);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setProgress(JSON.parse(raw) as ProgressMap);
    } catch {
      /* ignore */
    }
  }, []);

  const sendCommand = useCallback((type: ZozoCommandType, payload?: Record<string, unknown>) => {
    // Future: forward over WebSocket / REST to the ESP32-S3 Zozo device.
    setCommandLog((log) => [{ type, payload, at: Date.now() }, ...log].slice(0, 12));
  }, []);

  const setExpression = useCallback(
    (next: ZozoExpression, holdMs?: number) => {
      setExpressionState(next);
      sendCommand("CHANGE_EXPRESSION", { expression: next });
      if (holdTimer.current) clearTimeout(holdTimer.current);
      if (holdMs) {
        holdTimer.current = setTimeout(() => setExpressionState("happy"), holdMs);
      }
    },
    [sendCommand],
  );

  // Sleepy after a while of no interaction.
  useEffect(() => {
    const wake = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setExpressionState("sleepy"), 60_000);
    };
    wake();
    const events = ["pointerdown", "keydown", "pointermove"] as const;
    events.forEach((e) => window.addEventListener(e, wake, { passive: true }));
    return () => {
      events.forEach((e) => window.removeEventListener(e, wake));
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  const persist = (next: ProgressMap) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const addProgress = useCallback((topic: TopicKey, amount: number) => {
    setProgress((prev) => {
      const next = { ...prev, [topic]: Math.min(100, (prev[topic] ?? 0) + amount) };
      persist(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({});
    persist({});
  }, []);

  const speak = useCallback((text: string) => {
    try {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 0.9;
      utter.pitch = 1.3;
      window.speechSynthesis.speak(utter);
    } catch {
      /* ignore */
    }
  }, []);

  const reactCorrect = useCallback(() => {
    setExpression("excited", 2500);
    sendCommand("REACT_CORRECT");
  }, [sendCommand, setExpression]);

  const reactWrong = useCallback(() => {
    setExpression("curious", 2500);
    sendCommand("REACT_WRONG");
  }, [sendCommand, setExpression]);

  const earnedAchievements = useMemo(
    () => ACHIEVEMENTS.filter((a) => (progress[a.topic] ?? 0) >= a.requirement).map((a) => a.id),
    [progress],
  );

  const value: ZozoState = {
    connected,
    toggleConnection: () => setConnected((c) => !c),
    expression,
    setExpression,
    activity,
    setActivity,
    progress,
    addProgress,
    resetProgress,
    earnedAchievements,
    commandLog,
    sendCommand,
    reactCorrect,
    reactWrong,
    speak,
  };

  return <ZozoContext.Provider value={value}>{children}</ZozoContext.Provider>;
}

export function useZozo() {
  const ctx = useContext(ZozoContext);
  if (!ctx) throw new Error("useZozo must be used inside ZozoProvider");
  return ctx;
}

/** Announce the current activity to Zozo when a lesson screen mounts. */
export function useZozoActivity(label: string, command?: ZozoCommandType) {
  const { setActivity, sendCommand, setExpression } = useZozo();
  useEffect(() => {
    setActivity(label);
    setExpression("curious", 2000);
    if (command) sendCommand(command, { label });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [label]);
}
