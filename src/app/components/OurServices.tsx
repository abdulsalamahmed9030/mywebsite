'use client';

import Link from 'next/link';
import { FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import {
  MdDesignServices,
  MdSpeed,
  MdVerifiedUser,
  MdUpdate,
} from 'react-icons/md';
import { RiMegaphoneLine, RiShieldCheckLine } from 'react-icons/ri';
import { BsPersonBadge } from 'react-icons/bs';
import { motion } from 'framer-motion';

const rustyBrown = '#8B4513';
const beige = '#f5f0e6';

const services = [
  {
    title: 'Website Design',
    description:
      'We create eye-catching, user-friendly designs that captivate your audience and reflect your brand’s identity. From UI/UX to complete branding — we’ve got you covered.',
    icon: <MdDesignServices className="text-4xl" style={{ color: rustyBrown }} />,
    slug: 'website-design',
  },
  {
    title: 'Website Redesign',
    description:
      'Give your outdated website a modern makeover! We revamp your site’s look, speed, and structure to better engage visitors and boost conversions.',
    icon: <FaLaptopCode className="text-4xl" style={{ color: rustyBrown }} />,
    slug: 'website-redesign',
  },
  {
    title: 'Website Development',
    description:
      'We build fast, secure, and scalable websites using the latest technologies — optimized for performance, SEO, and your business goals.',
    icon: <RiMegaphoneLine className="text-4xl" style={{ color: rustyBrown }} />,
    slug: 'website-development',
  },
  {
    title: 'Search Engine Optimization',
    description:
      'Rank higher on Google with our proven SEO strategies. From keyword research to speed and content optimization — we’ll make sure your site gets noticed.',
    icon: <FaChartLine className="text-4xl" style={{ color: rustyBrown }} />,
    slug: 'seo',
  },
  {
    title: 'Mobile Responsive Designs',
    description:
      'Your website will look perfect on every screen size — phones, tablets, or desktops. We design mobile-first to ensure the best experience everywhere.',
    icon: <FaMobileAlt className="text-4xl" style={{ color: rustyBrown }} />,
    slug: 'mobile-responsive-designs',
  },
  {
    title: 'Performance Optimization',
    description:
      'Slow websites kill conversions. We fine-tune your site’s speed, code, and images to ensure blazing-fast load times and top-notch user experience.',
    icon: <MdSpeed className="text-4xl" style={{ color: rustyBrown }} />,
    slug: 'performance-optimization',
  },
  {
    title: 'Google Business Profile Management',
    description:
      'Complete setup and optimization of your business profile with accurate information to boost visibility and engagement.',
    icon: <BsPersonBadge className="text-4xl" style={{ color: rustyBrown }} />,
    slug: 'google-business-profile-management',
  },
  {
    title: 'Profile Updates & Edits',
    description:
      'We keep your profile fresh — updating business hours, services, and contact info quickly and reliably.',
    icon: <MdUpdate className="text-4xl" style={{ color: rustyBrown }} />,
    slug: 'profile-updates-edits',
  },
  {
    title: 'Review Management',
    description:
      'Professional responses to reviews, removal help for false ones, and support restoring genuine feedback.',
    icon: <RiShieldCheckLine className="text-4xl" style={{ color: rustyBrown }} />,
    slug: 'review-management',
  },
  {
    title: 'Profile Verification Assistance',
    description:
      'Get help completing your Google Business Profile verification process with ease and speed.',
    icon: <MdVerifiedUser className="text-4xl" style={{ color: rustyBrown }} />,
    slug: 'profile-verification-assistance',
  },
  {
    title: 'Profile Monitoring & Support',
    description:
      'Ongoing monitoring to ensure your listing stays active and up-to-date with monthly performance insights.',
    icon: <RiMegaphoneLine className="text-4xl" style={{ color: rustyBrown }} />,
    slug: 'profile-monitoring-support',
  },
];

export default function OurServices() {
  const truncate = (text: string, length: number) =>
    text.length > length ? text.slice(0, length) + '...' : text;

  return (
    <section
      className="relative z-10 py-16 px-4 sm:px-10 md:px-20 lg:px-32 text-center bg-cover bg-center"
      style={{
        backgroundColor: beige,
        color: rustyBrown,
        backgroundImage: 'url(/funfact-bg.png)',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12"
        style={{ color: rustyBrown }}
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            className="bg-white/70 border p-8 rounded-none md:rounded-2xl shadow-lg transition duration-300 hover:shadow-amber-700"
            style={{ borderColor: rustyBrown, color: rustyBrown }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm leading-relaxed mb-4">
              {truncate(service.description, 120)}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="text-sm font-semibold underline hover:text-amber-700 transition-colors duration-200 inline-block"
            >
              Read More
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
