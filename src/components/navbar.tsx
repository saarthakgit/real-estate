'use client';
import { Phone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10">
      {/* Brand */}
      <div className="text-2xl font-serif text-white tracking-widest">
        IRISH <span className="text-yellow-500">PLATINUM</span>
      </div>

      {/* Desktop Links (Hidden on Mobile) */}
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">
        <a href="#overview" className="hover:text-white transition">Overview</a>
        <a href="#amenities" className="hover:text-white transition">Amenities</a>
        <a href="#location" className="hover:text-white transition">Location</a>
      </div>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <a 
          href="tel:+919876543210" 
          className="hidden md:flex items-center gap-2 px-5 py-2 bg-white text-black font-bold uppercase text-xs tracking-wider hover:bg-gray-200 transition"
        >
          <Phone size={14} /> Call Now
        </a>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}