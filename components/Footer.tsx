import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
    <p>
    &copy; {new Date().getFullYear()} True Digital Hustle. All rights
reserved.
  </p>
<div className="flex items-center gap-6">
<Link href="/privacy" className="hover:text-foreground">
    Privacy Policy
</Link>
    <Link href="/terms" className="hover:text-foreground">
    Terms
    </Link>
    </div>
    </div>
    </footer>
    );
}
