"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  PROMPTS                                                            */
/* ------------------------------------------------------------------ */

const CHARACTER_REFERENCE = `Create ONE individual 16:9 ultra-photorealistic full-body cinematic reference image of a single adult male action lead.

Confident, grounded, athletic build.
Short dark hair.
Well-groomed dark beard.
Neutral controlled expression.
Standing naturally, facing camera, full body visible, face clearly visible.

Wardrobe:
Black fitted leather jacket.
Black henley shirt with the top buttons open.
Black tactical jeans.
Black driving gloves.
Black tactical boots.
Black luxury watch.
Black dog tag necklace.

Location:
Downtown financial district sidewalk, late afternoon, softly out of focus behind him.

Premium cinematic live-action photography.
Natural skin texture.
Realistic fabric detail.
Sharp, clean lighting.

No text.
No watermark.
No collage.
No split screen.
No multiple people.`;

const CAR_REFERENCE = `Create ONE individual 16:9 ultra-photorealistic cinematic image of a matte-black high-performance supercar parked at a downtown curb.

Aggressive low-slung stance.
Wide rear haunches.
Blacked-out wheels.
Dark tinted windows.
No visible branding or logos.

Late afternoon light.
Luxury office tower reflected in the paint.
Wet reflective asphalt.

Three-quarter front angle so the full silhouette reads clearly.

Premium cinematic live-action photography.

No people.
No text.
No watermark.
No collage.
No split screen.`;

const SUV_REFERENCE = `Create ONE individual 16:9 ultra-photorealistic cinematic image of a black full-size tactical SUV on a downtown city street.

Blacked-out windows.
Black wheels.
Heavy, intimidating stance.
No visible branding or logos.

Late afternoon light.
Wet reflective pavement.
Busy financial district in the background, softly out of focus.

Three-quarter front angle.

Premium cinematic live-action photography.

No people.
No text.
No watermark.
No collage.
No split screen.`;

const PART_ONE = `@image1 = Kane Mercer Speed Run Reference

CRITICAL:
Maintain exact identity from @image1.
DO NOT change facial features.
DO NOT change beard.
DO NOT change hairstyle.

Wardrobe:
- Black fitted leather jacket
- Black henley shirt (top buttons open)
- Black tactical jeans
- Black driving gloves
- Black tactical boots
- Black luxury watch
- Black dog tag necklace

Maintain this wardrobe throughout the clip.

Ultra realistic.
Photorealistic.
Hollywood blockbuster.
Netflix quality.
Native Seedance audio ON.
16:9 cinematic.
No subtitles.
No watermark.

GENRE:
High-speed action thriller.
Grounded realism.
Think Mission: Impossible meets John Wick meets Need for Speed.

LOCATION:
Downtown financial district.
Late afternoon.
Modern city.
Luxury office tower.
Busy streets below.
Professional cinematic lighting.

SECOND 0-2:
Kane exits a luxury office building at a brisk pace.
A sharply dressed man in a suit rushes toward him holding a small matte-black hard case.
Without stopping, the man presses the case into Kane's hands.

MAN:
"You have ten minutes."

SECOND 2-4:
Kane immediately senses danger.
He looks up.
Across the street, two black SUVs screech around the corner.
Several armed men jump out while shouting.
Pedestrians panic and scatter in every direction.

SECOND 4-6:
Kane sprints toward a matte-black high-performance supercar parked at the curb.
He unlocks it remotely while running.
One attacker raises his weapon.
Another points toward Kane.

ATTACKER:
"Don't let him leave!"

SECOND 6-9:
Kane dives into the driver's seat.
The engine roars to life.
The rear tires spin violently, filling the street with smoke.
The supercar launches forward with incredible acceleration.

SECOND 9-12:
The black SUVs immediately give chase.
One clips a parked car.
Traffic erupts into chaos.
People dive out of the way.
The city becomes a high-speed pursuit.

SECOND 12-15:
Kane glances into the rearview mirror.
The SUVs are gaining.
He briefly looks down at the mysterious black case resting in the passenger seat.
He has no idea what's inside.
Kane accelerates harder.

CUT TO BLACK.

Audio:
City ambience.
Car engine revs.
Tires screeching.
SUV engines.
People shouting.
Car horns.
Deep cinematic action score.

Heavy bass hit on:
"You have ten minutes."

Professional Hollywood action pacing.

END.`;

const PART_TWO = `@image1 = Kane Mercer Speed Run Reference
@video1 = Part 1

CONTINUE DIRECTLY FROM @video1

CRITICAL:
Maintain exact identity from @image1.
DO NOT change facial features.
DO NOT change beard.
DO NOT change hairstyle.

Wardrobe:
- Black fitted leather jacket
- Black henley shirt
- Black tactical jeans
- Black driving gloves
- Black tactical boots
- Black luxury watch
- Black dog tag necklace

Maintain identical wardrobe from Part 1.

Ultra realistic.
Photorealistic.
Hollywood blockbuster.
Netflix quality.
Native Seedance audio ON.
16:9 cinematic.
No subtitles.
No watermark.

GENRE:
High-speed action thriller.
Grounded realism.
Think Mission: Impossible meets Need for Speed.

LOCATION:
Modern downtown city.
Late afternoon.
Busy streets.
Rain-soaked pavement.

IMPORTANT:
Focus on Kane and one pursuing SUV.
Avoid unnecessary vehicles.
Every character should be moving naturally.

SECOND 0-3:
Continue directly from Part 1.
Kane's matte-black supercar races through downtown traffic.
A black SUV aggressively closes the gap behind him.
Inside the SUV, the team leader leans forward.

TEAM LEADER:
"Stay on him!"

SECOND 3-6:
The SUV pulls alongside Kane.
The passenger leans out of the window, reaching toward Kane's car.
Kane glances over.

KANE (calmly):
"Bad idea."

Kane jerks the wheel.
The SUV slams into a concrete divider.
Sparks explode.

SECOND 6-9:
Kane races toward a tight ninety-degree corner.
Without slowing, he drifts perfectly around it.
The damaged SUV barely makes the turn.
The driver shouts:

DRIVER:
"He's getting away!"

SECOND 9-12:
Kane shoots into a narrow service alley.
The SUV tries to follow.
It crashes into dumpsters and becomes stuck.
Metal flies everywhere.

SECOND 12-15:
Kane bursts onto an open street.
He glances at the black case on the passenger seat.
His phone rings through the car speakers.

UNKNOWN VOICE:
"Three minutes remaining."

Kane grips the steering wheel tighter.
He accelerates.

CUT TO BLACK.

Audio:
Supercar engine.
Tires screeching.
Engine revs.
Metal scraping.
SUV crash.
Phone speaker.
Deep cinematic action score.

Heavy bass hit on:
"Three minutes remaining."

Grounded realism.

END.`;

/* ------------------------------------------------------------------ */
/*  SMALL PIECES                                                       */
/* ------------------------------------------------------------------ */

function CopyButton({
  text,
  label = "COPY PROMPT",
  className = "",
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`sr-copy inline-flex items-center justify-center gap-2 rounded-sm border px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] transition-all ${
        copied
          ? "border-[#37d67a]/60 bg-[#37d67a]/10 text-[#37d67a]"
          : "border-[#ff3b1f]/50 bg-[#ff3b1f]/10 text-[#ff8566] hover:border-[#ff3b1f] hover:bg-[#ff3b1f]/20 hover:text-[#ffb9a6]"
      } ${className}`}
    >
      {copied ? "COPIED ✓" : label}
    </button>
  );
}

function Clock() {
  const total = 600;
  const [left, setLeft] = useState(total);

  useEffect(() => {
    const id = setInterval(() => {
      setLeft((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  const done = left === 0;

  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-1.5 w-1.5 rounded-full ${done ? "bg-[#ff3b1f]" : "sr-blink bg-[#ff3b1f]"}`}
      />
      <span className="font-mono text-[11px] tracking-[0.2em] text-[#9b8f8c]">
        {done ? "TIME'S UP — GO BUILD IT" : `${mm}:${ss}`}
      </span>
    </div>
  );
}

function Marker({ time, label }: { time: string; label: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="rounded-sm border border-[#ff3b1f]/40 bg-[#ff3b1f]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-[#ff8566]">
        {time}
      </span>
      <span className="font-mono text-[10px] tracking-[0.28em] text-[#7d7370]">
        {label}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-[#ff3b1f]/40 to-transparent" />
    </div>
  );
}

function PromptBlock({
  tag,
  title,
  purpose,
  meta,
  prompt,
  collapsible = false,
  copyLabel = "COPY PROMPT",
}: {
  tag: string;
  title: string;
  purpose?: string;
  meta?: string[];
  prompt: string;
  collapsible?: boolean;
  copyLabel?: string;
}) {
  const [open, setOpen] = useState(!collapsible);

  return (
    <div className="overflow-hidden rounded-lg border border-[#2a1a18] bg-[#0d0909]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2a1a18] bg-[#140d0c] px-5 py-4">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-[0.22em] text-[#ff8566]">
            {tag}
          </p>
          <p className="mt-1 text-sm font-semibold tracking-tight text-[#f3ecea]">
            {title}
          </p>
        </div>
        <span className="rounded-full border border-[#37d67a]/30 bg-[#37d67a]/5 px-3 py-1 font-mono text-[9px] tracking-[0.2em] text-[#37d67a]">
          PROMPT READY
        </span>
      </div>

      {purpose ? (
        <p className="border-b border-[#2a1a18] px-5 py-4 text-sm leading-relaxed text-[#9b8f8c]">
          {purpose}
        </p>
      ) : null}

      {meta && meta.length > 0 ? (
        <div className="flex flex-wrap gap-2 border-b border-[#2a1a18] px-5 py-3">
          {meta.map((m) => (
            <span
              key={m}
              className="rounded-sm border border-[#2a1a18] bg-[#0a0606] px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] text-[#7d7370]"
            >
              {m}
            </span>
          ))}
        </div>
      ) : null}

      <div className="relative">
        <pre
          className={`overflow-y-auto whitespace-pre-wrap break-words px-5 py-5 font-mono text-[12.5px] leading-[1.75] text-[#cfc5c2] ${
            open ? "max-h-none" : "max-h-80"
          }`}
        >
          {prompt}
        </pre>
        {collapsible && !open ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0909] to-transparent" />
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-[#2a1a18] bg-[#140d0c] px-5 py-4">
        <CopyButton text={prompt} label={copyLabel} />
        {collapsible ? (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="font-mono text-[10px] tracking-[0.2em] text-[#7d7370] underline-offset-4 transition-colors hover:text-[#f3ecea] hover:underline"
          >
            {open ? "COLLAPSE PROMPT" : "EXPAND FULL PROMPT"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTENT                                                            */
/* ------------------------------------------------------------------ */

const INSIDE = [
  "The complete CAST Framework, broken down",
  "Character + wardrobe lock that survives both clips",
  "Reference image structure (and the prompts to build them)",
  "The full Part 1 Seedance prompt",
  "The full Part 2 continuation prompt",
  "Native dialogue and audio setup",
  "The @video1 continuity handoff between clips",
  "Troubleshooting for identity drift and wardrobe changes",
];

const CAST = [
  {
    letter: "C",
    name: "CHARACTER",
    line: "Identity is locked first, everything else bends around it.",
    body: [
      "One reference image is the law: @image1.",
      "Explicit DO NOT lines for face, beard, and hairstyle.",
      "Wardrobe listed item by item — seven pieces, no room to improvise.",
      "The same lock is repeated in Part 2 so the model can't quietly recast him.",
    ],
  },
  {
    letter: "A",
    name: "ACTION",
    line: "Beats in seconds, not vibes.",
    body: [
      "The clip is cut into 2-3 second blocks before a single frame renders.",
      "One clear physical event per block: handoff, threat, sprint, launch, chase.",
      "Dialogue is short and attributed — MAN, ATTACKER, KANE, DRIVER.",
      "Crowd and traffic get direction too, so the street reacts instead of freezing.",
    ],
  },
  {
    letter: "S",
    name: "SOUND & SETTING",
    line: "The world and the mix are written, not hoped for.",
    body: [
      "Genre reference stack: Mission: Impossible meets John Wick meets Need for Speed.",
      "Location, time of day, and lighting stated up front.",
      "Native audio ON with a listed sound bed: engines, tires, horns, score.",
      "A heavy bass hit pinned to the exact line that has to land.",
    ],
  },
  {
    letter: "T",
    name: "TIMING",
    line: "Fifteen seconds, a hard out, and a hook into Part 2.",
    body: [
      "Each part is 15 seconds, 16:9, no subtitles, no watermark.",
      "Every part ends on CUT TO BLACK — a clean seam for the edit.",
      "The ten-minute clock is the story engine: 'ten minutes' → 'three minutes remaining.'",
      "Part 2 continues from @video1, so the two clips read as one scene.",
    ],
  },
];

const WORKFLOW = [
  ["Build Kane.", "Generate the character reference. This is @image1."],
  ["Optional: lock the metal.", "Generate the supercar and SUV references for tighter vehicle consistency."],
  ["Load @image1 into Seedance.", "16:9, 15 seconds, native audio ON."],
  ["Generate Part 1.", "Paste the Part 1 prompt exactly as written."],
  ["Check identity first.", "Face, beard, hair, wardrobe. If it drifted, regenerate before moving on."],
  ["Upload finished Part 1 as @video1.", "This becomes the primary continuity reference."],
  ["Load @video1 + @image1.", "Video reference beats static reference on conflicts."],
  ["Generate Part 2.", "15 seconds, 16:9, same wardrobe, rain-soaked streets."],
  ["Edit the two clips together.", "Color, sound, captions in your editing app."],
  ["Post it, then send people here.", "Comment keyword CAST triggers the DM that drops this page."],
];

const CUSTOMIZE = [
  "🗂️ Swap the case for a hard drive",
  "💼 Swap it for a briefcase of cash",
  "🧬 Swap it for a sealed medical container",
  "🏍️ Swap the supercar for a superbike",
  "🚁 Add a helicopter overhead",
  "🌃 Move it to night + neon",
  "🌧️ Run the whole thing in heavy rain",
  "🌉 End it on a bridge instead of an alley",
  "🚇 Send him into a parking garage",
  "🏁 Add a third part: the drop-off",
  "⏱️ Change the clock to sixty seconds",
  "🕴️ Make the pursuers plainclothes, not tactical",
];

const LADDER = ["HANDOFF", "THREAT", "LAUNCH", "PURSUIT", "CLOSE CALL", "COUNTDOWN", "CUT TO BLACK"];

const TIPS: [string, string][] = [
  ["Generate the character reference on its own —", "one person, full body, face clearly visible. No collages."],
  ["Match your reference aspect ratio to your output —", "16:9 references for a 16:9 video."],
  ["Keep the DO NOT lines in every part —", "face, beard, and hairstyle drift is the number one failure."],
  ["List wardrobe as items, not a sentence —", "seven separate lines hold better than one paragraph."],
  ["Never build Part 2 from images alone —", "upload the finished Part 1 render as @video1 first."],
  ["Let @video1 win any conflict —", "if the static reference disagrees with the video, follow the video."],
  ["Keep dialogue to one line per beat —", "short lines lip-sync cleanly; long ones mumble."],
  ["Ask for one heavy bass hit, not a full mix —", "one pinned accent lands harder than five."],
  ["If the street feels frozen —", "add explicit direction for pedestrians and traffic."],
  ["Re-roll instead of arguing —", "a bad identity render rarely recovers with a follow-up note."],
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function SpeedRun() {
  return (
    <div className="min-h-screen bg-[#070505] text-[#f3ecea]">
      <style>{`
        @keyframes srBlink { 0%,100% { opacity: 1 } 50% { opacity: .15 } }
        .sr-blink { animation: srBlink 1.1s ease-in-out infinite; }
        @keyframes srStreak {
          0% { transform: translateX(-30%); opacity: 0 }
          40% { opacity: .55 }
          100% { transform: translateX(130%); opacity: 0 }
        }
        .sr-streak { animation: srStreak 3.4s linear infinite; }
        .sr-streak-2 { animation: srStreak 4.6s linear infinite; animation-delay: .9s; }
        .sr-streak-3 { animation: srStreak 5.8s linear infinite; animation-delay: 1.8s; }
        .sr-title { background-image: linear-gradient(92deg,#ffffff 0%,#ffb9a6 42%,#ff3b1f 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent; }
        .sr-asphalt { background-image:
          repeating-linear-gradient(90deg, rgba(255,59,31,.07) 0 1px, transparent 1px 92px),
          radial-gradient(ellipse 70% 55% at 50% 0%, rgba(255,59,31,.18), transparent 70%); }
        .sr-copy:active { transform: translateY(1px); }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#2a1a18] bg-[#070505]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-gradient-to-br from-[#ff3b1f] to-[#ffb020] font-mono text-[11px] font-bold text-black">
              T
            </span>
            <span className="font-mono text-[10px] tracking-[0.22em] text-[#9b8f8c]">
              TRUE DIGITAL HUSTLE
            </span>
          </Link>
          <Clock />
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#2a1a18]">
        <div aria-hidden="true" className="sr-asphalt absolute inset-0" />
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <span className="sr-streak absolute left-0 top-1/3 h-px w-40 bg-gradient-to-r from-transparent via-[#ff3b1f] to-transparent" />
          <span className="sr-streak-2 absolute left-0 top-1/2 h-px w-64 bg-gradient-to-r from-transparent via-[#ffb020] to-transparent" />
          <span className="sr-streak-3 absolute left-0 top-2/3 h-px w-52 bg-gradient-to-r from-transparent via-[#ff3b1f] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 pb-20 pt-20 sm:pb-28 sm:pt-28">
          <p className="font-mono text-[10px] tracking-[0.28em] text-[#7d7370]">
            TRUE DIGITAL HUSTLE // SEEDANCE PROMPT DROP
          </p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.28em] text-[#ff8566]">
            CLOCK: 10:00 • CONTENTS OF CASE: UNKNOWN
          </p>

          <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
            <span className="sr-title">SPEED RUN</span>{" "}
            <span className="align-middle text-4xl sm:text-6xl">🏁</span>
          </h1>

          <p className="mt-3 font-mono text-[11px] tracking-[0.24em] text-[#9b8f8c]">
            THE CAST FRAMEWORK — PART 1 &amp; PART 2
          </p>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#9b8f8c]">
            The exact framework behind the cinematic chase video: character lock,
            reference structure, the second-by-second beat sheet, and both
            complete prompts. Copy them, swap the details, make it yours.
          </p>

          <div className="mt-6 max-w-2xl border-l-2 border-[#ff3b1f] bg-[#ff3b1f]/5 px-5 py-4">
            <p className="font-mono text-sm tracking-wide text-[#ffb9a6]">
              &ldquo;You have ten minutes.&rdquo;
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#framework"
              className="rounded-sm bg-[#ff3b1f] px-7 py-3.5 font-mono text-[11px] font-bold tracking-[0.18em] text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_0_45px_-12px_#ff3b1f]"
            >
              START THE CLOCK ↓
            </a>
            <a
              href="#part-1"
              className="rounded-sm border border-[#2a1a18] px-7 py-3.5 font-mono text-[11px] font-bold tracking-[0.18em] text-[#f3ecea] transition-colors hover:border-[#ff3b1f]/60 hover:bg-white/5"
            >
              JUMP TO THE PROMPTS
            </a>
          </div>

          <p className="mt-6 font-mono text-[10px] tracking-[0.2em] text-[#5f5754]">
            FREE · NO EMAIL REQUIRED · NOTHING TO UNLOCK
          </p>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="border-b border-[#2a1a18] bg-[#0a0707]">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Marker time="T-10:00" label="MANIFEST" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What&apos;s in the drop
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {INSIDE.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-sm border border-[#2a1a18] bg-[#0d0909] px-4 py-3.5"
              >
                <span className="mt-0.5 font-mono text-[11px] text-[#37d67a]">✓</span>
                <span className="text-sm leading-relaxed text-[#cfc5c2]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAST FRAMEWORK */}
      <section id="framework" className="scroll-mt-20 border-b border-[#2a1a18]">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Marker time="T-09:00" label="THE FRAMEWORK" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            C.A.S.T. — the four things every clip needs
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9b8f8c]">
            Most AI video fails for the same four reasons: the person changes,
            the action is vague, the world is unspecified, and the timing is
            left to chance. CAST closes all four doors before you render.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CAST.map((c) => (
              <div
                key={c.letter}
                className="rounded-lg border border-[#2a1a18] bg-[#0d0909] p-6 transition-all hover:-translate-y-1 hover:border-[#ff3b1f]/50 hover:shadow-[0_0_45px_-18px_#ff3b1f]"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-4xl font-bold leading-none text-[#ff3b1f]">
                    {c.letter}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.22em] text-[#f3ecea]">
                    {c.name}
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#e4dbd8]">
                  {c.line}
                </p>
                <ul className="mt-4 space-y-2">
                  {c.body.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-[#9b8f8c]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#ff3b1f]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHARACTER SETUP */}
      <section id="character" className="scroll-mt-20 border-b border-[#2a1a18] bg-[#0a0707]">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Marker time="T-08:00" label="CHARACTER SETUP" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Lock the man in black first
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9b8f8c]">
            Kane Mercer is one image doing a lot of work. Generate him once,
            keep that file, and reuse it for every part of the series. If the
            face changes between clips, nothing else you do matters.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg border border-[#2a1a18] bg-[#0d0909] p-6">
              <p className="font-mono text-[10px] font-bold tracking-[0.22em] text-[#ff8566]">
                @IMAGE1 — THE LAW
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#9b8f8c]">
                Everything below gets restated inside both video prompts. That
                repetition is the whole trick.
              </p>

              <p className="mt-6 font-mono text-[10px] tracking-[0.22em] text-[#7d7370]">
                NEVER CHANGES
              </p>
              <ul className="mt-3 space-y-1.5">
                {["Facial features", "Beard", "Hairstyle"].map((x) => (
                  <li key={x} className="font-mono text-xs tracking-wide text-[#ffb9a6]">
                    ✕ DO NOT change {x.toLowerCase()}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-[10px] tracking-[0.22em] text-[#7d7370]">
                WARDROBE — ALL SEVEN, EVERY CLIP
              </p>
              <ul className="mt-3 space-y-1.5">
                {[
                  "Black fitted leather jacket",
                  "Black henley shirt (top buttons open)",
                  "Black tactical jeans",
                  "Black driving gloves",
                  "Black tactical boots",
                  "Black luxury watch",
                  "Black dog tag necklace",
                ].map((w) => (
                  <li key={w} className="flex gap-2.5 text-sm text-[#cfc5c2]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#ffb020]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <PromptBlock
              tag="@IMAGE1 — CHARACTER REFERENCE"
              title="Kane Mercer — Speed Run Reference"
              purpose="Generate this on its own before anything else. One person, full body, face clearly visible, all seven wardrobe pieces present."
              meta={["ASPECT: 16:9", "TYPE: IMAGE", "COUNT: 1", "COLLAGE: NEVER"]}
              prompt={CHARACTER_REFERENCE}
            />
          </div>
        </div>
      </section>

      {/* REFERENCE STRUCTURE */}
      <section id="references" className="scroll-mt-20 border-b border-[#2a1a18]">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Marker time="T-07:00" label="REFERENCE STRUCTURE" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How the references stack
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9b8f8c]">
            Part 1 only truly needs @image1. The two vehicle references are
            optional — use them when you want the same car and the same SUV
            across a longer series.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              ["@image1", "Kane Mercer", "Required · both parts. Identity and wardrobe authority."],
              ["@video1", "Finished Part 1", "Required for Part 2. Primary continuity reference."],
              ["@image2", "Matte-black supercar", "Optional. Keeps the car identical across clips."],
              ["@image3", "Black tactical SUV", "Optional. Keeps the pursuers' vehicle identical."],
            ].map(([ref, name, note]) => (
              <div key={ref} className="rounded-sm border border-[#2a1a18] bg-[#0d0909] px-5 py-4">
                <p className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#ff8566]">
                  {ref}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#f3ecea]">{name}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#9b8f8c]">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-l-2 border-[#ffb020] bg-[#ffb020]/5 px-5 py-4">
            <p className="text-sm leading-relaxed text-[#e4dbd8]">
              <span className="font-mono text-[11px] tracking-[0.2em] text-[#ffb020]">
                RULE:
              </span>{" "}
              If a still image and @video1 disagree, follow @video1. Wardrobe,
              damage, and position have to continue naturally.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <PromptBlock
              tag="@IMAGE2 — OPTIONAL"
              title="Matte-black supercar"
              meta={["ASPECT: 16:9", "TYPE: IMAGE", "NO BRANDING"]}
              prompt={CAR_REFERENCE}
            />
            <PromptBlock
              tag="@IMAGE3 — OPTIONAL"
              title="Black tactical SUV"
              meta={["ASPECT: 16:9", "TYPE: IMAGE", "NO BRANDING"]}
              prompt={SUV_REFERENCE}
            />
          </div>
        </div>
      </section>

      {/* TOOLS — MAGICA */}
      <section id="tools" className="scroll-mt-20 border-b border-[#2a1a18]">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Marker time="T-05:00" label="TOOLS" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            You still need something to generate with
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9b8f8c]">
            Everything on this page was built with AI — no film crew, no actors,
            no production budget. Magica is the tool I use for AI video
            creation, and if you start there through my link you get bonus
            credits to run these exact prompts before you spend a dollar.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-[#2a1a18] bg-[#0d0909] p-6">
              <p className="font-mono text-[10px] font-bold tracking-[0.22em] text-[#ff8566]">
                STEP 1 — THE LINK
              </p>
              <p className="mt-2 text-lg font-semibold text-[#f3ecea]">
                Create your free account
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#9b8f8c]">
                Signing up through this link tracks you as mine automatically,
                so the bonus lands on your account.
              </p>
              <a
                href="https://try.magica.com/mack"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-6 inline-block rounded-sm bg-[#ff3b1f] px-7 py-3.5 font-mono text-[11px] font-bold tracking-[0.18em] text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_0_45px_-12px_#ff3b1f]"
              >
                START FREE ON MAGICA ↗
              </a>
              <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-[#5f5754]">
                TRY.MAGICA.COM/MACK
              </p>
            </div>

            <div className="rounded-lg border border-[#2a1a18] bg-[#0d0909] p-6">
              <p className="font-mono text-[10px] font-bold tracking-[0.22em] text-[#ff8566]">
                STEP 2 — THE CODE
              </p>
              <p className="mt-2 text-lg font-semibold text-[#f3ecea]">
                Redeem for 10 million bonus credits
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#9b8f8c]">
                Enter this on Magica&apos;s Redeem Referral Code page after you
                sign up. Codes can be redeemed within 30 days of signup, subject
                to Magica&apos;s current referral program.
              </p>
              <div className="mt-5 rounded-sm border border-[#2a1a18] bg-[#0a0606] px-5 py-4">
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#7d7370]">
                  PROMO CODE
                </p>
                <p className="mt-2 font-mono text-2xl font-bold tracking-[0.22em] text-[#ffb020]">
                  GG4VFJF
                </p>
              </div>
              <div className="mt-5">
                <CopyButton text="GG4VFJF" label="COPY PROMO CODE" />
              </div>
            </div>
          </div>

          <div className="mt-6 border-l-2 border-[#ffb020] bg-[#ffb020]/5 px-5 py-4">
            <p className="text-sm leading-relaxed text-[#e4dbd8]">
              <span className="font-mono text-[11px] tracking-[0.2em] text-[#ffb020]">
                USE BOTH:
              </span>{" "}
              the link handles tracking on its own, and the code is the backup —
              so the credits still land if cookies get cleared or you sign up on
              the mobile app.
            </p>
          </div>

          <p className="mt-5 text-[11px] leading-relaxed text-[#5f5754]">
            Affiliate disclosure: if you sign up through my link or redeem my
            code, I may earn a commission at no additional cost to you. The
            prompts and the framework on this page are free either way — they
            work with whatever generator you already use.
          </p>
        </div>
      </section>

      {/* PART 1 */}
      <section id="part-1" className="scroll-mt-20 border-b border-[#2a1a18] bg-[#0a0707]">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Marker time="T-06:00" label="PART 1" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            THE HANDOFF
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9b8f8c]">
            Load @image1. 15 seconds, 16:9, native audio ON. Paste this exactly
            as written — the DO NOT lines and the wardrobe list are doing real
            work, don&apos;t trim them.
          </p>

          <div className="mt-8">
            <PromptBlock
              tag="PART 1 — SEEDANCE PROMPT"
              title="Speed Run · The Handoff"
              meta={[
                "MODEL: SEEDANCE",
                "ASPECT: 16:9",
                "DURATION: 15 SEC",
                "AUDIO: NATIVE ON",
                "REFERENCES: @IMAGE1",
              ]}
              prompt={PART_ONE}
              collapsible
              copyLabel="COPY PART 1 PROMPT"
            />
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-5">
            {[
              ["0-2", "The case"],
              ["2-4", "The SUVs"],
              ["4-6", "The sprint"],
              ["6-9", "The launch"],
              ["9-15", "The pursuit"],
            ].map(([sec, label]) => (
              <div
                key={sec}
                className="rounded-sm border border-[#2a1a18] bg-[#0d0909] px-4 py-3 text-center"
              >
                <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-[#ff8566]">
                  {sec}s
                </p>
                <p className="mt-1 text-xs text-[#9b8f8c]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HANDOFF TO PART 2 */}
      <section className="border-b border-[#2a1a18]">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <p className="font-mono text-[10px] tracking-[0.28em] text-[#ff8566]">
            CUT TO BLACK.
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            THREE MINUTES REMAINING.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9b8f8c]">
            Don&apos;t start Part 2 from scratch. Your finished Part 1 render
            becomes @video1 — the reference that carries his face, his clothes,
            and the exact speed of the scene into the next clip.
          </p>
        </div>
      </section>

      {/* PART 2 */}
      <section id="part-2" className="scroll-mt-20 border-b border-[#2a1a18] bg-[#0a0707]">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Marker time="T-03:00" label="PART 2" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            THE PURSUIT
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9b8f8c]">
            Load @video1 (your finished Part 1) plus @image1. Same 15 seconds,
            same 16:9, same wardrobe — now on rain-soaked pavement with one SUV
            instead of a crowd of them.
          </p>

          <div className="mt-8">
            <PromptBlock
              tag="PART 2 — SEEDANCE PROMPT"
              title="Speed Run · The Pursuit"
              meta={[
                "MODEL: SEEDANCE",
                "ASPECT: 16:9",
                "DURATION: 15 SEC",
                "AUDIO: NATIVE ON",
                "REFERENCES: @VIDEO1, @IMAGE1",
              ]}
              prompt={PART_TWO}
              collapsible
              copyLabel="COPY PART 2 PROMPT"
            />
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-5">
            {[
              ["0-3", "Closing in"],
              ["3-6", "Bad idea"],
              ["6-9", "The drift"],
              ["9-12", "The alley"],
              ["12-15", "The call"],
            ].map(([sec, label]) => (
              <div
                key={sec}
                className="rounded-sm border border-[#2a1a18] bg-[#0d0909] px-4 py-3 text-center"
              >
                <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-[#ff8566]">
                  {sec}s
                </p>
                <p className="mt-1 text-xs text-[#9b8f8c]">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <CopyButton
              text={`${PART_ONE}\n\n/* ---------- PART 2 ---------- */\n\n${PART_TWO}`}
              label="COPY BOTH PROMPTS"
            />
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="scroll-mt-20 border-b border-[#2a1a18]">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Marker time="T-02:00" label="WORKFLOW" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Run it in order
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {WORKFLOW.map(([step, detail], i) => (
              <div
                key={step}
                className="flex gap-4 rounded-sm border border-[#2a1a18] bg-[#0d0909] px-5 py-4"
              >
                <span className="font-mono text-sm font-bold text-[#ff3b1f]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#f3ecea]">{step}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#9b8f8c]">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZE */}
      <section className="border-b border-[#2a1a18] bg-[#0a0707]">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Marker time="T-01:00" label="MAKE IT YOURS" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Keep the structure, change the story
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9b8f8c]">
            The framework doesn&apos;t care what&apos;s in the case. Keep the
            escalation ladder and swap everything else.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {CUSTOMIZE.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[#2a1a18] bg-[#0d0909] px-4 py-2 text-sm text-[#cfc5c2] transition-colors hover:border-[#ff3b1f]/50"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            {LADDER.map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                <span className="rounded-sm border border-[#ff3b1f]/30 bg-[#ff3b1f]/5 px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-[#ffb9a6]">
                  {l}
                </span>
                {i < LADDER.length - 1 ? (
                  <span className="font-mono text-[10px] text-[#5f5754]">→</span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="border-b border-[#2a1a18]">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Marker time="T-00:30" label="PRO TIPS" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Troubleshooting &amp; better generations
          </h2>
          <div className="mt-8 space-y-3">
            {TIPS.map(([lead, rest]) => (
              <div
                key={lead}
                className="rounded-sm border border-[#2a1a18] bg-[#0d0909] px-5 py-4 text-sm leading-relaxed"
              >
                <span className="font-semibold text-[#f3ecea]">{lead}</span>{" "}
                <span className="text-[#9b8f8c]">{rest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-b border-[#2a1a18]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff3b1f]/20 blur-[120px]"
        />
        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center">
          <p className="font-mono text-[10px] tracking-[0.28em] text-[#ff8566]">
            00:00
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            CLOCK&apos;S DEAD. GO SHOOT IT.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#9b8f8c]">
            You have the character, the references, both prompts, and the
            workflow. Change the case, change the city, change the ending —
            just don&apos;t change his face mid-scene.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.instagram.com/truedigitalhustle/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-sm bg-[#ff3b1f] px-7 py-3.5 font-mono text-[11px] font-bold tracking-[0.18em] text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_0_45px_-12px_#ff3b1f] sm:w-auto"
            >
              FOLLOW @TRUEDIGITALHUSTLE ↗
            </a>
            <Link
              href="/"
              className="w-full rounded-sm border border-[#2a1a18] px-7 py-3.5 font-mono text-[11px] font-bold tracking-[0.18em] text-[#f3ecea] transition-colors hover:border-[#ff3b1f]/60 hover:bg-white/5 sm:w-auto"
            >
              GET THE FREE STARTER KIT
            </Link>
          </div>

          <p className="mt-7 font-mono text-[10px] tracking-[0.2em] text-[#5f5754]">
            MORE CINEMATIC AI WORKFLOWS DROP THE SAME WAY THIS ONE DID
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-5 py-10 text-center font-mono text-[10px] tracking-[0.18em] text-[#5f5754] sm:flex-row sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} TRUE DIGITAL HUSTLE — SPEED RUN PROMPT DROP</p>
          <span className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-[#f3ecea]">
              PRIVACY
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[#f3ecea]">
              TERMS
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
