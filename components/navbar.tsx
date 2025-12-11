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
    <header className="site-header fixed top-0 left-0 right-0 z-100 bg-[#FDFEFF] border-b border-[rgba(18,52,91,0.06)] shadow-[0_4px_12px_rgba(0,0,0,0.04)] px-5 sm:px-6 md:px-[5%]">
      <div className="container max-w-[1280px] mx-auto w-full">
        <div className="header-inner flex items-center justify-between gap-4 sm:gap-6 py-3.5 min-h-[70px] w-full">
          {/* Logo */}
          <a href="#top" className="brand flex items-center gap-2.5 no-underline text-[#1c76e4] font-bold tracking-tight shrink-0">
            <span className="brand-text text-base sm:text-lg md:text-lg whitespace-nowrap">AAA ortho clinic</span>
          </a>

          {/* Desktop Nav */}
          <nav className="main-nav hidden md:block flex-1" aria-label="Primary">
            <ul className="list-none flex gap-4 lg:gap-6 m-0 p-0 text-[15px] justify-center">
              <li><a href="#top" className="no-underline text-[#1c76e4] px-1.5 py-2 font-semibold whitespace-nowrap">Home</a></li>
              <li><a href="#about" className="no-underline text-[#666] px-1.5 py-2 font-medium hover:text-[#0a65d9] transition-colors whitespace-nowrap">About us</a></li>
              <li><a href="#treatments" className="no-underline text-[#666] px-1.5 py-2 font-medium hover:text-[#0a65d9] transition-colors whitespace-nowrap">Treatments</a></li>
              <li><a href="#testimonials" className="no-underline text-[#666] px-1.5 py-2 font-medium hover:text-[#0a65d9] transition-colors whitespace-nowrap">Testimonials</a></li>
              <li><a href="#why-us" className="no-underline text-[#666] px-1.5 py-2 font-medium hover:text-[#0a65d9] transition-colors whitespace-nowrap">Why Choose Us</a></li>
              <li><a href="#faq" className="no-underline text-[#666] px-1.5 py-2 font-medium hover:text-[#0a65d9] transition-colors whitespace-nowrap">FAQ</a></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header-cta flex items-center gap-2 sm:gap-3 shrink-0">
            <a href="tel:8220776119" className="hidden md:inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-xl font-semibold no-underline bg-[linear-gradient(180deg,#1c76e4,#0a65d9)] text-white border border-transparent shadow-[0_8px_22px_rgba(10,101,217,0.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(10,101,217,0.35)] transition-all whitespace-nowrap text-sm lg:text-base">
              Book Appointment
            </a>
            {/* Hamburger */}
            <button 
              className="hamburger md:hidden border-0 p-2 bg-transparent cursor-pointer text-[#666] hover:text-[#0a65d9] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -mr-1" 
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
        className={`mobile-menu fixed inset-0 bg-[#FDFEFF] backdrop-blur-sm z-120 transition-transform duration-350 ease-[cubic-bezier(0.2,0.9,0.2,1)] flex flex-col px-6 py-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <button 
          className="mobile-close self-end bg-transparent border-0 p-3 cursor-pointer text-[#666] hover:text-[#0a65d9] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" 
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={26} />
        </button>
        <ul className="list-none p-0 my-8 flex flex-col gap-1">
          <li><a href="#top" className="mobile-link block font-semibold no-underline text-[#0a65d9] text-lg py-4 px-2 hover:text-[#1c76e4] hover:bg-[#f0f7ff] rounded-xl transition-all active:bg-[#e6f2ff] min-h-[52px] flex items-center" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" className="mobile-link block font-semibold no-underline text-[#0a65d9] text-lg py-4 px-2 hover:text-[#1c76e4] hover:bg-[#f0f7ff] rounded-xl transition-all active:bg-[#e6f2ff] min-h-[52px] flex items-center" onClick={handleLinkClick}>About Us</a></li>
          <li><a href="#treatments" className="mobile-link block font-semibold no-underline text-[#0a65d9] text-lg py-4 px-2 hover:text-[#1c76e4] hover:bg-[#f0f7ff] rounded-xl transition-all active:bg-[#e6f2ff] min-h-[52px] flex items-center" onClick={handleLinkClick}>Treatments</a></li>
          <li><a href="#testimonials" className="mobile-link block font-semibold no-underline text-[#0a65d9] text-lg py-4 px-2 hover:text-[#1c76e4] hover:bg-[#f0f7ff] rounded-xl transition-all active:bg-[#e6f2ff] min-h-[52px] flex items-center" onClick={handleLinkClick}>Testimonials</a></li>
          <li><a href="#why-us" className="mobile-link block font-semibold no-underline text-[#0a65d9] text-lg py-4 px-2 hover:text-[#1c76e4] hover:bg-[#f0f7ff] rounded-xl transition-all active:bg-[#e6f2ff] min-h-[52px] flex items-center" onClick={handleLinkClick}>Why Choose Us</a></li>
          <li><a href="#faq" className="mobile-link block font-semibold no-underline text-[#0a65d9] text-lg py-4 px-2 hover:text-[#1c76e4] hover:bg-[#f0f7ff] rounded-xl transition-all active:bg-[#e6f2ff] min-h-[52px] flex items-center" onClick={handleLinkClick}>FAQ</a></li>
        </ul>
        <div className="mobile-contact mt-auto pt-6 border-t border-[#e0e8f2]">
          <a href="tel:+918220776119" className="btn w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold no-underline bg-[linear-gradient(180deg,#1c76e4,#0a65d9)] text-white shadow-[0_8px_22px_rgba(10,101,217,0.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(10,101,217,0.35)] transition-all active:scale-[0.98] min-h-[52px] text-base">
            <Phone size={20} />
            Get Free Relief Today
          </a>
        </div>
      </div>
    </header>
  )
}
