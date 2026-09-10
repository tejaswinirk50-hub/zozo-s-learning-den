import { createFileRoute } from "@tanstack/react-router";
import { Section, TileLink } from "@/components/zozo/ui";
import { useZozoActivity } from "@/lib/zozo/zozo-context";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    meta: [
      { title: "Learn with Zozo — Fruits, Letters, Numbers & Math" },
      {
        name: "description",
        content: "Interactive lessons for fruits, vegetables, alphabets, numbers and basic math.",
      },
      { property: "og:title", content: "Learn with Zozo" },
      { property: "og:description", content: "Playful lessons kids can finish in minutes." },
    ],
  }),
  component: LearnHub,
});

function LearnHub() {
  useZozoActivity("Learning: choosing a topic", "START_LESSON");

  return (
    <Section title="Learn with Zozo" subtitle="Pick a topic. Every lesson ends with a fun quiz.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <TileLink to="/learn/fruits" icon="🍎" title="Fruits" description="Eight tasty fruits with sounds and facts." />
        <TileLink to="/learn/vegetables" icon="🥕" title="Vegetables" description="Meet the healthy veggie friends." />
        <TileLink to="/learn/alphabets" icon="🔤" title="Alphabets" description="A to Z with pictures and words." />
        <TileLink to="/learn/numbers" icon="🔢" title="Numbers" description="Count from 1 to 10, 20, 50 or 100." />
        <TileLink to="/learn/math" icon="➕" title="Math" description="Simple addition and subtraction levels." />
        <TileLink to="/manners" icon="❤️" title="Good Manners" description="Thank you, sorry, please and more." />
      </div>
    </Section>
  );
}
