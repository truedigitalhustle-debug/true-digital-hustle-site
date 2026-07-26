const faqs = [
{
  question: "Is it really free?",
    answer:
    "Yes. The AI Prompt Pack is completely free to download, no credit card required.",
    },
{
question: "Do I need ChatGPT?",
  answer:
  "Most prompts work great with ChatGPT, but they're written in plain language so they also work with other AI tools that accept text prompts.",
  },
{
question: "Can beginners use these prompts?",
  answer:
  "Yes. The prompts are written to be copy-paste friendly, so you don't need any prior prompt engineering experience.",
  },
{
question: "Will more prompts be added?",
  answer:
  "This pack is actively updated. Subscribers get notified whenever new prompt categories are added.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24">
    <div className="mx-auto max-w-3xl px-6">
    <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
    Frequently asked questions
</h2>

<div className="mt-12 divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/40">
{faqs.map((faq) => (
<details key={faq.question} className="group p-6">
<summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-foreground">
{faq.question}
<span className="ml-4 shrink-0 text-muted transition-transform group-open:rotate-45">
+
</span>
</summary>
<p className="mt-3 text-sm leading-relaxed text-muted">
{faq.answer}
</p>
    </details>
    ))}
</div>
    </div>
    </section>
    );
}
