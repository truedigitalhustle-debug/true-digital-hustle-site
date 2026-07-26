import type { Metadata } from "next";

export const metadata: Metadata = {
title: "Privacy Policy | True Digital Hustle",
};

export default function PrivacyPage() {
return (
<main className="mx-auto max-w-2xl px-6 py-24 text-foreground">
<h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
<p className="mt-6 text-sm leading-relaxed text-muted">
True Digital Hustle respects your privacy. Information collected
through this site, such as your email address, is used only to send
you the requested AI Prompt Pack and related updates. We do not sell
your information to third parties. You can unsubscribe from emails at
any time using the link included in every message.
</p>
<p className="mt-4 text-sm leading-relaxed text-muted">
This page is a placeholder and will be updated with a complete
privacy policy.
</p>
</main>
);
}
