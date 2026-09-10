import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4 py-10 sm:px-6", className)}>
      <header className="mb-6">
        <h1 className="text-3xl font-bold sm:text-4xl text-gradient">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}

export function TileLink({
  to,
  icon,
  title,
  description,
}: {
  to: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      className="card-soft card-interactive flex flex-col gap-3 p-6"
    >
      <span className="text-4xl">{icon}</span>
      <span className="text-xl font-bold">{title}</span>
      <span className="text-sm text-muted-foreground">{description}</span>
    </Link>
  );
}

export function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-semibold">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-glow transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function Feedback({ tone, message }: { tone: "correct" | "try" | null; message: string }) {
  if (!tone) return null;
  return (
    <p
      className={cn(
        "pop-in rounded-2xl px-4 py-3 text-center text-lg font-semibold",
        tone === "correct" ? "bg-success/15 text-success" : "bg-sun/15 text-sun",
      )}
      role="status"
    >
      {message}
    </p>
  );
}

export function PlayButton({
  children,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "rounded-full px-6 py-3 text-base font-bold transition-transform hover:scale-105 active:scale-95",
        variant === "primary"
          ? "bg-gradient-to-r from-accent to-glow text-primary-foreground glow-ring"
          : "border border-border bg-secondary text-foreground hover:bg-muted",
        className,
      )}
    >
      {children}
    </button>
  );
}
