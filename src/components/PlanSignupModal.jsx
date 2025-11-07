import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const PlanSignupModal = ({ open, onClose, plan }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    // Placeholder: integrate with backend or form handler here
    onClose?.()
  }

  return (
    <AnimatePresence>
      {open && plan && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-3xl glass-strong border border-white/15 rounded-3xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          >
            <button
              onClick={() => onClose?.()}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 flex items-center justify-center text-white"
            >
              <FaTimes />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-600/50 to-purple-600/40 p-8 text-white">
                <p className="text-xs uppercase tracking-[0.3em] mb-3">
                  Subscription summary
                </p>
                <h3 className="text-3xl font-display font-semibold mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-white/80 mb-6">
                  {plan.summary ?? 'Professional rental support for Bangalore families.'}
                </p>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-1 rounded-full bg-white/20 w-2 h-2" />
                      <p className="text-sm leading-tight">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <span className="text-xs uppercase tracking-wide text-white/70">
                    Annual investment
                  </span>
                  <div className="text-3xl font-semibold mt-2">
                    {plan.price}
                    <span className="text-base text-white/70">{plan.period}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-lg font-semibold text-white mb-2">Share your details</h4>
                <p className="text-sm text-gray-400 mb-6">
                  A legal specialist will reach out within 15 minutes between 9 AM – 8 PM IST.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-sm text-gray-300 block mb-1">Full name</label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 block mb-1">Phone number</label>
                    <input
                      type="tel"
                      placeholder="\u002B91 98765 43210"
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 block mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 block mb-1">Rental address / locality</label>
                    <input
                      type="text"
                      placeholder="Indiranagar, Bangalore"
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 block mb-1">Preferred services</label>
                    <textarea
                      rows={3}
                      placeholder="Agreement + police verification + rent assist"
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Preferred contact time</label>
                      <input
                        type="text"
                        placeholder="Today, 6–7 PM"
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Plan of interest</label>
                      <input
                        type="text"
                        value={plan.name}
                        readOnly
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                  >
                    Submit & request callback
                  </button>

                  <p className="text-[11px] text-gray-500 text-center">
                    By submitting, you agree to our legal service terms & privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PlanSignupModal
