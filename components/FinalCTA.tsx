import EmailForm from "@/components/EmailForm";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24">
    <div
    aria-hidden="true"
    className="absolute left-1/2 top-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
    />
    <div className="mx-auto max-w-2xl px-6 text-center">
    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
    Start creating better AI content today
</h2>
<p className="mt-4 text-lg text-muted">
Grab the free prompt pack and put 100+ ready-to-use prompts to work.
    </p>
    <div className="mt-8">
    <EmailForm />
    </div>
    </div>
    </section>
    );
}
