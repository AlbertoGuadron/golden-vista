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
      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#FDF6E3] via-[#FDF6E3] to-[#FDF6E3]/95 shadow-2xl backdrop-blur-md border-b-4 border-[#355E3B]/20">
        <link rel="icon" href="/favicon.ico" />
        <div className="container mx-auto flex items-center justify-between py-8 px-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#355E3B] to-[#355E3B]/80 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <Link href="/">
              <Image
                src="/galeria/logo.png?height=40&width=40"
                alt="Golden Vista Insurance Agency"
                width={60}
                height={60}
                className="relative rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 ring-4 ring-[#355E3B]/20 hover:ring-[#355E3B]/40"
              />
              </Link>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[#355E3B] font-black text-3xl tracking-tight bg-gradient-to-r from-[#355E3B] to-[#355E3B]/80 bg-clip-text text-transparent drop-shadow-lg">
                Golden Vista Insurance Agency
              </h1>
              <div className="h-1 w-16 bg-gradient-to-r from-[#355E3B] to-transparent rounded-full mt-1"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className="relative text-[#355E3B] font-bold text-xl px-8 py-4 rounded-2xl hover:bg-[#355E3B] hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 group border-2 border-transparent hover:border-[#355E3B] bg-gradient-to-r hover:from-[#355E3B] hover:to-[#355E3B]/90"
            >
              <span className="relative z-10 tracking-wide">HOME</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#355E3B] to-[#355E3B]/80 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            </Link>

            <Link
              href="#about"
              className="relative text-[#355E3B] font-bold text-xl px-8 py-4 rounded-2xl hover:bg-[#355E3B] hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 group border-2 border-transparent hover:border-[#355E3B] bg-gradient-to-r hover:from-[#355E3B] hover:to-[#355E3B]/90"
            >
              <span className="relative z-10 tracking-wide">ABOUT US</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#355E3B] to-[#355E3B]/80 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 rounded-2xl hover:bg-[#355E3B]/20 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-[#355E3B]/30 hover:border-[#355E3B]" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <AiOutlineMenu size={28} className="text-[#355E3B]" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 z-50 md:hidden backdrop-blur-lg">
          <div className="fixed right-0 top-0 h-full w-[90%] max-w-sm bg-gradient-to-b from-[#FDF6E3] via-[#FDF6E3]/98 to-[#FDF6E3]/95 shadow-2xl border-l-4 border-[#355E3B]/30">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-8 border-b-2 border-[#355E3B]/30 bg-gradient-to-r from-[#FDF6E3] to-[#FDF6E3]/90">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#355E3B] to-[#355E3B]/60 rounded-full blur opacity-40"></div>
                  <Image
                    src="/galeria/logo.png?height=40&width=40"
                    alt="Click and Go Logo"
                    width={45}
                    height={45}
                    className="relative rounded-full ring-2 ring-[#355E3B]/40"
                  />
                </div>
                <span className="text-2xl font-black text-[#355E3B] tracking-tight bg-gradient-to-r from-[#355E3B] to-[#355E3B]/80 bg-clip-text text-transparent">
                  MENU
                </span>
              </div>
              <button 
                className="p-3 rounded-2xl hover:bg-[#355E3B]/20 transition-all duration-300 transform hover:scale-110 hover:rotate-90 border-2 border-[#355E3B]/20 hover:border-[#355E3B]" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <AiOutlineClose size={26} className="text-[#355E3B]" />
              </button>
            </div>
        
            {/* Mobile Navigation */}
            <nav className="flex flex-col p-8 gap-4">
              <Link
                href="/"
                className="flex items-center text-[#355E3B] font-black text-2xl py-6 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-[#355E3B] hover:to-[#355E3B]/90 hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:translate-x-4 hover:scale-105 border-l-8 border-transparent hover:border-[#355E3B] hover:shadow-2xl group bg-gradient-to-r from-transparent to-[#355E3B]/5 hover:to-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="tracking-wider group-hover:tracking-widest transition-all duration-300">HOME</span>
              </Link>
              <Link
                href="#about"
                className="flex items-center text-[#355E3B] font-black text-2xl py-6 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-[#355E3B] hover:to-[#355E3B]/90 hover:text-[#FDF6E3] transition-all duration-500 ease-in-out transform hover:translate-x-4 hover:scale-105 border-l-8 border-transparent hover:border-[#355E3B] hover:shadow-2xl group bg-gradient-to-r from-transparent to-[#355E3B]/5 hover:to-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="tracking-wider group-hover:tracking-widest transition-all duration-300">ABOUT US</span>
              </Link>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-center text-[#355E3B]/70 text-lg font-bold tracking-wide border-t-2 border-[#355E3B]/20 pt-6">
                © Copyright 2025 By Golden Vista Insurance Agency. All Rights Reserved
                <div className="h-1 w-20 bg-gradient-to-r from-[#355E3B] to-transparent rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header