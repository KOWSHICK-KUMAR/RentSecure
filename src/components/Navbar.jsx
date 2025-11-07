import React, { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScrollToPlans = useCallback(() => {
    const plansSection = document.getElementById('plans')
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold">R</span>
            </div>
            <span className="text-xl font-display font-bold text-gradient">
              RentSecure
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="hover:text-blue-400 transition-colors">
              How It Works
            </a>
            <a href="#plans" className="hover:text-blue-400 transition-colors">
              Plans
            </a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">
              Reviews
            </a>
            <a href="#offices" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToPlans}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Get Started
            </motion.button>
          </div>

          <button className="md:hidden text-2xl">☰</button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

