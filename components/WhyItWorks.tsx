const points = [
{
  title: "Save time",
    description:
    "Skip hours of trial and error with prompts that already work.",
    },
{
title: "Higher quality output",
  description:
  "Well-structured prompts consistently produce sharper, more polished results.",
  },
{
title: "Consistent results",
  description:
  "Repeatable prompt structures mean fewer surprises across projects.",
  },
{
title: "Better creativity",
  description:
  "Good prompts remove the blank-page problem so ideas can flow faster.",
  },
{
title: "Less trial and error",
  description:
  "Start from prompts that are already tuned instead of guessing from zero.",
  },
];

export default function WhyItWorks() {
  return (
    <section className="border-y border-border/60 bg-card/40 py-24">
    <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
    <div>
    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
    Why prompting well actually matters
</h2>
<p className="mt-4 text-lg leading-relaxed text-muted">
AI tools are only as good as the instructions you give them. A
    well-crafted prompt is the difference between generic output and
content that looks intentional, polished, and on-brand.
  </p>
  </div>

  <div className="grid gap-4">
  {points.map((point) => (
  <div
  key={point.title}
  className="flex gap-4 rounded-xl border border-border/60 bg-background/40 p-5"
  >
  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-2" />
  <div>
  <h3 className="text-sm font-semibold text-foreground">
  {point.title}
  </h3>
  <p className="mt-1 text-sm leading-relaxed text-muted">
  {point.description}
  </p>
  </div>
  </div>
  ))}
</div>
  </div>
  </section>
  );
}
