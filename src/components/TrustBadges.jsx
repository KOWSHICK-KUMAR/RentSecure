import React from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaGavel, FaMapMarkerAlt } from 'react-icons/fa'

const badges = [
  {
    icon: FaShieldAlt,
    text: 'Verified Lawyers',
    color: 'from-blue-500 to-cyan-500',
    description: 'All legal drafts vetted by Bangalore-based lawyers',
  },
  {
    icon: FaGavel,
    text: 'RERA Support',
    color: 'from-purple-500 to-pink-500',
    description: 'Dedicated RERA experts handling property compliance',
  },
  {
    icon: FaMapMarkerAlt,
    text: 'Bangalore Based',
    color: 'from-orange-500 to-red-500',
    description: 'Local team across Koramangala, HSR & Whitefield',
  },
]

const TrustBadges = () => {
  return (
    <>
      {/* Desktop stacked badges */}
      <div className="fixed bottom-32 right-8 z-40 hidden lg:flex flex-col gap-4">
        {badges.map((badge, index) => {
          const Icon = badge.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.07, x: -6 }}
              className="group glass-strong rounded-xl px-4 py-3 cursor-pointer shadow-xl border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{badge.text}</p>
                  <p className="text-[11px] text-gray-300/80 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {badge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Mobile sliding badges */}
      <div className="fixed bottom-24 left-0 right-0 z-40 px-4 lg:hidden">
        <div className="glass-strong rounded-2xl border border-white/10 px-3 py-3 overflow-x-auto flex gap-3">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.button
                key={`mobile-${badge.text}`}
                whileTap={{ scale: 0.97 }}
                className="min-w-[160px] glass rounded-xl px-3 py-2 text-left border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-md`}>
                    <Icon className="text-white text-base" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{badge.text}</p>
                    <p className="text-[10px] text-gray-300/80">{badge.description}</p>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default TrustBadges

