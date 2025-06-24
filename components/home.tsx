"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Truck, House, Car, Users, Award, Clock, MapPin } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "TRUCKING INSURANCE",
      subtitle: "Complete Coverage for Commercial Fleets",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      icon: <Truck className="w-16 h-16" />,
      description: "Protecting your livelihood on every mile"
    },
    {
      id: 2,
      title: "HOME INSURANCE",
      subtitle: "Safeguarding Your Family's Foundation",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      icon: <House className="w-16 h-16" />,
      description: "Your sanctuary deserves comprehensive protection"
    },
    {
      id: 3,
      title: "AUTO INSURANCE",
      subtitle: "Drive with Confidence Every Day",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      icon: <Car className="w-16 h-16" />,
      description: "Coverage that moves with your lifestyle"
    },
    {
      id: 4,
      title: "GENERAL LIABILITY",
      subtitle: "Business Protection That Works",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      icon: <Shield className="w-12 h-12" />,
      description: "Comprehensive coverage for contractors and businesses"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#002F4B]/90 via-[#002F4B]/70 to-[#002F4B]/50"></div>
            </div>
            
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="container mx-auto px-8 text-center">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-[#B8860B]/30 backdrop-blur-sm rounded-full border-4 border-[#B8860B]/60 mb-6 hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#B8860B]/20">
                      {React.cloneElement(slide.icon, { className: "w-12 h-12 text-[#B8860B]" })}
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FDF6E3] mb-6 tracking-tight leading-none">
                    {slide.title}
                  </h1>
                  
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FDF6E3]/90 mb-8 tracking-wide">
                    {slide.subtitle}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-[#FDF6E3]/80 font-medium tracking-wide">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-[#B8860B]/30 backdrop-blur-sm border-2 border-[#B8860B]/60 hover:bg-[#B8860B] hover:text-[#002F4B] text-[#B8860B] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#B8860B]/30"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-[#B8860B]/30 backdrop-blur-sm border-2 border-[#B8860B]/60 hover:bg-[#B8860B] hover:text-[#002F4B] text-[#B8860B] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#B8860B]/30"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#B8860B] scale-125 shadow-lg shadow-[#B8860B]/40' 
                  : 'bg-[#B8860B]/50 hover:bg-[#B8860B]/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#B8860B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#002F4B] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 rounded-full mb-8 shadow-2xl">
                <Shield className="w-10 h-10 text-[#002F4B]" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#002F4B] mb-8 tracking-tight leading-none">
                TAILORED INSURANCE SOLUTIONS
              </h2>
              
              <div className="flex items-center justify-center space-x-3 mb-8">
                <MapPin className="w-6 h-6 text-[#002F4B]" />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#002F4B]/90 tracking-wide">
                  IN RIVERSIDE, CA
                </h3>
              </div>
              
              <div className="h-2 w-32 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/60 rounded-full mx-auto"></div>
            </div>

            {/* Main Content */}
            <div className="bg-gradient-to-br from-[#B8860B]/10 to-[#002F4B]/10 backdrop-blur-sm rounded-3xl p-12 border-4 border-[#B8860B]/30 hover:border-[#B8860B]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B8860B]/20">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[#002F4B] font-medium text-center mb-12">
                Insurance isn't just paperwork, <span className="font-black text-[#002F4B]">it's your defense against the unexpected</span>. 
                Whether you're a trucker running loads on the 60, a homeowner facing flood risk near the Santa Ana River, 
                or a contractor navigating strict city permit laws, 
                <span className="font-black text-[#002F4B]"> Golden Vista Agency offers complete Insurance solutions in Riverside, CA</span>, 
                crafting coverage that fits the streets you live and work on.
              </p>
              
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[#002F4B] font-medium text-center mb-12">
                We protect your livelihood, commercial fleets, family homes, leased units, and even life itself, 
                against <span className="font-black text-[#002F4B]">real threats, not just theoretical ones</span>. 
                With <span className="font-black text-[#002F4B]">14+ years rooted in Riverside</span>, 
                we know where claims fall through and how to close those gaps, delivering policies built for impact, not appearances.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="w-8 h-8 text-[#002F4B]" />
                  </div>
                  <h4 className="text-3xl font-black text-[#002F4B] mb-2">14+</h4>
                  <p className="text-lg font-bold text-[#002F4B]/80">Years of Experience</p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-8 h-8 text-[#002F4B]" />
                  </div>
                  <h4 className="text-3xl font-black text-[#002F4B] mb-2">1000+</h4>
                  <p className="text-lg font-bold text-[#002F4B]/80">Satisfied Clients</p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="w-8 h-8 text-[#002F4B]" />
                  </div>
                  <h4 className="text-3xl font-black text-[#002F4B] mb-2">24/7</h4>
                  <p className="text-lg font-bold text-[#002F4B]/80">Support Available</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <button className="group relative px-12 py-6 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 text-[#002F4B] font-black text-xl tracking-wide rounded-2xl hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-4 border-[#B8860B] hover:border-[#B8860B]/80">
                <span className="relative z-10">GET YOUR QUOTE TODAY</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#B8860B]/80 to-[#B8860B] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;