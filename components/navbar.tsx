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
    <header className="site-header fixed top-0 left-0 right-0 z-100 bg-[#FDFEFF] border-b border-[rgba(18,52,91,0.06)] shadow-[0_4px_12px_rgba(0,0,0,0.04)] px-5 md:px-[5%]">
      <div className="container max-w-[1280px] mx-auto">
        <div className="header-inner flex items-center justify-between gap-6 py-3.5 min-h-[70px]">
          {/* Logo */}
          <a href="#top" className="brand flex items-center gap-2.5 no-underline text-[#1c76e4] font-bold tracking-tight">
            <span className="brand-text text-lg md:text-lg">AAA ortho clinic</span>
          </a>

          {/* Desktop Nav */}
          <nav className="main-nav hidden md:block" aria-label="Primary">
            <ul className="list-none flex gap-6 m-0 p-0 text-[15px]">
              <li><a href="#top" className="no-underline text-[#1c76e4] px-1.5 py-2 font-semibold">Home</a></li>
              <li><a href="#about" className="no-underline text-[#666] px-1.5 py-2 font-medium hover:text-[#0a65d9] transition-colors">About us</a></li>
              <li><a href="#treatments" className="no-underline text-[#666] px-1.5 py-2 font-medium hover:text-[#0a65d9] transition-colors">Treatments</a></li>
              <li><a href="#testimonials" className="no-underline text-[#666] px-1.5 py-2 font-medium hover:text-[#0a65d9] transition-colors">Testimonials</a></li>
              <li><a href="#why-us" className="no-underline text-[#666] px-1.5 py-2 font-medium hover:text-[#0a65d9] transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="no-underline text-[#666] px-1.5 py-2 font-medium hover:text-[#0a65d9] transition-colors">FAQ</a></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header-cta flex items-center gap-3">
            <a href="tel:8220776119" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold no-underline bg-[linear-gradient(180deg,#1c76e4,#0a65d9)] text-white border border-transparent shadow-[0_8px_22px_rgba(10,101,217,0.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(10,101,217,0.35)] transition-all">
            Book Appointment
            </a>
            {/* Hamburger */}
            <button 
              className="hamburger md:hidden border-0 p-2 bg-transparent cursor-pointer text-[#666] hover:text-[#0a65d9] transition-colors" 
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
        className={`mobile-menu fixed inset-0 bg-[#FDFEFF] backdrop-blur-sm z-120 transition-transform duration-350 ease-[cubic-bezier(0.2,0.9,0.2,1)] flex flex-col p-7 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <button 
          className="mobile-close self-end bg-transparent border-0 p-1.5 cursor-pointer text-[#666] hover:text-[#0a65d9] transition-colors" 
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <ul className="list-none p-2.5 my-4.5 flex flex-col gap-3">
          <li><a href="#top" className="mobile-link font-bold no-underline text-[#0a65d9] text-lg hover:text-[#1c76e4] transition-colors" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" className="mobile-link font-bold no-underline text-[#0a65d9] text-lg hover:text-[#1c76e4] transition-colors" onClick={handleLinkClick}>About Us</a></li>
          <li><a href="#treatments" className="mobile-link font-bold no-underline text-[#0a65d9] text-lg hover:text-[#1c76e4] transition-colors" onClick={handleLinkClick}>Treatments</a></li>
          <li><a href="#testimonials" className="mobile-link font-bold no-underline text-[#0a65d9] text-lg hover:text-[#1c76e4] transition-colors" onClick={handleLinkClick}>Testimonials</a></li>
          <li><a href="#why-us" className="mobile-link font-bold no-underline text-[#0a65d9] text-lg hover:text-[#1c76e4] transition-colors" onClick={handleLinkClick}>Why Choose Us</a></li>
          <li><a href="#faq" className="mobile-link font-bold no-underline text-[#0a65d9] text-lg hover:text-[#1c76e4] transition-colors" onClick={handleLinkClick}>FAQ</a></li>
        </ul>
        <div className="mobile-contact mt-auto">
          <a href="tel:+918220776119" className="btn inline-flex items-center gap-2 px-[18px] py-2.5 rounded-xl font-semibold no-underline bg-[linear-gradient(180deg,#1c76e4,#0a65d9)] text-white shadow-[0_8px_22px_rgba(10,101,217,0.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(10,101,217,0.35)] transition-all">
            <Phone size={18} />
            Get Free Relief Today
          </a>
        </div>
      </div>
    </header>
  )
}
