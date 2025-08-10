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
        {/* Logo */}
        <div className="flex items-center md:flex-1 pl-20">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Navigation Menu */}
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

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 right-0 w-1/5 h-full bg-black/30 backdrop-blur-sm z-30 md:hidden"
        />
      )}

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/919390809036"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 left-4 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.88 7.88 0 0 0 8.003.002C3.583.002.003 3.582.003 8a7.954 7.954 0 0 0 1.11 4.093L.003 16l4.093-1.107A7.956 7.956 0 0 0 8.003 16c4.42 0 7.998-3.58 7.998-8a7.88 7.88 0 0 0-2.4-5.674zM8.003 14.5a6.46 6.46 0 0 1-3.322-.897l-.237-.142-2.427.655.646-2.361-.155-.243a6.463 6.463 0 0 1-.994-3.38c0-3.583 2.915-6.5 6.489-6.5a6.456 6.456 0 0 1 4.602 1.905 6.447 6.447 0 0 1 1.898 4.6c0 3.583-2.915 6.5-6.5 6.5zm3.688-4.987c-.203-.101-1.2-.593-1.386-.662-.186-.07-.321-.102-.457.102-.135.203-.524.662-.642.797-.118.135-.237.152-.44.05-.203-.102-.857-.316-1.633-1.01-.603-.537-1.009-1.2-1.127-1.403-.118-.203-.013-.313.089-.415.092-.092.203-.237.305-.355.101-.119.135-.203.203-.338.067-.135.034-.254-.017-.355-.051-.101-.457-1.102-.627-1.508-.165-.396-.332-.343-.457-.349h-.39c-.135 0-.354.05-.54.254-.186.203-.708.692-.708 1.687s.726 1.957.827 2.092c.101.135 1.43 2.186 3.464 3.066.484.209.861.334 1.156.427.486.155.929.133 1.28.08.39-.058 1.2-.491 1.37-.964.169-.474.169-.88.118-.964-.05-.084-.186-.135-.39-.237z" />
        </svg>
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </Link>

      {/* Call Us Floating Button */}
      <Link
        href="tel:+919390809036"
        className="fixed bottom-10 right-4 z-50 bg-[#8B4513] hover:bg-[#a0522d] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-telephone-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 7.548 7.548c.601.211 1.286.033 1.77-.45l1.035-1.034a.678.678 0 0 0-.063-1.015l-2.347-1.87a.678.678 0 0 0-.58-.122l-1.514.378a12.042 12.042 0 0 1-4.486-4.487l.378-1.514a.678.678 0 0 0-.122-.58L3.654 1.328z" />
        </svg>
        <span className="hidden sm:inline">Call Us</span>
      </Link>
    </header>
  )
}
