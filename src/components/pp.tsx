'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, ShieldCheck, ArrowRight } from 'lucide-react';
import LeadForm from './LeadForm';

const plans = {
  "TOWER C/D": [
    { stage: "At the time of booking", value: "10%", desc: "Initial token" },
    { stage: "within 45 days from Booking", value: "10%", desc: "Post-booking milestone" },
    { stage: "Within 180 day from Booking", value: "20%", desc: "Commitment milestone" },
    { stage: "On Start of 4th floor", value: "8%", desc: "Structure milestone" },
    { stage: "On Start of 10th floor", value: "8%", desc: "Structure milestone" },
    { stage: "On Start of 16th floor", value: "8%", desc: "Structure milestone" },
    { stage: "On Start of 22th floor", value: "8%", desc: "Structure milestone" },
    { stage: "On Start of 28th floor", value: "8%", desc: "Structure milestone" },
    { stage: "On start of finishing work", value: "10%", desc: "Finishing phase" },
    { stage: "On offer of Possession", value: "10%", desc: "Final handover" },
  ],
  "TOWER A/B (CLP)": [
    { stage: "Booking Amount", value: "10%", desc: "At the time of booking" },
    { stage: "On Start of Raft", value: "20%", desc: "Foundation completion" },
    { stage: "On Start of Stilt Roof Casting", value: "10%", desc: "Basement milestone" },
    { stage: "On Start of 4th Floor Casting", value: "8%", desc: "Construction milestone" },
    { stage: "On Start of 10th Floor Casting", value: "8%", desc: "Construction milestone" },
    { stage: "On Start of 16th Floor Casting", value: "8%", desc: "Construction milestone" },
    { stage: "On Start of 22th Floor Casting", value: "8%", desc: "Construction milestone" },
    { stage: "On Start of 28th Floor Casting", value: "8%", desc: "Construction milestone" },
    { stage: "On Start of Finishing work", value: "10%", desc: "Interior milestone" },
    { stage: "On Offer of Possession", value: "10%", desc: "Possession" },
  ],
  "TOWER A/B (50:25:25)": [
    { stage: "Booking Amount", value: "10%", desc: "Initial token" },
    { stage: "Within 30 days from the booking", value: "40%", desc: "Confirmation payment" },
    { stage: "On Start of Top Floor Casting", value: "25%", desc: "Structure completion" },
    { stage: "On Offer of Possession", value: "25%", desc: "Final settlement" },
  ]
};

export default function PaymentSection() {
  const [activeTab, setActiveTab] = useState("TOWER C/D");
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section id="paymentplan" className="bg-black md:py-5 px-4 font-primary overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Header & Tabs */}
        <div className="flex flex-col items-center text-center mb-16 w-full">
          {/* Increased Eyebrow */}
          <h3 className="text-yellow-500 text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-6">
            Investment Transparency
          </h3>
          {/* MASSIVE TITLE */}
          <h4 className="text-4xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-12">
            Payment <span className="text-gray-600 font-extralight italic">Plans</span>
          </h4>
          
          <div className="flex bg-neutral-900/50 p-1.5 rounded-full border border-white/5 backdrop-blur-xl w-full max-w-fit overflow-x-auto scrollbar">
            {Object.keys(plans).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                /* Increased Tab Text */
                className={`px-6 md:px-8 py-3 rounded-full text-sm md:text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase transition-all duration-500 whitespace-nowrap font-bold ${
                  activeTab === tab ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]' : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 w-full items-start">
          
          {/* Main Payment Milestones */}
          <div className="lg:col-span-2 space-y-3 flex flex-col items-center">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-3 w-full max-w-[95vw] md:max-w-none"
              >
                {plans[activeTab as keyof typeof plans].map((item, i) => (
                <div key={i} className="flex items-center justify-between w-full p-5 md:p-6 bg-neutral-900/20 border border-white/5 rounded-2xl group hover:border-yellow-500/20 transition-all">
  
  {/* LEFT GROUP: Icon + Text */}
  <div className="flex items-center gap-5 flex-1">
    
    {/* Icon: Added 'shrink-0' so it never squishes */}
    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all shrink-0">
      <Check className="w-4 h-4" />
    </div>

    {/* Text Content */}
    <div className="flex-1 min-w-0 text-left">
      
      {/* Stage Name: Removed 'truncate', added 'whitespace-normal' */}
      <p className="text-white text-sm md:text-base uppercase tracking-widest font-bold mb-1 whitespace-normal leading-snug">
        {item.stage}
      </p>
      
      {/* Description: Also allows wrapping now */}
      <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-medium whitespace-normal leading-snug">
        {item.desc}
      </p>
    </div>
  </div>

  {/* RIGHT SIDE: Percentage */}
  <span className="text-xl md:text-3xl font-black text-white tracking-tighter shrink-0 ml-6 group-hover:text-yellow-500 transition-colors">
    {item.value}
  </span>

</div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {/* RERA Section */}
            <div className="mt-8 p-5 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl flex items-center gap-4 w-full max-w-[95vw] md:max-w-none">
               <ShieldCheck className="text-yellow-500 w-6 h-6 shrink-0" />
               <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest leading-tight">
                 RERA Registration: <span className="text-white font-bold uppercase">UPRERAPRJ503189/03/2024</span>
               </p>
            </div>
          </div>

          {/* NEW: Updated Other Charges & Banking Column */}
          <div className="flex flex-col items-center w-full gap-8">
            <div className="bg-neutral-900/40 border border-white/5 p-8 md:p-10 rounded-[40px] w-full max-w-[95vw] md:max-w-none text-center lg:text-left relative overflow-hidden group">
              {/* Subtle Background Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 text-yellow-500 justify-center lg:justify-start">
                  <Info className="w-5 h-5" />
                  <p className="text-xs md:text-sm tracking-[0.4em] uppercase font-bold">Additional Costs</p>
                </div>
                
                <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest leading-loose mb-10 font-light">
                  Other charges for <span className="text-white font-bold">Amenities (Power Backup, Club Membership etc.)</span>, Floor PLC, and View preferences apply based on your selected unit.
                </p>

                <button 
                  onClick={() => setModalOpen(true)}
                  className="w-full py-5 bg-yellow-500 text-black font-black text-xs uppercase tracking-[0.25em] rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] group/btn"
                >
                  Request Full Price List 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                
                <p className="mt-6 text-gray-600 text-[10px] uppercase tracking-wider italic">
                  *Official cost sheet will be shared via WhatsApp.
                </p>
              </div>
            </div>

            {/* Escrow Details */}
            <div className="p-8 bg-neutral-900/20 border border-white/5 rounded-[30px] w-full max-w-[95vw] md:max-w-none text-center lg:text-left">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">Developer Entity</p>
              <p className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">M/S Irish Buildcon Pvt Ltd</p>
            </div>
          </div>
        </div>
      </div>

      {/* LEADFORM MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl"
          >
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="relative w-full max-w-md">
              <button 
                onClick={() => setModalOpen(false)} 
                className="absolute -top-12 right-0 text-white/40 text-xs uppercase tracking-widest hover:text-white transition-colors"
              >
                Close ×
              </button>
              <LeadForm preSelect="Request Pricing" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}