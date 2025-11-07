import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa'

const faqs = [
  {
    question: 'What services are included in the subscription plans?',
    answer: 'Our subscription plans include rental agreement drafting, legal verification, police verification support, e-stamp processing, document verification, and ongoing support. Higher tiers include dedicated property managers and priority legal handling.',
  },
  {
    question: 'How long does the property verification process take?',
    answer: 'Property verification typically takes 3-5 business days. This includes RERA verification, ownership checks, and document validation. Premium and Elite plans receive priority processing.',
  },
  {
    question: 'Do you handle police verification for tenants?',
    answer: 'Yes, we handle the complete police verification process for tenants. Our team coordinates with local police stations and ensures all required documents are submitted correctly.',
  },
  {
    question: 'Is the rental agreement legally valid?',
    answer: 'Absolutely! All our rental agreements are drafted by certified lawyers, comply with Indian rental laws, and are processed with government-approved e-stamps, making them fully legally valid.',
  },
  {
    question: 'What areas in Bangalore do you serve?',
    answer: 'We serve all major areas in Bangalore including Jayanagar, Indiranagar, HSR Layout, Whitefield, Koramangala, Hebbal, and surrounding regions. Contact us to confirm service in your specific area.',
  },
  {
    question: 'Can I upgrade or downgrade my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated based on your remaining subscription period.',
  },
  {
    question: 'Do you provide support for owner-tenant disputes?',
    answer: 'Yes, our Elite Gold plan includes dispute mediation support. We help resolve conflicts between owners and tenants through professional mediation services.',
  },
  {
    question: 'How secure is the rent payment channel?',
    answer: 'We use Razorpay, a PCI-DSS compliant payment gateway, ensuring bank-level security for all rent transactions. All payments are encrypted and secure.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaQuestionCircle className="text-4xl text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-strong rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-all"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-blue-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

