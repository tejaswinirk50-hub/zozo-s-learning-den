import { createFileRoute } from "@tanstack/react-router";
import { Section, TileLink } from "@/components/zozo/ui";
import { ZozoAvatar } from "@/components/zozo/ZozoAvatar";
import { useZozoActivity } from "@/lib/zozo/zozo-context";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Zozo Dashboard — Pick an Adventure" },
      {
        name: "description",
        content: "Choose learning, games, good manners, screen share or progress with Zozo.",
      },
      { property: "og:title", content: "Zozo Dashboard — Pick an Adventure" },
      { property: "og:description", content: "Your playground for learning with Zozo." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  useZozoActivity("Choosing an adventure");

  return (
    <Section title="What shall we do today?" subtitle="Pick a card and Zozo will join you.">
      <div className="mb-8 flex items-center gap-5 card-soft p-5">
        <ZozoAvatar size="md" />
        <p className="text-lg font-semibold">
          Hi friend! I'm ready to learn and play. 🤖
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <TileLink to="/learn" icon="📚" title="Learning" description="Learn basic concepts through interactive lessons." />
        <TileLink to="/games" icon="🎮" title="Games" description="Short, fun educational games." />
        <TileLink to="/manners" icon="🌱" title="Good Manners" description="Everyday manners and kind behaviour." />
        <TileLink to="/share" icon="🖥️" title="Screen Share" description="Share educational content with Zozo." />
        <TileLink to="/progress" icon="⭐" title="My Progress" description="Badges, achievements and progress bars." />
      </div>
    </Section>
  );
}
