'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-[#f5f0e6] text-[#8B4513] fixed w-full z-50 shadow-md">
      <div className="flex items-center px-4 py-3 md:px-8">
        <div className="flex items-center md:flex-1">
          <Image src="/logo.png" alt="Logo" width={200} height={100} />
        </div>

        {/* 🖥 Desktop Navigation */}
        <nav className="hidden md:flex gap-6 justify-center flex-1">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors duration-300 font-medium text-[#8B4513] hover:text-[#a0522d]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 📱 Mobile Menu Toggle */}
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="border border-[#8B4513] p-2 rounded transition-colors duration-300 hover:border-[#a0522d] hover:text-[#a0522d]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} color="#8B4513" /> : <Menu size={24} color="#8B4513" />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#f5f0e6] text-[#8B4513] z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-4/5 md:hidden`}
      >
        <div className="p-6 flex flex-col gap-6 pt-10">
          <div className="mb-4">
            <Image src="/logo.png" alt="Logo" width={160} height={80} />
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="transition-colors duration-300 text-lg text-[#8B4513] hover:text-[#a0522d]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* 📱 Backdrop for mobile menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 right-0 w-1/5 h-full bg-black/30 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </header>
  )
}
