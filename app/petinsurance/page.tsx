"use client";

import React, { useState, useEffect } from 'react';
import { Shield, Zap, MessageCircle, Heart, Clock, Phone, Play, Star, Award, Clipboard } from 'lucide-react';
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Interfaces para los tipos
interface FloatingEmojiProps {
  emoji: string;
  delay?: number;
}

interface TestimonialCardProps {
  name: string;
  pet: string;
  image: string;
  testimonial: string;
  rating: number;
}

interface Testimonial {
  name: string;
  pet: string;
  image: string;
  testimonial: string;
  rating: number;
}

// Floating animation component
const FloatingEmoji: React.FC<FloatingEmojiProps> = ({ emoji, delay = 0 }) => {
  return (
    <div 
      className="absolute animate-bounce text-4xl opacity-30 hover:opacity-70 transition-opacity duration-300"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      {emoji}
    </div>
  );
};

// Testimonial component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, pet, image, testimonial, rating }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
      <div className="flex items-center mb-6">
        <img 
          src={image}
          alt={`${name} with ${pet}`}
          className="w-20 h-20 rounded-full border-4 border-[#B8860B]/30 mr-4 object-cover"
        />
        <div>
          <h4 className="font-black text-[#002F4B] text-lg">{name}</h4>
          <p className="text-[#B8860B] font-bold">Pet Parent to {pet}</p>
          <div className="flex space-x-1 mt-2">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="text-[#B8860B] w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-[#002F4B]/80 italic leading-relaxed">"{testimonial}"</p>
    </div>
  );
};

const PetInsurancePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      pet: "Buddy 🐕",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      testimonial: "When Buddy swallowed a toy, Prudent Pet covered the $3,200 surgery. The claim was processed in just 12 hours!",
      rating: 5
    },
    {
      name: "Mike Chen",
      pet: "Whiskers 🐱",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "The 24/7 vet chat saved us a midnight emergency visit. Whiskers is healthy and we saved $400!",
      rating: 5
    },
    {
      name: "Emma Davis",
      pet: "Luna & Max 🐕🐱",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial: "Having both my pets covered gives me such peace of mind. The customer service is amazing!",
      rating: 5
    }
  ];

  const petImages: string[] = [
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=300&h=300&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleTestimonialChange = (index: number): void => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="bg-gradient-to-br from-[#FDF6E3] via-[#FDF6E3]/98 to-[#FDF6E3]/95 min-h-screen overflow-hidden">
      
      <Header/>
      {/* Hero Section with Floating Elements */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#002F4B] via-[#002F4B]/95 to-[#001B2E]">
        {/* Floating pet emojis */}
        <FloatingEmoji emoji="🐕" delay={0} />
        <FloatingEmoji emoji="🐱" delay={1} />
        <FloatingEmoji emoji="🐾" delay={2} />
        <FloatingEmoji emoji="🦴" delay={0.5} />
        <FloatingEmoji emoji="🎾" delay={1.5} />
        
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8860B] rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FDF6E3] rounded-full blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6">
                <span className="bg-[#B8860B]/20 text-[#B8860B] px-6 py-3 rounded-full font-bold text-lg tracking-wide border-2 border-[#B8860B]/30">
                  🏆 Prudent Pet Insurance
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#FDF6E3]">
                Paw-some
                <br/>
                <span className="bg-gradient-to-r from-[#B8860B] to-[#FDF6E3] bg-clip-text text-transparent">
                  Pet Protection! 🐾
                </span>
              </h1>
              <p className="text-xl text-[#FDF6E3]/80 max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-8">
                From playful puppies to wise senior cats, we've got your furry family covered! ⚡ Lightning-fast claims, 🩺 24/7 vet chat, and ❤️ unlimited love included.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="https://www.prudentpet.com" className="inline-block" target='_blank'>
                <button 
                  type="button"
                  className="bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 hover:from-[#B8860B]/90 hover:to-[#B8860B] text-[#002F4B] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  🎯 Get Free Quote
                </button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1000&auto=format&fit=crop"
                alt="Happy pets playing together - dogs and cats"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover hover:transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-[#B8860B] text-[#002F4B] px-4 py-2 rounded-full font-black text-sm animate-pulse">
                😍 99% Happy Pets!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section with Fun Elements */}
      <section className="py-16 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="text-8xl animate-pulse">🏆</div>
          <div className="text-6xl animate-bounce absolute top-8 right-8">⭐</div>
          <div className="text-7xl animate-pulse absolute bottom-8 left-8">🎉</div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#002F4B] rounded-full mb-6 shadow-xl animate-bounce">
              <span className="text-3xl">🏆</span>
            </div>
            <h2 className="text-3xl font-black text-[#002F4B] mb-4">
              🥇 Rated #1 Pet Insurance on Trustpilot! 
            </h2>
            <p className="text-lg text-[#002F4B]/80 max-w-2xl mx-auto">
              Join thousands of tail-wagging, purring families who trust us! 🐕‍🦺🐱‍👤
            </p>
            
            <div className="flex justify-center items-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-black text-[#002F4B]">50K+</div>
                <div className="text-sm font-bold text-[#002F4B]/80">Happy Pets 😊</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#002F4B]">24hrs</div>
                <div className="text-sm font-bold text-[#002F4B]/80">Avg Processing ⚡</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#002F4B]">4.9★</div>
                <div className="text-sm font-bold text-[#002F4B]/80">Customer Rating 🌟</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#002F4B] mb-6">
              🎪 What Makes Us Paw-some! 
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group hover:animate-pulse">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-black text-[#002F4B] mb-4 text-center">Lightning-Fast Claims ⚡</h3>
                <p className="text-[#002F4B]/70 leading-relaxed text-center">75% of claims processed in 24 hours! Faster than your dog chasing a squirrel! 🐿️</p>
              </div>
            </div>
            
            <div className="group hover:animate-pulse">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-black text-[#002F4B] mb-4 text-center">24/7 Vet Chat 🩺</h3>
                <p className="text-[#002F4B]/70 leading-relaxed text-center">Real vets, real answers, anytime! No more 3 AM panic searches! 🌙</p>
              </div>
            </div>
            
            <div className="group hover:animate-pulse">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#002F4B]/10 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏥</span>
                </div>
                <h3 className="text-xl font-black text-[#002F4B] mb-4 text-center">Any Vet, Anywhere! 🗺️</h3>
                <p className="text-[#002F4B]/70 leading-relaxed text-center">No networks, no restrictions! Your pet, your vet, your choice! 🎯</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-[#002F4B] via-[#001B2E] to-[#002F4B]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#FDF6E3] mb-6">
              📸 Meet Our Protected Pets! 
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#FDF6E3]/80 max-w-2xl mx-auto">
              Every wagging tail and purring kitty has a story! 📖✨
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {petImages.map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={src}
                  alt={`Happy pet ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002F4B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-bold text-lg">Protected! ✅</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-r from-[#B8860B] via-[#B8860B]/95 to-[#B8860B]/90">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#002F4B] mb-6">
              💝 What Pet Parents Say 
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#002F4B] to-transparent rounded-full mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleTestimonialChange(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-[#002F4B] scale-125' 
                      : 'bg-[#002F4B]/50 hover:bg-[#002F4B]/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Plan Section */}
      <section className="py-20 bg-gradient-to-br from-[#FDF6E3] to-[#FDF6E3]/90">
        <div className="container mx-auto px-8">
          <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-500 hover:shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#B8860B] to-[#B8860B]/80 rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse">
                  <span className="text-4xl">🌟</span>
                </div>
              </div>
              
              <h2 className="text-4xl font-black text-[#002F4B] mb-8">
                🎉 Most Paw-pular: Essential Plan 
              </h2>
              
              <p className="text-xl text-[#002F4B]/80 leading-relaxed mb-8">
                Simple, powerful protection with no ruff surprises! 🐕 Perfect for keeping tails wagging and purr-motors running! 🐱
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#B8860B]/20 rounded-2xl p-6 border border-[#B8860B]/40 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-2xl font-black text-[#002F4B] mb-2">$10,000</h3>
                  <p className="text-lg font-bold text-[#002F4B]/80">Annual Limit</p>
                </div>
                
                <div className="bg-[#B8860B]/20 rounded-2xl p-6 border border-[#B8860B]/40 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-2xl font-black text-[#002F4B] mb-2">$500</h3>
                  <p className="text-lg font-bold text-[#002F4B]/80">Annual Deductible</p>
                </div>
                
                <div className="bg-[#B8860B]/20 rounded-2xl p-6 border border-[#B8860B]/40 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">❤️</div>
                  <h3 className="text-2xl font-black text-[#002F4B] mb-2">80%</h3>
                  <p className="text-lg font-bold text-[#002F4B]/80">Reimbursement</p>
                </div>
              </div>
              
              <div className="bg-[#B8860B]/10 rounded-2xl p-6 border border-[#B8860B]/30">
                <p className="text-lg font-bold text-[#002F4B] mb-2">🚫 Pre-existing conditions not covered</p>
                <p className="text-[#002F4B]/80">But everything else? We've got your pet's back! 🛡️</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Animation */}
      <section className="py-20 bg-gradient-to-br from-[#001B2E] via-[#002A40] to-[#001B2E] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-9xl animate-bounce absolute top-0 left-0">🐾</div>
          <div className="text-8xl animate-pulse absolute top-20 right-20">❤️</div>
          <div className="text-7xl animate-bounce absolute bottom-20 left-20">🎾</div>
          <div className="text-6xl animate-pulse absolute bottom-0 right-0">🏠</div>
        </div>
        
        <div className="container mx-auto px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 rounded-full mb-8 shadow-2xl animate-bounce">
            <span className="text-3xl">🚀</span>
          </div>
          
          <h2 className="text-4xl font-black text-[#FDF6E3] mb-8">
            Ready to Give Your Pet the Best? 🏆
          </h2>
          <p className="text-xl text-[#FDF6E3]/80 mb-12 max-w-2xl mx-auto">
            Join the pack! Get a quote faster than a cat video going viral! 📱✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="https://www.prudentpet.com" className="inline-block" target='_blank'>
            <button 
              type="button"
              className="bg-gradient-to-r from-[#B8860B] to-[#B8860B]/80 hover:from-[#B8860B]/90 hover:to-[#B8860B] text-[#002F4B] font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse hover:animate-none"
            >
              🎯 Get Free Quote Now!
            </button>
            </Link>
          </div>
          
          <div className="mt-12 text-[#FDF6E3]/60">
            <p className="text-sm">🕒 Average quote time: 3 minutes | 🎉 No hidden fees | 💯 100% satisfaction guaranteed</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default PetInsurancePage;