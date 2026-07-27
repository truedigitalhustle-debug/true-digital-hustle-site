"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import DownloadModal from "./DownloadModal";

type DownloadButtonProps = {
  className?: string;
  children: ReactNode;
};

export default function DownloadButton({ className, children }: DownloadButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a
        href="/True-Digital-Hustle-AI-Creator-Starter-Kit.pdf"
        download
        className={className}
        onClick={() => setShowModal(true)}
      >
        {children}
      </a>
      <DownloadModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
