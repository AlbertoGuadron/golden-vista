"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa';
import { FaShieldAlt, FaUsers, FaHandshake, FaQuoteLeft, FaGlobe, FaAward, FaClock } from 'react-icons/fa';
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
              <span className="bg-gradient-to-r from-[#FDF6E3] to-[#B8860B] bg-clip-text text-transparent">Insurance</span>
              <br />
              <span className="text-[#FDF6E3]">Built on Trust</span>
            </h1>
            <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto leading-relaxed">
              Honest, personalized insurance solutions backed by over a decade of industry experience and unwavering commitment to our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
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
                    <h2 className="text-3xl font-black text-[#FDF6E3]">Our Foundation</h2>
                  </div>
                  <div className="bg-[#B8860B] h-1 w-24 rounded-full mb-6"></div>
                  <p className="text-[#FDF6E3]/90 text-lg leading-relaxed mb-6">
                    <span className="font-bold text-[#B8860B]">Golden Vista Insurance Agency was founded with a mission</span> to deliver honest, personalized insurance solutions backed by over a decade of industry experience. While the agency is newly established, it is built on more than 10 years of hands-on work in helping individuals, families, and businesses navigate their coverage with clarity and confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 to-transparent rounded-3xl transform rotate-3"></div>
              <Image 
                src="https://images.unsplash.com/photo-1665072204431-b3ba11bd6d06?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      {/* Service Coverage Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">Serving Communities Nationwide</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto"></div>
          </div>
          
          <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl">
            <p className="text-xl text-[#FDF6E3]/90 leading-relaxed mb-8 text-center">
              <span className="font-bold text-[#B8860B]">The agency proudly serves clients across California, Arizona, Florida, Illinois, Maine, North Carolina, Ohio, Texas, and Utah</span>, offering guidance rooted in service, trust, and community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="text-[#002F4B] text-2xl" />
                </div>
                <h3 className="font-bold text-[#FDF6E3] text-lg mb-2">Personalized Service</h3>
                <p className="text-[#FDF6E3]/80">Tailored solutions for individuals and families</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <FaGlobe className="text-[#002F4B] text-2xl" />
                </div>
                <h3 className="font-bold text-[#FDF6E3] text-lg mb-2">Multi-State Coverage</h3>
                <p className="text-[#FDF6E3]/80">Licensed across 9 states nationwide</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <FaAward className="text-[#002F4B] text-2xl" />
                </div>
                <h3 className="font-bold text-[#FDF6E3] text-lg mb-2">Industry Experience</h3>
                <p className="text-[#FDF6E3]/80">Over 10 years of proven expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-8">
          <div className="bg-gradient-to-br from-[#B8860B]/20 to-[#B8860B]/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#B8860B]/30 hover:border-[#B8860B]/50 transition-all duration-500 text-center hover:shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <FaHandshake className="text-[#002F4B] text-3xl" />
                </div>
              </div>
              
              <h2 className="text-4xl font-black text-[#FDF6E3] mb-8">Our Mission</h2>
              
              <p className="text-xl text-[#FDF6E3]/90 leading-relaxed mb-8">
                We believe in delivering <span className="font-bold text-[#B8860B]">honest, personalized insurance solutions</span> that help individuals, families, and businesses navigate their coverage with clarity and confidence.
              </p>
              
              <p className="text-xl text-[#FDF6E3]/90 leading-relaxed mb-8">
                Our approach is built on service, trust, and community - values that guide every interaction and decision we make.
              </p>
              
              <div className="bg-[#B8860B]/20 rounded-2xl p-8 border border-[#B8860B]/30">
                <p className="text-3xl font-black text-[#B8860B] mb-4">"Secure Today, Shine Tomorrow"</p>
                <p className="text-xl font-bold text-[#FDF6E3]">It's more than a slogan. It's the foundation of everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">What Sets Us Apart</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <FaClock className="text-[#002F4B] text-2xl" />
              </div>
              <h3 className="text-xl font-black text-[#FDF6E3] mb-4">Decade of Experience</h3>
              <p className="text-[#FDF6E3]/80 leading-relaxed">Built on more than 10 years of hands-on industry experience and proven results.</p>
            </div>

            <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <FaShieldAlt className="text-[#002F4B] text-2xl" />
              </div>
              <h3 className="text-xl font-black text-[#FDF6E3] mb-4">Honest Guidance</h3>
              <p className="text-[#FDF6E3]/80 leading-relaxed">Clear, straightforward advice that helps you understand your coverage options completely.</p>
            </div>

            <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <FaUsers className="text-[#002F4B] text-2xl" />
              </div>
              <h3 className="text-xl font-black text-[#FDF6E3] mb-4">Community Focus</h3>
              <p className="text-[#FDF6E3]/80 leading-relaxed">Rooted in service, trust, and genuine care for the communities we serve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-black text-[#FDF6E3] mb-8">Ready to Experience the Golden Vista Difference?</h2>
          <p className="text-xl text-[#FDF6E3]/80 mb-12 max-w-2xl mx-auto">
            Let us help you navigate your insurance needs with the clarity and confidence you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contactus" className="inline-block">
            <button className="bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 hover:from-[#B8860B]/90 hover:to-[#B8860B] text-[#002F4B] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-[#B8860B] hover:border-[#B8860B]/80">
              <FaQuoteLeft className="inline mr-2" />
              Get Free Quote
            </button>
            </Link>
            <a 
                href="https://wa.me/19518091141?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20insurance%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-transparent hover:bg-[#25D366]/10 text-[#FDF6E3] font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 border-2 border-[#25D366]/50 hover:border-[#25D366] hover:text-[#25D366]">
                  <FaWhatsapp className="inline mr-2" />
                  WhatsApp Us
                </button>
              </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}