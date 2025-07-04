import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaCertificate, FaYelp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#002F4B] via-[#002F4B]/95 to-[#002F4B]/90 pt-16 pb-8 text-[#FDF6E3] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#B8860B] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B8860B] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Logo Section - Left */}
          <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/60 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <Image
                src="/galeria/logo.png"
                alt="Golden Vista Logo"
                width={120}
                height={120}
                className="relative object-contain rounded-full shadow-2xl hover:shadow-[#B8860B]/30 transition-all duration-500 transform hover:scale-110 ring-4 ring-[#B8860B]/20 hover:ring-[#B8860B]/40"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-black tracking-tight bg-gradient-to-r from-[#FDF6E3] to-[#B8860B] bg-clip-text text-transparent drop-shadow-lg">
                Golden Vista
              </h3>
              <p className="text-xl font-bold text-[#FDF6E3]/90 tracking-wide">Insurance Agency</p>
              <div className="h-1 w-24 bg-gradient-to-r from-[#B8860B] to-transparent rounded-full mt-2 mx-auto lg:mx-0"></div>
            </div>
          </div>

          {/* Contact Info - Center */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-center">
              <h4 className="text-2xl font-black text-[#FDF6E3] mb-4 tracking-wide">CONTACT US</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3 text-lg">
                  <FaMapMarkerAlt className="text-[#B8860B] text-xl" />
                  <span className="font-bold">1160 Hamner Ave STE B, CA 92860</span>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-6">
              <Link href="#" className="group">
                <div className="p-4 rounded-2xl bg-[#B8860B]/10 hover:bg-[#B8860B] transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 border-2 border-[#B8860B]/20 hover:border-[#B8860B]">
                  <FaFacebook className="text-2xl text-[#FDF6E3] group-hover:text-[#002F4B] transition-colors duration-300" />
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="p-4 rounded-2xl bg-[#B8860B]/10 hover:bg-[#B8860B] transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 border-2 border-[#B8860B]/20 hover:border-[#B8860B]">
                  <FaInstagram className="text-2xl text-[#FDF6E3] group-hover:text-[#002F4B] transition-colors duration-300" />
                </div>
              </Link>
              <Link href="https://www.yelp.com/biz/golden-vista-insurance-agency-riverside-2" className="group">
                <div className="p-4 rounded-2xl bg-[#B8860B]/10 hover:bg-[#B8860B] transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 border-2 border-[#B8860B]/20 hover:border-[#B8860B]">
                  <FaYelp className="text-2xl text-[#FDF6E3] group-hover:text-[#002F4B] transition-colors duration-300" />
                </div>
              </Link>
            </div>
          </div>

          {/* License Information - Right */}
          <div className="flex flex-col items-center lg:items-end justify-center space-y-6">
            <div className="text-center lg:text-right">
              <div className="flex items-center justify-center lg:justify-end space-x-3 mb-4">
                <FaCertificate className="text-[#B8860B] text-2xl" />
                <h4 className="text-2xl font-black text-[#FDF6E3] tracking-wide">LICENSED STATES</h4>
              </div>
              
              <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-300 hover:shadow-2xl">
                <p className="text-[#FDF6E3]/90 font-semibold text-lg leading-relaxed mb-4">
                  We serve Arizona, Florida, Illinois, Maine, North Carolina, Ohio, Texas, and Utah
                </p>
                
                <div className="space-y-2 text-sm font-medium text-[#FDF6E3]/80">
                  <div className="grid grid-cols-1 gap-1">
                    <span>📍 California (#6014853)</span>
                    <span>📍 Arizona (#3003444652)</span>
                    <span>📍 Florida (#L129232)</span>
                    <span>📍 Illinois (#3003451813)</span>
                    <span>📍 Maine (#AGN504666)</span>
                    <span>📍 North Carolina (#3003451925)</span>
                    <span>📍 Ohio (#1634055)</span>
                    <span>📍 Texas (#3276809)</span>
                    <span>📍 Utah (#1058074)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B8860B]/20 to-transparent h-px"></div>
          <div className="text-center pt-8">
            <div className="bg-[#B8860B]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-300 hover:shadow-xl">
              <p className="text-lg font-bold text-[#FDF6E3]/90 tracking-wide">
                © Copyright 2025 By Golden Vista Insurance Agency. All Rights Reserved
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}