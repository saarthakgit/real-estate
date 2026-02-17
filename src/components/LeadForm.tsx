'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // 1. Send data to our API (which sends to Telegram)
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `🚀 NEW LEAD:\nName: ${formData.name}\nPhone: ${formData.phone}\nQuery: ${formData.message}`
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' }); // Reset form
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
        {/* Subtle Gradient Glow behind the form */}
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
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:bg-white/10 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (+91)"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit number"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:bg-white/10 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Message Field (Optional) */}
                <div>
                  <textarea
                    placeholder="Any specific requirement? (Optional)"
                    rows={3}
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

                {/* Error Message */}
                {status === 'error' && (
                  <p className="text-red-400 text-xs flex items-center justify-center gap-1 mt-2">
                    <AlertCircle className="w-3 h-3" /> Something went wrong. Try calling us directly.
                  </p>
                )}
                
                <p className="text-center text-[10px] text-gray-500 mt-4">
                  By clicking, you authorize us to call you for real estate queries.
                </p>
              </form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}