"use client";

import Link from "next/link";
import { 
  FaHome, 
  FaBuilding, 
  FaTruck, 
  FaStar,
  FaArrowRight,
  FaFileContract,
  FaHandshake
} from "react-icons/fa";
import Header from "@/components/header";
import Footer from "@/components/footer";

const mainServices = [
  {
    icon: FaHome,
    title: "Personal Insurance",
    description: "Comprehensive protection for you and your family. From home and auto insurance to recreational vehicles and pet coverage.",
    features: ["Home Insurance", "Auto Insurance", "Renters Insurance", "RV Insurance", "Pet Insurance"],
    color: "from-[#B8860B] to-[#B8860B]/80",
    link: "/services/personal",
    buttonText: "Explore Personal Insurance"
  },
  {
    icon: FaBuilding,
    title: "Commercial Insurance",
    description: "Protect your business with tailored coverage solutions. General liability, property protection, and professional services coverage.",
    features: ["Business Owners Policy", "General Liability", "Workers' Compensation", "Professional Liability"],
    color: "from-[#002F4B] to-[#002F4B]/80",
    link: "/services/commercial",
    buttonText: "Explore Commercial Insurance"
  },
  {
    icon: FaTruck,
    title: "Trucking Insurance",
    description: "Specialized coverage for trucking operations. Complete protection for your fleet, cargo, and business operations.",
    features: ["Auto Liability", "Physical Damage", "Motor Truck Cargo", "General Liability"],
    color: "from-[#B8860B]/90 to-[#B8860B]/70",
    link: "/services/trucking",
    buttonText: "Explore Trucking Insurance"
  },
  {
    icon: FaStar,
    title: "Specialty Services",
    description: "Unique coverage solutions for special situations. Events, travel, bonds, and specialized protection options.",
    features: ["Special Events Insurance", "Travel Insurance", "Surety Bonds", "Home Warranty"],
    color: "from-[#001B2E] to-[#002A40]",
    link: "/services/specialty",
    buttonText: "Explore Specialty Services"
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

      {/* Main Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-[#002F4B] mb-6">Our Insurance Categories</h3>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#002F4B]/70 max-w-2xl mx-auto">
              Choose from our four main insurance categories, each designed to provide comprehensive protection for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              const isPersonalOrTrucking = service.title.includes('Personal') || service.title.includes('Trucking');
              const isCommercialOrSpecialty = service.title.includes('Commercial') || service.title.includes('Specialty');
              
              return (
                <div key={index} className="group relative">
                  <div className={`${
                    isPersonalOrTrucking 
                      ? 'bg-white/60 backdrop-blur-sm' 
                      : 'bg-[#002F4B]/10 backdrop-blur-sm'
                  } rounded-3xl p-10 border-2 ${
                    isPersonalOrTrucking 
                      ? 'border-[#002F4B]/10 hover:border-[#B8860B]/40' 
                      : 'border-[#B8860B]/20 hover:border-[#B8860B]/40'
                  } transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full flex flex-col`}>
                    
                    {/* Icon and Title */}
                    <div className="text-center mb-6">
                      <div className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`text-4xl ${
                          isPersonalOrTrucking ? 'text-[#FDF6E3]' : 'text-[#FDF6E3]'
                        }`} />
                      </div>
                      <h4 className={`text-2xl font-black mb-4 ${
                        isPersonalOrTrucking ? 'text-[#002F4B]' : 'text-[#002F4B]'
                      }`}>{service.title}</h4>
                    </div>

                    {/* Description */}
                    <p className={`${
                      isPersonalOrTrucking ? 'text-[#002F4B]/70' : 'text-[#002F4B]/70'
                    } leading-relaxed text-center mb-6 flex-grow`}>
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-8">
                      <h5 className={`font-bold mb-4 text-center ${
                        isPersonalOrTrucking ? 'text-[#002F4B]' : 'text-[#002F4B]'
                      }`}>Includes:</h5>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={`flex items-center justify-center ${
                            isPersonalOrTrucking ? 'text-[#002F4B]/80' : 'text-[#002F4B]/80'
                          } text-sm`}>
                            <span className="w-2 h-2 bg-[#B8860B] rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                      <Link href={service.link} className="inline-block">
                        <button className={`group/btn w-full ${
                          isPersonalOrTrucking 
                            ? 'bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 hover:from-[#B8860B]/90 hover:to-[#B8860B] text-[#002F4B]' 
                            : 'bg-gradient-to-r from-[#002F4B] to-[#002F4B]/80 hover:from-[#002F4B]/90 hover:to-[#002F4B] text-[#FDF6E3]'
                        } font-black py-4 px-6 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2`}>
                          <span>{service.buttonText}</span>
                          <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                      </Link>
                    </div>
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
            <Link href="/contactus" className="inline-block">
              <button className="bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 hover:from-[#B8860B]/90 hover:to-[#B8860B] text-[#002F4B] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <FaFileContract className="inline mr-2" />
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