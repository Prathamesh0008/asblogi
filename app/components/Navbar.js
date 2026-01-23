// components/Navbar.jsx
'use client'

import { useState, useEffect } from 'react'
import { FiTruck } from 'react-icons/fi'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()
  
  const quickLinks = [
    { title: 'Home', href: '/' },
    { 
      title: 'Services', 
      href: '/services',
      // dropdown: [
      //   { title: 'Air Freight', href: '/services/air' },
      //   { title: 'Ocean Freight', href: '/services/ocean' },
      //   { title: 'Road Freight', href: '/services/road' },
      //   { title: 'Warehousing', href: '/services/warehousing' },
      //   { title: 'Supply Chain', href: '/services/supply-chain' },
      //   { title: 'Cold Chain', href: '/services/cold-chain' },
      // ]
    },
    { title: 'Tracking', href: '/tracking' },
    { title: 'About Us', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ]

  // Helper function to check if link is active
  const isActive = (href) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-[#FDFDFD] shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section - Only Image */}
          <div className="flex items-center">
            <div className="relative w-45 h-15 rounded-xl flex items-center justify-center group overflow-hidden">
              <div className="relative w-[250px] h-[85px] flex items-center">
                <Image
                  src="/logo/logo2.png"
                  alt="Invictus Logi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {quickLinks.map((link) => (
              <div key={link.title} className="relative group">
                {link.dropdown ? (
                  <>
                    <button 
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`font-medium transition-colors duration-300 flex items-center gap-1 text-sm ${
                        isActive(link.href) 
                          ? 'text-[#FAB045]' 
                          : 'text-gray-700 hover:text-[#FAB045]'
                      }`}
                    >
                      {link.title}
                      <svg 
                        className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Active indicator for dropdown parent */}
                    {isActive(link.href) && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#FAB045] to-[#A0A1A2]"></span>
                    )}
                    
                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fadeIn">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className={`block px-4 py-2 font-medium transition-colors duration-200 text-sm ${
                              pathname === item.href
                                ? 'text-[#FAB045] bg-gray-50'
                                : 'text-gray-700 hover:text-[#FAB045] hover:bg-gray-50'
                            }`}
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
                    className={`font-medium transition-colors duration-300 relative group text-sm ${
                      isActive(link.href) 
                        ? 'text-[#FAB045]' 
                        : 'text-gray-700 hover:text-[#FAB045]'
                    }`}
                  >
                    {link.title}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#FAB045] to-[#A0A1A2] transition-all duration-300 ${
                      isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info and Quote Button - Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-xs text-[#A0A1A2]">Need Help?</div>
              <div className="text-gray-900 font-bold text-sm">+1 (800) LOGISTIC</div>
            </div>
            <button className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-[#e8a035] hover:to-[#e8a035] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 shadow-sm text-sm">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#FAB045] transition-colors duration-300"
          >
            {isMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 animate-slideDown">
            <div className="px-4 py-4 space-y-1">
              {quickLinks.map((link) => (
                <div key={link.title}>
                  {link.dropdown ? (
                    <div className="border-b border-gray-100">
                      <button 
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`flex justify-between items-center w-full font-medium py-3 text-base ${
                          isActive(link.href)
                            ? 'text-[#FAB045]'
                            : 'text-gray-700 hover:text-[#FAB045]'
                        }`}
                      >
                        <span>{link.title}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Active indicator for mobile dropdown parent */}
                      {isActive(link.href) && !isServicesOpen && (
                        <div className="ml-4 pl-4 border-l-2 border-[#FAB045]"></div>
                      )}
                      
                      {/* Mobile Services Dropdown */}
                      {isServicesOpen && (
                        <div className="ml-4 mb-1 space-y-1 animate-fadeIn">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className={`block font-medium py-1.5 pl-4 border-l-2 transition-colors duration-200 text-sm ${
                                pathname === item.href
                                  ? 'text-[#FAB045] border-[#FAB045]'
                                  : 'text-gray-600 hover:text-[#FAB045] border-[#FAB045]/30 hover:border-[#FAB045]'
                              }`}
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
                      className={`block font-medium py-3 text-base border-b border-gray-100 ${
                        isActive(link.href)
                          ? 'text-[#FAB045] border-[#FAB045]/50'
                          : 'text-gray-700 hover:text-[#FAB045]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                      {isActive(link.href) && (
                        <span className="float-right text-[#FAB045]">•</span>
                      )}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center justify-center mb-3">
                  <FiTruck className="text-[#FAB045] text-lg mr-3" />
                  <div className="text-center">
                    <div className="text-xs text-[#A0A1A2]">24/7 Customer Support</div>
                    <div className="text-gray-900 font-bold text-base">+1 (800) LOGISTIC</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-[#FAB045] to-[#f8c468] text-white font-semibold py-3 px-6 rounded-lg text-base shadow-md hover:shadow-lg transition-all duration-300">
                  Get Free Quote
                </button>
                
                <button className="w-full mt-2 bg-white border-2 border-[#A0A1A2] text-gray-800 font-semibold py-2 px-6 rounded-lg hover:border-[#FAB045] transition-all duration-300 text-sm">
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