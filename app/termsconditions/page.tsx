"use client";

import React from 'react';
import { FaFileContract, FaShieldAlt, FaGavel, FaExclamationTriangle, FaEdit, FaInfoCircle } from 'react-icons/fa';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsConditions() {
  const sections = [
    {
      id: 1,
      icon: <FaInfoCircle className="text-3xl" />,
      title: "Use of Website",
      content: "You may browse and contact us via the site only for lawful insurance inquiries. Misuse, scraping, or unauthorized commercial use is prohibited.",
      color: "from-[#B8860B] to-[#B8860B]/80"
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Intellectual Property",
      content: "All content, branding, and materials on this site belong to Golden Vista Insurance Agency and may not be copied or reproduced without permission.",
      color: "from-[#002F4B] to-[#002F4B]/80"
    },
    {
      id: 3,
      icon: <FaExclamationTriangle className="text-3xl" />,
      title: "No Guarantee of Coverage",
      content: "Content on this site is for informational purposes only. Insurance quotes or coverage options are not guaranteed until confirmed by an agent and bound by the carrier.",
      color: "from-[#B8860B] to-[#B8860B]/80"
    },
    {
      id: 4,
      icon: <FaGavel className="text-3xl" />,
      title: "Limitation of Liability",
      content: "We are not responsible for any damages resulting from the use of this website or reliance on its content.",
      color: "from-[#002F4B] to-[#002F4B]/80"
    },
    {
      id: 5,
      icon: <FaEdit className="text-3xl" />,
      title: "Changes",
      content: "We may update these terms periodically. Continued use of the site means you accept the revised terms.",
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
                Legal Information
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#FDF6E3]">
              Terms &
              <br/>
              <span className="bg-gradient-to-r from-[#B8860B] to-[#FDF6E3] bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website and services.
            </p>
            
            <div className="mt-8 bg-[#B8860B]/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/30 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <FaFileContract className="text-[#B8860B] text-2xl" />
                <div className="text-left">
                  <p className="text-[#FDF6E3] font-bold">Effective Date:</p>
                  <p className="text-[#B8860B] font-black text-lg">July 18, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agreement Notice */}
      <section className="py-16 bg-gradient-to-r from-[#B8860B] via-[#B8860B]/95 to-[#B8860B]/90">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#002F4B]/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/30">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-2xl flex items-center justify-center shadow-xl">
                  <FaFileContract className="text-[#FDF6E3] text-2xl" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#002F4B] mb-6">Important Agreement</h2>
              <p className="text-lg text-[#002F4B]/90 leading-relaxed">
                By using our website, you agree to these Terms & Conditions. 
                <span className="font-bold"> If you do not agree, please do not use our site.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {sections.map((section, index) => (
                <div key={section.id} className="group">
                  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1">
                    <div className="flex items-start space-x-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        {React.cloneElement(section.icon, { 
                          className: `text-3xl ${section.color.includes('FDF6E3') ? 'text-[#002F4B]' : 'text-[#FDF6E3]'}` 
                        })}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="bg-[#B8860B]/20 text-[#B8860B] px-4 py-2 rounded-full font-bold text-sm tracking-wide">
                            Section {section.id}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-black text-[#002F4B] mb-4">{section.title}</h3>
                        
                        <p className="text-[#002F4B]/80 leading-relaxed text-lg">
                          {section.content}
                        </p>
                      </div>
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