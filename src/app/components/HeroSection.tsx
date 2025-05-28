'use client'

import { useEffect, useState } from 'react'

const slides = [
  {
    title: 'Build Bold. Build Better.',
    description:
      'We design and develop blazing-fast websites for agencies, startups, and enterprises. Turn your vision into code with our expert web development team.',
  },
  {
    title: 'Web Development That Performs.',
    description:
      'From landing pages to complex platforms, we create high-performance, scalable, and responsive websites tailored to your goals.',
  },
  {
    title: 'SEO That Drives Real Results.',
    description:
      'We don’t just build beautiful sites — we optimize them for search. More visibility. More traffic. More business.',
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-black text-white min-h-[80vh] flex flex-col justify-center items-center overflow-hidden px-4 md:px-16">
      {/* Moving background image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-100 pointer-events-none hero-bg" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl transition-all duration-700 ease-in-out">
        <h1
          key={slides[currentSlide].title}
          className="text-4xl md:text-6xl font-bold leading-tight animate-fadeIn"
        >
          {slides[currentSlide].title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 animate-fadeIn delay-100">
          {slides[currentSlide].description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-400 transition font-semibold">
            Get a Free Quote
          </button>
          <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded hover:bg-yellow-500 hover:text-black transition font-semibold">
            View Our Work
          </button>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes slideinfinite {
          from {
            background-position: 1920px 0;
          }
          to {
            background-position: 0 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .hero-bg {
          background-image: url('/shape-02.png');
          background-repeat: repeat-x;
          animation: slideinfinite 40s linear infinite;
          height: 100%;
        }

        /* Desktop view */
        @media (min-width: 768px) {
          .hero-bg {
            background-position: center top;
            background-size: contain;
          }
        }

        /* Mobile view */
        @media (max-width: 767px) {
          .hero-bg {
            background-position: center center;
            background-size: auto 100%;
          }
        }
      `}</style>
    </section>
  )
}
