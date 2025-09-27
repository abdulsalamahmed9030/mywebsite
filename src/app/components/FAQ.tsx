"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

const rustyBrown = "#8B4513";

type FAQItem = { question: string; answer: string; slug: string };

const faqs: FAQItem[] = [
  {
    question: "What services does BizoraDev offer?",
    answer:
      "Website design, website redesign, custom development (Next.js/React), SEO, performance optimization, and mobile-responsive experiences for startups and established brands.",
    slug: "services-we-offer",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most small–medium projects land in 2–4 weeks. Larger scopes (custom integrations, complex content) can take 6–8 weeks. We’ll give you a clear timeline after a quick discovery call.",
    slug: "timeline",
  },
  {
    question: "Is SEO included in website development?",
    answer:
      "Yes—technical SEO fundamentals are built in (metadata, clean URLs, schema, CWV). For aggressive ranking goals, we offer dedicated ongoing SEO plans.",
    slug: "seo-included",
  },
  {
    question: "Do you offer website redesign services?",
    answer:
      "Absolutely. We modernize UX, improve site structure, and migrate without losing existing SEO equity.",
    slug: "redesign",
  },
  {
    question: "Do you provide e-commerce websites?",
    answer:
      "Yes. We build Shopify and WooCommerce stores, and custom Next.js storefronts when you need full control.",
    slug: "ecommerce",
  },
  {
    question: "Can you optimize my current website’s speed and SEO?",
    answer:
      "Yes. We run a technical audit, fix Core Web Vitals, ship caching and image strategy, and clean up on-page issues for better rankings.",
    slug: "optimization",
  },
  {
    question: "What are your pricing and payment terms?",
    answer:
      "We quote per-project with clear scope. Typical projects are milestone-based (50% start, 30% mid, 20% launch). Monthly retainers available for SEO & maintenance.",
    slug: "pricing-terms",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes—optional care plans cover updates, backups, security patches, and small enhancements so the site stays fast and secure.",
    slug: "maintenance",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // open correct FAQ if someone links directly (/#faq-slug)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash?.replace("#faq-", "");
    if (!hash) return;
    const found = faqs.findIndex((f) => f.slug === hash);
    if (found >= 0) setOpenIndex(found);
  }, []);

  const faqJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    }),
    []
  );

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-white/95 border border-amber-700/40 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 h-full"
    >
      <h3
        id="faq-heading"
        className="text-3xl md:text-4xl font-extrabold mb-2"
        style={{ color: rustyBrown }}
      >
        FAQs
      </h3>
      <p className="mb-8 text-sm md:text-base opacity-80">
        Quick answers to common questions. Still unsure?{" "}
        <a href="#contact-heading" className="underline">Contact us</a>.
      </p>

      <div role="list" aria-label="Frequently asked questions" className="divide-y">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <article key={faq.slug} role="listitem" className="py-4 md:py-5">
              <h4 className="text-lg md:text-xl">
                <button
                  id={`faq-${faq.slug}`}
                  aria-controls={`faq-panel-${faq.slug}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-3 text-left font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg px-2 py-1"
                  style={{ color: rustyBrown }}
                >
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ borderColor: "rgba(139,69,19,0.35)", color: rustyBrown }}
                  >
                    ▾
                  </span>
                </button>
              </h4>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${faq.slug}`}
                    role="region"
                    aria-labelledby={`faq-${faq.slug}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 px-2 text-[15px] leading-relaxed text-neutral-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>

      {/* Balance with form on two-column layouts */}
      <style jsx>{`
        section {
          min-height: 600px;
        }
      `}</style>

      <Script id="faqpage-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
    </section>
  );
}
