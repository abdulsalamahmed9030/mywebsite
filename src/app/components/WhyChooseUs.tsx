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

const rustyBrown = '#8B4513';  // SaddleBrown, a nice rusty brown
const beige = '#f5f0e6';       // Light beige

const qualities = [
  {
    title: 'MERN Stack Expertise',
    icon: (
      <div className="flex gap-2 text-3xl" style={{ color: rustyBrown }}>
        <SiMongodb /> <SiExpress /> <SiReact /> <SiNodedotjs />
      </div>
    ),
    description:
      'Full-stack proficiency with MongoDB, Express.js, React, and Node.js enables us to build dynamic, scalable, and modern web applications with lightning-fast performance.',
  },
  {
    title: 'Next.js Specialists',
    icon: <SiNextdotjs className="text-4xl" style={{ color: rustyBrown }} />,
    description:
      'With server-side rendering and static site generation, Next.js brings the best of performance, SEO, and scalability to your web projects.',
  },
  {
    title: 'Performance & Scalability',
    icon: <FaRocket className="text-4xl" style={{ color: rustyBrown }} />,
    description:
      'Optimized code, lazy loading, and modular architecture ensure fast load times and effortless growth as your traffic increases.',
  },
  {
    title: 'Security First',
    icon: <FaLock className="text-4xl" style={{ color: rustyBrown }} />,
    description:
      'We follow secure coding practices, implement authentication, and ensure safe data handling to protect your users and your business.',
  },
  {
    title: 'Custom & Maintainable Code',
    icon: <FaCogs className="text-4xl" style={{ color: rustyBrown }} />,
    description:
      'Clean, modular, and maintainable code ensures future-proof systems that are easy to scale, manage, and extend.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative z-10 py-16 px-4 sm:px-10 md:px-20 lg:px-32 text-center"
      style={{ backgroundColor: beige, color: rustyBrown }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12"
          style={{ color: rustyBrown }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              className="bg-white/70 border p-8 rounded-none md:rounded-2xl shadow-lg transition duration-300 hover:shadow-amber-700"
              style={{ borderColor: rustyBrown, color: rustyBrown }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{quality.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
              <p className="text-sm leading-relaxed">{quality.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
