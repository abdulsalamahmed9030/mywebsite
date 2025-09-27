"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import FAQ from "@/app/components/FAQ";
import Link from "next/link";

const rustyBrown = "#8B4513";
const beige = "#f5f0e6";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  company?: string; // honeypot (bots love this)
  consent: boolean;
};

const initial: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "", // honeypot
  consent: true, // set to true if you don't need explicit opt-in
};

export default function ContactWithFAQ() {
  const [formData, setFormData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState<string>("");

  // --- basic validation helpers (no dependencies) ---
  const isEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

  // allow international formats: +, digits, space, dash, (), dot
  const isPhone = (v: string) =>
    /^[+]?[\d\s().-]{7,20}$/.test(v.trim());

  const normalizePhone = (v: string) =>
    v.replace(/[^\d+().\s-]/g, "").replace(/\s{2,}/g, " ").trim();

  const validate = (data: FormData) => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) e.name = "Please enter your full name.";
    if (!data.email.trim() || !isEmail(data.email)) e.email = "Enter a valid email address.";
    if (!data.phone.trim() || !isPhone(data.phone))
      e.phone = "Enter a valid phone number.";
    if (!data.message.trim() || data.message.trim().length < 10)
      e.message = "Tell us a bit more (min 10 characters).";
    if (!data.consent)
      e.consent = "Please agree so we can contact you.";
    // Honeypot: if filled, treat as spam
    if (data.company && data.company.trim().length > 0) {
      e.company = "Spam detected.";
    }
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined })); // clear field error on change
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setFormData((p) => ({ ...p, phone: normalizePhone(value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerMsg("");
    const trimmed: FormData = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: normalizePhone(formData.phone),
      message: formData.message.trim(),
    };
    const v = validate(trimmed);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setStatus("submitting");
    try {
      // TODO: implement your API route at /api/contact
      // Example payload:
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmed),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Failed to send. Please try again.");
      }

      setStatus("success");
      setServerMsg("Thanks! We’ll get back within 24 hours.");
      setFormData(initial);
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setServerMsg(err.message || "Something went wrong. Please email us directly.");
      } else {
        setServerMsg("Something went wrong. Please email us directly.");
      }
    } finally {
      setTimeout(() => setStatus("idle"), 4000); // auto-reset UI after a moment
    }
  };

  // JSON-LD: ContactPoint (helps Google understand how to reach you)
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BizoraDev",
    "url": "https://www.bizoradev.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "info@bizoradev.com",
        "telephone": "+91-9390809036",
        "areaServed": ["Hyderabad", "India", "United Arab Emirates", "United States", "Worldwide"],
        "availableLanguage": ["en", "hi"]
      }
    ]
  };

  const inputBase =
    "w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-amber-700 transition";
  const labelBase = "block mb-2 font-medium";
  const helpText = "mt-1 text-sm opacity-80";
  const errorText = "mt-1 text-sm text-red-600";

  return (
    <section
      className="py-20 px-6 md:px-16 bg-cover bg-center text-neutral-800"
      style={{
        backgroundColor: beige,
        backgroundImage: "url(/funfact-bg.png)",
      }}
      aria-labelledby="contact-heading"
    >
      <motion.h2
        id="contact-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        style={{ color: rustyBrown }}
      >
        Get in Touch with <span className="text-amber-700">BizoraDev</span>
      </motion.h2>
      <p className="text-center opacity-80 mb-12">
        Tell us briefly what you need—web design, redesign, SEO, or performance. We usually reply within <strong>24 hours</strong>.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Contact Form */}
        <div
          className="bg-white/90 border border-amber-700/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl flex flex-col"
          role="form"
          aria-describedby="contact-alt"
        >
          <form onSubmit={handleSubmit} noValidate>
            <h3 className="text-2xl font-bold mb-6 text-amber-700">Contact Us</h3>

            {/* Name */}
            <div className="mb-5">
              <label htmlFor="name" className={labelBase}>
                Name<span className="text-red-600"> *</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputBase} ${errors.name ? "border-red-500" : ""}`}
                placeholder="Your full name"
              />
              {errors.name ? (
                <p className={errorText} role="alert">{errors.name}</p>
              ) : (
                <p className={helpText}>How should we address you?</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label htmlFor="email" className={labelBase}>
                Email<span className="text-red-600"> *</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                inputMode="email"
                value={formData.email}
                onChange={handleChange}
                className={`${inputBase} ${errors.email ? "border-red-500" : ""}`}
                placeholder="you@example.com"
              />
              {errors.email ? (
                <p className={errorText} role="alert">{errors.email}</p>
              ) : (
                <p className={helpText}>We’ll send the first response here.</p>
              )}
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label htmlFor="phone" className={labelBase}>
                Phone Number<span className="text-red-600"> *</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                inputMode="tel"
                pattern="^[+]?[\d\s().-]{7,20}$"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputBase} ${errors.phone ? "border-red-500" : ""}`}
                placeholder="+91 98765 43210"
              />
              {errors.phone ? (
                <p className={errorText} role="alert">{errors.phone}</p>
              ) : (
                <p className={helpText}>Include country code if outside India.</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className={labelBase}>
                Message<span className="text-red-600"> *</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className={`${inputBase} resize-none ${errors.message ? "border-red-500" : ""}`}
                placeholder="Tell us about your project, budget, and timeline."
              />
              {errors.message ? (
                <p className={errorText} role="alert">{errors.message}</p>
              ) : (
                <p className={helpText}>A few lines are enough—we’ll follow up with specifics.</p>
              )}
            </div>

            {/* Consent (toggle to false if you need explicit opt-in) */}
            <div className="mb-6 flex items-start gap-2">
              <input
                id="consent"
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border"
                aria-describedby="consent-help"
              />
              <label htmlFor="consent" className="text-sm leading-6">
                You can contact me about my inquiry. Read our{" "}
                <Link href="/privacy" className="underline">Privacy Policy</Link>.
              </label>
            </div>
            {errors.consent && <p className={errorText} role="alert">{errors.consent}</p>}

            {/* Honeypot – keep hidden from humans */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-200 text-white ${
                status === "submitting"
                  ? "bg-amber-800 opacity-90 cursor-not-allowed"
                  : "bg-amber-700 hover:bg-amber-800"
              }`}
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>

            {/* Status messages */}
            <div className="mt-4 min-h-[28px]" aria-live="polite" role="status">
              {status === "success" && (
                <p className="text-green-700">Thanks! We’ll get back within 24 hours.</p>
              )}
              {status === "error" && (
                <p className="text-red-700">{serverMsg || "Could not send. Please try again."}</p>
              )}
            </div>

            {/* Alternate contact options */}
            <p id="contact-alt" className="mt-4 text-sm opacity-80">
              Prefer email or WhatsApp? Write to{" "}
              <a className="underline" href="mailto:info@bizoradev.com">info@bizoradev.com
</a>{" "}
              or message us at{" "}
              <a className="underline" href="https://wa.me/919390809036" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>.
            </p>
          </form>
        </div>

        {/* FAQ Section */}
        <FAQ />
      </div>

      {/* JSON-LD: ContactPoint */}
      <Script id="contactpoint-jsonld" type="application/ld+json">
        {JSON.stringify(contactJsonLd)}
      </Script>
    </section>
  );
}
