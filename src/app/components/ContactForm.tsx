'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FAQ from '@/app/components/FAQ';

const rustyBrown = '#8B4513';
const beige = '#f5f0e6';

export default function ContactWithFAQ() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      className="py-20 px-6 md:px-16 bg-cover bg-center text-neutral-800"
      style={{
        backgroundColor: beige,
        backgroundImage: 'url(/funfact-bg.png)',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        style={{ color: rustyBrown }}
      >
        Get in Touch with <span className="text-amber-700">BizoraDev</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Contact Form */}
       <div className="bg-white/90 border border-amber-700/50 backdrop-blur-sm p-10 rounded-2xl shadow-xl flex flex-col justify-between min-h-[550px]">
  <form onSubmit={handleSubmit}>
    <h3 className="text-2xl font-bold mb-6 text-amber-700">Contact Us</h3>

    {/* Name */}
    <div className="mb-5">
      <label className="block mb-2 font-medium">Name<span className="text-red-600"> *</span></label>
      <input
        type="text"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-700 outline-none"
      />
    </div>

    {/* Email */}
    <div className="mb-5">
      <label className="block mb-2 font-medium">Email<span className="text-red-600"> *</span></label>
      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-700 outline-none"
      />
    </div>

    {/* Phone */}
    <div className="mb-5">
      <label className="block mb-2 font-medium">Phone Number<span className="text-red-600"> *</span></label>
      <input
        type="tel"
        name="phone"
        required
        pattern="^[0-9+\-()\s]{7,15}$"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-700 outline-none"
       
      />
    </div>

    {/* Message */}
    <div className="mb-6">
      <label className="block mb-2 font-medium">Message<span className="text-red-600"> *</span></label>
      <textarea
        name="message"
        rows={5}
        required
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-amber-700 outline-none"
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200"
    >
      Send Message
    </button>
  </form>
</div>


        {/* FAQ Section */}
        <FAQ />
      </div>
    </section>
  );
}
