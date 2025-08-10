'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const rustyBrown = '#8B4513';
const beige = '#f5f0e6';

export default function GetQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Hook this into MERN backend API
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
        Get Your Free <span className="text-amber-700">Web Development Quote</span>
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white/90 border border-amber-700/50 backdrop-blur-sm p-10 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="text-2xl font-bold mb-6 text-amber-700">Tell Us About Your Project</h3>

            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">
                Full Name<span className="text-red-600"> *</span>
              </label>
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
            <div>
              <label className="block mb-2 font-medium">
                Email Address<span className="text-red-600"> *</span>
              </label>
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
            <div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                pattern="^[0-9+\-()\s]{7,15}$"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-700 outline-none"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block mb-2 font-medium">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-700 outline-none"
              >
                <option value="">Select...</option>
                <option>Website</option>
                <option>Web App</option>
                <option>E-commerce</option>
                <option>Custom API</option>
                <option>Other</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block mb-2 font-medium">Budget Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-700 outline-none"
              >
                <option value="">Select...</option>
                <option>&lt; $1k</option>
                <option>$1k–$5k</option>
                <option>$5k–$10k</option>
                <option>&gt; $10k</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label className="block mb-2 font-medium">Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-700 outline-none"
              >
                <option value="">Select...</option>
                <option>ASAP</option>
                <option>1–3 months</option>
                <option>3–6 months</option>
                <option>Flexible</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 font-medium">
                Project Description<span className="text-red-600"> *</span>
              </label>
              <textarea
                name="description"
                rows={5}
                required
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-amber-700 outline-none"
                placeholder="Tell us about your goals, features, or inspiration..."
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block mb-2 font-medium">Attach Files (optional)</label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-amber-700 outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Get My Quote
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 mt-2">
              We’ll never share your information. 100+ Projects Delivered | MERN Stack Specialists
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
