import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaSearch, FaShieldAlt, FaFileContract, FaKey } from 'react-icons/fa'

const steps = [
  {
    icon: FaSearch,
    title: 'Search & Register',
    description: 'Register your rental requirement with location, budget, and preferences',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaShieldAlt,
    title: 'Property Legal Verification',
    description: 'Complete legal verification including RERA, ownership, and documentation',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaFileContract,
    title: 'Rental Agreement & E-Stamp',
    description: 'Professional rental agreement drafting and e-stamp processing',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FaKey,
    title: 'Handover & Payment Tracking',
    description: 'Smooth key handover and secure rent payment channel setup',
    color: 'from-green-500 to-emerald-500',
  },
]

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            <span className="text-gradient">How It Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Simple 4-step process to secure your rental property
          </motion.p>
        </motion.div>

        {/* Progress Timeline */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = activeStep === index
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Progress Line Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-1 -translate-y-1/2">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={isInView && isActive ? { width: '100%' } : { width: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`glass-strong rounded-2xl p-6 text-center cursor-pointer transition-all ${
                      isActive ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/50' : ''
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <motion.div
                      animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl text-white shadow-lg`}
                    >
                      <Icon />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                    <div className="mt-4 text-2xl font-bold text-gradient">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

