import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaShieldAlt,
  FaGavel,
  FaUserShield,
  FaStamp,
  FaCreditCard,
  FaUserTie,
  FaHandshake,
  FaReceipt,
  FaCheckCircle,
} from 'react-icons/fa'

const features = [
  {
    icon: FaShieldAlt,
    title: '100% Legal Verification',
    description: 'Complete legal verification for Bangalore properties',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaGavel,
    title: 'RERA Expert Support',
    description: 'Certified RERA experts for property validation',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaUserShield,
    title: 'Police Verification',
    description: 'Local police tenant verification handling',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FaStamp,
    title: 'E-Stamp & Online Agreement',
    description: 'Government-approved e-stamp and digital agreements',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FaCreditCard,
    title: 'Secure Rent Payment',
    description: 'Secure rent-payment channel support',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: FaUserTie,
    title: 'Dedicated Property Manager',
    description: 'Personal property manager for your rental',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: FaHandshake,
    title: 'Dispute Mediation',
    description: 'Owner-tenant dispute mediation support',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: FaReceipt,
    title: 'Annual Maintenance',
    description: 'Yearly maintenance & rental receipt support',
    color: 'from-teal-500 to-cyan-500',
  },
]

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Why Choose Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unique Indian features for complete rental support
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 relative overflow-hidden group cursor-pointer"
              >
                {/* Glowing check effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute top-4 right-4"
                >
                  <FaCheckCircle className="text-green-400 text-xl" />
                </motion.div>

                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all`}
                >
                  <Icon className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all rounded-xl"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

