import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import SubscriptionPlans from './components/SubscriptionPlans'
import Testimonials from './components/Testimonials'
import InteractiveMap from './components/InteractiveMap'
import OurOffices from './components/OurOffices'
import FAQ from './components/FAQ'
import TrustBadges from './components/TrustBadges'
import AIChatWidget from './components/AIChatWidget'
import StickyButton from './components/StickyButton'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <SubscriptionPlans />
      <Testimonials />
      <InteractiveMap />
      <OurOffices />
      <FAQ />
      <Footer />
      <TrustBadges />
      <AIChatWidget />
      <StickyButton />
    </div>
  )
}

export default App

