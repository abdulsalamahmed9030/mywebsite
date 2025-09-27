"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLock, FaRocket, FaCogs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiNextdotjs } from "react-icons/si";
import Script from "next/script";

const rustyBrown = "#8B4513";
const beige = "#f5f0e6";

type Quality = {
  title: string;
  icon: React.ReactNode;
  description: string;
  path: string;
  slug: string;
};

const qualities: Quality[] = [
  {
    title: "MERN Stack Expertise",
    icon: (
      <div className="flex gap-2 text-2xl md:text-3xl" style={{ color: rustyBrown }} aria-hidden="true">
        <SiMongodb /> <SiExpress /> <SiReact /> <SiNodedotjs />
      </div>
    ),
    description:
      "Full-stack builds with MongoDB, Express, React, and Node—clean architecture that ships fast and scales without pain.",
    path: "/why-us/mern-stack-expertise",
    slug: "mern-stack-expertise",
  },
  {
    title: "Next.js Specialists",
    icon: <SiNextdotjs className="text-3xl md:text-4xl" style={{ color: rustyBrown }} aria-hidden="true" />,
    description:
      "SSR, SSG, and route-level performance optimizations for Core Web Vitals. Real SEO benefits, not myths.",
    path: "/why-us/nextjs-specialists",
    slug: "nextjs-specialists",
  },
  {
    title: "Performance & Scalability",
    icon: <FaRocket className="text-3xl md:text-4xl" style={{ color: rustyBrown }} aria-hidden="true" />,
    description:
      "Code-splitting, caching, image strategy, and observability—measurable speed gains as traffic grows.",
    path: "/why-us/performance-scalability",
    slug: "performance-scalability",
  },
  {
    title: "Security First",
    icon: <FaLock className="text-3xl md:text-4xl" style={{ color: rustyBrown }} aria-hidden="true" />,
    description:
      "Auth done right, least-privilege access, secure headers, and safe data flows baked into the pipeline.",
    path: "/why-us/security-first",
    slug: "security-first",
  },
  {
    title: "Custom & Maintainable Code",
    icon: <FaCogs className="text-3xl md:text-4xl" style={{ color: rustyBrown }} aria-hidden="true" />,
    description:
      "Modular, documented, and test-ready codebases. Future changes are cheaper and safer.",
    path: "/why-us/custom-maintainable-code",
    slug: "custom-maintainable-code",
  },
];

function truncateWords(text: string, max = 120) {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  return (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).trim() + "…";
}

export default function WhyChooseUs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Why choose BizoraDev",
    "itemListOrder": "http://schema.org/ItemListOrderAscending",
    "itemListElement": qualities.map((q, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebPage",
        name: q.title,
        url: `https://www.bizoradev.com/why-us/${q.slug}`,
        description: q.description,
      },
    })),
  };

  return (
    <section
      id="why-choose-us"
      className="relative z-10 py-16 px-4 sm:px-10 md:px-20 lg:px-32"
      style={{ backgroundColor: beige, color: rustyBrown }}
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          id="why-heading"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-4xl md:text-5xl font-extrabold text-center tracking-tight"
          style={{ color: rustyBrown }}
        >
          Why Choose Us
        </motion.h2>

        {/* subtle context line with internal links (SEO without stuffing) */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm md:text-base opacity-90">
          We build fast, secure, and scalable{" "}
          <Link href="/services/website-development" className="underline hover:opacity-80">
            web applications
          </Link>{" "}
          with real-world SEO baked in. Explore the principles that shape every project we ship.
        </p>

        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Key reasons to work with us"
        >
          {qualities.map((q, idx) => (
            <motion.li
              role="listitem"
              key={q.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="group rounded-2xl border bg-white/80 backdrop-blur-sm shadow-sm transition-all hover:shadow-md"
              style={{ borderColor: "rgba(139,69,19,0.25)" }}
            >
              <div className="p-6 md:p-7">
                <div className="mb-4 flex justify-center">{q.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-center">{q.title}</h3>
                <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-center opacity-90">
                  {truncateWords(q.description, 128)}
                </p>

                <div className="mt-5 flex justify-center">
                  <Link
                    href={q.path}
                    aria-label={`${q.title} — read more about our approach`}
                    className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#A0522D] hover:text-[#f5f0e6] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{ borderColor: rustyBrown, color: rustyBrown }}
                  >
                    Read more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Soft CTA under the grid to push deeper engagement */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="opacity-90">
            Want the technical breakdown? See how we handle{" "}
            <Link href="/services/performance-optimization" className="underline hover:opacity-80">
              performance optimization
            </Link>{" "}
            and{" "}
            <Link href="/services/seo" className="underline hover:opacity-80">
              SEO
            </Link>{" "}
            on real projects.
          </p>
        </div>
      </div>

      {/* Lightweight schema so Google understands this is a 'reasons/benefits' list */}
      <Script id="why-us-itemlist" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </section>
  );
}
