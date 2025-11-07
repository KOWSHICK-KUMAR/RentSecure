import React, { useCallback, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaRobot, FaTimes } from 'react-icons/fa'

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Building Skyline Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-slate-900 via-slate-800/50 to-transparent" />
        
        {/* Building silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-80 flex items-end justify-center space-x-2">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${Math.random() * 200 + 100}px` }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="bg-gradient-to-t from-blue-600/30 to-purple-600/20 rounded-t-lg border border-blue-500/30"
              style={{ width: `${Math.random() * 30 + 20}px` }}
            >
              {/* Windows with glow */}
              <div className="grid grid-cols-2 gap-1 p-1">
                {[...Array(4)].map((_, j) => (
                  <motion.div
                    key={j}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
                    className="bg-yellow-400/40 rounded-sm"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              x: [null, Math.random() * dimensions.width],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            <span className="text-gradient glow-text">
              Welcome to India's Trusted
            </span>
            <br />
            <span className="text-white">Rental & Legal Support Platform</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            From property verification to agreement & key handover — everything handled professionally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('plans')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-2"
            >
              Compare Plans
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoOpen(true)}
              className="px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <FaPlay className="text-blue-400" />
              Watch How It Works
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* AI Chat Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-24 right-8 z-50 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="glass-strong rounded-2xl p-4 shadow-2xl cursor-pointer hover:bg-white/25 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <FaRobot className="text-white text-xl" />
            </div>
            <div>
              <p className="font-semibold text-sm">Ask Property Assistant</p>
              <p className="text-xs text-gray-400">Get instant help</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* How It Works Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-[90%] max-w-4xl aspect-video glass-strong border border-white/20 rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-800 flex items-center justify-center"
              >
                <FaTimes className="text-white" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/U2pykMP7Gsk?autoplay=1&mute=1"
                title="How RentSecure Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

export default Hero

