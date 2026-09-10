import { useMemo, useState } from "react";
import type { LearnItem } from "@/lib/content";
import { shuffle } from "@/lib/content";
import { useZozo } from "@/lib/zozo/zozo-context";
import type { TopicKey, ZozoCommandType } from "@/lib/zozo/types";
import { QuizCard } from "./QuizCard";
import { PlayButton } from "./ui";
import { cn } from "@/lib/utils";

export function ItemLearner({
  items,
  topic,
  command,
}: {
  items: LearnItem[];
  topic: TopicKey;
  command: ZozoCommandType;
}) {
  const { speak, sendCommand, setExpression } = useZozo();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex]!;

  const select = (i: number) => {
    setActiveIndex(i);
    const item = items[i]!;
    speak(item.name);
    sendCommand(command, { name: item.name });
    setExpression("curious", 1500);
  };

  const options = useMemo(() => {
    const wrong = shuffle(items.filter((i) => i.name !== active.name)).slice(0, 2);
    return shuffle([active, ...wrong]).map((i) => ({ label: i.name, emoji: i.emoji }));
  }, [active, items]);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.name}
            onClick={() => select(i)}
            className={cn(
              "card-soft card-interactive flex flex-col items-center gap-1 p-4",
              i === activeIndex && "border-glow/70 glow-ring",
            )}
          >
            <span className="text-4xl">{item.emoji}</span>
            <span className="font-semibold">{item.name}</span>
          </button>
        ))}
      </div>

      <div className="card-soft flex flex-col items-center gap-3 p-8 text-center">
        <span key={active.name} className="pop-in text-8xl">
          {active.emoji}
        </span>
        <h2 className="text-3xl font-extrabold">{active.name}</h2>
        <p className="text-muted-foreground">Say it: {active.pronunciation}</p>
        <p className="text-lg">{active.fact}</p>
        <PlayButton onClick={() => speak(`${active.name}. ${active.fact}`)}>🔊 Hear it</PlayButton>
      </div>

      <QuizCard
        key={active.name}
        question={`Which one is ${active.name.toLowerCase()}?`}
        options={options}
        answer={active.name}
        topic={topic}
        reward={6}
      />
    </div>
  );
}
