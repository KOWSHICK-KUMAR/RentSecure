import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Software Engineer, Whitefield',
    rating: 5,
    text: 'RentSecure made my rental process so smooth! The legal verification was thorough and the agreement processing was quick. Highly recommended!',
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Manager, Indiranagar',
    rating: 5,
    text: 'As a working professional, I needed quick and reliable rental support. RentSecure delivered beyond expectations. The property manager was excellent!',
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Amit Patel',
    role: 'Business Owner, Koramangala',
    rating: 5,
    text: 'The RERA verification and e-stamp processing saved me so much time. The team is professional and the service is worth every rupee.',
    image: 'https://i.pravatar.cc/150?img=33',
  },
  {
    name: 'Sneha Reddy',
    role: 'Doctor, Jayanagar',
    rating: 5,
    text: 'Moving to Bangalore was stressful, but RentSecure handled everything from verification to handover. The dispute mediation support is a game-changer!',
    image: 'https://i.pravatar.cc/150?img=45',
  },
  {
    name: 'Vikram Singh',
    role: 'IT Professional, HSR Layout',
    rating: 5,
    text: 'Best rental support service in Bangalore! The secure payment channel and annual maintenance support make it a complete package.',
    image: 'https://i.pravatar.cc/150?img=51',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">What Our Customers Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real reviews from Bangalore renters & owners
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-2xl p-8 md:p-12"
            >
              <FaQuoteLeft className="text-4xl text-blue-400 mb-4" />
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-500/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FaStar className="text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

