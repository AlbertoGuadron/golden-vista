"use client";

import Link from "next/link";
import { 
  FaHome, 
  FaCar, 
  FaBuilding, 
  FaMotorcycle, 
  FaShip,
  FaDog,
  FaCaravan,
  FaFileContract,
  FaHandshake,
  FaArrowLeft,
  FaPhone,
  FaQuoteLeft
} from "react-icons/fa";
import Header from "@/components/header";
import Footer from "@/components/footer";

const personalInsuranceServices = [
  {
    icon: FaHome,
    title: "Home Insurance",
    description: "Protects your home and personal belongings against damage or loss from fire, theft, storms, and other covered events. Also includes liability coverage.",
    color: "from-[#B8860B] to-[#B8860B]/80"
  },
  {
    icon: FaCar,
    title: "Auto Insurance", 
    description: "Covers damages to your vehicle, liability for injuries or property damage to others, and may include collision, comprehensive, uninsured motorist, and more.",
    color: "from-[#FDF6E3] to-[#FDF6E3]/80"
  },
  {
    icon: FaBuilding,
    title: "Renters Insurance",
    description: "Covers your personal belongings inside a rented home or apartment. Also provides liability protection and may cover temporary living expenses.",
    color: "from-[#B8860B] to-[#B8860B]/80"
  },
  {
    icon: FaHome,
    title: "Condo Insurance",
    description: "Protects the interior of your condo unit, personal property, and liability. Complements the condo association's master policy.",
    color: "from-[#FDF6E3] to-[#FDF6E3]/80"
  },
  {
    icon: FaCaravan,
    title: "RV Insurance",
    description: "Insures motorhomes, camper vans, and travel trailers. Covers liability, physical damage, personal belongings, and trip interruptions.",
    color: "from-[#B8860B] to-[#B8860B]/80"
  },
  {
    icon: FaMotorcycle,
    title: "Motorcycle Insurance",
    description: "Provides protection for your bike, including liability, collision, theft, and optional coverage for gear and accessories.",
    color: "from-[#FDF6E3] to-[#FDF6E3]/80"
  },
  {
    icon: FaShip,
    title: "Boat / Personal Watercraft Insurance",
    description: "Covers physical damage, theft, and liability for boats, jet skis, and other personal watercraft used for recreation.",
    color: "from-[#B8860B] to-[#B8860B]/80"
  },
  {
    icon: FaCar,
    title: "Classic Car Insurance",
    description: "Specialized coverage for vintage, antique, or collectible cars. Offers agreed value coverage and limits on mileage and usage.",
    color: "from-[#FDF6E3] to-[#FDF6E3]/80"
  },
  {
    icon: FaDog,
    title: "Pet Insurance",
    description: "Helps cover veterinary bills for accidents, illnesses, and preventive care for your dog or cat.",
    color: "from-[#B8860B] to-[#B8860B]/80"
  }
];

export default function PersonalInsurancePage() {
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
                Personal Insurance
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#FDF6E3]">
              Protect What
              <br/>
              <span className="bg-gradient-to-r from-[#B8860B] to-[#FDF6E3] bg-clip-text text-transparent">
                Matters Most
              </span>
            </h1>
            <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive personal insurance coverage options designed to protect you, your family, and your assets from life's unexpected moments.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Insurance Services Grid */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#002F4B] mb-6">Our Personal Insurance Services</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#002F4B]/70 max-w-2xl mx-auto">
              From your home to your vehicles, from recreational activities to beloved pets - we've got you covered with tailored protection plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInsuranceServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group relative">
                  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color.includes('FDF6E3') ? 'from-[#002F4B] to-[#002F4B]/80' : service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`text-3xl ${service.color.includes('FDF6E3') ? 'text-[#FDF6E3]' : 'text-[#002F4B]'}`} />
                    </div>
                    <h3 className="text-xl font-black text-[#002F4B] mb-4 text-center">{service.title}</h3>
                    <p className="text-[#002F4B]/70 leading-relaxed text-center">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Personal Insurance Matters Section */}
      <section className="py-20 bg-gradient-to-br from-[#002F4B] via-[#002F4B]/95 to-[#001B2E]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#B8860B] rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#FDF6E3] rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">Why Personal Insurance Matters</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FDF6E3]/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaHome className="text-[#002F4B] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#FDF6E3] text-lg mb-3">Asset Protection</h3>
                  <p className="text-[#FDF6E3]/80 text-sm">Safeguard your most valuable investments including your home, vehicles, and personal belongings.</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaHandshake className="text-[#002F4B] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#FDF6E3] text-lg mb-3">Liability Coverage</h3>
                  <p className="text-[#FDF6E3]/80 text-sm">Protect yourself from legal and financial responsibility for accidents or injuries involving others.</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <FaDog className="text-[#002F4B] text-2xl" />
                  </div>
                  <h3 className="font-bold text-[#FDF6E3] text-lg mb-3">Peace of Mind</h3>
                  <p className="text-[#FDF6E3]/80 text-sm">Live confidently knowing you and your loved ones are protected against unexpected events.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B8860B] via-[#B8860B]/95 to-[#B8860B]/90">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-black text-[#002F4B] mb-8">Get Your Personal Insurance Quote Today</h2>
          <p className="text-xl text-[#002F4B]/80 mb-12 max-w-2xl mx-auto">
            Don't leave your family's security to chance. Contact Golden Vista Insurance Agency for personalized coverage that fits your lifestyle and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contactus" className="inline-block">
              <button className="bg-gradient-to-r from-[#002F4B] to-[#002F4B]/80 hover:from-[#002F4B]/90 hover:to-[#002F4B] text-[#FDF6E3] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <FaQuoteLeft className="inline mr-2" />
                Get Free Quote
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