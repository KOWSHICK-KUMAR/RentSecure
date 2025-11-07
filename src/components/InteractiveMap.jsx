import React, { useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMapMarkerAlt, FaClock, FaHeadset, FaHome } from 'react-icons/fa'

const areas = [
  { name: 'Jayanagar', x: '18%', y: '62%', sla: 'Same-day verification', zone: 'South' },
  { name: 'Indiranagar', x: '42%', y: '45%', sla: '4-hr visit slots', zone: 'East' },
  { name: 'HSR Layout', x: '52%', y: '58%', sla: 'Legal desk nearby', zone: 'South-East' },
  { name: 'Whitefield', x: '72%', y: '40%', sla: '48-hr onboarding', zone: 'East' },
  { name: 'Koramangala', x: '46%', y: '66%', sla: 'Priority concierge', zone: 'Central' },
  { name: 'Hebbal', x: '34%', y: '24%', sla: 'Police desk on-call', zone: 'North' },
  { name: 'Malleshwaram', x: '25%', y: '30%', sla: 'Historic property experts', zone: 'West' },
  { name: 'Sarjapur Road', x: '63%', y: '60%', sla: 'Weekend site visits', zone: 'South-East' },
]

const coverageStats = [
  {
    label: 'Legal turn-around',
    value: '24 hrs',
    subtext: 'Average agreement prep time across Bangalore',
    icon: FaClock,
  },
  {
    label: 'Neighbourhoods covered',
    value: '40+',
    subtext: 'Dedicated local managers stationed across micro-markets',
    icon: FaHome,
  },
  {
    label: 'Support availability',
    value: '7 days',
    subtext: 'On-ground concierge & legal support including weekends',
    icon: FaHeadset,
  },
]

const zoneFocus = [
  {
    name: 'Central & South Bangalore',
    areas: ['Koramangala', 'Jayanagar', 'JP Nagar', 'BTM Layout'],
    highlight: 'Fastest agreement e-stamp (under 6 hrs)',
    gradient: 'from-blue-500/20 to-purple-500/10',
  },
  {
    name: 'East Tech Corridor',
    areas: ['Indiranagar', 'Whitefield', 'Marathahalli', 'Mahadevapura'],
    highlight: 'Dedicated legal desks for tech parks & gated communities',
    gradient: 'from-cyan-500/20 to-sky-500/10',
  },
  {
    name: 'North Growth Hub',
    areas: ['Hebbal', 'Yelahanka', 'Thanisandra'],
    highlight: 'Police verification handled via local liaison partners',
    gradient: 'from-emerald-500/20 to-teal-500/10',
  },
]

const serviceHighlights = [
  'Doorstep document pickup in 120+ pin codes',
  '24x7 digital agreement tracking & reminders',
  'Owner-tenant mediation panel stationed in Koramangala HQ',
]

const InteractiveMap = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const groupedAreas = useMemo(() => {
    return areas.reduce((acc, area) => {
      acc[area.zone] = acc[area.zone] || []
      acc[area.zone].push(area)
      return acc
    }, {})
  }, [])

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Our Service Areas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We serve across Bangalore's prime locations
          </p>
        </motion.div>

        {/* Coverage stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="max-w-5xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {coverageStats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="glass-strong rounded-2xl p-5 border border-white/10 text-left"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/40 to-purple-500/40 flex items-center justify-center">
                    <Icon className="text-white/90" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-200/80">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{stat.subtext}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
            {/* Map Background - Bangalore outline style */}
            <div className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Zone highlight card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="hidden lg:block absolute top-6 right-6 w-72 glass-strong rounded-2xl p-4 border border-white/10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Local concierge desks</p>
                <ul className="mt-3 space-y-3 text-sm text-gray-200">
                  {serviceHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Area markers */}
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? {
                          scale: 1,
                          opacity: 1,
                        }
                      : {}
                  }
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute cursor-pointer group"
                  style={{ left: area.x, top: area.y, transform: 'translate(-50%, -50%)' }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 bg-blue-500 rounded-full opacity-30"
                  />
                  <div className="relative">
                    <FaMapMarkerAlt className="text-3xl text-blue-400 drop-shadow-lg" />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap glass rounded-lg px-3 py-1 text-sm font-semibold pointer-events-none"
                    >
                      {area.name}
                      <span className="block text-[11px] text-blue-200/80 font-normal mt-1">
                        {area.sla}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Center label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-lg px-4 py-2">
                <span className="text-sm font-semibold">Bangalore, Karnataka</span>
              </div>
            </div>

            {/* Area list */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
              <div className="space-y-4">
                {Object.entries(groupedAreas).map(([zone, areaList], index) => (
                  <motion.div
                    key={zone}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15 }}
                    className="glass rounded-xl border border-white/10 p-4"
                  >
                    <p className="text-sm font-semibold text-white mb-2">{zone} Zone</p>
                    <div className="flex flex-wrap gap-2">
                      {areaList.map((area) => (
                        <span
                          key={`${zone}-${area.name}`}
                          className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-200"
                        >
                          {area.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4">
                {zoneFocus.map((zone, index) => (
                  <motion.div
                    key={zone.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + index * 0.15 }}
                    className={`rounded-xl p-5 border border-white/10 bg-gradient-to-br ${zone.gradient}`}
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">Focus zone</p>
                    <h4 className="text-lg font-semibold text-white mt-2">{zone.name}</h4>
                    <p className="text-sm text-blue-100/90 mt-3">{zone.highlight}</p>
                    <div className="flex flex-wrap gap-2 mt-3 text-xs text-white/80">
                      {zone.areas.map((area) => (
                        <span key={`${zone.name}-${area}`} className="px-3 py-1 rounded-full bg-white/10">
                          {area}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div>
                <p className="text-sm text-gray-400">
                  Need support in a location not listed? Our concierge team can onboard new Bangalore neighbourhoods within 24 hours.
                </p>
              </div>
              <motion.a
                href="#offices"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-semibold text-white text-center"
              >
                Request service in my area
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveMap

