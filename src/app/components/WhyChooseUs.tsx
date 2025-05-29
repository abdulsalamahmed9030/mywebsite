'use client';

import { FaLock, FaRocket, FaCogs } from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const qualities = [
  {
    title: 'MERN Stack Expertise',
    icon: (
      <div className="flex gap-2 text-3xl text-sky-400">
        <SiMongodb /> <SiExpress /> <SiReact /> <SiNodedotjs />
      </div>
    ),
    description:
      'Full-stack proficiency with MongoDB, Express.js, React, and Node.js enables us to build dynamic, scalable, and modern web applications with lightning-fast performance.',
  },
  {
    title: 'Next.js Specialists',
    icon: <SiNextdotjs className="text-4xl text-sky-400" />,
    description:
      'With server-side rendering and static site generation, Next.js brings the best of performance, SEO, and scalability to your web projects.',
  },
  {
    title: 'Performance & Scalability',
    icon: <FaRocket className="text-4xl text-sky-400" />,
    description:
      'Optimized code, lazy loading, and modular architecture ensure fast load times and effortless growth as your traffic increases.',
  },
  {
    title: 'Security First',
    icon: <FaLock className="text-4xl text-sky-400" />,
    description:
      'We follow secure coding practices, implement authentication, and ensure safe data handling to protect your users and your business.',
  },
  {
    title: 'Custom & Maintainable Code',
    icon: <FaCogs className="text-4xl text-sky-400" />,
    description:
      'Clean, modular, and maintainable code ensures future-proof systems that are easy to scale, manage, and extend.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative z-10 py-16 px-4 sm:px-10 md:px-20 lg:px-32 bg-[#0f172a] text-[#f1f5f9] text-center">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-sky-400 mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-sky-500 p-8 rounded-none md:rounded-2xl shadow-lg hover:shadow-sky-400/30 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{quality.icon}</div>
              <h3 className="text-xl font-semibold text-sky-400 mb-2">
                {quality.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
