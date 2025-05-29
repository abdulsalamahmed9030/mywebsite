'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-[#0f172a] text-white fixed w-full z-50 shadow-md">
      <div className="flex items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center md:flex-1">
          <Image src="/logo.png" alt="Logo" width={200} height={100} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 justify-center flex-1">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, i) => {
            const colors = ['text-sky-400', 'text-cyan-400', 'text-purple-400', 'text-sky-400', 'text-cyan-400']
            const hover = ['hover:text-sky-300', 'hover:text-cyan-300', 'hover:text-purple-300', 'hover:text-sky-300', 'hover:text-cyan-300']
            return (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-300 font-medium ${colors[i]} ${hover[i]}`}
              >
                {item}
              </Link>
            )
          })}
        </nav>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="border border-white p-2 rounded transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#0f172a] text-white z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-4/5 md:hidden`}
      >
        <div className="p-6 flex flex-col gap-6 pt-10">
          <div className="mb-4">
            <Image src="/logo.png" alt="Logo" width={160} height={80} />
          </div>

          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, i) => {
            const mobileColors = ['text-sky-400', 'text-cyan-400', 'text-purple-400', 'text-sky-400', 'text-cyan-400']
            return (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`transition-colors duration-300 text-lg ${mobileColors[i]} hover:opacity-80`}
              >
                {item}
              </Link>
            )
          })}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 right-0 w-1/5 h-full bg-black/30 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </header>
  )
}
