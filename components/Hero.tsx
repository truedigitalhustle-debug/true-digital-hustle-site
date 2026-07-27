import DownloadButton from "./DownloadButton";

export default function Hero() {
  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_60%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-10rem] -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-6rem] top-40 -z-10 h-72 w-72 rounded-full bg-accent-2/20 blur-[100px]"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
          Free Download &middot; No email required
        </span>

        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
          Get the <span className="text-gradient">FREE AI Creator Starter Kit</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Everything you need to start creating professional AI content
          &mdash; from cinematic video prompts to proven workflows, viral
          hooks, storytelling systems, and my recommended AI tools.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <DownloadButton className="w-full rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] sm:w-auto">
            Download Free Starter Kit
          </DownloadButton>
          <a
            href="#whats-included"
            className="w-full rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:bg-white/5 sm:w-auto"
          >
            See Everything Inside
          </a>
        </div>
      </div>
    </section>
  );
}
