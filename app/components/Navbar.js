// components/Navbar.jsx
'use client'

import { useState } from 'react'
import { FiTruck } from 'react-icons/fi'
import Image from 'next/image'
// Adjust this path to your actual logo file location
import logoImage from '../../public/logo/logoinvc.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  
  const quickLinks = [
    { title: 'Home', href: '/' },
    { 
      title: 'Services', 
      href: '/services',
      // dropdown: [
      //   { title: 'Air Freight', href: '/services' },
      //   { title: 'Ocean Freight', href: '/services' },
      //   { title: 'Road Freight', href: '/services' },
      //   { title: 'Warehousing', href: '/services' },
      //   { title: 'Supply Chain', href: '/services' },
      //   { title: 'Cold Chain', href: '/services' },
      // ]
    },
    { title: 'Tracking', href: '/tracking' },
    { title: 'About Us', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section - Only Image */}
          <div className="flex items-center">
            <div className="relative w-40 h-20 rounded-xl flex items-center justify-center group overflow-hidden">
              {/* Your logo image */}
              <div className="relative w-full h-full">
                <Image
                  src={logoImage}
                  alt="Invictus Logi Logo"
                  fill
                  className="object-cover p-1"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {quickLinks.map((link) => (
              <div key={link.title} className="relative group">
                {link.dropdown ? (
                  <>
                    <button 
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="text-gray-700 hover:text-[#FAB045] font-medium transition-colors duration-300 flex items-center gap-1"
                    >
                      {link.title}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 animate-fadeIn">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="block px-6 py-3 text-gray-700 hover:text-[#FAB045] hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a 
                    href={link.href}
                    className="text-gray-700 hover:text-[#FAB045] font-medium transition-colors duration-300 relative group"
                  >
                    {link.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FAB045] to-[#A0A1A2] group-hover:w-full transition-all duration-300"></span>
                  </a>
                )}
              </div>
            ))}
            
            {/* Contact Info */}
            <div className="flex items-center space-x-6 pl-6 border-l border-gray-200">
              <div className="text-right">
                <div className="text-sm text-[#A0A1A2]">Need Help?</div>
                <div className="text-gray-900 font-bold">+1 (800) LOGISTIC</div>
              </div>
              <button className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-[#e8a035] hover:to-[#e8a035] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-md">
                Get Quote
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#FAB045] transition-colors duration-300"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-200 animate-slideDown">
            <div className="px-4 py-6 space-y-1">
              {quickLinks.map((link) => (
                <div key={link.title}>
                  {link.dropdown ? (
                    <div className="border-b border-gray-100">
                      <button 
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex justify-between items-center w-full text-gray-700 hover:text-[#FAB045] font-medium py-4 text-lg"
                      >
                        <span>{link.title}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mobile Services Dropdown */}
                      {isServicesOpen && (
                        <div className="ml-4 mb-2 space-y-2 animate-fadeIn">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block text-gray-600 hover:text-[#FAB045] font-medium py-2 pl-4 border-l-2 border-[#FAB045]/30 hover:border-[#FAB045] transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={link.href}
                      className="block text-gray-700 hover:text-[#FAB045] font-medium py-4 text-lg border-b border-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center mb-4">
                  <FiTruck className="text-[#FAB045] text-xl mr-3" />
                  <div className="text-center">
                    <div className="text-sm text-[#A0A1A2]">24/7 Customer Support</div>
                    <div className="text-gray-900 font-bold text-lg">+1 (800) LOGISTIC</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-[#FAB045] to-[#f8c468] text-white font-semibold py-4 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Free Quote
                </button>
                
                <button className="w-full mt-3 bg-white border-2 border-[#A0A1A2] text-gray-800 font-semibold py-3 px-6 rounded-xl hover:border-[#FAB045] transition-all duration-300">
                  Track Shipment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  )
}