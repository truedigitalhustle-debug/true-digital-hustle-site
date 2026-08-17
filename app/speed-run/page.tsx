import type { Metadata } from "next";
import SpeedRun from "./SpeedRun";

const title = "SPEED RUN — The CAST Framework | True Digital Hustle";
const description =
  "The exact CAST Framework behind the cinematic AI chase video: character setup, reference image structure, the Seedance workflow, and the complete Part 1 + Part 2 prompts. Free. No email required.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "CAST Framework",
    "Seedance prompt",
    "AI chase scene prompt",
    "cinematic AI video",
    "Kane Mercer",
    "True Digital Hustle",
  ],
  alternates: {
    canonical: "/speed-run",
  },
  openGraph: {
    title,
    description,
    url: "/speed-run",
    siteName: "True Digital Hustle",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SpeedRunPage() {
  return <SpeedRun />;
}
