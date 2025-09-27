"use client";

import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaChartLine } from "react-icons/fa";
import { MdDesignServices, MdSpeed } from "react-icons/md";
import { RiMegaphoneLine } from "react-icons/ri";

const rustyBrown = "#8B4513";
const beige = "#f5f0e6";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
};

const services: Service[] = [
  {
    title: "Website Design",
    description:
      "Modern, brand-true UI/UX that guides users to action. We design systems, not just screens.",
    icon: <MdDesignServices className="text-3xl md:text-4xl" style={{ color: rustyBrown }} />,
    slug: "website-design",
  },
  {
    title: "Website Redesign",
    description:
      "Give your site a second life—clean IA, improved speed, and SEO-safe migrations that preserve equity.",
    icon: <FaLaptopCode className="text-3xl md:text-4xl" style={{ color: rustyBrown }} />,
    slug: "website-redesign",
  },
  {
    title: "Website Development",
    description:
      "Next.js/React builds engineered for performance, security, and scale—without the bloat.",
    icon: <RiMegaphoneLine className="text-3xl md:text-4xl" style={{ color: rustyBrown }} />,
    slug: "website-development",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Technical SEO, on-page structure, content workflows, and local SEO to rank and convert.",
    icon: <FaChartLine className="text-3xl md:text-4xl" style={{ color: rustyBrown }} />,
    slug: "seo",
  },
  {
    title: "Mobile-Responsive Design",
    description:
      "Mobile-first layouts with crisp spacing, tap targets, and gestures that feel native.",
    icon: <FaMobileAlt className="text-3xl md:text-4xl" style={{ color: rustyBrown }} />,
    slug: "mobile-responsive-designs",
  },
  {
    title: "Performance Optimization",
    description:
      "Core Web Vitals tuning, image strategy, code-splitting, caching—milliseconds matter.",
    icon: <MdSpeed className="text-3xl md:text-4xl" style={{ color: rustyBrown }} />,
    slug: "performance-optimization",
  },
];

export default function OurServices() {
  return (
    <section
      className="relative z-10 py-16 md:py-20 px-4 sm:px-10 md:px-20 lg:px-32 bg-cover bg-center"
      style={{
        backgroundColor: beige,
        color: rustyBrown,
        backgroundImage: "url(/funfact-bg.png)",
      }}
      aria-labelledby="services-heading"
    >
      {/* subtle overlay (unchanged) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(80rem 40rem at 10% 0%, rgba(139,69,19,0.12), transparent 60%), radial-gradient(60rem 30rem at 100% 20%, rgba(139,69,19,0.08), transparent 55%)",
        }}
      />

      {/* HEADING: back to “Our Services” as before */}
      <motion.h2
        id="services-heading"
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
        transition={{ duration: 0.5 }}
        className="relative text-center text-3xl md:text-5xl font-extrabold tracking-tight"
        style={{ color: rustyBrown }}
      >
        Our Services
      </motion.h2>

      {/* Global subhead */}
      <p className="relative mx-auto mt-4 max-w-3xl text-center text-sm md:text-base opacity-90">
        High-performance web builds and SEO for clients worldwide.
      </p>

      <div className="relative mx-auto mt-12 grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((s, i) => (
          <motion.article
            key={s.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="group rounded-2xl border bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
            style={{ borderColor: "rgba(139,69,19,0.25)" }}
          >
            {/* REMOVED the thick top line as requested */}

            <div className="p-6 md:p-7">
              <div className="mb-4 flex items-center justify-center">
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl border bg-white group-hover:scale-105 transition-transform"
                  style={{ borderColor: "rgba(139,69,19,0.25)" }}
                  aria-hidden="true"
                >
                  {s.icon}
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-center">{s.title}</h3>
              <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-center opacity-90">
                {s.description}
              </p>

              <div className="mt-5 flex justify-center">
                <Link
                  href={`/services/${s.slug}`}
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
          </motion.article>
        ))}
      </div>

      {/* Bottom CTA (kept) */}
      <div className="relative mx-auto mt-12 max-w-5xl">
        <div
          className="rounded-2xl border p-6 md:p-8 text-center"
          style={{ borderColor: "rgba(139,69,19,0.25)" }}
        >
          <h4 className="text-xl md:text-2xl font-semibold">Not sure where to start?</h4>
          <p className="mt-2 opacity-90">
            Get a quick, no-obligation audit. We’ll review speed, SEO, and UX—and tell you exactly what to fix first.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/seo-audit"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold"
              style={{
                backgroundColor: rustyBrown,
                color: "#fff",
                boxShadow:
                  "0 4px 14px rgba(139,69,19,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              Start Free Audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border transition-colors hover:bg-[#A0522D] hover:text-[#f5f0e6]"
              style={{ borderColor: rustyBrown, color: rustyBrown }}
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD updated for GLOBAL targeting */}
      <Script id="services-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BizoraDev",
          "url": "https://www.bizoradev.com/",
          // Single global target instead of specific cities/countries
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Services",
            "itemListElement": services.map((s) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": s.title,
                "description": s.description,
                "areaServed": ["Hyderabad", "India", "United States", "United Arab Emirates", "Worldwide"],
                "provider": { "@type": "Organization", "name": "BizoraDev" }
              },
              "url": `https://www.bizoradev.com/services/${s.slug}`
            }))
          }
        })}
      </Script>
    </section>
  );
}
