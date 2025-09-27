"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

// ---- Settings ----
const SLIDE_DURATION = 5500; // 5.5 seconds

// ---- Content ----
const slides = [
  {
    title: "Build Bold. Build Better.",
    description:
      "We design and develop blazing-fast websites for agencies, startups, and enterprises. Turn your vision into code with our expert web development team.",
    primaryHref: "/contact",
    primaryLabel: "Get a Free Quote",
    secondaryHref: "/portfolio",
    secondaryLabel: "View Our Work",
  },
  {
    title: "Web Development That Performs.",
    description:
      "From landing pages to complex platforms, we create high-performance, scalable, and responsive websites tailored to your goals.",
    primaryHref: "/contact",
    primaryLabel: "Discuss Your Project",
    secondaryHref: "/services",
    secondaryLabel: "See Services",
  },
  {
    title: "SEO That Drives Real Results.",
    description:
      "We don’t just build beautiful sites — we optimize them for search. More visibility. More traffic. More business.",
    primaryHref: "/contact",
    primaryLabel: "Start With an Audit",
    secondaryHref: "/case-studies",
    secondaryLabel: "Case Studies",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  // Respect reduced motion
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    []
  );

  // Autoplay 5–6s (5.5s here)
  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    timerRef.current = window.setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, prefersReducedMotion]);

  // Reset progress on slide change
  useEffect(() => {
    if (!progressRef.current) return;
    progressRef.current.style.animation = "none";
    // trigger reflow
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    progressRef.current.offsetHeight;
    progressRef.current.style.animation = prefersReducedMotion
      ? "none"
      : `progress ${SLIDE_DURATION}ms linear forwards`;
  }, [current, prefersReducedMotion]);

  // Keyboard navigation (← →)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setCurrent((i) => (i + 1) % slides.length);
      if (e.key === "ArrowLeft")
        setCurrent((i) => (i - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      className="relative bg-[#f5f0e6] text-[#8B4513] min-h-[80vh] flex flex-col justify-center items-center overflow-hidden px-4 md:px-16"
      role="region"
      aria-label="Hero: highlights and calls to action"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Moving background image (decorative) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-30 pointer-events-none hero-bg"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl text-center">
        {/* Slide wrapper reserves space so CTAs sit below (no overlap) */}
        <div
          className="relative mx-auto w-full"
          style={{
            minHeight: "320px", // adjust if your heading size changes
          }}
        >
          {slides.map((s, idx) => (
            <Slide
              key={s.title}
              index={idx}
              active={idx === current}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>

        {/* CTAs (sync with current slide) */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href={slides[current].primaryHref}
            className="inline-flex items-center justify-center rounded px-6 py-3 text-base font-semibold bg-[#A0522D] text-[#f5f0e6] hover:bg-[#8B4513] transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B4513] shadow-md"
          >
            {slides[current].primaryLabel}
          </Link>
          <Link
            href={slides[current].secondaryHref}
            className="inline-flex items-center justify-center rounded px-6 py-3 text-base font-semibold border border-[#A0522D] text-[#A0522D] hover:bg-[#A0522D] hover:text-[#f5f0e6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B4513]"
          >
            {slides[current].secondaryLabel}
          </Link>
        </div>

        {/* Progress + Dots (auto-sync with slide) */}
        <div className="mt-6 mx-auto flex flex-col items-center gap-3 w-full max-w-md">
          <div className="h-1 w-full overflow-hidden rounded-full bg-[#8B4513]/20">
            <div
              ref={progressRef}
              className="h-full w-0 bg-[#8B4513]"
              style={{ animationPlayState: paused ? "paused" : "running" }}
            />
          </div>

          <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
            {slides.map((_, idx) => {
              const active = idx === current;
              return (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`slide-${idx}`}
                  onClick={() => setCurrent(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B4513] ${
                    active ? "bg-[#8B4513] scale-100" : "bg-[#8B4513]/30 scale-90"
                  }`}
                  title={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes slideinfinite {
          from {
            background-position: 1920px 0;
          }
          to {
            background-position: 0 0;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .hero-bg {
          background-image: url("/shape-02.png");
          background-repeat: repeat-x;
          background-size: contain;
          background-position: center top;
          animation: slideinfinite 40s linear infinite;
          filter: brightness(0.7) sepia(0.4) hue-rotate(10deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-bg {
            animation: none;
          }
        }
        @media (max-width: 767px) {
          .hero-bg {
            background-position: center center;
            background-size: auto 100%;
          }
        }
      `}</style>
    </section>
  );
}

/** ----------------- Subcomponent ----------------- */

function Slide({
  index,
  active,
  title,
  description,
}: {
  index: number;
  active: boolean;
  title: string;
  description: string;
}) {
  return (
    <div
      id={`slide-${index}`}
      aria-hidden={!active}
      className={`absolute inset-0 mx-auto w-full transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {/* Keep one h1 on the page overall; make this h2 if the page already has an h1 */}
      <h1
        className="text-4xl md:text-6xl font-extrabold leading-tight text-[#A0522D]"
        style={{
          animation: active ? "fadeInUp 500ms ease-out" : "none",
        }}
      >
        {title}
      </h1>
      <p
        className="mt-4 text-lg md:text-xl text-[#704214]"
        style={{
          maxWidth: 880,
          animation: active ? "fadeInUp 600ms ease-out" : "none",
          animationDelay: active ? "80ms" : "0ms",
        }}
      >
        {description}
      </p>
    </div>
  );
}
