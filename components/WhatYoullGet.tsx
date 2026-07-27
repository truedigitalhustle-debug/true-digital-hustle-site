import Image from "next/image";

type Item = {
  title: string;
  description: string;
};

const items: Item[] = [
  {
    title: "100+ Premium AI Prompts",
    description:
      "A curated library of ready-to-use prompts covering every major content format.",
  },
  {
    title: "OpenArt Prompt Library",
    description:
      "Ready-to-use prompts tuned for OpenArt's image and video tools.",
  },
  {
    title: "Seedance Prompt Library",
    description: "Motion and choreography prompt patterns built for Seedance.",
  },
  {
    title: "Cinematic Prompt Collection",
    description:
      "Prompts for creating cinematic AI video clips and film-style scenes.",
  },
  {
    title: "Storytelling Prompt Collection",
    description:
      "Frameworks for building narrative arcs your audience follows.",
  },
  {
    title: "Viral Hook Templates",
    description:
      "Proven opening lines that stop the scroll in the first second.",
  },
  {
    title: "Marketing Prompt Library",
    description:
      "Copy and creative prompts for ads, launches, and campaigns.",
  },
  {
    title: "Prompt Engineering Guide",
    description:
      "The small wording changes that make a big quality difference.",
  },
  {
    title: "AI Workflow Blueprint",
    description:
      "Step-by-step breakdowns of full AI content creation workflows.",
  },
  {
    title: "Recommended AI Tools",
    description: "My personal shortlist of the AI tools worth using right now.",
  },
];

const previewImages = [
  { src: "/starter-kit-preview-1.png", alt: "Starter Kit cover page preview" },
  { src: "/starter-kit-preview-2.png", alt: "OpenArt Prompt Library sample page preview" },
  { src: "/starter-kit-preview-3.png", alt: "AI Creator Roadmap sample page preview" },
];

export default function WhatYoullGet() {
  return (
    <section id="whats-included" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What&apos;s Inside the Starter Kit
          </h2>
          <p className="mt-4 text-lg text-muted">
            One kit, ten categories of everything you need to start creating
            professional AI content.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {previewImages.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          ))}
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
