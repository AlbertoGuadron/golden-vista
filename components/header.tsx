"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
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
                  width={60}
                  height={60}
                  className="relative rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 ring-4 ring-[#B8860B]/30 hover:ring-[#B8860B]/50"
                />
              </Link>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-[#FDF6E3] font-black text-3xl tracking-tight bg-gradient-to-r from-[#FDF6E3] to-[#B8860B] bg-clip-text text-transparent drop-shadow-lg">
                Golden Vista Insurance Agency
              </h1>
              <p className="text-[#FDF6E3]/70 font-medium text-sm italic tracking-wide">
                “Secure Today, Shine Tomorrow”
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/50 rounded-full mt-1 mb-1"></div>
            </div>
          </div>
         {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            <Link
              href="/"
              className="relative text-[#FDF6E3] font-bold text-base px-5 py-2 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 hover:from-[#B8860B]/90 hover:to-[#B8860B] transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group border-2 border-[#B8860B]/50 hover:border-[#B8860B] shadow-md hover:shadow-[#B8860B]/30"
            >
              <span className="relative z-10 tracking-wide text-[#002F4B] font-black">HOME</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            </Link>

            <Link
              href="/aboutus"
              className="relative text-[#FDF6E3] font-bold text-base px-5 py-2 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 hover:from-[#B8860B]/90 hover:to-[#B8860B] transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group border-2 border-[#B8860B]/50 hover:border-[#B8860B] shadow-md hover:shadow-[#B8860B]/30"
            >
              <span className="relative z-10 tracking-wide text-[#002F4B] font-black">ABOUT US</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            </Link>

            <Link
              href="/services"
              className="relative text-[#FDF6E3] font-bold text-base px-5 py-2 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 hover:from-[#B8860B]/90 hover:to-[#B8860B] transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group border-2 border-[#B8860B]/50 hover:border-[#B8860B] shadow-md hover:shadow-[#B8860B]/30"
            >
              <span className="relative z-10 tracking-wide text-[#002F4B] font-black">OUR SERVICES</span>
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
          <div className="fixed right-0 top-0 h-full w-[90%] max-w-sm bg-gradient-to-b from-[#FDF6E3] via-[#FDF6E3]/98 to-[#FDF6E3]/95 shadow-2xl border-l-4 border-[#B8860B]/40">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-8 border-b-2 border-[#B8860B]/30 bg-gradient-to-r from-[#FDF6E3] to-[#FDF6E3]/90">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/60 rounded-full blur opacity-40"></div>
                  <Image
                    src="/galeria/logo.png?height=40&width=40"
                    alt="Golden Vista Insurance Agency Logo"
                    width={45}
                    height={45}
                    className="relative rounded-full ring-2 ring-[#B8860B]/40"
                  />
                </div>
                <span className="text-2xl font-black text-[#002F4B] tracking-tight bg-gradient-to-r from-[#002F4B] to-[#B8860B] bg-clip-text text-transparent">
                  MENU
                </span>
              </div>
              <button 
                className="p-3 rounded-2xl bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 hover:from-[#B8860B]/90 hover:to-[#B8860B] transition-all duration-300 transform hover:scale-110 hover:rotate-90 border-2 border-[#B8860B]/30 hover:border-[#B8860B] shadow-lg" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <AiOutlineClose size={26} className="text-[#002F4B]" />
              </button>
            </div>
        
            {/* Mobile Navigation */}
            <nav className="flex flex-col p-8 gap-4">
              <Link
                href="/"
                className="flex items-center text-[#002F4B] font-black text-2xl py-6 px-6 rounded-2xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 hover:from-[#B8860B] hover:to-[#B8860B]/90 hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:translate-x-4 hover:scale-105 border-l-8 border-[#B8860B]/30 hover:border-[#B8860B] hover:shadow-2xl group shadow-lg hover:shadow-[#B8860B]/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="tracking-wider group-hover:tracking-widest transition-all duration-300 relative z-10">HOME</span>
              </Link>
              <Link
                href="/aboutus"
                className="flex items-center text-[#002F4B] font-black text-2xl py-6 px-6 rounded-2xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 hover:from-[#B8860B] hover:to-[#B8860B]/90 hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:translate-x-4 hover:scale-105 border-l-8 border-[#B8860B]/30 hover:border-[#B8860B] hover:shadow-2xl group shadow-lg hover:shadow-[#B8860B]/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="tracking-wider group-hover:tracking-widest transition-all duration-300 relative z-10">ABOUT US</span>
              </Link>
               <Link
                href="/serices"
                className="flex items-center text-[#002F4B] font-black text-2xl py-6 px-6 rounded-2xl bg-gradient-to-r from-[#B8860B]/20 to-[#B8860B]/10 hover:from-[#B8860B] hover:to-[#B8860B]/90 hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:translate-x-4 hover:scale-105 border-l-8 border-[#B8860B]/30 hover:border-[#B8860B] hover:shadow-2xl group shadow-lg hover:shadow-[#B8860B]/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="tracking-wider group-hover:tracking-widest transition-all duration-300 relative z-10">OUR SERVICES</span>
              </Link>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-center text-[#002F4B]/70 text-lg font-bold tracking-wide border-t-2 border-[#B8860B]/30 pt-6">
                © Copyright 2025 By Golden Vista Insurance Agency. All Rights Reserved
                <div className="h-1 w-20 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/50 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header