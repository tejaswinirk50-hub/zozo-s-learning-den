import { EXPRESSION_FACE, EXPRESSION_LABEL } from "@/lib/zozo/types";
import { useZozo } from "@/lib/zozo/zozo-context";
import { cn } from "@/lib/utils";

const SIZES = {
  sm: "h-14 w-14 text-2xl",
  md: "h-24 w-24 text-4xl",
  lg: "h-40 w-40 text-7xl",
};

export function ZozoAvatar({
  size = "md",
  className,
  showLabel = false,
}: {
  size?: keyof typeof SIZES;
  className?: string;
  showLabel?: boolean;
}) {
  const { expression } = useZozo();

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-glow/25 blur-2xl" aria-hidden />
        <div
          className={cn(
            "relative grid place-items-center rounded-[42%] border border-glow/40 bg-surface-2 glow-ring float-slow",
            SIZES[size],
          )}
          role="img"
          aria-label={`Zozo looks ${EXPRESSION_LABEL[expression]}`}
        >
          <span key={expression} className="pop-in">
            {EXPRESSION_FACE[expression]}
          </span>
        </div>
      </div>
      {showLabel && (
        <p className="text-sm text-muted-foreground">
          Zozo is {EXPRESSION_LABEL[expression].toLowerCase()}
        </p>
      )}
    </div>
  );
}
