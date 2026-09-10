import { createFileRoute, Link } from "@tanstack/react-router";
import zozoHero from "@/assets/zozo-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zozo — Learn. Play. Grow." },
      {
        name: "description",
        content:
          "Meet Zozo, a playful AI learning companion that helps kids explore, learn and build good habits.",
      },
      { property: "og:title", content: "Zozo — Learn. Play. Grow." },
      {
        property: "og:description",
        content: "A playful learning companion for interactive lessons, games and good manners.",
      },
    ],
  }),
  component: Index,
});

const HIGHLIGHTS = [
  { icon: "📚", title: "Interactive Learning", text: "Short, playful lessons kids love." },
  { icon: "🎮", title: "Fun Games", text: "Quick games that teach while they play." },
  { icon: "❤️", title: "Good Manners", text: "Everyday kindness, taught gently." },
  { icon: "🖥️", title: "Screen Sharing", text: "Send content straight to Zozo." },
  { icon: "🤖", title: "Learning with Zozo", text: "Zozo reacts to every answer." },
];

function Index() {
  return (
    <>
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            AI learning companion
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl text-gradient">
            Meet Zozo — Learn. Play. Grow.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            A playful learning companion that helps kids explore, learn and build good habits
            through interactive experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/dashboard"
              className="rounded-full bg-gradient-to-r from-accent to-glow px-7 py-3.5 text-base font-bold text-primary-foreground glow-ring transition-transform hover:scale-105"
            >
              Start Learning
            </Link>
            <Link
              to="/games"
              className="rounded-full border border-border bg-secondary px-7 py-3.5 text-base font-bold transition-colors hover:bg-muted"
            >
              Explore Games
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-6 rounded-full bg-glow/20 blur-3xl" aria-hidden />
          <img
            src={zozoHero}
            alt="Zozo, a friendly white and blue robot learning companion"
            width={1024}
            height={1024}
            className="relative w-full rounded-3xl border border-border float-slow"
          />
          <span className="absolute -left-2 top-8 rounded-2xl border border-border bg-card/90 px-3 py-2 text-sm backdrop-blur float-slow">
            🍎 A is for Apple
          </span>
          <span className="absolute -right-2 bottom-10 rounded-2xl border border-border bg-card/90 px-3 py-2 text-sm backdrop-blur float-slow">
            🎉 Great job!
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="card-soft card-interactive p-5">
              <div className="text-3xl">{h.icon}</div>
              <h2 className="mt-3 text-base font-bold">{h.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
