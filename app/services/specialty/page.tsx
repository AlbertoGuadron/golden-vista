"use client";

import Link from "next/link";
import { 
  FaCalendarAlt, 
  FaCertificate, 
  FaPlane, 
  FaHome,
  FaArrowLeft,
  FaPhone,
  FaQuoteLeft,
  FaShieldAlt,
  FaGlobe,
  FaUmbrella,
  FaHandshake
} from "react-icons/fa";
import Header from "@/components/header";
import Footer from "@/components/footer";

const specialtyServices = [
  {
    icon: FaCalendarAlt,
    title: "Special Events Insurance",
    description: "Provides liability protection for one-time or short-term events such as weddings, festivals, or business functions.",
    color: "from-[#FDF6E3]/20 to-[#FDF6E3]/10"
  },
  {
    icon: FaCertificate,
    title: "Bonds (Surety Bonds)",
    description: "Guarantees performance, compliance, or payment for contracts or business obligations. Includes license & permit bonds, contract bonds, and fidelity bonds.",
    color: "from-[#FDF6E3]/20 to-[#FDF6E3]/10"
  },
  {
    icon: FaPlane,
    title: "Travel Insurance",
    description: "Comprehensive coverage for domestic and international travel including trip cancellation, medical emergencies, baggage loss, and travel delays.",
    color: "from-[#FDF6E3]/20 to-[#FDF6E3]/10"
  },
  {
    icon: FaHome,
    title: "Home Warranty",
    description: "Protects homeowners from unexpected repair costs for major home systems and appliances including HVAC, plumbing, electrical, and kitchen appliances.",
    color: "from-[#FDF6E3]/20 to-[#FDF6E3]/10"
  }
];

export default function SpecialtyInsurancePage() {
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
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center space-x-2 text-[#B8860B] hover:text-[#FDF6E3] transition-colors duration-300 group">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-bold">Back to Services</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-[#B8860B]/20 text-[#B8860B] px-6 py-3 rounded-full font-bold text-lg tracking-wide border-2 border-[#B8860B]/30">
                Specialty Services
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#FDF6E3]">
              Unique Coverage for
              <br/>
              <span className="bg-gradient-to-r from-[#B8860B] to-[#FDF6E3] bg-clip-text text-transparent">
                Special Situations
              </span>
            </h1>
            <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto leading-relaxed">
              Specialized insurance solutions and protection services for unique circumstances, special events, and situations that require customized coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Services Grid */}
      <section className="py-20 bg-gradient-to-br from-[#001B2E] via-[#002A40] to-[#001B2E]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">Our Specialty Services</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#FDF6E3]/80 max-w-2xl mx-auto">
              Beyond traditional insurance, we offer specialized protection solutions for life's unique moments and special requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialtyServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-4xl text-[#002F4B]" />
                    </div>
                    <h3 className="text-2xl font-black text-[#FDF6E3] mb-6 text-center">{service.title}</h3>
                    <p className="text-[#FDF6E3]/80 leading-relaxed text-center text-lg">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Specialty Services Matter Section */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#002F4B] mb-6">Why Specialty Services Matter</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaUmbrella className="text-[#002F4B] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#002F4B] text-lg mb-3">Complete Protection</h3>
                  <p className="text-[#002F4B]/80 text-sm">Fill the gaps that traditional insurance might miss with specialized coverage options.</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaGlobe className="text-[#002F4B] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#002F4B] text-lg mb-3">Peace of Mind</h3>
                  <p className="text-[#002F4B]/80 text-sm">Enjoy special events and travels knowing you're protected against unexpected situations.</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaShieldAlt className="text-[#002F4B] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#002F4B] text-lg mb-3">Financial Security</h3>
                  <p className="text-[#002F4B]/80 text-sm">Protect your investments and avoid unexpected expenses with tailored coverage solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-br from-[#002F4B] via-[#002F4B]/95 to-[#001B2E]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#B8860B] rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#FDF6E3] rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">Perfect for Every Occasion</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#FDF6E3]/80 max-w-2xl mx-auto">
              Our specialty services are designed to provide protection for life's special moments and unique situations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            
            <div className="text-center group">
              <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaCalendarAlt className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#FDF6E3] text-sm mb-2">SPECIAL EVENTS</h4>
                <p className="text-[#FDF6E3]/70 text-xs">Weddings, parties, festivals</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaPlane className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#FDF6E3] text-sm mb-2">TRAVEL</h4>
                <p className="text-[#FDF6E3]/70 text-xs">Domestic and international trips</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaCertificate className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#FDF6E3] text-sm mb-2">BONDS</h4>
                <p className="text-[#FDF6E3]/70 text-xs">License, permit, and contract bonds</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaHome className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#FDF6E3] text-sm mb-2">HOME WARRANTY</h4>
                <p className="text-[#FDF6E3]/70 text-xs">Appliance and system protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customized Solutions */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#B8860B]/10 to-[#002F4B]/10 backdrop-blur-sm rounded-3xl p-12 border-4 border-[#B8860B]/30 hover:border-[#B8860B]/50 transition-all duration-500 hover:shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-[#002F4B] mb-6">Tailored to Your Needs</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-black text-[#002F4B] mb-6">Specialized Expertise</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#002F4B]/80 leading-relaxed">
                        <span className="font-bold text-[#002F4B]">Event Planning:</span> Custom liability coverage for weddings, corporate events, and special occasions.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#002F4B]/80 leading-relaxed">
                        <span className="font-bold text-[#002F4B]">Travel Protection:</span> Comprehensive coverage for trip cancellations, medical emergencies, and lost luggage.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#002F4B]/80 leading-relaxed">
                        <span className="font-bold text-[#002F4B]">Contract Bonds:</span> Surety solutions that help you secure contracts and maintain compliance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#002F4B]/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#B8860B]/20">
                    <h4 className="text-xl font-black text-[#002F4B] mb-4">Flexible Coverage Options</h4>
                    <p className="text-[#002F4B]/70 mb-6">
                      Whether you need short-term event coverage or ongoing specialized protection, we create solutions that fit your unique situation.
                    </p>
                    <div className="flex justify-center space-x-4 text-sm text-[#002F4B]/60">
                      <span>🎯 Custom Plans</span>
                      <span>⏱️ Quick Setup</span>
                      <span>💡 Expert Advice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B8860B] via-[#B8860B]/95 to-[#B8860B]/90">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-black text-[#002F4B] mb-8">Need Specialized Coverage?</h2>
          <p className="text-xl text-[#002F4B]/80 mb-12 max-w-2xl mx-auto">
            Don't let unique situations leave you unprotected. Contact us to discuss your specialized insurance needs and get a custom quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contactus" className="inline-block">
              <button className="bg-gradient-to-r from-[#002F4B] to-[#002F4B]/80 hover:from-[#002F4B]/90 hover:to-[#002F4B] text-[#FDF6E3] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <FaQuoteLeft className="inline mr-2" />
                Get Custom Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}