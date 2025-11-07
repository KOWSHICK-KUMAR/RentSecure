import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaBolt,
  FaShieldAlt,
  FaFileContract,
  FaCalendarCheck,
  FaPhoneAlt,
  FaClock,
} from 'react-icons/fa'

const quickReplies = [
  {
    label: 'Track my agreement',
    message: 'Can you show my rental agreement status update?',
  },
  {
    label: 'Police verification',
    message: 'I need help initiating tenant police verification.',
  },
  {
    label: 'Compare plans',
    message: 'Help me compare the Premium and Elite Gold plans.',
  },
  {
    label: 'Schedule callback',
    message: 'Schedule a legal expert call back for today evening.',
  },
]

const serviceCards = [
  {
    title: 'Legal Agreement Draft',
    subtitle: 'Upload documents securely',
    icon: FaFileContract,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Tenant Police Check',
    subtitle: '₹699 add-on service',
    icon: FaShieldAlt,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Schedule Site Visit',
    subtitle: 'Slots open for tomorrow',
    icon: FaCalendarCheck,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Talk to Legal Expert',
    subtitle: 'Call back within 15 mins',
    icon: FaPhoneAlt,
    gradient: 'from-orange-500 to-amber-500',
  },
]

const statusSteps = [
  {
    title: 'Requirement Submitted',
    detail: 'Tenant details verified • 10 Oct, 10:15 AM',
    state: 'done',
  },
  {
    title: 'Agreement Drafting',
    detail: 'Lawyer review in progress • ETA 4 hrs',
    state: 'active',
  },
  {
    title: 'E-Stamp Processing',
    detail: 'Scheduled for 12 Oct, 11:00 AM',
    state: 'pending',
  },
  {
    title: 'Key Handover',
    detail: 'Awaiting owner confirmation',
    state: 'pending',
  },
]

const initialMessages = [
  {
    id: 'welcome',
    sender: 'bot',
    text: "Hi! I'm your Property Assistant 👋. I specialise in legal, agreements, and rental support across Bangalore.",
  },
  {
    id: 'options',
    sender: 'bot',
    text: 'Ask me about agreement tracking, plan comparisons, police verification, or schedule a call with our legal experts.',
  },
]

const generateBotResponse = (input) => {
  const normalized = input.toLowerCase()

  if (normalized.includes('status') || normalized.includes('agreement')) {
    return 'Your rental agreement is currently under legal review. I can share the draft for a quick glance or notify you once e-stamping begins. Would you like a PDF preview?'
  }

  if (normalized.includes('police')) {
    return 'Police verification takes 24-48 hours. I can arrange a doorstep documentation pickup or share the online submission link. What do you prefer?'
  }

  if (normalized.includes('plan')) {
    return 'Premium covers full legal support, site visit coordination, and rent assistance. Elite Gold adds a dedicated property manager and priority legal handling. Shall I send a side-by-side comparison?'
  }

  if (normalized.includes('schedule') || normalized.includes('call')) {
    return 'Sure! Please confirm a slot that works for you. Our legal experts are available between 9 AM - 8 PM IST. I can block a 15-minute consult.'
  }

  return 'Thanks for reaching out! A Bangalore-based specialist will review this within 15 minutes. Meanwhile, you can explore our service shortcuts or request a call back.'
}

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState(initialMessages)
  const [isThinking, setIsThinking] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [isOpen, messages])

  const pushBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text,
      },
    ])
    setIsThinking(false)
  }

  const handleSend = (value) => {
    const trimmed = (value ?? message).trim()
    if (!trimmed) return

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: trimmed,
      },
    ])
    setMessage('')
    setIsThinking(true)

    setTimeout(() => {
      pushBotMessage(generateBotResponse(trimmed))
    }, 600)
  }

  const handleQuickReply = (reply) => {
    handleSend(reply.message)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center hover:shadow-blue-500/50 transition-all"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <FaTimes className="text-white text-xl" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <FaRobot className="text-white text-xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-50 w-96 h-[540px] glass-strong rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaRobot className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Property Assistant</h3>
                <p className="text-xs text-white/80">Bangalore • Rental & Legal Specialist</p>
              </div>
              <div className="px-2 py-1 bg-white/20 rounded-full text-[10px] uppercase tracking-wide text-white/90">
                Live Support
              </div>
            </div>

            {/* Messages + Insights */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {/* Agreement status tracker */}
              <div className="glass rounded-xl p-4 border border-blue-500/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-200 uppercase tracking-wide">
                  <FaClock />
                  Agreement status tracking
                </div>
                <div className="mt-4 space-y-4">
                  {statusSteps.map((step, index) => {
                    const isLast = index === statusSteps.length - 1
                    const stateStyles = {
                      done: 'bg-emerald-400 border-emerald-300/60',
                      active: 'bg-blue-400 border-blue-300/60 animate-pulse',
                      pending: 'bg-white/20 border-white/20',
                    }

                    return (
                      <div key={step.title} className="flex gap-3">
                        <div className="relative flex flex-col items-center">
                          <span className={`w-3 h-3 rounded-full border ${stateStyles[step.state]}`} />
                          {!isLast && (
                            <span className="flex-1 w-px bg-white/10 mt-1" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{step.title}</p>
                          <p className="text-xs text-gray-400">{step.detail}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Service shortcut cards */}
              <div className="grid grid-cols-2 gap-3">
                {serviceCards.map((card) => {
                  const Icon = card.icon
                  return (
                    <motion.button
                      key={card.title}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSend(`I need help with ${card.title.toLowerCase()}.`)}
                      className="glass rounded-xl p-3 text-left border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white mb-2`}
                      >
                        <Icon />
                      </div>
                      <p className="text-sm font-semibold leading-tight">{card.title}</p>
                      <p className="text-[11px] text-gray-400 mt-1">{card.subtitle}</p>
                    </motion.button>
                  )
                })}
              </div>

              {/* Recommended plan */}
              <div className="glass rounded-xl p-4 border border-purple-500/30">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase text-purple-200 tracking-wide">Recommended Plan</p>
                    <h4 className="text-lg font-semibold mt-1">Premium Plan</h4>
                    <p className="text-xs text-gray-400">Best for families needing full legal coverage</p>
                  </div>
                  <span className="px-3 py-1 text-[10px] rounded-full bg-purple-500/20 text-purple-100 border border-purple-400/40">
                    Best Seller
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-gray-300">
                  <span className="px-2 py-1 rounded-full bg-white/10">Agreement + e-stamp</span>
                  <span className="px-2 py-1 rounded-full bg-white/10">Lawyer review</span>
                  <span className="px-2 py-1 rounded-full bg-white/10">Rent payment support</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleSend('Share full benefits of the Premium Plan.')}
                  className="mt-4 w-full py-2 text-sm rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:shadow-lg"
                >
                  View plan benefits
                </motion.button>
              </div>

              {/* Conversation */}
              <div className="space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2 ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaRobot className="text-white text-xs" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white'
                          : 'glass'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isThinking && (
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaRobot className="text-white text-xs" />
                    </div>
                    <div className="glass rounded-2xl px-4 py-3 text-sm flex items-center gap-2">
                      <span className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" />
                      </span>
                      Typing...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick replies */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {quickReplies.map((reply) => (
                  <motion.button
                    key={reply.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1.5 rounded-full bg-white/10 text-xs text-gray-200 border border-white/10 flex items-center gap-2"
                  >
                    <FaBolt className="text-blue-300" />
                    {reply.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-slate-900/40">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about agreements, police checks, plans..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSend()}
                  className="w-11 h-11 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
                >
                  <FaPaperPlane className="text-white text-sm" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIChatWidget

