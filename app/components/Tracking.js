'use client'
import { FaSearch, FaBoxOpen, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export default function Tracking({ trackingId, setTrackingId, handleTrack }) {
  const [showPopup, setShowPopup] = useState(false)

  const handleTrackWithPopup = () => {
    if (trackingId.trim()) {
      // Call the original handleTrack function if it exists
      // handleTrack?.(trackingId);

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
      <section className="py-20 bg-gradient-to-br from-[#fff7ed] via-white to-[#fff7ed] relative overflow-hidden">
        {/* 🔶 Orange Glow Effects */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#FAB045]/30 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#f8c468]/20 rounded-full blur-[120px]"></div>

        {/* 🔶 Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAB045]/20 via-[#FAB045]/10 to-transparent"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200/50">
              {/* Heading */}
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FaSearch className="text-white text-3xl" />
                </div>

                <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900/50">
                  Track Your <span className="text-[#FF8C00]/60">Shipment</span>
                </h2>

                <p className="text-gray-500/60 text-lg font-light">
                  Real-time tracking updates for all your global shipments
                </p>
              </div>

              {/* Input Box */}
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-md">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Input */}
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
                        className="w-full pl-16 pr-6 py-5 rounded-xl bg-white/5 border border-white/20 text-white/70 placeholder-white/30 focus:outline-none focus:border-[#FAB045] text-lg font-light transition-all duration-300"
                      />
                    </div>

                    <p className="text-sm text-gray-400/50 mt-3 ml-4 font-light">
                      Recent: TRK789012345 • SL2024001234
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    onClick={handleTrackWithPopup}
                    className="bg-gradient-to-r from-[#FF8C00] to-[#f8c468] hover:from-[#FF8C00] hover:to-[#FF8C00] text-white font-medium py-5 px-10 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center whitespace-nowrap"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white/95 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] p-6 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-light text-white/80">We're Working On It</h3>
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
                <div className="w-16 h-16 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <FaSearch className="text-white text-2xl" />
                </div>
                <p className="text-gray-700/70 text-lg font-light mb-6">
                  Our team is currently processing your tracking request for:
                  <span className="block font-normal text-gray-800/70 mt-2">{trackingId}</span>
                </p>
                <p className="text-gray-600/60 font-light mb-8">
                  You will be contacted shortly with the tracking details. Thank you for your patience!
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50/80 rounded-xl">
                  <div className="w-12 h-12 bg-[#FAB045]/10 rounded-lg flex items-center justify-center mr-4">
                    <FaPhone className="text-[#FAB045] text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500/60 font-light">Call Us</p>
                    <p className="font-normal text-gray-800/70">+31685865799</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50/80 rounded-xl">
                  <div className="w-12 h-12 bg-[#FAB045]/10 rounded-lg flex items-center justify-center mr-4">
                    <FaEnvelope className="text-[#FAB045] text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500/60 font-light">Email Us</p>
                    <p className="font-normal text-gray-800/70">support@logistics.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 pb-8">
              <button
                onClick={closePopup}
                className="w-full bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-[#e8a035] hover:to-[#e8a035] text-white font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
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