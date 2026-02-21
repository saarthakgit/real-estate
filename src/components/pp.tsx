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
    <section id="paymentplan" className="bg-black py-16 md:py-24 px-4 font-primary overflow-hidden relative">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        
        {/* Header & Tabs */}
        <div className="flex flex-col items-center text-center mb-12 w-full">
          <h3 className="text-yellow-500 text-[10px] tracking-[0.5em] uppercase font-bold mb-4">
            Investment Transparency
          </h3>
          <h4 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-10">
            Payment <span className="text-gray-600 font-extralight italic">Plans</span>
          </h4>
          
          <div className="flex bg-neutral-900/50 p-1 rounded-full border border-white/5 backdrop-blur-xl w-full max-w-fit overflow-x-auto no-scrollbar">
            {Object.keys(plans).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-8 py-2.5 rounded-full text-[8px] md:text-[9px] tracking-[0.1em] md:tracking-[0.2em] uppercase transition-all duration-500 whitespace-nowrap ${
                  activeTab === tab ? 'bg-yellow-500 text-black font-bold' : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 w-full items-start">
          
          {/* Main Payment Milestones */}
          <div className="lg:col-span-2 space-y-2 flex flex-col items-center">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-2 w-full max-w-[92vw] md:max-w-none"
              >
                {plans[activeTab as keyof typeof plans].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 md:p-4 bg-neutral-900/20 border border-white/5 rounded-xl group hover:border-yellow-500/20 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <div className="min-w-0 text-left">
                        <p className="text-white text-[9px] md:text-[10px] uppercase tracking-widest font-bold truncate">
                          {item.stage}
                        </p>
                        <p className="text-gray-600 text-[8px] uppercase tracking-tighter truncate">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <span className="text-base md:text-xl font-black text-white tracking-tighter shrink-0 ml-4">
                      {item.value}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {/* RERA Section */}
            <div className="mt-8 p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl flex items-center gap-4 w-full max-w-[92vw] md:max-w-none">
               <ShieldCheck className="text-yellow-500 w-5 h-5 shrink-0" />
               <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest leading-tight">
                 RERA Registration: <span className="text-white font-bold uppercase">UPRERAPRJ503189/03/2024</span>
               </p>
            </div>
          </div>

          {/* NEW: Updated Other Charges & Banking Column */}
          <div className="flex flex-col items-center w-full gap-6">
            <div className="bg-neutral-900/40 border border-white/5 p-8 rounded-[30px] w-full max-w-[92vw] md:max-w-none text-center lg:text-left relative overflow-hidden group">
              {/* Subtle Background Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 text-yellow-500 justify-center lg:justify-start">
                  <Info className="w-4 h-4" />
                  <p className="text-[10px] tracking-[0.4em] uppercase font-bold">Additional Costs</p>
                </div>
                
                <p className="text-gray-400 text-[10px] uppercase tracking-widest leading-relaxed mb-8">
                  Other charges for <span className="text-white font-bold">Amenities (Power Backup , Club Membership..etc.)</span>, Floor PLC, and View preferences apply based on your selected unit.
                </p>

                <button 
                  onClick={() => setModalOpen(true)}
                  className="w-full py-4 bg-yellow-500 text-black font-black text-[9px] uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all group/btn"
                >
                  Request Full Price List 
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                
                <p className="mt-6 text-gray-600 text-[8px] uppercase tracking-tighter italic">
                  *Official cost sheet will be shared via WhatsApp.
                </p>
              </div>
            </div>

            {/* Escrow Details */}
            <div className="p-6 bg-neutral-900/20 border border-white/5 rounded-[30px] w-full max-w-[92vw] md:max-w-none text-center lg:text-left">
              
              <p className="text-white text-[10px] font-bold uppercase">M/S Irish Buildcon Pvt Ltd</p>
             
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
                className="absolute -top-10 right-0 text-white/40 text-[9px] uppercase tracking-widest hover:text-white"
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