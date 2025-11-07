import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">R</span>
              </div>
              <span className="text-xl font-display font-bold text-gradient">
                RentSecure
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              India's trusted rental & legal support platform. Making rental processes simple, secure, and professional.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Rental Agreement</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Legal Verification</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Police Verification</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">E-Stamp Processing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#plans" className="hover:text-blue-400 transition-colors">Plans</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#offices" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                <FaFacebook className="text-blue-400" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                <FaTwitter className="text-blue-400" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                <FaLinkedin className="text-blue-400" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                <FaInstagram className="text-blue-400" />
              </a>
            </div>
            <a href="mailto:support@rentsecure.in" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
              <FaEnvelope />
              support@rentsecure.in
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 RentSecure. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

