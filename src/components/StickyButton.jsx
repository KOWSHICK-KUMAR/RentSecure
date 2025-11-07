import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone } from 'react-icons/fa'

const StickyButton = () => {
  return (
    <motion.a
      href="tel:+919876543210"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold shadow-2xl flex items-center gap-2 hover:shadow-blue-500/50 transition-all"
      >
        <FaPhone className="text-white" />
        <span>Call Legal Expert</span>
      </motion.button>
    </motion.a>
  )
}

export default StickyButton

