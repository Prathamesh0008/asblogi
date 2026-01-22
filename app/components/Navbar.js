'use client'
import { useState } from 'react'
import { FaRoute } from 'react-icons/fa'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const quickLinks = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services' },
    { title: 'Tracking', href: '/tracking' },
    { title: 'About Us', href: '/about' },
    { title: 'Contact', href: '/contact' },
    { title: 'Careers', href: '#' }
  ]

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-xl flex items-center justify-center">
              <FaRoute className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SwiftLogistics</h1>
              <p className="text-sm text-[#A0A1A2] font-medium">Global Delivery Solutions</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {quickLinks.slice(0, 5).map((link) => (
              <a 
                key={link.title} 
                href={link.href}
                className="text-gray-700 hover:text-[#FAB045] font-medium transition-colors duration-300 relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FAB045] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-[#e8a035] hover:to-[#e8a035] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {quickLinks.map((link) => (
                <a 
                  key={link.title} 
                  href={link.href}
                  className="block text-gray-700 hover:text-[#FAB045] font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-[#FAB045] to-[#f8c468] text-white font-semibold py-3 px-6 rounded-xl mt-4">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}