'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SCHOOL_CONFIG, WHATSAPP_MESSAGE } from '@/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-gray-100">
      <nav className="container-custom px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 min-w-0 group" onClick={closeMenu}>
            <div className="bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white p-2 sm:p-2.5 rounded-xl font-bold text-lg sm:text-xl flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
              BF
            </div>
            <div className="hidden sm:block min-w-0">
              <div className="font-bold text-primary-blue text-base sm:text-lg truncate group-hover:text-primary-blue-dark transition-colors">
                {SCHOOL_CONFIG.name}
              </div>
              <div className="text-xs text-gray-600 truncate">{SCHOOL_CONFIG.location}</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-blue font-medium transition text-sm lg:text-base">
              Home
            </Link>
            <Link href="/admissions" className="text-gray-700 hover:text-primary-blue font-medium transition text-sm lg:text-base">
              Admissions
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-primary-blue font-medium transition text-sm lg:text-base">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-blue font-medium transition text-sm lg:text-base">
              Contact
            </Link>
            <a
              href={`https://wa.me/${SCHOOL_CONFIG.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs sm:text-sm py-2 px-3 lg:px-4 whitespace-nowrap"
            >
              Chat on WhatsApp
            </a>
          </div>
          
          {/* Mobile menu button and hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href={`https://wa.me/${SCHOOL_CONFIG.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs sm:text-sm py-2 px-3 whitespace-nowrap"
            >
              WhatsApp
            </a>
            
            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-blue transition"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3 pt-2 pb-4 border-t border-gray-200">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-gray-700 hover:text-primary-blue font-medium transition py-2 px-2 rounded-lg hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/admissions"
              onClick={closeMenu}
              className="text-gray-700 hover:text-primary-blue font-medium transition py-2 px-2 rounded-lg hover:bg-gray-50"
            >
              Admissions
            </Link>
            <Link
              href="/gallery"
              onClick={closeMenu}
              className="text-gray-700 hover:text-primary-blue font-medium transition py-2 px-2 rounded-lg hover:bg-gray-50"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-gray-700 hover:text-primary-blue font-medium transition py-2 px-2 rounded-lg hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

