"use client";

import { useState, type FormEvent } from "react";

  type Status = "idle" | "loading" | "success" | "error";

export default function EmailForm() {
  const [email, setEmail] = useState("");
const [status, setStatus] = useState<Status>("idle");

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
e.preventDefault();
if (!email) return;

setStatus("loading");

try {
await new Promise((resolve) => setTimeout(resolve, 600));
setStatus("success");
} catch {
setStatus("error");
}
}

if (status === "success") {
return (
<div className="rounded-2xl border border-accent-2/40 bg-accent-2/10 p-6 text-center">
<p className="text-sm font-medium text-foreground">
You&apos;re in! Check your inbox to confirm and grab the pack.
</p>
</div>
);
}

return (
<form
onSubmit={handleSubmit}
className="flex flex-col gap-3 sm:flex-row sm:gap-2"
>
<label htmlFor="email" className="sr-only">
Email address
</label>
<input
id="email"
name="email"
type="email"
required
placeholder="you@example.com"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="w-full rounded-full border border-border bg-card px-5 py-3.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
/>
<button
type="submit"
disabled={status === "loading"}
className="shrink-0 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 disabled:opacity-60"
>
{status === "loading" ? "Sending..." : "Get the Pack"}
</button>
{status === "error" && (
<p className="text-sm text-red-400" role="alert">
Something went wrong. Please try again.
</p>
)}
</form>
);
}
