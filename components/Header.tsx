import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-white">
            T
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            True Digital Hustle
          </span>
        </Link>
        <a
          href="/True-Digital-Hustle-AI-Creator-Starter-Kit.pdf"
          download
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:bg-white/5"
        >
          Get the Starter Kit
        </a>
      </div>
    </header>
  );
}
