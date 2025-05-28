'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
 <header className="bg-black text-white fixed w-full z-50 header-animated-border">




      <div className="flex items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center md:flex-1">
          <Image src="/logo.png" alt="Logo" width={200} height={100} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 justify-center flex-1">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="border border-white p-2 rounded transition-colors duration-300 hover:border-yellow-500 hover:text-yellow-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-4/5 md:hidden`}
      >
        <div className="p-6 flex flex-col gap-6 pt-10">
          {/* Mobile Logo */}
          <div className="mb-4">
            <Image src="/logo.png" alt="Logo" width={160} height={80} />
          </div>

          {/* Mobile Nav Links */}
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-500 transition-colors duration-300 text-lg"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for the remaining 20% when mobile menu is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 right-0 w-1/5 h-full bg-black/30 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </header>
  )
}
