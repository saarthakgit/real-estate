'use client';
import { Phone, Menu } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-6xl backdrop-blur-xl bg-black/60 border border-yellow-500/30 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all duration-500">
        
        {/* LEFT: Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image 
              src="/irish.png" 
              alt="Irish Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <div className="text-lg font-primary font-medium text-white tracking-[0.15em] hidden sm:block uppercase">
            Irish <span className="text-yellow-500 font-black">Platinum</span>
          </div>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] text-gray-300 font-light font-primary">
          <a href="#amenities" className="hover:text-yellow-500 transition-all hover:tracking-[0.4em]">Amenities</a>
          <a href="#layout" className="hover:text-yellow-500 transition-all hover:tracking-[0.4em]">Layout</a>
          <a href="#paymentplan" className="hover:text-yellow-500 transition-all hover:tracking-[0.4em]">Payment Plan</a>
        </div>

        {/* RIGHT: Pill CTA Button */}
        <div className="flex items-center gap-2">
          <a 
            href="tel:+918920840946" 
            className="flex items-center gap-2 px-6 py-2.5 bg-yellow-500 text-black font-black font-primary uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all active:scale-95 shadow-lg"
          >
            <Phone size={12} fill="currentColor" /> Call Now
          </a>
          
          <button className="md:hidden p-2 text-white hover:text-yellow-500 transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </div>
  );
}