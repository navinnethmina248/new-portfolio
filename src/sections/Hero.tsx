import { useState } from "react";
import { FaArrowDown, FaArrowRight, FaDownload, FaLocationDot, FaStar } from "react-icons/fa6";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import { site } from "../data/site";

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pb-20 pt-28 sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-28 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-12 md:grid-cols-[1.18fr_0.82fr] lg:gap-16">
        <div className="animate-fade-up relative z-10">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-2 text-xs font-medium text-muted shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
            </span>
            {site.availability}
          </p>

          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            IT undergraduate <span className="px-1 text-muted">/</span> developer
          </p>

          <h1 className="max-w-3xl font-display text-[3.4rem] font-bold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-[5.15rem]">
            Hello, I'm
            <br />
            <span className="relative inline-block text-accent">
              {site.name}
              <svg
                aria-hidden="true"
                viewBox="0 0 220 15"
                className="absolute -bottom-2 left-0 w-full text-accent"
                fill="none"
              >
                <path d="M3 10C62 3 156 2 216 8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-ink">.</span>
            <br />
            <span className="text-[0.58em] font-medium leading-[1.12] tracking-[-0.045em]">
              I build useful
              <br className="hidden sm:block" /> things for the web.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-muted sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" className="rounded-full px-6 py-3 shadow-[0_8px_20px_#e45b3e30]">
              Explore my work <FaArrowRight aria-hidden="true" />
            </Button>
            <Button href={site.cvPath} variant="secondary" download className="rounded-full px-6 py-3">
              <FaDownload aria-hidden="true" /> Download CV
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <SocialLinks />
            <span className="hidden h-8 w-px bg-line sm:block" />
            <p className="inline-flex items-center gap-2 text-sm text-muted">
              <FaLocationDot className="text-accent" aria-hidden="true" />
              {site.location}
            </p>
          </div>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-[25rem] justify-self-center [animation-delay:150ms]">
          <div aria-hidden="true" className="absolute inset-5 rotate-[-8deg] rounded-[2rem] bg-accent" />
          <div className="relative aspect-[0.83] rotate-[2deg] overflow-hidden rounded-[2rem] border-[7px] border-surface bg-raised shadow-[0_28px_70px_#25231f25]">
            {imageFailed ? (
              <div
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 via-raised to-mint/20 font-display text-8xl font-bold text-accent"
                role="img"
                aria-label={`${site.name}'s profile placeholder`}
              >
                {site.name.charAt(0)}
              </div>
            ) : (
              <img
                src="/images/profile.jpeg"
                alt={`Portrait of ${site.fullName}`}
                onError={() => setImageFailed(true)}
                className="h-full w-full object-cover object-center"
              />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent px-6 pb-6 pt-20 text-white">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-white/75">Curious by nature</p>
              <p className="mt-1 font-display text-2xl font-semibold">Builder by choice.</p>
            </div>
          </div>
          <div className="animate-gentle-float absolute -left-7 top-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-surface text-2xl text-accent shadow-lg">
            <FaStar aria-hidden="true" />
          </div>
          <div className="absolute -bottom-5 -right-2 rotate-2 rounded-xl border border-line bg-surface px-4 py-3 shadow-lg sm:-right-8">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">Currently</p>
            <p className="mt-1 text-sm font-semibold text-ink">Turning ideas into code</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent sm:flex"
      >
        Scroll to explore <FaArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
