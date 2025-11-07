import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheck, FaCrown } from 'react-icons/fa'
import PlanSignupModal from './PlanSignupModal'

const plans = [
  {
    name: 'Essential Plan',
    price: '₹2,999',
    period: '/year',
    features: [
      'Rental agreement drafting',
      'Police verification support',
      'Document verification check',
      'Email & chat support',
      'Online agreement processing',
    ],
    badge: null,
    gradient: 'from-blue-500 to-cyan-500',
    summary: 'Perfect for first-time renters needing essential legal documentation.',
  },
  {
    name: 'Premium Plan',
    price: '₹4,999',
    period: '/year',
    features: [
      'Everything in Essential',
      'Full legal support & RERA check',
      'Site visit support',
      'Rent payment assistance',
      'Lawyer review included',
    ],
    badge: 'BEST SELLER',
    gradient: 'from-purple-500 to-pink-500',
    summary: 'Complete legal coverage for busy professionals and families in Bangalore.',
  },
  {
    name: 'Elite Gold Plan',
    price: '₹7,999',
    period: '/year',
    features: [
      'Everything in Premium',
      'Dedicated property manager',
      'Priority legal handling',
      'Yearly maintenance support',
      'Doorstep pickup & service',
    ],
    badge: null,
    gradient: 'from-orange-500 to-yellow-500',
    summary: 'White-glove service with dedicated managers and premium legal assistance.',
  },
]

const SubscriptionPlans = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPlan(null)
  }

  return (
    <section id="plans" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Subscription Plans</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your rental needs
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`glass-strong rounded-2xl p-8 relative overflow-hidden ${
                plan.badge ? 'ring-2 ring-purple-500 shadow-2xl shadow-purple-500/30' : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-bl-2xl rounded-tr-2xl">
                  <span className="text-xs font-bold flex items-center gap-1">
                    <FaCrown className="text-yellow-300" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Gradient background */}
              <div
                className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${plan.gradient}`}
              />

              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleGetStarted(plan)}
                  className={`w-full py-3 rounded-full font-semibold bg-gradient-to-r ${plan.gradient} hover:shadow-lg transition-all`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PlanSignupModal open={isModalOpen} onClose={handleCloseModal} plan={selectedPlan} />
    </section>
  )
}

export default SubscriptionPlans

