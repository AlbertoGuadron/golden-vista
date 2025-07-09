"use client";

import React from 'react';
import Image from 'next/image';
import { 
  FaPaw, 
  FaBolt, 
  FaComments, 
  FaShieldAlt, 
  FaQuoteLeft, 
  FaClipboardList,
  FaHeart,
  FaStethoscope,
  FaAward,
  FaClock,
  FaPhoneAlt
} from 'react-icons/fa';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PetInsurancePage() {
  return (
    <div className="bg-gradient-to-br from-[#FDF6E3] via-[#FDF6E3]/98 to-[#FDF6E3]/95 min-h-screen">
      
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#002F4B] via-[#002F4B]/95 to-[#001B2E]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8860B] rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FDF6E3] rounded-full blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-[#B8860B]/20 text-[#B8860B] px-6 py-3 rounded-full font-bold text-lg tracking-wide border-2 border-[#B8860B]/30">
                Prudent Pet Insurance
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#FDF6E3]">
              Exceptional
              <br/>
              <span className="bg-gradient-to-r from-[#B8860B] to-[#FDF6E3] bg-clip-text text-transparent">
                Pet Care Coverage
              </span>
            </h1>
            <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive protection for your beloved pets with lightning-fast claims and 24/7 veterinary support. Because your pet's health can't wait.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#002F4B] rounded-full mb-6 shadow-xl">
              <FaAward className="text-3xl text-[#B8860B]" />
            </div>
            <h2 className="text-3xl font-black text-[#002F4B] mb-4">Rated #1 Pet Insurance on Trustpilot</h2>
            <p className="text-lg text-[#002F4B]/80 max-w-2xl mx-auto">
              Join thousands of satisfied pet owners who trust us with their furry family members' health and wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <FaShieldAlt className="text-[#002F4B] text-2xl" />
                  </div>
                  <h2 className="text-3xl font-black text-[#002F4B]">Comprehensive Accident & Illness Coverage</h2>
                </div>
                <div className="bg-[#B8860B] h-1 w-24 rounded-full mb-6"></div>
                <p className="text-[#002F4B]/70 text-lg leading-relaxed mb-6">
                  Our plans cover accidents like broken bones or swallowed objects, to serious illnesses like cancer and diabetes. We also cover the exam fees associated with diagnosis and treatment.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 to-transparent rounded-3xl transform rotate-3"></div>
              <Image 
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1962&auto=format&fit=crop"
                alt="Happy dog and cat representing comprehensive pet insurance coverage"
                width={1000}
                height={800}
                className="relative rounded-3xl shadow-2xl w-full h-104 object-cover hover:transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002F4B]/30 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-gradient-to-br from-[#002F4B] via-[#001B2E] to-[#002F4B]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#B8860B] rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#FDF6E3] rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">What Makes Prudent Pet Different</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#FDF6E3]/80 max-w-2xl mx-auto">
              We've revolutionized pet insurance with cutting-edge technology and genuine care for your pets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <FaBolt className="text-3xl text-[#002F4B]" />
                </div>
                <h3 className="text-xl font-black text-[#FDF6E3] mb-4 text-center">Lightning-Fast Reimbursement</h3>
                <p className="text-[#FDF6E3]/80 leading-relaxed text-center">We process 75% of claims within 24 hours thanks to our advanced AI technology.</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <FaComments className="text-3xl text-[#002F4B]" />
                </div>
                <h3 className="text-xl font-black text-[#FDF6E3] mb-4 text-center">24/7 Live Vet Chat</h3>
                <p className="text-[#FDF6E3]/80 leading-relaxed text-center">All policies include FREE, unlimited access to licensed veterinary professionals.</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <FaStethoscope className="text-3xl text-[#002F4B]" />
                </div>
                <h3 className="text-xl font-black text-[#FDF6E3] mb-4 text-center">Use Any Licensed Vet</h3>
                <p className="text-[#FDF6E3]/80 leading-relaxed text-center">No networks, no restrictions. Visit any licensed veterinarian in the United States.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plan Section */}
      <section className="py-20 bg-gradient-to-r from-[#B8860B] via-[#B8860B]/95 to-[#B8860B]/90">
        <div className="container mx-auto px-8">
          <div className="bg-[#002F4B]/20 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#002F4B]/30 hover:border-[#002F4B]/50 transition-all duration-500 hover:shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <FaPaw className="text-[#B8860B] text-4xl" />
                </div>
              </div>
              
              <h2 className="text-4xl font-black text-[#002F4B] mb-8">Most Popular: Essential Plan</h2>
              
              <p className="text-xl text-[#002F4B]/80 leading-relaxed mb-8">
                Simple, powerful protection with no surprises. Please note that pre-existing conditions are not covered, but we provide real value and peace of mind for everything else.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#002F4B]/30 rounded-2xl p-6 border border-[#002F4B]/40">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <FaShieldAlt className="text-[#B8860B] text-2xl" />
                  </div>
                  <h3 className="text-2xl font-black text-[#002F4B] mb-2">$10,000</h3>
                  <p className="text-lg font-bold text-[#002F4B]/80">Annual Limit</p>
                </div>
                
                <div className="bg-[#002F4B]/30 rounded-2xl p-6 border border-[#002F4B]/40">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <FaClipboardList className="text-[#B8860B] text-2xl" />
                  </div>
                  <h3 className="text-2xl font-black text-[#002F4B] mb-2">$500</h3>
                  <p className="text-lg font-bold text-[#002F4B]/80">Annual Deductible</p>
                </div>
                
                <div className="bg-[#002F4B]/30 rounded-2xl p-6 border border-[#002F4B]/40">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <FaHeart className="text-[#B8860B] text-2xl" />
                  </div>
                  <h3 className="text-2xl font-black text-[#002F4B] mb-2">80%</h3>
                  <p className="text-lg font-bold text-[#002F4B]/80">Reimbursement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-[#001B2E] via-[#002A40] to-[#001B2E]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">Why Pet Owners Choose Us</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#FDF6E3]/80 max-w-2xl mx-auto">
              Beyond insurance - we're your partner in providing the best care for your beloved pets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center shadow-xl">
                  <FaClock className="text-[#002F4B] text-2xl" />
                </div>
                <h3 className="text-2xl font-black text-[#FDF6E3]">Fast Claims Processing</h3>
              </div>
              <p className="text-[#FDF6E3]/80 leading-relaxed">
                Our advanced technology ensures most claims are processed within 24 hours, getting you reimbursed faster than traditional insurers.
              </p>
            </div>
            
            <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center shadow-xl">
                  <FaHeart className="text-[#002F4B] text-2xl" />
                </div>
                <h3 className="text-2xl font-black text-[#FDF6E3]">Unlimited Vet Access</h3>
              </div>
              <p className="text-[#FDF6E3]/80 leading-relaxed">
                24/7 access to licensed veterinarians through our live chat feature - included free with every policy for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 rounded-full mb-8 shadow-2xl">
            <FaPaw className="w-10 h-10 text-[#002F4B]" />
          </div>
          
          <h2 className="text-4xl font-black text-[#002F4B] mb-8">Ready to Protect Your Pet?</h2>
          <p className="text-xl text-[#002F4B]/70 mb-12 max-w-2xl mx-auto">
            Get a personalized quote in minutes and join thousands of pet owners who trust Prudent Pet with their furry family members.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 hover:from-[#B8860B]/90 hover:to-[#B8860B] text-[#002F4B] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <FaQuoteLeft className="inline mr-2" />
              Get Free Quote
            </button>
            
            <button className="bg-transparent hover:bg-[#002F4B]/10 text-[#002F4B] font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 border-2 border-[#002F4B]/50 hover:border-[#002F4B]">
              <FaPhoneAlt className="inline mr-2" />
              Call Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}