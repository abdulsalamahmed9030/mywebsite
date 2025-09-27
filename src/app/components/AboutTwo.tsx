"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "./header";
import Footer from "./Footer";

const rustyBrown = "#8B4513";
const beige = "#f5f0e6";

export default function AboutClient() {
  return (
    <>
      <Header />
      <section
        className="relative z-10 py-16 px-4 sm:px-10 md:px-20 lg:px-32 text-center bg-cover bg-center min-h-screen"
        style={{
          backgroundColor: beige,
          color: rustyBrown,
          backgroundImage: "url(/funfact-bg.png)",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-14 text-4xl md:text-5xl font-extrabold mb-12"
        >
          About Us
        </motion.h1>

        <article className="prose max-w-4xl mx-auto whitespace-pre-line text-left">
          <p>
            At <strong>BizoraDev</strong>, we specialize in crafting{" "}
            <strong>high-performance, SEO-friendly websites</strong> that not only look stunning
            but also drive real results. We blend <strong>creative design</strong>,{" "}
            <strong>cutting-edge development</strong>, and <strong>local SEO expertise</strong> to
            deliver powerful digital solutions for businesses of all sizes.
          </p>

          <p>
            From <strong>custom website development</strong> to{" "}
            <strong>Google Business Profile management</strong>, our team ensures your business
            performs at its best — both online and on Google search.
          </p>

          <h2>💼 What We Offer</h2>
          <h3>🌐 Web Services</h3>
          <ul>
            <li>
              <strong>Website Design & Redesign</strong> – We design visually captivating,
              mobile-first websites that reflect your brand and convert visitors into customers.
            </li>
            <li>
              <strong>Website Development</strong> – Built using modern stacks like{" "}
              <strong>Next.js</strong>, <strong>React</strong>, and the <strong>MERN stack</strong>,
              your site will be fast, scalable, and secure.
            </li>
            <li>
              <strong>Search Engine Optimization (SEO)</strong> – Dominate search rankings with our
              expert SEO strategies, content optimization, and technical audits.
            </li>
            <li>
              <strong>Performance Optimization</strong> – We fine-tune every element — images, code,
              and speed — for blazing-fast load times.
            </li>
            <li>
              <strong>Mobile Responsive Design</strong> – Your site will look perfect on all screen
              sizes: desktops, tablets, and smartphones.
            </li>
          </ul>

          <h3>📍 Google Business Profile Services</h3>
          <ul>
            <li>
              <strong>Profile Setup & Optimization</strong> – We handle everything from profile
              creation to full optimization for local search visibility.
            </li>
            <li>
              <strong>Ongoing Updates & Edits</strong> – Timely updates to hours, services, contact
              info, and posts to keep your profile fresh.
            </li>
            <li>
              <strong>Review Management</strong> – We monitor, respond, and assist in removing false
              reviews to protect your brand reputation.
            </li>
            <li>
              <strong>Profile Verification Help</strong> – Struggling with Google verification? We
              make the process smooth and stress-free.
            </li>
            <li>
              <strong>Performance Tracking & Monitoring</strong> – We continuously track profile
              performance and keep it up-to-date.
            </li>
          </ul>

          <h2>🛠 Why Choose BizoraDev</h2>
          <ul>
            <li>
              ✅ <strong>MERN Stack & Next.js Experts</strong> – Our developers are skilled in
              building fast, dynamic, and SEO-optimized apps using modern technologies.
            </li>
            <li>
              ✅ <strong>Local SEO Focused</strong> – From schema markup to Google Business Profile
              management, we help businesses rank high in <strong>local search results</strong>.
            </li>
            <li>
              ✅ <strong>Custom, Clean Code</strong> – Every project is built from scratch with
              maintainable, scalable code—no bloated themes or shortcuts.
            </li>
            <li>
              ✅ <strong>Performance-Obsessed</strong> – We prioritize performance from day one,
              ensuring a better user experience and improved SEO rankings.
            </li>
            <li>
              ✅ <strong>Secure & Reliable</strong> – We implement best practices in authentication,
              data protection, and secure deployment.
            </li>
          </ul>

          <h2>🎯 Our Mission</h2>
          <p>
            To empower small businesses and startups with{" "}
            <strong>custom-built digital solutions</strong> that help them stand out, grow faster,
            and connect better with their audience — both online and locally.
          </p>

          <h2>🚀 Let&apos;s Build Something Great</h2>
          <p>
            Whether you need a <strong>high-converting website</strong>, <strong>SEO support</strong>, or help managing your <strong>Google Business Profile</strong>,{" "}
            <strong>BizoraDev</strong> is your trusted partner.
          </p>
        </article>

        <Link
          href="/"
          className="inline-block mt-10 text-amber-700 font-semibold underline"
        >
          ← Back to Home
        </Link>
      </section>
      <Footer />
    </>
  );
}
