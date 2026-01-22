'use client'
import { FaSearch, FaBoxOpen } from 'react-icons/fa'

export default function Tracking({ trackingId, setTrackingId, handleTrack }) {
  return (
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
                      placeholder="Enter tracking number (e.g., TRK123456789)"
                      className="w-full pl-16 pr-6 py-5 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FAB045] text-lg transition-all duration-300"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-3 ml-4">Recent: TRK789012345 • SL2024001234</p>
                </div>
                <button 
                  onClick={handleTrack}
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
  )
}