const useCases = [
"YouTube channels",
"Instagram pages",
"TikTok videos",
"Marketing campaigns",
"AI-generated commercials",
"Storytelling content",
];

export default function SocialProof() {
return (
  <section className="border-y border-border/60 bg-card/40">
  <div className="mx-auto max-w-6xl px-6 py-14">
  <p className="text-center text-sm font-medium uppercase tracking-wider text-muted">
  Creators are using these prompts to build
</p>
  <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
  {useCases.map((item) => (
  <div
  key={item}
  className="rounded-xl border border-border/60 bg-background/40 px-4 py-4 text-center text-sm font-medium text-foreground/90 transition-colors hover:border-accent/50"
  >
  {item}
</div>
  ))}
</div>
  </div>
  </section>
  );
}
