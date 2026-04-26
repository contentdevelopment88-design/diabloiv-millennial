import Image from "next/image";
import type { ReactNode } from "react";

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: ReactNode;
};

const socials: SocialLink[] = [
  {
    label: "YouTube",
    handle: "@DiabloIV_Millennial",
    href: "https://www.youtube.com/@DiabloIV_Millennial",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "@diabloiv_millennial",
    href: "https://www.instagram.com/diabloiv_millennial",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Twitch",
    handle: "diabloiv_millennial",
    href: "https://www.twitch.tv/diabloiv_millennial",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@diabloiv_millennial",
    href: "https://www.tiktok.com/@diabloiv_millennial",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    label: "Reddit",
    handle: "u/DiabloIV_Millennial",
    href: "https://www.reddit.com/user/DiabloIV_Millennial",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
      </svg>
    ),
  },
  {
    label: "X",
    handle: "@content_deve88",
    href: "https://x.com/content_deve88",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center px-4 py-12 sm:py-16">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0606]/70 via-[#0a0606]/85 to-[#0a0606]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0%,#0a0606_80%)]" />
      </div>

      <div className="flex w-full max-w-md flex-col items-center gap-7">
        {/* emblem */}
        <div className="relative h-32 w-32 sm:h-36 sm:w-36">
          <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl" />
          <Image
            src="/images/emblem.png"
            alt="DiabloIV_Millennial emblem"
            fill
            sizes="144px"
            priority
            className="relative object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* handle + tagline */}
        <div className="text-center">
          <h1
            className="font-heading text-3xl font-black uppercase tracking-[0.18em] sm:text-4xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            DiabloIV<span className="text-muted">_</span>Millennial
          </h1>
          <p className="mt-2 text-sm text-muted sm:text-base">
            Sanctuary content. Builds, guides, Helltide chaos.
          </p>
        </div>

        {/* social links */}
        <ul className="mt-2 flex w-full flex-col gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-hover group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm"
              >
                <span className="flex h-7 w-7 items-center justify-center text-foreground/90 group-hover:text-foreground">
                  {s.icon}
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span
                    className="text-sm font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {s.label}
                  </span>
                  <span className="truncate text-xs text-muted">
                    {s.handle}
                  </span>
                </span>
                <span className="text-muted transition-colors group-hover:text-foreground">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* blacksmith tip chest */}
        <a
          href="https://streamlabs.com/diabloiv_millennial/tip"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-hover group relative mt-3 flex w-full flex-col items-center gap-2 overflow-hidden rounded-2xl border-2 border-bronze-dim/70 px-6 py-5"
          style={{
            background:
              "linear-gradient(180deg, #2a1a0c 0%, #1a0f06 60%, #110806 100%)",
            boxShadow:
              "inset 0 1px 0 0 rgba(184,135,70,0.25), inset 0 -1px 0 0 rgba(0,0,0,0.6)",
          }}
        >
          {/* corner rivets */}
          <span className="pointer-events-none absolute left-2 top-2 h-2 w-2 rounded-full bg-bronze/70 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.6)]" />
          <span className="pointer-events-none absolute right-2 top-2 h-2 w-2 rounded-full bg-bronze/70 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.6)]" />
          <span className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 rounded-full bg-bronze/70 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.6)]" />
          <span className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 rounded-full bg-bronze/70 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.6)]" />

          {/* lock plate */}
          <span
            className="pointer-events-none absolute left-1/2 top-0 h-3 w-12 -translate-x-1/2 rounded-b-md border-x border-b border-bronze-dim/80"
            style={{ background: "linear-gradient(180deg,#3d2510,#1c0f05)" }}
          />

          <div className="flex items-center gap-3">
            {/* anvil + coin icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-bronze"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3 8h13a3 3 0 0 1 3 3v1h2v2h-2v1a3 3 0 0 1-3 3h-1l1.5 3h-3l-1.5-3H10l-1.5 3h-3L7 18H6a3 3 0 0 1-3-3V8zm2 2v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5H5z" />
            </svg>
            <span
              className="font-heading text-base font-bold uppercase tracking-[0.3em] text-bronze"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Toss a coin
            </span>
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-bronze"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-12h2v3h3v2h-3v3h-2v-3H8v-2h3V8z" />
            </svg>
          </div>
          <span className="text-xs text-bronze/70">
            Drop gold for the blacksmith
          </span>
        </a>

        {/* footer */}
        <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-muted/60">
          © {new Date().getFullYear()} DiabloIV_Millennial
        </p>
      </div>
    </main>
  );
}
