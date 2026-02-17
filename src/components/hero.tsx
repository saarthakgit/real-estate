'use client';
import LeadForm from './LeadForm';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen md:min-h-200 flex items-center justify-center overflow-hidden">
      
      {/* 1. The Dynamic Background (Video) */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay loop muted playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          {/* Replace with your actual drone footage later */}
          <source src="/assets/hero-drone.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay so text is readable */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 2. The Container (Holds Text Left + Form Right) */}
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: The Text & Hook */}
        <div className="text-white space-y-6 text-center md:text-left pt-20 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-block px-3 py-1 border border-yellow-500/50 rounded-full text-yellow-400 text-xs tracking-widest uppercase mb-2"
          >
            RERA: UPRERAPRJ123456
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            The Crown Jewel of <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 to-yellow-600">
              Greater Noida
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:max-w-md">
            3/4 BHK Luxury Residences starting @ ₹1.8 Cr*. 
            <br/> <span className="text-sm text-gray-500">*Limited inventory available.</span>
          </p>
        </div>

        {/* RIGHT: The Floating Form */}
        <div className="hidden md:block">
           <LeadForm />
        </div>
      </div>

      {/* MOBILE ONLY: Form appears below hero on phones */}
      <div className="md:hidden w-full px-4 absolute bottom-8 z-20">
         <button className="w-full bg-yellow-500 text-black font-bold py-4 rounded-lg shadow-xl animate-pulse">
            Enquire Now (Prices Rising Soon)
         </button>
      </div>

    </section>
  );
}