'use client';
import { ShieldCheck, ExternalLink, Mail, MapPin, Globe } from 'lucide-react';
import Image from 'next/image';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 px-4 border-t border-white/5 font-primary">
      <div className="max-w-[1100px] mx-auto">
        
        {/* 1. TRUST & RERA SECTION */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-yellow-500">
              <ShieldCheck className="w-6 h-6" />
              <h5 className="text-[10px] tracking-[0.5em] uppercase font-bold text-white">RERA Compliance</h5>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest leading-relaxed">
                Irish Platinum is registered under UP RERA. All project details, including sanction plans and layouts, are available for public viewing on the official portal.
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold text-sm tracking-tighter uppercase">
                  Reg No: UPRERAPRJ503189/03/2024
                </span>
                <a 
                  href="https://www.up-rera.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-yellow-500/80 hover:text-yellow-500 text-[10px] uppercase tracking-widest transition-colors"
                >
                  Verify on UP-RERA Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* QR CODE PLACEHOLDER */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="w-32 h-32 bg-neutral-900 border border-white/10 rounded-2xl flex items-center justify-center relative group overflow-hidden">
               {/* Replace with actual QR image */}
               <div className="absolute inset-0 bg-yellow-500/5 group-hover:bg-transparent transition-colors" />
              <Image 
    src="/banks/qr.png" 
    alt="RERA QR Code" 
    width={120} height={170}
  />
            
            </div>
            <p className="text-gray-600 text-[8px] uppercase tracking-[0.3em] text-center md:text-right">
              Project: Irish Platinum | Sec-10 <br /> Greater Noida West
            </p>
          </div>
        </div>

        <hr className="border-white/5 mb-12" />

        {/* 2. DISCLAIMER SECTION */}
        <div className="mb-16">
          <p className="text-gray-600 text-[9px] md:text-[10px] leading-relaxed uppercase tracking-wide text-center md:text-left">
            <span className="text-white">Disclaimer:</span> This website is purely for informational purposes and does not constitute a legal offer. 
            We are <span className="text-yellow-500/80 italic">*not* the official website</span> of the Irish Group or M/S Irish Buildcon Pvt Ltd. 
            The information, images, and renders shown here are indicative of the proposed development. 
            For official confirmation, please refer to the documents filed with the RERA authorities.
          </p>
        </div>

        {/* 3. BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gray-500 font-medium">
            © {currentYear} Irish Platinum | Sector 10
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href="https://x.com/heyisomer" 
              target="_blank" 
              className="text-gray-500 hover:text-yellow-500 transition-colors text-[10px]"
            >
              Contact Developer: @heyisomer
            </a>
            <div className="h-4 w-[1px] bg-white/10" />
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white text-[10px] tracking-widest uppercase hover:text-yellow-500 transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
  <a href="/privacy" className="text-[9px] text-gray-600 hover:text-white uppercase tracking-widest transition-colors">
    Privacy Policy
  </a>
  <span className="text-gray-800">|</span>
  <a href="#" className="text-[9px] text-gray-600 hover:text-white uppercase tracking-widest transition-colors">
    Terms of Use
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}