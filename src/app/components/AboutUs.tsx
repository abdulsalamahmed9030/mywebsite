'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Manoranjan K',
    role: 'UI/UX Designer',
    image: '/team1.jpg',
  },
  {
    name: 'Faizy Khan',
    role: 'Digital Marketing Manager',
    image: '/team2.jpg',
  },
  {
    name: 'Srikanth Giddalur',
    role: 'Co-Founder',
    image: '/team3.jpg',
  },
  {
    name: 'Jane Doe',
    role: 'Frontend Developer',
    image: '/team4.jpg',
  },
  {
    name: 'John Smith',
    role: 'Backend Engineer',
    image: '/team5.jpg',
  },
];

const repeatedTeam = [...team, ...team];

export default function AboutUs() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current && innerRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const contentWidth = innerRef.current.scrollWidth;
      setWidth(contentWidth - containerWidth);
    }
  }, []);

  return (
    <section className="relative z-10 bg-[#0f172a] text-[#f1f5f9] px-4 py-16 sm:px-10 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-purple-400 text-center mb-8"
        >
          Our Expert Team
        </motion.h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10">
          Our team of developers, designers, and visionaries collaborate to build elegant,
          scalable, and impactful digital experiences. We thrive on creativity, precision, and
          performance.
        </p>

        <div ref={carouselRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            ref={innerRef}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6 w-max"
          >
            {repeatedTeam.map((member, index) => (
              <div
                key={index}
                className="w-[260px] flex-shrink-0 bg-white/5 border border-cyan-400 p-4 rounded-2xl shadow-md hover:shadow-cyan-400/40 transition duration-300"
              >
                <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">{member.name}</h3>
                <p className="text-sm text-slate-400">{member.role}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
