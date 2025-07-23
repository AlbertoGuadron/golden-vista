"use client";

import Link from "next/link";
import { 
  FaTruck, 
  FaTools, 
  FaShieldAlt, 
  FaAnchor,
  FaHandshake,
  FaArrowLeft,
  FaPhone,
  FaQuoteLeft,
  FaRoad,
  FaGavel,
  FaBox
} from "react-icons/fa";
import Header from "@/components/header";
import Footer from "@/components/footer";

const truckingServices = [
  {
    icon: FaTruck,
    title: "Auto Liability",
    description: "Covers bodily injury and property damage caused by your truck.",
    color: "from-[#B8860B]/80 to-[#B8860B]/60"
  },
  {
    icon: FaTools,
    title: "Physical Damage",
    description: "Covers repair or replacement costs for your truck due to collision, theft, fire, or vandalism.",
    color: "from-[#B8860B]/80 to-[#B8860B]/60"
  },
  {
    icon: FaShieldAlt,
    title: "Non-Trucking Liability",
    description: "Provides liability coverage when the truck is being used for non-business purposes.",
    color: "from-[#B8860B]/80 to-[#B8860B]/60"
  },
  {
    icon: FaShieldAlt,
    title: "General Liability",
    description: "Protects trucking businesses from claims of bodily injury, property damage, and personal injury that occur during business operations.",
    color: "from-[#B8860B]/80 to-[#B8860B]/60"
  },
  {
    icon: FaAnchor,
    title: "Motor Truck Cargo",
    description: "Covers damage or loss of cargo while being transported.",
    color: "from-[#B8860B]/80 to-[#B8860B]/60"
  },
  {
    icon: FaHandshake,
    title: "Trailer Interchange",
    description: "Covers physical damage to trailers not owned by you but in your possession under a trailer interchange agreement.",
    color: "from-[#B8860B]/80 to-[#B8860B]/60"
  }
];

export default function TruckingInsurancePage() {
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
                Trucking Insurance
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#FDF6E3]">
              Keep Your Fleet
              <br/>
              <span className="bg-gradient-to-r from-[#B8860B] to-[#FDF6E3] bg-clip-text text-transparent">
                Rolling Strong
              </span>
            </h1>
            <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto leading-relaxed">
              Specialized trucking insurance coverage designed to protect your fleet, cargo, and livelihood on every mile of the road.
            </p>
          </div>
        </div>
      </section>

      {/* Trucking Insurance Services Grid */}
      <section className="py-20 bg-gradient-to-r from-[#B8860B] via-[#B8860B]/95 to-[#B8860B]/90">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#002F4B] mb-6">Our Trucking Insurance Services</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#002F4B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#002F4B]/80 max-w-2xl mx-auto">
              Comprehensive protection for owner-operators, fleet owners, and trucking companies with coverage that understands the road ahead.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {truckingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-[#002F4B]/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/30 hover:border-[#002F4B]/50 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-3xl text-[#FDF6E3]" />
                    </div>
                    <h3 className="text-xl font-black text-[#002F4B] mb-4 text-center">{service.title}</h3>
                    <p className="text-[#002F4B]/80 leading-relaxed text-center">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Trucking Insurance Matters Section */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#002F4B] mb-6">Why Trucking Insurance Matters</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaRoad className="text-[#002F4B] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#002F4B] text-lg mb-3">DOT Compliance</h3>
                  <p className="text-[#002F4B]/80 text-sm">Meet federal requirements and maintain your operating authority with proper insurance coverage.</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaGavel className="text-[#002F4B] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#002F4B] text-lg mb-3">Asset Protection</h3>
                  <p className="text-[#002F4B]/80 text-sm">Protect your trucks, trailers, and equipment - the foundation of your trucking business.</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaBox className="text-[#002F4B] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#002F4B] text-lg mb-3">Cargo Security</h3>
                  <p className="text-[#002F4B]/80 text-sm">Safeguard the valuable cargo you transport and maintain customer trust and contracts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trucking Operations Coverage */}
      <section className="py-20 bg-gradient-to-br from-[#002F4B] via-[#002F4B]/95 to-[#001B2E]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#B8860B] rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#FDF6E3] rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">Coverage for Every Operation</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#FDF6E3]/80 max-w-2xl mx-auto">
              From single trucks to large fleets, we provide specialized coverage for different types of trucking operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            
            <div className="text-center group">
              <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaTruck className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#FDF6E3] text-sm mb-2">OWNER OPERATORS</h4>
                <p className="text-[#FDF6E3]/70 text-xs">Independent truckers and single units</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaHandshake className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#FDF6E3] text-sm mb-2">FLEETS</h4>
                <p className="text-[#FDF6E3]/70 text-xs">Multiple trucks and drivers</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaAnchor className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#FDF6E3] text-sm mb-2">SPECIALTY HAULING</h4>
                <p className="text-[#FDF6E3]/70 text-xs">Oversized, hazmat, and specialized cargo</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaTools className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#FDF6E3] text-sm mb-2">LOCAL DELIVERY</h4>
                <p className="text-[#FDF6E3]/70 text-xs">Regional and local trucking operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#B8860B]/10 to-[#002F4B]/10 backdrop-blur-sm rounded-3xl p-12 border-4 border-[#B8860B]/30 hover:border-[#B8860B]/50 transition-all duration-500 hover:shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-[#002F4B] mb-6">Road-Tested Experience</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-black text-[#002F4B] mb-6">We Understand Trucking</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#002F4B]/80 leading-relaxed">
                        <span className="font-bold text-[#002F4B]">Interstate Authority:</span> Expertise in FMCSA requirements and DOT compliance across multiple states.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#002F4B]/80 leading-relaxed">
                        <span className="font-bold text-[#002F4B]">Claims Experience:</span> Fast, fair claims handling that gets you back on the road quickly.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#002F4B]/80 leading-relaxed">
                        <span className="font-bold text-[#002F4B]">Industry Knowledge:</span> Coverage options that match the realities of modern trucking operations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#002F4B]/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#B8860B]/20">
                    <h4 className="text-xl font-black text-[#002F4B] mb-4">Professional Trucking Coverage</h4>
                    <p className="text-[#002F4B]/70 mb-6">
                      From I-10 cross-country hauls to local delivery routes, we've protected truckers through every challenge the road can bring.
                    </p>
                    <div className="flex justify-center space-x-4 text-sm text-[#002F4B]/60">
                      <span>🚛 Multi-State</span>
                      <span>📋 DOT Certified</span>
                      <span>⚡ Quick Quotes</span>
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
          <h2 className="text-4xl font-black text-[#002F4B] mb-8">Get Your Trucking Quote Today</h2>
          <p className="text-xl text-[#002F4B]/80 mb-12 max-w-2xl mx-auto">
            Don't let inadequate coverage put your trucking business at risk. Get comprehensive protection that keeps your operation moving forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contactus" className="inline-block">
              <button className="bg-gradient-to-r from-[#002F4B] to-[#002F4B]/80 hover:from-[#002F4B]/90 hover:to-[#002F4B] text-[#FDF6E3] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <FaQuoteLeft className="inline mr-2" />
                Get Trucking Quote
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