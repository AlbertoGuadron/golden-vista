"use client";

import React from 'react';
import Image from 'next/image';
import { FaShieldAlt, FaFire, FaTint, FaTools, FaHandshake, FaQuoteLeft, FaPhone } from 'react-icons/fa';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-br from-[#002F4B] via-[#002F4B]/98 to-[#002F4B]/95 text-[#FDF6E3] min-h-screen">
      
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#B8860B] rounded-full blur-3xl opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B8860B] rounded-full blur-3xl opacity-10 transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-[#B8860B]/20 text-[#B8860B] px-6 py-3 rounded-full font-bold text-lg tracking-wide border-2 border-[#B8860B]/30">
                About Golden Vista
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#FDF6E3] to-[#B8860B] bg-clip-text text-transparent">Protecting</span>
              <br />
              <span className="text-[#FDF6E3]">Riverside Homes</span>
            </h1>
            <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto leading-relaxed">
              Local expertise meets premium protection. We understand Riverside's unique challenges and deliver insurance solutions that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content (con fondo modificado) */}
      <section className="py-20 relative bg-gradient-to-br from-[#FDF6E3]/10 to-[#B8860B]/10">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="hover:animate-pulse">
                <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center shadow-xl">
                      <FaShieldAlt className="text-[#002F4B] text-2xl" />
                    </div>
                    <h2 className="text-3xl font-black text-[#FDF6E3]">Best Home Insurance Services</h2>
                  </div>
                  <div className="bg-[#B8860B] h-1 w-24 rounded-full mb-6"></div>
                  <p className="text-[#FDF6E3]/90 text-lg leading-relaxed mb-6">
                    <span className="font-bold text-[#B8860B]">Riverside homeowners face real risks</span> - wildfires in dry months, flash floods during storms, and rising rebuild costs that can wipe out savings. Basic policies don't cut it here.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 to-transparent rounded-3xl transform rotate-3"></div>
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Professional handshake representing trust and partnership"
                width={800}
                height={600}
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover hover:transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002F4B]/50 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">Local Expertise That Matters</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto"></div>
          </div>
          
          <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl">
            <p className="text-xl text-[#FDF6E3]/90 leading-relaxed mb-8">
              Our <span className="font-bold text-[#B8860B]">premium home insurance services in Riverside CA</span> is built for local issues like older electrical systems near Woodcrest, slope runoff in Canyon Crest, and rental risks near UCR.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <FaFire className="text-[#002F4B] text-2xl" />
                </div>
                <h3 className="font-bold text-[#FDF6E3] text-lg mb-2">Wildfire Protection</h3>
                <p className="text-[#FDF6E3]/80">Specialized coverage for fire-prone areas</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <FaTint className="text-[#002F4B] text-2xl" />
                </div>
                <h3 className="font-bold text-[#FDF6E3] text-lg mb-2">Flood Coverage</h3>
                <p className="text-[#FDF6E3]/80">Protection against storm damage</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <FaTools className="text-[#002F4B] text-2xl" />
                </div>
                <h3 className="font-bold text-[#FDF6E3] text-lg mb-2">Code Upgrades</h3>
                <p className="text-[#FDF6E3]/80">Coverage for building improvements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-8">
          <div className="bg-gradient-to-br from-[#B8860B]/20 to-[#B8860B]/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#B8860B]/30 hover:border-[#B8860B]/50 transition-all duration-500 text-center hover:shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <FaHandshake className="text-[#002F4B] text-3xl" />
                </div>
              </div>
              
              <h2 className="text-4xl font-black text-[#FDF6E3] mb-8">Our Promise to You</h2>
              
              <p className="text-xl text-[#FDF6E3]/90 leading-relaxed mb-8">
                We make sure your policy covers what matters: <span className="font-bold text-[#B8860B]">foundation cracks, code upgrades, and full structure replacement</span>. No vague promises, just clear terms and fast claims when disaster hits.
              </p>
              
              <p className="text-xl text-[#FDF6E3]/90 leading-relaxed mb-8">
                Whether it's a family home or a rental property, we tailor it right. 
              </p>
              
              <div className="bg-[#B8860B]/20 rounded-2xl p-6 border border-[#B8860B]/30">
                <p className="text-2xl font-black text-[#B8860B] mb-2">Because in Riverside,</p>
                <p className="text-2xl font-black text-[#FDF6E3]">guessing wrong can cost everything.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-black text-[#FDF6E3] mb-8">Ready to Protect Your Home?</h2>
          <p className="text-xl text-[#FDF6E3]/80 mb-12 max-w-2xl mx-auto">
            Get a personalized quote that addresses Riverside's unique risks and your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 hover:from-[#B8860B]/90 hover:to-[#B8860B] text-[#002F4B] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-[#B8860B] hover:border-[#B8860B]/80">
              <FaQuoteLeft className="inline mr-2" />
              Get Free Quote
            </button>
            
            <button className="bg-transparent hover:bg-[#B8860B]/10 text-[#FDF6E3] font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 border-2 border-[#B8860B]/50 hover:border-[#B8860B]">
              <FaPhone className="inline mr-2" />
              Call Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
