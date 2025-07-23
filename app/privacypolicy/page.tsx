"use client";

import React from 'react';
import { FaShieldAlt, FaUserShield, FaDatabase, FaHandshake, FaUserCog, FaLock, FaEnvelope, FaEye, FaUsers } from 'react-icons/fa';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 1,
      icon: <FaDatabase className="text-3xl" />,
      title: "Information We Collect",
      subtitle: "What data we gather when you visit or use our services",
      content: [
        {
          type: "Personal Info",
          description: "Name, email, phone number, address, insurance-related details"
        },
        {
          type: "Website Usage", 
          description: "Cookies, IP address, browser type, and usage data via analytics tools"
        }
      ],
      color: "from-[#B8860B] to-[#B8860B]/80"
    },
    {
      id: 2,
      icon: <FaUserCog className="text-3xl" />,
      title: "How We Use Your Information",
      subtitle: "The purposes for which we process your data",
      content: [
        {
          type: "Service Delivery",
          description: "To provide insurance quotes and services"
        },
        {
          type: "Communication",
          description: "To communicate with you and respond to inquiries"
        },
        {
          type: "Improvement",
          description: "To improve website functionality and user experience"
        }
      ],
      color: "from-[#002F4B] to-[#002F4B]/80"
    },
    {
      id: 3,
      icon: <FaHandshake className="text-3xl" />,
      title: "Sharing Your Information",
      subtitle: "When and how we share your data with third parties",
      content: [
        {
          type: "No Data Sales",
          description: "We do not sell your data"
        },
        {
          type: "Authorized Sharing",
          description: "Information may be shared with licensed carriers or service providers as necessary to fulfill your insurance needs"
        }
      ],
      color: "from-[#B8860B] to-[#B8860B]/80"
    },
    {
      id: 4,
      icon: <FaUserShield className="text-3xl" />,
      title: "Your Rights",
      subtitle: "What control you have over your personal information",
      content: [
        {
          type: "Data Access & Deletion",
          description: "You may request access to or deletion of your personal data by contacting us at: info@goldenvistains.com"
        }
      ],
      color: "from-[#002F4B] to-[#002F4B]/80"
    },
    {
      id: 5,
      icon: <FaLock className="text-3xl" />,
      title: "Security",
      subtitle: "How we protect your information",
      content: [
        {
          type: "Data Protection",
          description: "We implement safeguards to protect your data but cannot guarantee 100% security over the internet"
        }
      ],
      color: "from-[#B8860B] to-[#B8860B]/80"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#FDF6E3] via-[#FDF6E3]/98 to-[#FDF6E3]/95 min-h-screen">
      
      {/* Header */}
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
                Data Protection
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#FDF6E3]">
              Privacy
              <br/>
              <span className="bg-gradient-to-r from-[#B8860B] to-[#FDF6E3] bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto leading-relaxed">
              Learn how we collect, use, and protect your personal information when you use our services.
            </p>
            
            <div className="mt-8 bg-[#B8860B]/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/30 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <FaShieldAlt className="text-[#B8860B] text-2xl" />
                <div className="text-left">
                  <p className="text-[#FDF6E3] font-bold">Effective Date:</p>
                  <p className="text-[#B8860B] font-black text-lg">July 18, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 bg-gradient-to-r from-[#B8860B] via-[#B8860B]/95 to-[#B8860B]/90">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-[#002F4B]/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/30">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-2xl flex items-center justify-center shadow-xl">
                  <FaUserShield className="text-[#FDF6E3] text-2xl" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#002F4B] mb-6">Our Privacy Commitment</h2>
              <p className="text-lg text-[#002F4B]/90 leading-relaxed">
                <span className="font-bold">Golden Vista Insurance Agency</span> ("we," "our," or "us") is committed to protecting your privacy. 
                This policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {sections.map((section, index) => (
                <div key={section.id} className="group">
                  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1">
                    
                    {/* Section Header */}
                    <div className="flex items-center space-x-6 mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        {React.cloneElement(section.icon, { 
                          className: `text-3xl ${section.color.includes('FDF6E3') ? 'text-[#002F4B]' : 'text-[#FDF6E3]'}` 
                        })}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-[#B8860B]/20 text-[#B8860B] px-4 py-2 rounded-full font-bold text-sm tracking-wide">
                            Section {section.id}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-[#002F4B] mb-2">{section.title}</h3>
                        <p className="text-[#002F4B]/70 text-lg">{section.subtitle}</p>
                      </div>
                    </div>

                    {/* Section Content */}
                    <div className="space-y-6">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-[#FDF6E3]/50 rounded-2xl p-6 border border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="w-3 h-3 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="text-lg font-black text-[#002F4B] mb-2">{item.type}</h4>
                              <p className="text-[#002F4B]/80 leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}