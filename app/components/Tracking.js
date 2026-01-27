'use client'
import { FaSearch, FaBoxOpen, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export default function Tracking({ trackingId, setTrackingId, handleTrack }) {
  const [showPopup, setShowPopup] = useState(false)

  const handleTrackWithPopup = () => {
    if (trackingId.trim()) {
      // Call the original handleTrack function if it exists
     
      
      // Show the popup
      setShowPopup(true)
    }
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTrackWithPopup()
    }
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaSearch className="text-white text-3xl" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Track Your <span className="text-[#FAB045]">Shipment</span>
                </h2>
                <p className="text-[#A0A1A2] text-lg">
                  Real-time tracking updates for all your global shipments
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="relative">
                      <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                        <FaBoxOpen className="text-[#FAB045] text-xl" />
                      </div>
                      <input
                        type="text"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter tracking number (e.g., TRK123456789)"
                        className="w-full pl-16 pr-6 py-5 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FAB045] text-lg transition-all duration-300"
                      />
                    </div>
                    <p className="text-sm text-gray-400 mt-3 ml-4">Recent: TRK789012345 • SL2024001234</p>
                  </div>
                  <button 
                    onClick={handleTrackWithPopup}
                    className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-[#e8a035] hover:to-[#e8a035] text-white font-semibold py-5 px-10 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center whitespace-nowrap"
                  >
                    <FaSearch className="mr-3" />
                    Track Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] p-6 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">We're Working On It</h3>
                <button 
                  onClick={closePopup}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSearch className="text-white text-2xl" />
                </div>
                <p className="text-gray-700 text-lg mb-6">
                  Our team is currently processing your tracking request for:
                  <span className="block font-semibold text-gray-900 mt-2">{trackingId}</span>
                </p>
                <p className="text-gray-600 mb-8">
                  You will be contacted shortly with the tracking details. Thank you for your patience!
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#FAB045]/10 rounded-lg flex items-center justify-center mr-4">
                    <FaPhone className="text-[#FAB045] text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-semibold text-gray-900">+31685865799</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#FAB045]/10 rounded-lg flex items-center justify-center mr-4">
                    <FaEnvelope className="text-[#FAB045] text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-semibold text-gray-900">support@logistics.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 pb-8">
              <button 
                onClick={closePopup}
                className="w-full bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-[#e8a035] hover:to-[#e8a035] text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}