"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { FaQuoteLeft } from "react-icons/fa"
import React from "react"

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#002F4B] via-[#002F4B]/95 to-[#002F4B]/90 shadow-2xl backdrop-blur-md border-b-4 border-[#B8860B]/30">
        <link rel="icon" href="/favicon.ico" />
        <div className="container mx-auto flex items-center justify-between py-8 px-8">
         
         {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <Link href="/">
                <Image
                  src="/galeria/logo.png"
                  alt="Golden Vista Insurance Agency"
                  width={50}
                  height={50}
                  className="relative rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 ring-4 ring-[#B8860B]/30 hover:ring-[#B8860B]/50"
                />
              </Link>
            </div>

            <div className="text-center mt-1">
              <h1 className="text-[#FDF6E3] font-black text-2xl tracking-tight bg-gradient-to-r from-[#FDF6E3] to-[#B8860B] bg-clip-text text-transparent drop-shadow-lg">
                Golden Vista Insurance Agency
              </h1>
              <p className="text-[#FDF6E3]/70 font-medium text-xs italic tracking-wide">
                "Secure Today, Shine Tomorrow"
              </p>
              <div className="h-1 w-12 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/50 rounded-full mx-auto mt-1"></div>
            </div>
          </div>
            
         {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            {/* Get Quote Button - Special Design */}
           <Link
              href="/contactus"
              className="relative group px-6 py-3 rounded-2xl bg-gradient-to-r from-[#002F4B] to-[#B8860B] hover:from-[#B8860B] hover:to-[#002F4B] transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:-translate-y-2 border-4 border-[#B8860B]/60 hover:border-[#B8860B] shadow-xl hover:shadow-[#B8860B]/40 animate-pulse hover:animate-none"
            >
              <span className="relative z-10 tracking-wide text-[#FDF6E3] font-black text-lg flex items-center gap-2">
                <FaQuoteLeft className="text-[#FDF6E3] text-lg" />
                GET A QUOTE
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FDF6E3]/20 to-[#FDF6E3]/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            </Link>

            {/* Regular Navigation Buttons - Uniform Size */}
            <Link
              href="/"
              className="relative text-[#FDF6E3] font-bold text-base w-24 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 hover:from-[#B8860B]/90 hover:to-[#B8860B] transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group border-2 border-[#B8860B]/50 hover:border-[#B8860B] shadow-md hover:shadow-[#B8860B]/30"
            >
              <span className="relative z-10 tracking-wide text-[#002F4B] font-black text-sm">HOME</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            </Link>

            <Link
              href="/aboutus"
              className="relative text-[#FDF6E3] font-bold text-base w-24 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 hover:from-[#B8860B]/90 hover:to-[#B8860B] transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group border-2 border-[#B8860B]/50 hover:border-[#B8860B] shadow-md hover:shadow-[#B8860B]/30"
            >
              <span className="relative z-10 tracking-wide text-[#002F4B] font-black text-sm">ABOUT</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            </Link>

            <Link
              href="/services"
              className="relative text-[#FDF6E3] font-bold text-base w-24 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 hover:from-[#B8860B]/90 hover:to-[#B8860B] transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group border-2 border-[#B8860B]/50 hover:border-[#B8860B] shadow-md hover:shadow-[#B8860B]/30"
            >
              <span className="relative z-10 tracking-wide text-[#002F4B] font-black text-sm">SERVICES</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            </Link>

            <Link
              href="/petinsurance"
              className="relative text-[#FDF6E3] font-bold text-base w-32 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 hover:from-[#B8860B]/90 hover:to-[#B8860B] transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group border-2 border-[#B8860B]/50 hover:border-[#B8860B] shadow-md hover:shadow-[#B8860B]/30"
            >
              <span className="relative z-10 tracking-wide text-[#002F4B] font-black text-sm">PET INS.</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            </Link>

            <Link
              href="/contactus"
              className="relative text-[#FDF6E3] font-bold text-base w-28 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 hover:from-[#B8860B]/90 hover:to-[#B8860B] transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group border-2 border-[#B8860B]/50 hover:border-[#B8860B] shadow-md hover:shadow-[#B8860B]/30"
            >
              <span className="relative z-10 tracking-wide text-[#002F4B] font-black text-sm">CONTACT</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 rounded-2xl bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 hover:from-[#B8860B]/90 hover:to-[#B8860B] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-[#B8860B]/50 hover:border-[#B8860B]" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <AiOutlineMenu size={28} className="text-[#002F4B]" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#002F4B]/80 via-[#002F4B]/70 to-[#002F4B]/90 z-50 md:hidden backdrop-blur-lg">
          <div className="fixed right-0 top-0 h-full w-[90%] max-w-sm bg-gradient-to-b from-[#FDF6E3] via-[#FDF6E3]/98 to-[#FDF6E3]/95 shadow-2xl border-l-4 border-[#B8860B]/40 overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b-2 border-[#B8860B]/30 bg-gradient-to-r from-[#FDF6E3] to-[#FDF6E3]/90">
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/60 rounded-full blur opacity-40"></div>
                  <Image
                    src="/galeria/logo.png?height=40&width=40"
                    alt="Golden Vista Insurance Agency Logo"
                    width={40}
                    height={40}
                    className="relative rounded-full ring-2 ring-[#B8860B]/40"
                  />
                </div>
                <span className="text-xl font-black text-[#002F4B] tracking-tight bg-gradient-to-r from-[#002F4B] to-[#B8860B] bg-clip-text text-transparent">
                  MENU
                </span>
              </div>
              <button 
                className="p-2 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 hover:from-[#B8860B]/90 hover:to-[#B8860B] transition-all duration-300 transform hover:scale-110 hover:rotate-90 border-2 border-[#B8860B]/30 hover:border-[#B8860B] shadow-lg" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <AiOutlineClose size={22} className="text-[#002F4B]" />
              </button>
            </div>
        
            {/* Mobile Navigation */}
            <nav className="flex flex-col p-6 gap-3">
              {/* Get Quote Button - First in Mobile, Special Design */}
              <Link
                href="/contactus"
                className="group relative flex items-center justify-center text-[#FDF6E3] font-black text-lg py-4 px-4 rounded-2xl bg-gradient-to-r from-[#002F4B] to-[#B8860B] hover:from-[#B8860B] hover:to-[#002F4B] transition-all duration-500 ease-in-out transform hover:scale-105 border-3 border-[#B8860B]/60 hover:border-[#B8860B] hover:shadow-xl shadow-lg hover:shadow-[#B8860B]/40 animate-pulse hover:animate-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="tracking-wider group-hover:tracking-widest transition-all duration-300 relative z-10 flex items-center gap-2">
                  <FaQuoteLeft className="text-[#FDF6E3] text-lg" />
                  GET A QUOTE
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FDF6E3]/20 to-[#FDF6E3]/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
              </Link>

              {/* Regular Navigation Items - Made Smaller */}
              <Link
                href="/"
                className="flex items-center text-[#002F4B] font-black text-lg py-3 px-4 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 hover:from-[#B8860B] hover:to-[#B8860B]/90 hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:translate-x-2 hover:scale-105 border-l-4 border-[#B8860B]/30 hover:border-[#B8860B] hover:shadow-xl group shadow-md hover:shadow-[#B8860B]/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="tracking-wide group-hover:tracking-wider transition-all duration-300 relative z-10">HOME</span>
              </Link>

              <Link
                href="/aboutus"
                className="flex items-center text-[#002F4B] font-black text-lg py-3 px-4 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 hover:from-[#B8860B] hover:to-[#B8860B]/90 hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:translate-x-2 hover:scale-105 border-l-4 border-[#B8860B]/30 hover:border-[#B8860B] hover:shadow-xl group shadow-md hover:shadow-[#B8860B]/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="tracking-wide group-hover:tracking-wider transition-all duration-300 relative z-10">ABOUT US</span>
              </Link>

              <Link
                href="/services"
                className="flex items-center text-[#002F4B] font-black text-lg py-3 px-4 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 hover:from-[#B8860B] hover:to-[#B8860B]/90 hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:translate-x-2 hover:scale-105 border-l-4 border-[#B8860B]/30 hover:border-[#B8860B] hover:shadow-xl group shadow-md hover:shadow-[#B8860B]/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="tracking-wide group-hover:tracking-wider transition-all duration-300 relative z-10">SERVICES</span>
              </Link>

              <Link
                href="/petinsurance"
                className="flex items-center text-[#002F4B] font-black text-lg py-3 px-4 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 hover:from-[#B8860B] hover:to-[#B8860B]/90 hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:translate-x-2 hover:scale-105 border-l-4 border-[#B8860B]/30 hover:border-[#B8860B] hover:shadow-xl group shadow-md hover:shadow-[#B8860B]/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="tracking-wide group-hover:tracking-wider transition-all duration-300 relative z-10">PET INSURANCE</span>
              </Link>

              <Link
                href="/contactus"
                className="flex items-center text-[#002F4B] font-black text-lg py-3 px-4 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 hover:from-[#B8860B] hover:to-[#B8860B]/90 hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:translate-x-2 hover:scale-105 border-l-4 border-[#B8860B]/30 hover:border-[#B8860B] hover:shadow-xl group shadow-md hover:shadow-[#B8860B]/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="tracking-wide group-hover:tracking-wider transition-all duration-300 relative z-10">CONTACT US</span>
              </Link>
            </nav>

            {/* Mobile Menu Footer - Adjusted positioning */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-center text-[#002F4B]/70 text-sm font-bold tracking-wide border-t-2 border-[#B8860B]/30 pt-4">
                © 2025 Golden Vista Insurance Agency. All Rights Reserved
                <div className="h-1 w-16 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/50 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header