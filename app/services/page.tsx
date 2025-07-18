"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  FaHome, 
  FaCar, 
  FaBuilding, 
  FaShieldAlt, 
  FaTruck, 
  FaMotorcycle, 
  FaShip,
  FaDog,
  FaCaravan,
  FaCalendarAlt,
  FaCertificate,
  FaHandshake,
  FaTools,
  FaUsers,
  FaFileContract,
  FaPlane,
  FaAnchor
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

export default function ServicesPage() {
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
                Our Services
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#FDF6E3]">
              Comprehensive
              <br/>
              <span className="bg-gradient-to-r from-[#B8860B] to-[#FDF6E3] bg-clip-text text-transparent">
                Insurance Solutions
              </span>
            </h2>
            <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto leading-relaxed">
              From personal protection to commercial coverage, we offer a complete range of insurance services tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Insurance Section */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-[#002F4B] mb-6">Personal Insurance</h3>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#002F4B]/70 max-w-2xl mx-auto">
              Protect what matters most to you with our comprehensive personal insurance coverage options.
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
                    <h4 className="text-xl font-black text-[#002F4B] mb-4 text-center">{service.title}</h4>
                    <p className="text-[#002F4B]/70 leading-relaxed text-center">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commercial Insurance Section */}
      <section className="py-20 bg-gradient-to-br from-[#002F4B] via-[#001B2E] to-[#002F4B]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#B8860B] rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#FDF6E3] rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-[#FDF6E3] mb-6">Commercial Insurance</h3>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#FDF6E3]/80 max-w-2xl mx-auto">
              Safeguard your business with our comprehensive commercial insurance solutions designed for modern enterprises.
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
                    <h4 className="text-xl font-black text-[#FDF6E3] mb-4 text-center">{service.title}</h4>
                    <p className="text-[#FDF6E3]/80 leading-relaxed text-center">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trucking Insurance Section */}
      <section className="py-20 bg-gradient-to-r from-[#B8860B] via-[#B8860B]/95 to-[#B8860B]/90">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-[#002F4B] mb-6">Trucking Insurance</h3>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#002F4B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#002F4B]/80 max-w-2xl mx-auto">
              Specialized coverage for trucking operations with comprehensive protection for your fleet and cargo.
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
                    <h4 className="text-xl font-black text-[#002F4B] mb-4 text-center">{service.title}</h4>
                    <p className="text-[#002F4B]/80 leading-relaxed text-center">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty Services Section */}
      <section className="py-20 bg-gradient-to-br from-[#001B2E] via-[#002A40] to-[#001B2E]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-[#FDF6E3] mb-6">Specialty Services</h3>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#FDF6E3]/80 max-w-2xl mx-auto">
              Additional specialized coverage options for unique situations and special requirements.
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
                    <h4 className="text-2xl font-black text-[#FDF6E3] mb-6 text-center">{service.title}</h4>
                    <p className="text-[#FDF6E3]/80 leading-relaxed text-center text-lg">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8 text-center">
          <h3 className="text-4xl font-black text-[#002F4B] mb-8">Ready to Get Protected?</h3>
          <p className="text-xl text-[#002F4B]/70 mb-12 max-w-2xl mx-auto">
            Contact us today for a personalized quote on any of our insurance services. Our experts are ready to help you find the perfect coverage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 hover:from-[#B8860B]/90 hover:to-[#B8860B] text-[#002F4B] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <FaFileContract className="inline mr-2" />
              Get Free Quote
            </button>
            
            {/*<button className="bg-transparent hover:bg-[#002F4B]/10 text-[#002F4B] font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 border-2 border-[#002F4B]/50 hover:border-[#002F4B]">
              <FaHandshake className="inline mr-2" />
              Schedule Consultation
            </button>*/}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}