import { useState } from "react";
import { EXPRESSION_FACE, EXPRESSION_LABEL } from "@/lib/zozo/types";
import { useZozo } from "@/lib/zozo/zozo-context";

export function ZozoStatusPanel() {
  const { connected, toggleConnection, expression, activity, commandLog } = useZozo();
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="pointer-events-auto w-72 card-soft pop-in p-4 text-sm">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Current activity</p>
          <p className="mt-1 font-semibold">{activity}</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">Expression</p>
          <p className="mt-1">
            {EXPRESSION_FACE[expression]} {EXPRESSION_LABEL[expression]}
          </p>
          <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
            Last signals to Zozo
          </p>
          <ul className="mt-1 max-h-28 space-y-1 overflow-auto text-xs text-muted-foreground">
            {commandLog.length === 0 && <li>No signals sent yet.</li>}
            {commandLog.map((c) => (
              <li key={c.at + c.type} className="font-mono">
                {c.type}
              </li>
            ))}
          </ul>
          <button
            onClick={toggleConnection}
            className="mt-4 w-full rounded-xl border border-border bg-secondary px-3 py-2 text-xs font-semibold transition-colors hover:bg-muted"
          >
            {connected ? "Simulate disconnect" : "Reconnect Zozo"}
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="pointer-events-auto flex items-center gap-3 rounded-full border border-border bg-card/90 px-4 py-2 backdrop-blur transition-transform hover:scale-105 glow-ring"
      >
        <span className="text-xl">🤖</span>
        <span className="text-left">
          <span className="block text-sm font-semibold leading-tight">Zozo</span>
          <span className="block text-xs text-muted-foreground">
            {connected ? "🟢 Connected" : "🔴 Disconnected"}
          </span>
        </span>
        <span className="text-lg">{EXPRESSION_FACE[expression]}</span>
      </button>
    </div>
  );
}
