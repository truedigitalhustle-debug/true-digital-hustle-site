"use client";

import { useEffect } from "react";

type DownloadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-muted transition-colors hover:text-foreground"
        >
          ✕
        </button>

        <p className="text-3xl">🎉</p>
        <h3 className="mt-3 text-xl font-semibold text-foreground">
          Your AI Creator Starter Kit is downloading!
        </h3>
        <p className="mt-3 text-sm text-muted">Before you go...</p>
        <p className="mt-4 text-base leading-relaxed text-foreground">
          Claim{" "}
          <span className="font-semibold text-accent-2">
            10 FREE Magica bonus credits
          </span>{" "}
          when you create your account.
        </p>

        <div className="mt-5 rounded-lg border border-border bg-background px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-muted">
            Use my promo code
          </p>
          <p className="mt-1 text-lg font-bold tracking-wider text-accent">
            GG4VFJF
          </p>
        </div>

        <a
          href="https://try.magica.com/mack"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block w-full rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
        >
          Try Magica + Get 10M Credits
        </a>

        <p className="mt-4 text-[11px] leading-relaxed text-muted">
          If you sign up through my link or use my promo code, I may earn a
          commission at no additional cost to you.
        </p>

        <button
          onClick={onClose}
          className="mt-4 text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          Continue to Website
        </button>
      </div>
    </div>
  );
}
