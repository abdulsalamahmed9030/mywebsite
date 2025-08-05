'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What services does BizoraDev offer?',
    answer:
      'BizoraDev offers website design, development, SEO, performance optimization, and mobile-responsive solutions tailored to businesses of all sizes.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most projects are completed within 2–4 weeks, depending on complexity and content readiness.',
  },
  {
    question: 'Is SEO included in website development?',
    answer:
      'Yes. All our websites are built with SEO best practices, and we offer dedicated SEO services for advanced rankings.',
  },
  {
    question: 'Do you offer website redesign services?',
    answer:
      'Absolutely! We specialize in modernizing outdated websites to be faster, cleaner, and more user-friendly.',
  },
  {
    question: 'How can I get a quote from BizoraDev?',
    answer:
      'Fill out our contact form, and we’ll get back to you within 24 hours with a tailored proposal.',
  },
  {
    question: 'Do you provide e-commerce websites?',
    answer:
      'Yes, we build scalable and secure e-commerce websites using Shopify, WooCommerce, and custom React/Next.js solutions.',
  },
  
  {
    question: 'Can you optimize my current website’s speed and SEO?',
    answer:
      'Definitely. We perform audits and implement improvements to boost load times, Core Web Vitals, and search engine visibility.',
  },{
    question: 'Can you optimize my current website’s speed and SEO?',
    answer:
      'Definitely. We perform audits and implement improvements to boost load times, Core Web Vitals, and search engine visibility.',
  },{
    question: 'Can you optimize my current website’s speed and SEO?',
    answer:
      'Definitely. We perform audits and implement improvements to boost load times, Core Web Vitals, and search engine visibility.',
  },{
    question: 'Can you optimize my current website’s speed and SEO?',
    answer:
      'Definitely. We perform audits and implement improvements to boost load times, Core Web Vitals, and search engine visibility.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white/90 border border-amber-700/50 backdrop-blur-sm p-10 rounded-2xl shadow-xl flex flex-col justify-between min-h-[550px]">
      <div>
        <h3 className="text-2xl font-bold mb-6 text-amber-700">FAQs</h3>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full text-left text-lg font-semibold flex justify-between items-center transition-all duration-200"
              >
                <span>{faq.question}</span>
                <span className="text-amber-700">{open === index ? '−' : '+'}</span>
              </button>
              {open === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="text-sm mt-2 text-neutral-700"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
