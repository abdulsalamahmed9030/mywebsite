'use client';

import { FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import { MdDesignServices, MdSpeed } from 'react-icons/md';
import { RiMegaphoneLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Website Design',
    description:
      'We create eye-catching, user-friendly designs that captivate your audience and reflect your brand’s identity. From UI/UX to complete branding — we’ve got you covered.',
    icon: <MdDesignServices className="text-4xl text-sky-400" />,
  },
  {
    title: 'Website Redesign',
    description:
      'Give your outdated website a modern makeover! We revamp your site’s look, speed, and structure to better engage visitors and boost conversions.',
    icon: <FaLaptopCode className="text-4xl text-sky-400" />,
  },
  {
    title: 'Website Development',
    description:
      'We build fast, secure, and scalable websites using the latest technologies — optimized for performance, SEO, and your business goals.',
    icon: <RiMegaphoneLine className="text-4xl text-sky-400" />,
  },
  {
    title: 'Search Engine Optimization',
    description:
      'Rank higher on Google with our proven SEO strategies. From keyword research to speed and content optimization — we’ll make sure your site gets noticed.',
    icon: <FaChartLine className="text-4xl text-sky-400" />,
  },
  {
    title: 'Mobile Responsive Designs',
    description:
      'Your website will look perfect on every screen size — phones, tablets, or desktops. We design mobile-first to ensure the best experience everywhere.',
    icon: <FaMobileAlt className="text-4xl text-sky-400" />,
  },
  {
    title: 'Performance Optimization',
    description:
      'Slow websites kill conversions. We fine-tune your site’s speed, code, and images to ensure blazing-fast load times and top-notch user experience.',
    icon: <MdSpeed className="text-4xl text-sky-400" />,
  },
];

export default function OurServices() {
  return (
    <section
      className="relative z-10 py-16 px-4 sm:px-10 md:px-20 lg:px-32 text-center bg-[#0f172a] text-[#f1f5f9] bg-cover bg-center"
      style={{ backgroundImage: 'url(/funfact-bg.png)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-sky-400 mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-sky-500 p-8 shadow-lg hover:shadow-sky-400/30 transition duration-300 rounded-none md:rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-sky-400 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
