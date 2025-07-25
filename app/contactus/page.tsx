"use client";

import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaUser, 
  FaComments,
  FaPaperPlane,
  FaCheckCircle,
  FaShieldAlt,
  FaCar,
  FaHome,
  FaTruck,
  FaBuilding
} from 'react-icons/fa';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactUsPage() {
  console.log('🔍 Componente ContactUs cargado');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🔥 BOTÓN PRESIONADO - handleSubmit ejecutado');
    console.log('📋 Datos actuales del formulario:', formData);
    
    // Verificar que tenemos los datos mínimos
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.insuranceType) {
      console.error('❌ Faltan datos en el formulario');
      alert('Por favor completa todos los campos obligatorios');
      return;
    }
    
    try {
      console.log('📡 Iniciando fetch a /api/contact...');
      console.log('🌐 URL completa:', window.location.origin + '/api/contact');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response ok:', response.ok);
      
      const result = await response.json();
      console.log('📄 Response data:', result);

      if (result.success) {
        console.log('✅ SUCCESS - Email enviado!');
        setIsSubmitted(true);
        
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            insuranceType: '',
            message: ''
          });
        }, 5000);
      } else {
        console.error('❌ Server error:', result.message);
        alert('Error del servidor: ' + result.message);
      }
    } catch (error) {
      console.error('❌ Network/Connection error:', error);
      alert('Error de conexión: ' + error);
    }
  };

  const insuranceOptions = [
    { value: '', label: 'Select Insurance Type' },
    { value: 'auto', label: 'Auto Insurance' },
    { value: 'home', label: 'Home Insurance' },
    { value: 'commercial', label: 'Commercial Insurance' },
    { value: 'trucking', label: 'Trucking Insurance' },
    { value: 'motorcycle', label: 'Motorcycle Insurance' },
    { value: 'renters', label: 'Renters Insurance' },
    { value: 'boat', label: 'Boat Insurance' },
    { value: 'rv', label: 'RV Insurance' },
    { value: 'pet', label: 'Pet Insurance' },
    { value: 'other', label: 'Other' }
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
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#FDF6E3]">
              Get your
              <br/>
              <span className="bg-gradient-to-r from-[#B8860B] to-[#FDF6E3] bg-clip-text text-transparent">
                Free Quote
              </span>
            </h1>
            <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto leading-relaxed">
              Ready to protect what matters most? Our insurance experts are here to help you find the perfect coverage solution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
             {/* Contact Form */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#002F4B] to-[#001B2E] rounded-3xl p-8 shadow-2xl border-4 border-[#B8860B]/30">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <FaComments className="text-2xl text-[#002F4B]" />
                      </div>
                      <h3 className="text-3xl font-black text-[#FDF6E3] mb-4">Get Your Free Quote</h3>
                      <p className="text-[#FDF6E3]/80">Fill out the form below and we'll get back to you with a personalized quote.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#FDF6E3] font-bold mb-2">First Name *</label>
                          <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B8860B]" />
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-4 bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl border-2 border-[#B8860B]/30 focus:border-[#B8860B] focus:outline-none text-[#FDF6E3] placeholder-[#FDF6E3]/50 transition-all duration-300"
                              placeholder="Enter first name"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[#FDF6E3] font-bold mb-2">Last Name *</label>
                          <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B8860B]" />
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-4 bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl border-2 border-[#B8860B]/30 focus:border-[#B8860B] focus:outline-none text-[#FDF6E3] placeholder-[#FDF6E3]/50 transition-all duration-300"
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[#FDF6E3] font-bold mb-2">Email Address *</label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B8860B]" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-4 bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl border-2 border-[#B8860B]/30 focus:border-[#B8860B] focus:outline-none text-[#FDF6E3] placeholder-[#FDF6E3]/50 transition-all duration-300"
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[#FDF6E3] font-bold mb-2">Phone Number *</label>
                        <div className="relative">
                          <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B8860B]" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-4 bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl border-2 border-[#B8860B]/30 focus:border-[#B8860B] focus:outline-none text-[#FDF6E3] placeholder-[#FDF6E3]/50 transition-all duration-300"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>

                      {/* Insurance Type */}
                      <div>
                        <label className="block text-[#FDF6E3] font-bold mb-2">Insurance Type *</label>
                        <div className="relative">
                          <FaShieldAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B8860B] z-10" />
                          <select
                            name="insuranceType"
                            value={formData.insuranceType}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-4 bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl border-2 border-[#B8860B]/30 focus:border-[#B8860B] focus:outline-none text-[#FDF6E3] transition-all duration-300 appearance-none cursor-pointer"
                          >
                            {insuranceOptions.map((option) => (
                              <option 
                                key={option.value} 
                                value={option.value}
                                className="bg-[#002F4B] text-[#FDF6E3]"
                              >
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[#FDF6E3] font-bold mb-2">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-4 bg-[#FDF6E3]/10 backdrop-blur-sm rounded-2xl border-2 border-[#B8860B]/30 focus:border-[#B8860B] focus:outline-none text-[#FDF6E3] placeholder-[#FDF6E3]/50 transition-all duration-300 resize-none"
                          placeholder="Tell us about your insurance needs..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 hover:from-[#B8860B]/90 hover:to-[#B8860B] text-[#002F4B] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2"
                      >
                        <FaPaperPlane className="text-xl" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  </>
                ) : (
                  /* Success Message */
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <FaCheckCircle className="text-4xl text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-[#FDF6E3] mb-4">Message Sent Successfully!</h3>
                    <p className="text-[#FDF6E3]/80 text-lg mb-6">
                      Thank you for contacting Golden Vista Insurance Agency. We'll get back to you within 24 hours with your personalized quote.
                    </p>
                    <div className="bg-[#B8860B]/20 rounded-2xl p-4 border border-[#B8860B]/30">
                      <p className="text-[#B8860B] font-bold">Your message is important to us!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>


            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-4xl font-black text-[#002F4B] mb-6">Let's Connect</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/50 rounded-full mx-auto lg:mx-0 mb-6"></div>
                <p className="text-lg text-[#002F4B]/70">
                  With over 14 years of experience serving California and beyond, we're here to answer your questions and provide personalized insurance solutions.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="group">
                  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <FaPhone className="text-2xl text-[#002F4B]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-[#002F4B] mb-2">Call Us</h3>
                        <p className="text-[#002F4B]/70 text-lg font-bold">(951) 809-1141</p>
                        <p className="text-[#002F4B]/60">Monday - Friday, 9 AM - 6 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                    <div className="flex items-start space-x-6"> {/* Cambiado de items-center a items-start */}
                      <div className="w-16 h-16 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"> {/* Agregado flex-shrink-0 */}
                        <FaEnvelope className="text-2xl text-[#FDF6E3]" />
                      </div>
                      <div className="flex-1 min-w-0"> {/* Agregado flex-1 y min-w-0 para permitir que el contenido se ajuste */}
                        <h3 className="text-xl font-black text-[#002F4B] mb-2">Email Us</h3>
                        <p className="text-[#002F4B]/70 text-lg font-bold break-all sm:break-normal">info@goldenvistains.com</p> {/* Agregado break-all para móvil y break-normal para desktop */}
                        <p className="text-[#002F4B]/60">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="group">
                  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <FaMapMarkerAlt className="text-2xl text-[#002F4B]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-[#002F4B] mb-2">Visit Us</h3>
                        <p className="text-[#002F4B]/70 text-lg font-bold">1160 Hamner Ave STE B</p>
                        <p className="text-[#002F4B]/70 text-lg font-bold">Riverside, CA 92860</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="group">
                  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#002F4B] to-[#002F4B]/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <FaClock className="text-2xl text-[#FDF6E3]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-[#002F4B] mb-2">Business Hours</h3>
                        <p className="text-[#002F4B]/70 font-bold">Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p className="text-[#002F4B]/70 font-bold">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-[#002F4B]/70 font-bold">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-br from-[#002F4B] via-[#002F4B]/95 to-[#001B2E]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">Why Choose Golden Vista?</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#FDF6E3]/80 max-w-2xl mx-auto mb-6">
              Because real coverage starts with real service. We specialize in home, auto, and business insurance, offering expert guidance and customized protection, backed by over 10 years of experience and licensed in 9 states.
            </p>
            <p className="text-lg text-[#FDF6E3]/80 max-w-2xl mx-auto">
            People first. Policies that work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-300 text-center hover:shadow-xl">
              <FaCar className="text-4xl text-[#B8860B] mx-auto mb-4" />
              <h3 className="text-lg font-black text-[#FDF6E3] mb-2">Auto Insurance</h3>
              <p className="text-[#FDF6E3]/70 text-sm">Comprehensive coverage for all your vehicles</p>
            </div>

            <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-300 text-center hover:shadow-xl">
              <FaHome className="text-4xl text-[#B8860B] mx-auto mb-4" />
              <h3 className="text-lg font-black text-[#FDF6E3] mb-2">Home Insurance</h3>
              <p className="text-[#FDF6E3]/70 text-sm">Protecting your home and belongings</p>
            </div>

            <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-300 text-center hover:shadow-xl">
              <FaTruck className="text-4xl text-[#B8860B] mx-auto mb-4" />
              <h3 className="text-lg font-black text-[#FDF6E3] mb-2">Trucking Insurance</h3>
              <p className="text-[#FDF6E3]/70 text-sm">Specialized coverage for commercial fleets</p>
            </div>

            <div className="bg-[#B8860B]/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-300 text-center hover:shadow-xl">
              <FaBuilding className="text-4xl text-[#B8860B] mx-auto mb-4" />
              <h3 className="text-lg font-black text-[#FDF6E3] mb-2">Commercial Insurance</h3>
              <p className="text-[#FDF6E3]/70 text-sm">Complete business protection solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}