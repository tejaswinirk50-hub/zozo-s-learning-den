import { useState } from "react";
import { ENCOURAGE, PRAISE, pick } from "@/lib/content";
import { useZozo } from "@/lib/zozo/zozo-context";
import type { TopicKey } from "@/lib/zozo/types";
import { Feedback } from "./ui";
import { cn } from "@/lib/utils";

export interface QuizOption {
  label: string;
  emoji?: string;
}

export function QuizCard({
  question,
  options,
  answer,
  topic,
  reward = 5,
  praise,
  onCorrect,
}: {
  question: string;
  options: QuizOption[];
  answer: string;
  topic: TopicKey;
  reward?: number;
  praise?: string;
  onCorrect?: () => void;
}) {
  const { reactCorrect, reactWrong, addProgress, speak } = useZozo();
  const [chosen, setChosen] = useState<string | null>(null);
  const [tone, setTone] = useState<"correct" | "try" | null>(null);
  const [message, setMessage] = useState("");

  const choose = (label: string) => {
    setChosen(label);
    if (label === answer) {
      const text = praise ?? pick(PRAISE);
      setTone("correct");
      setMessage(text);
      reactCorrect();
      speak(text);
      addProgress(topic, reward);
      onCorrect?.();
    } else {
      const text = pick(ENCOURAGE);
      setTone("try");
      setMessage(text);
      reactWrong();
      speak(text);
    }
  };

  return (
    <div className="card-soft p-6">
      <p className="text-lg font-bold">{question}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {options.map((o) => {
          const isAnswer = o.label === answer;
          const isChosen = chosen === o.label;
          return (
            <button
              key={o.label}
              onClick={() => choose(o.label)}
              className={cn(
                "rounded-2xl border border-border bg-secondary px-4 py-5 text-lg font-semibold transition-all hover:scale-[1.03] hover:border-glow/60",
                isChosen && isAnswer && "border-success bg-success/15 text-success",
                isChosen && !isAnswer && "border-sun bg-sun/10 text-sun",
              )}
            >
              {o.emoji && <span className="mr-2 text-3xl align-middle">{o.emoji}</span>}
              {o.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4">
        <Feedback tone={tone} message={message} />
      </div>
    </div>
  );
}
