'use client';

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

export default function AboutUs() {
  const repeatedTeam = [...team, ...team]; // Duplicate team list

  return (
    <section className="relative z-10 bg-black text-white px-4 py-16 sm:px-10 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#f0b100] text-center mb-8"
        >
          Our Expert Team
        </motion.h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Our team of developers, designers, and visionaries collaborate to build elegant,
          scalable, and impactful digital experiences. We thrive on creativity, precision, and
          performance.
        </p>

        {/* Infinite scroll wrapper */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {repeatedTeam.map((member, index) => (
              <div
                key={index}
                className="w-[300px] bg-black/70 border border-[#f0b100] p-4 rounded-2xl shadow-md hover:shadow-yellow-400/40 transition duration-300 flex-shrink-0"
              >
                <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#f0b100]">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Custom Keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
