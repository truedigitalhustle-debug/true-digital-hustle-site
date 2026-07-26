import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://freebie-guide.vercel.app";
const title = "Free AI Prompt Pack | True Digital Hustle";
const description =
  "Download 100+ free AI prompts for cinematic video, social content, storytelling, and marketing. Create better AI content, faster.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "AI prompts",
    "AI content creation",
    "prompt engineering",
    "AI video prompts",
    "True Digital Hustle",
    ],
  authors: [{ name: "True Digital Hustle" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050506",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
      {children}
    </body>
    </html>
    );
}
</html>
