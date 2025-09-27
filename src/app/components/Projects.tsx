"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const rustyBrown = "#8B4513";
const beige = "#f5f0e6";

type Project = {
  id: string | number;
  name: string;
  country: string;
  city?: string;
  url: string;
  bannerSrc: string;  // use this for banner (can include logo baked-in)
  tech: string[];
  cssStack?: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Task Force Interiors",
    country: "India",
    city: "Hyderabad",
    url: "https://www.taskforceinteriors.com/",
    bannerSrc: "/portfolio/taskforce-banner.jpg",
    tech: ["Next.js", "React", "TypeScript"],
    cssStack: "Tailwind CSS",
  },
  {
    id: 2,
    name: "Infinity Construction NYC",
    country: "USA",
    city: "New York",
    url: "https://www.infinityconstructionnyc.com/",
    bannerSrc: "/portfolio/infinity-banner.jpg",
    tech: ["Next.js", "React", "TypeScript"],
    cssStack: "Tailwind CSS",
  },
  {
    id: 3,
    name: "TurboShop",
    country: "Canada",
    city: "Calgary, Alberta.",
    url: "https://www.turboshop.ca/",
    bannerSrc: "/portfolio/turboshop-banner.jpg",
    tech: ["Next.js", "React", "TypeScript"],
    cssStack: "Tailwind CSS",
  },
  {
    id: 4,
    name: "Mehfil Kitchen",
    country: "USA",
    city: "Lincoln Ave",
    url: "https://mehfilkitchen.com/",
    bannerSrc: "/portfolio/mehfilkitchen-banner.jpg",
    tech: ["Next.js", "React", "Framer Motion"],
    cssStack: "Tailwind CSS",
  },
  {
    id: 5,
    name: "Sasroofing & Waterproofing",
    country: "USA",
    city: "New York",
    url: "https://www.sasroofingwaterproofing.com/",
    bannerSrc: "/portfolio/sasroofingwaterproofing-banner.jpg",
    tech: ["Next.js", "React", "TypeScript"],
    cssStack: "Tailwind CSS",
  },
  {
    id: 6,
    name: "I-Revive Cupping Clinic",
    country: "India",
    city: "Hyderabad",
    url: "https://www.i-revive.com/",
    bannerSrc: "/portfolio/i-revive-banner.jpg",
    tech: ["Next.js", "React", "Framer Motion"],
    cssStack: "Tailwind CSS",
  },
];

export default function ProjectsGrid() {
  // Only used on small screens to show overlay on tap
  const [openId, setOpenId] = useState<Project["id"] | null>(null);

  return (
    <section
      className="relative z-10 py-16 md:py-20 px-4 sm:px-10 md:px-20 lg:px-32"
      style={{
        backgroundColor: beige,
        color: rustyBrown,
        backgroundImage: "url(/funfact-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-labelledby="projects-heading"
    >
      <motion.h2
        id="projects-heading"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative text-center text-3xl md:text-5xl font-extrabold tracking-tight"
        style={{ color: rustyBrown }}
      >
        Projects
      </motion.h2>

      <p className="relative mx-auto mt-4 max-w-3xl text-center text-sm md:text-base opacity-90">
        Real websites we’ve shipped. Hover (desktop) or tap (mobile) to see the tech, client location, and a link to explore.
      </p>

      <div className="relative mx-auto mt-12 grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {projects.map((p, i) => {
          const isOpen = openId === p.id; // mobile-only state
          return (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group rounded-2xl border bg-white/85 backdrop-blur-sm shadow-sm hover:shadow-md focus-within:shadow-md transition-all overflow-hidden"
              style={{ borderColor: "rgba(139,69,19,0.25)" }}
            >
              {/* Image + interactive overlay area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={p.bannerSrc}
                  alt={`${p.name} banner`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                  priority={i < 4}
                />

                {/* DARK OVERLAY
                    - Desktop: appears on hover/focus (existing behavior)
                    - Mobile: appears when card is tapped (isOpen)
                */}
                <div
                  className={[
                    "absolute inset-0 z-10 bg-black/80 transition-opacity duration-300",
                    // desktop behavior
                    "md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100",
                    // mobile behavior via state
                    isOpen ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />

                {/* Overlay content */}
                <div
                  className={[
                    "absolute inset-x-0 bottom-0 z-20 p-4 md:p-5 transition-all",
                    // desktop hover/focus behavior
                    "md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-within:opacity-100 md:group-focus-within:translate-y-0",
                    // mobile: show when open
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                  ].join(" ")}
                >
                  {/* Tech badges */}
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium text-white"
                        style={{ borderColor: "rgba(255,255,255,0.35)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white text-xs md:text-sm">
                    {p.cssStack && (
                      <span>
                        <strong>CSS:</strong> {p.cssStack}
                      </span>
                    )}
                    <span>
                      <strong>Client:</strong>{" "}
                      {p.city ? `${p.city}, ${p.country}` : p.country}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-3">
                    <Link
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg白 px-4 py-2 text-sm font-semibold text-black shadow-sm bg-white"
                      aria-label={`View ${p.name} website (opens in new tab)`}
                    >
                      View Website
                      <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-90" aria-hidden="true">
                        <path
                          d="M14 3h7v7M21 3l-9 9M5 21l7-7"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* MOBILE TAP TARGET:
                    - Only visible on small screens
                    - Taps toggle overlay (doesn't affect desktop)
                */}
                <button
                  type="button"
                  className="absolute inset-0 z-30 block md:hidden"
                  aria-label={isOpen ? "Hide details" : "Show details"}
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : p.id)}
                />
              </div>

              {/* Footer */}
              <div className="px-4 py-4">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: rustyBrown }}>
                  {p.name}
                </h3>
                <p className="mt-0.5 text-sm opacity-80">{p.country}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
