type Item = {
title: string;
description: string;
};

const items: Item[] = [
{
title: "Video Generation Prompts",
  description:
  "Structured prompts for creating cinematic AI video clips and scenes.",
  },
  {
  title: "OpenArt Prompts",
    description:
    "Ready-to-use prompts tuned for OpenArt's image and video tools.",
    },
{
title: "Seedance Prompts",
  description: "Motion and choreography prompt patterns built for Seedance.",
  },
{
title: "Storytelling Prompts",
  description:
  "Frameworks for building narrative arcs your audience follows.",
  },
{
title: "Marketing Prompts",
  description:
  "Copy and creative prompts for ads, launches, and campaigns.",
  },
{
title: "Hook Templates",
  description:
  "Proven opening lines that stop the scroll in the first second.",
  },
{
title: "Prompt Engineering Tips",
  description:
  "The small wording changes that make a big quality difference.",
  },
{
title: "Workflow Examples",
  description:
  "Step-by-step breakdowns of full AI content creation workflows.",
  },
{
title: "Bonus AI Resources",
  description: "Extra tools, links, and references to keep leveling up.",
  },
];

export default function WhatYoullGet() {
  return (
    <section id="whats-included" className="scroll-mt-24 py-24">
    <div className="mx-auto max-w-6xl px-6">
    <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
    What You&apos;ll Get
</h2>
<p className="mt-4 text-lg text-muted">
One pack, nine categories of ready-to-use prompts.
    </p>
    </div>

    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((item, i) => (
    <div
    key={item.title}
    className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_40px_-15px_rgba(124,92,255,0.5)]"
    >
    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent-2/20 text-sm font-semibold text-accent-2">
    {String(i + 1).padStart(2, "0")}
</div>
    <h3 className="text-base font-semibold text-foreground">
    {item.title}
    </h3>
    <p className="mt-2 text-sm leading-relaxed text-muted">
    {item.description}
    </p>
    </div>
    ))}
</div>
    </div>
    </section>
    );
}
