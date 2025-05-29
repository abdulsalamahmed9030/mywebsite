'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  { name: 'Manoranjan K', role: 'UI/UX Designer', image: '/team1.jpg' },
  { name: 'Faizy Khan', role: 'Digital Marketing Manager', image: '/team2.jpg' },
  { name: 'Srikanth Giddalur', role: 'Co-Founder', image: '/team3.jpg' },
  { name: 'Jane Doe', role: 'Frontend Developer', image: '/team4.jpg' },
  { name: 'John Smith', role: 'Backend Engineer', image: '/team5.jpg' },
];

const repeatedTeam = [...team, ...team];

const rustyBrown = '#8B4513'; // Rusty brown
const beige = '#f5f0e6';      // Beige background

export default function AboutUs() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (carouselRef.current && innerRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const contentWidth = innerRef.current.scrollWidth;
      setWidth(contentWidth - containerWidth);
    }
  }, []);

  return (
    <section
      className="relative z-10 px-4 py-16 sm:px-10 md:px-20 lg:px-32 text-center"
      style={{ backgroundColor: beige, color: rustyBrown }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-8"
          style={{ color: rustyBrown }}
        >
          Our Expert Team
        </motion.h2>

        <p
          className="max-w-2xl mx-auto mb-10"
          style={{ color: '#a0522d' }} // slightly lighter rusty brown for subtitle
        >
          Our team of developers, designers, and visionaries collaborate to build elegant,
          scalable, and impactful digital experiences. We thrive on creativity, precision, and
          performance.
        </p>

        <div
          ref={carouselRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing [touch-action:pan-y]"
          role="list"
          aria-label="Team members carousel"
        >
          <motion.div
            ref={innerRef}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6 w-max"
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {repeatedTeam.map((member, index) => (
              <motion.div
                key={index}
                role="listitem"
                className={`w-[260px] sm:w-60 md:w-64 flex-shrink-0 bg-white/70 border p-4 rounded-2xl shadow-md transition-shadow duration-300 ${
                  isDragging ? 'shadow-amber-900/70' : 'hover:shadow-amber-700/50'
                }`}
                style={{ borderColor: rustyBrown, color: rustyBrown }}
              >
                <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: rustyBrown }}>
                  {member.name}
                </h3>
                <p style={{ color: '#a0522d' }}>{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
