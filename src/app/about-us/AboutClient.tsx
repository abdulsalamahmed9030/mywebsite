"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Icons — pick what ships with your bundle
import {
  FiLayers,
  FiTrendingUp,
  FiSmartphone,
  FiZap,
  FiShield,
  FiGlobe,
} from "react-icons/fi";
import Header from "../components/header";
import Footer from "../components/Footer";

const rustyBrown = "#8B4513";
const beige = "#f5f0e6";

export default function AboutClient() {
  return (
    <>
      <Header />

      <section
        className="relative z-10 py-16 px-4 sm:px-10 md:px-20 lg:px-32 min-h-screen"
        style={{
          backgroundColor: beige,
          color: rustyBrown,
          backgroundImage: "url(/funfact-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-14 text-center text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          About Us
        </motion.h1>

        {/* Intro + Highlights */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-10 md:grid-cols-5">
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="prose prose-neutral md:col-span-3 max-w-none text-left"
            style={{ color: rustyBrown } as React.CSSProperties}
          >
            <p className="leading-relaxed text-base md:text-lg">
              We’re <strong>BizoraDev</strong>—a web development agency building
              fast, search-smart websites that actually move the needle. For ~
              <strong>9 years</strong>, we’ve designed, redesigned, and
              engineered sites that load in a blink, rank on Google, and
              convert real customers—not just traffic.
            </p>

            <p className="leading-relaxed text-base md:text-lg mt-5">
              Our core stack revolves around{" "}
              <strong>Next.js</strong> and a modern JavaScript toolchain
              (React, API layers, and databases that scale). Pair that with
              technical SEO and disciplined performance work, and you get
              websites that look premium and behave like products.
            </p>

            <p className="leading-relaxed text-base md:text-lg mt-5">
              Whether you’re starting fresh or levelling up an existing site,
              we keep it simple: clean builds, measurable outcomes, and support
              that doesn’t disappear after launch.
            </p>

            {/* Subtle proof badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <FiZap /> Performance-first builds
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <FiTrendingUp /> SEO with outcomes
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <FiShield /> Reliable, maintainable code
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <FiSmartphone /> Mobile-perfect experiences
              </span>
            </div>
          </motion.article>

          {/* Stats / mini-proof column */}
          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="grid gap-4">
              <StatCard label="In business" value="~9 years" />
              <StatCard label="Core focus" value="Next.js & SEO" />
              <StatCard label="Engagements" value="Design • Re-design • Build" />
              <StatCard label="Approach" value="Clean code, clear KPIs" />
            </div>
          </motion.aside>
        </div>

        {/* Capabilities */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="mx-auto mt-16 max-w-6xl text-2xl md:text-3xl font-bold"
          style={{ color: rustyBrown }}
        >
          What we do (and do well)
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <CapabilityCard
            icon={<FiLayers size={22} />}
            title="Website Design & Re-design"
            desc="Modern, brand-true interfaces that guide users to action. We rebuild legacy sites without breaking your SEO equity."
          />
          <CapabilityCard
            icon={<FiGlobe size={22} />}
            title="Web Development"
            desc="Next.js, React, and a pragmatic backend—built for speed, security, and future changes you’ll actually make."
          />
          <CapabilityCard
            icon={<FiTrendingUp size={22} />}
            title="Technical SEO"
            desc="Solid site architecture, clean metadata, schema, and content workflows that rank without gimmicks."
          />
          <CapabilityCard
            icon={<FiSmartphone size={22} />}
            title="Mobile-Responsive UX"
            desc="Every viewport considered. Gestures, spacing, and tap targets that feel native on phones."
          />
          <CapabilityCard
            icon={<FiZap size={22} />}
            title="Performance Optimization"
            desc="Image strategy, caching, code-splitting, Core Web Vitals tuning—because milliseconds matter."
          />
          <CapabilityCard
            icon={<FiShield size={22} />}
            title="Care & Reliability"
            desc="Versioned code, reviews, and a deployment pipeline that keeps the site stable while you grow."
          />
        </motion.div>

        {/* CTA */}
        <div className="mx-auto mt-12 max-w-6xl">
          <div
            className="rounded-2xl border p-6 md:p-8"
            style={{ borderColor: rustyBrown }}
          >
            <h3 className="text-xl md:text-2xl font-semibold">
              Ready to level up your web presence?
            </h3>
            <p className="mt-2 max-w-3xl leading-relaxed">
              If you need a high-converting site, a clean rebuild, or a
              measurable SEO plan, we’ll get you from “idea” to “live” without
              the drama. Bring your brand; we’ll bring the stack.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold"
              style={{
                backgroundColor: rustyBrown,
                color: "#fff",
                boxShadow:
                  "0 4px 14px rgba(139,69,19,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              Let’s talk about your project
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block text-amber-700 font-semibold underline"
        >
          ← Back to Home
        </Link>
      </section>

      <Footer />
    </>
  );
}

/** ——— UI bits ——— **/

function CapabilityCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="group rounded-2xl border p-5 md:p-6 shadow-sm transition-transform"
      style={{ borderColor: "rgba(139,69,19,0.25)" }}
    >
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl border"
          style={{ borderColor: "rgba(139,69,19,0.25)" }}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 leading-relaxed text-sm md:text-base">{desc}</p>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-2xl border p-5"
      style={{ borderColor: "rgba(139,69,19,0.25)" }}
    >
      <div className="text-sm opacity-80">{label}</div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </div>
  );
}
