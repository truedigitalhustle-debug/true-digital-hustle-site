import type { Metadata } from "next";
import SpeedRun from "./SpeedRun";

const title = "SPEED RUN — The CAST Framework | True Digital Hustle";
const description =
  "The exact CAST Framework behind the cinematic AI chase video: character setup, reference image structure, the Seedance workflow, and the complete Part 1 + Part 2 prompts. Free. No email required.";
const ogImage =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3CDJQ6s6ZrkPSilC0J5S6T5NbN0/hf_20260817_154740_16550b79-da5a-48bd-898a-b10fff95c2ca.png";

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
    images: [
      {
        url: ogImage,
        width: 2528,
        height: 1696,
        alt: "SPEED RUN — The CAST Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SpeedRunPage() {
  return <SpeedRun />;
}
