'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';

export default function LeadForm() {
  // Added 'size' to the state
  const [formData, setFormData] = useState({ name: '', phone: '', message: '', size: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Clean phone for the WhatsApp link and Dial link
    const cleanPhone = formData.phone.replace(/\D/g, '');
    
    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: `[+91${cleanPhone}](tel:+91${cleanPhone})`, // Clickable link in TG text
          message: formData.message,
          size: formData.size, // New field sent to backend
          wtspnum: cleanPhone // Raw digits for the WhatsApp button URL
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '', size: '' }); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/20 blur-3xl rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <h3 className="text-2xl font-serif text-white mb-2">Request Pricing</h3>
          <p className="text-gray-400 text-sm mb-6">Get the brochure & cost sheet on WhatsApp.</p>

          <AnimatePresence mode='wait'>
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-white">Request Received!</h4>
                <p className="text-gray-400 text-sm mt-2">Our team will call you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-yellow-500 hover:text-yellow-400 underline"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field - Required */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:bg-white/10 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Phone Field - Required */}
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (+91) *"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit number"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:bg-white/10 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Size Selection - Required Dropdown */}
                <div className="relative">
                  <select
                    
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  >
                    <option value="" disabled className="bg-neutral-900">Select Interest Size *</option>
                    <option value="3 BHK - 1390" className="bg-neutral-900">3 BHK + 2T - 1390sqft</option>
                    <option value="3 BHK - 1690" className="bg-neutral-900">3 BHK + 3T - 1690sqft</option>
                    <option value="3 BHK - 1925" className="bg-neutral-900">3 BHK + 4T + Servant</option>
                    <option value="4 BHK - 2150" className="bg-neutral-900">4 BHK + 4T</option>
                    <option value="4 BHK - 2550" className="bg-neutral-900">4 BHK + 5T + Servant + Pooja</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-4 h-4" />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    placeholder="Any specific requirement? (Optional)"
                    rows={2}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:bg-white/10 transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-linear-to-r from-yellow-600 to-yellow-500 text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin w-5 h-5" /> Sending...
                    </>
                  ) : (
                    'Get Instant Call Back'
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-xs flex items-center justify-center gap-1 mt-2">
                    <AlertCircle className="w-3 h-3" /> Something went wrong. Try calling us.
                  </p>
                )}
              </form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}