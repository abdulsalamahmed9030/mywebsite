"use client";

import React, { use } from "react";
import { servicesDetails } from "../../../data/servicesDetails";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/header";
import Footer from "../../components/Footer";

const rustyBrown = "#8B4513";
const beige = "#f5f0e6";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: Props) {
  const { slug } = use(params);
  const service = servicesDetails[slug];

  return (
    <>
      <Header />
      {!service ? (
        <section
          className="relative z-10 py-16 px-4 sm:px-10 md:px-20 lg:px-32 text-center bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
          style={{
            backgroundColor: beige,
            color: rustyBrown,
            backgroundImage: "url(/funfact-bg.png)",
          }}
        >
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services" className="text-amber-700 underline">
            Go back to services
          </Link>
        </section>
      ) : (
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
            {service.title}
          </motion.h1>

          <article className="prose max-w-4xl mx-auto whitespace-pre-line text-left">
            {service.longDescription}
          </article>

          <Link
            href="/services"
            className="inline-block mt-10 text-amber-700 font-semibold underline"
          >
            ← Back to Services
          </Link>
        </section>
      )}

      <Footer />
    </>
  );
}
