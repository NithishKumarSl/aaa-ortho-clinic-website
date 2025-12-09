"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Close menu on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-[100] bg-[rgba(255,255,255,0.95)] backdrop-blur-[8px] border-b border-[rgba(20,60,120,0.06)] shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-5 md:px-[5%]">
      <div className="container max-w-[1280px] mx-auto">
        <div className="header-inner flex items-center justify-between gap-4 py-3.5 min-h-[70px]">
          {/* Logo */}
          <a href="#top" className="brand flex items-center gap-2.5 no-underline text-[#0f5fcc] font-bold">
            <span className="brand-text lowercase text-lg md:text-base">AAA Ortho Clinic</span>
          </a>

          {/* Desktop Nav */}
          <nav className="main-nav hidden md:block" aria-label="Primary">
            <ul className="list-none flex gap-5 m-0 p-0">
              <li><a href="#top" className="no-underline text-[#5f7f9f] px-1.5 py-2 rounded-lg font-semibold transition-all hover:text-[#0f5fcc]">Home</a></li>
              <li><a href="#about" className="no-underline text-[#5f7f9f] px-1.5 py-2 rounded-lg font-semibold transition-all hover:text-[#0f5fcc]">About Us</a></li>
              <li><a href="#treatments" className="no-underline text-[#5f7f9f] px-1.5 py-2 rounded-lg font-semibold transition-all hover:text-[#0f5fcc]">Treatments</a></li>
              <li><a href="#testimonials" className="no-underline text-[#5f7f9f] px-1.5 py-2 rounded-lg font-semibold transition-all hover:text-[#0f5fcc]">Testimonials</a></li>
              <li><a href="#why-us" className="no-underline text-[#5f7f9f] px-1.5 py-2 rounded-lg font-semibold transition-all hover:text-[#0f5fcc]">Why Choose Us</a></li>
              <li><a href="#faq" className="no-underline text-[#5f7f9f] px-1.5 py-2 rounded-lg font-semibold transition-all hover:text-[#0f5fcc]">FAQ</a></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header-cta flex items-center gap-3">
            <a href="tel:8220776119" className="btn btn-primary hidden md:inline-flex items-center gap-2 px-[18px] py-2.5 rounded-xl font-bold no-underline bg-[#1c76e4] text-white border-0 shadow-[0_10px_30px_rgba(28,118,228,0.08)] hover:bg-[#0f5fcc] transition-colors">
              Get Free Relief Today
            </a>
            {/* Hamburger */}
            <button 
              className="hamburger md:hidden border-0 p-2 bg-transparent cursor-pointer" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu fixed inset-0 bg-gradient-to-b from-[rgba(18,52,91,0.03)] to-[rgba(255,255,255,0.9)] backdrop-blur-[8px] z-[120] transition-transform duration-350 ease-[cubic-bezier(0.2,0.9,0.2,1)] flex flex-col p-7 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <button 
          className="mobile-close self-end bg-transparent border-0 p-1.5 cursor-pointer" 
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <ul className="list-none p-2.5 my-4.5 flex flex-col gap-3">
          <li><a href="#top" className="mobile-link font-bold no-underline text-[#0f5fcc] text-lg" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" className="mobile-link font-bold no-underline text-[#0f5fcc] text-lg" onClick={handleLinkClick}>About Us</a></li>
          <li><a href="#treatments" className="mobile-link font-bold no-underline text-[#0f5fcc] text-lg" onClick={handleLinkClick}>Treatments</a></li>
          <li><a href="#testimonials" className="mobile-link font-bold no-underline text-[#0f5fcc] text-lg" onClick={handleLinkClick}>Testimonials</a></li>
          <li><a href="#why-us" className="mobile-link font-bold no-underline text-[#0f5fcc] text-lg" onClick={handleLinkClick}>Why Choose Us</a></li>
          <li><a href="#faq" className="mobile-link font-bold no-underline text-[#0f5fcc] text-lg" onClick={handleLinkClick}>FAQ</a></li>
        </ul>
        <div className="mobile-contact mt-auto">
          <a href="tel:+918220776119" className="btn inline-flex items-center gap-2 px-[18px] py-2.5 rounded-xl font-bold no-underline bg-[#1c76e4] text-white hover:bg-[#0f5fcc] transition-colors">
            <Phone size={18} />
            Get Free Relief Today
          </a>
        </div>
      </div>
    </header>
  )
}
