"use client";

import Link from "next/link";
import { 
  FaBuilding, 
  FaShieldAlt, 
  FaTruck, 
  FaUsers,
  FaFileContract,
  FaTools,
  FaHandshake,
  FaArrowLeft,
  FaPhone,
  FaQuoteLeft
} from "react-icons/fa";
import Header from "@/components/header";
import Footer from "@/components/footer";

const commercialInsuranceServices = [
  {
    icon: FaBuilding,
    title: "Business Owners Policy (BOP)",
    description: "A bundled policy combining general liability and commercial property insurance. Ideal for small to mid-sized businesses.",
    color: "from-[#002F4B] to-[#002F4B]/80"
  },
  {
    icon: FaShieldAlt,
    title: "Commercial General Liability (CGL)",
    description: "Protects your business from claims of bodily injury, property damage, and personal injury occurring on your premises.",
    color: "from-[#001B2E] to-[#001B2E]/80"
  },
  {
    icon: FaBuilding,
    title: "Commercial Property Insurance",
    description: "Covers damage to your business property, inventory, and equipment caused by fire, theft, vandalism, and natural disasters.",
    color: "from-[#002F4B] to-[#002F4B]/80"
  },
  {
    icon: FaUsers,
    title: "Workers' Compensation Insurance",
    description: "Provides medical benefits and wage replacement to employees injured on the job. Required in most states.",
    color: "from-[#001B2E] to-[#001B2E]/80"
  },
  {
    icon: FaFileContract,
    title: "Professional Liability (E&O Insurance)",
    description: "Protects service-based businesses against claims of negligence, errors, or omissions in professional services.",
    color: "from-[#002F4B] to-[#002F4B]/80"
  },
  {
    icon: FaTruck,
    title: "Commercial Auto Insurance",
    description: "Covers vehicles owned or used by your business for work purposes. Includes liability, collision, and comprehensive coverage.",
    color: "from-[#001B2E] to-[#001B2E]/80"
  }
];

export default function CommercialInsurancePage() {
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
                Commercial Insurance
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#FDF6E3]">
              Protect Your
              <br/>
              <span className="bg-gradient-to-r from-[#B8860B] to-[#FDF6E3] bg-clip-text text-transparent">
                Business Empire
              </span>
            </h1>
            <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive commercial insurance solutions designed to safeguard your business, employees, and assets from unexpected risks and liabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Insurance Services Grid */}
      <section className="py-20 bg-gradient-to-br from-[#002F4B] via-[#001B2E] to-[#002F4B]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#B8860B] rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#FDF6E3] rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">Our Commercial Insurance Services</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#FDF6E3]/80 max-w-2xl mx-auto">
              From small startups to established enterprises, we provide tailored commercial insurance solutions that grow with your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialInsuranceServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-3xl text-[#FDF6E3]" />
                    </div>
                    <h3 className="text-xl font-black text-[#FDF6E3] mb-4 text-center">{service.title}</h3>
                    <p className="text-[#FDF6E3]/80 leading-relaxed text-center">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Commercial Insurance Matters Section */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#002F4B] mb-6">Why Commercial Insurance Matters</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaBuilding className="text-[#FDF6E3] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#002F4B] text-lg mb-3">Business Continuity</h3>
                  <p className="text-[#002F4B]/80 text-sm">Keep your business running smoothly even when unexpected events threaten your operations.</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaShieldAlt className="text-[#FDF6E3] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#002F4B] text-lg mb-3">Legal Protection</h3>
                  <p className="text-[#002F4B]/80 text-sm">Shield your business from costly lawsuits and liability claims that could devastate your finances.</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaUsers className="text-[#FDF6E3] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#002F4B] text-lg mb-3">Employee Security</h3>
                  <p className="text-[#002F4B]/80 text-sm">Provide essential protection for your workforce with comprehensive workers' compensation coverage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Business Success Stories */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#002F4B] mb-6">Built for Business Success</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            
            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaTools className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#002F4B] text-sm mb-2">CONTRACTORS</h4>
                <p className="text-[#002F4B]/70 text-xs">Bonding & liability coverage</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaBuilding className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#002F4B] text-sm mb-2">RETAIL STORES</h4>
                <p className="text-[#002F4B]/70 text-xs">Property & liability protection</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaFileContract className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#002F4B] text-sm mb-2">CONSULTANTS</h4>
                <p className="text-[#002F4B]/70 text-xs">Professional E&O coverage</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaTruck className="text-[#002F4B] text-xl" />
                </div>
                <h4 className="font-black text-[#002F4B] text-sm mb-2">LOGISTICS</h4>
                <p className="text-[#002F4B]/70 text-xs">Fleet & cargo insurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B8860B] via-[#B8860B]/95 to-[#B8860B]/90">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-black text-[#002F4B] mb-8">Ready to Secure Your Business?</h2>
          <p className="text-xl text-[#002F4B]/80 mb-12 max-w-2xl mx-auto">
            Don't let unexpected events threaten your business success. Get comprehensive commercial insurance coverage that adapts to your industry and growth plans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contactus" className="inline-block">
              <button className="bg-gradient-to-r from-[#002F4B] to-[#002F4B]/80 hover:from-[#002F4B]/90 hover:to-[#002F4B] text-[#FDF6E3] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <FaQuoteLeft className="inline mr-2" />
                Get Business Quote
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