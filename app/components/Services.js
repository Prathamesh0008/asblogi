'use client'
import { useState } from 'react'
import {
  FaPlane,
  FaShip,
  FaTruck,
  FaWarehouse,
  FaChevronRight,
  FaChevronDown
} from 'react-icons/fa'

export default function Services() {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      icon: <FaPlane className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Air Freight',
      description:
        'Express air cargo with real-time tracking across 150+ countries.',
      features: ['Same Day Delivery', 'Global Coverage', 'Temperature Control'],
      gradient: 'from-[#E65100] to-[#FF8F00]',
      details: {
        transitTime: '24–72 hours',
        coverage: '150+ countries',
        specialFeatures: [
          'Express delivery with real-time tracking',
          'Dedicated cargo flights',
          'Temperature-controlled options available',
          'Priority handling for urgent shipments',
          'Comprehensive insurance coverage'
        ]
      }
    },
    {
      icon: <FaShip className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Ocean Freight',
      description:
        'Cost-effective sea freight with comprehensive FCL/LCL options.',
      features: ['Port to Port', 'Door to Door', 'Customs Clearance'],
      gradient: 'from-[#FFD700] to-[#FF8F00]',
      details: {
        transitTime: '15–45 days',
        specialFeatures: [
          'FCL & LCL shipping options',
          'Door-to-door delivery',
          'Customs clearance assistance',
          'Cargo insurance',
          'Consolidation services'
        ]
      }
    },
    {
      icon: <FaTruck className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Road Transport',
      description:
        'Efficient nationwide land transportation network.',
      features: ['LTL & FTL', 'Temperature Control', 'Express Delivery'],
      gradient: 'from-[#E65100] to-[#FFD700]',
      details: {
        transitTime: '1–7 days',
        specialFeatures: [
          'Full Truck Load (FTL)',
          'Less Than Truck Load (LTL)',
          'Temperature-controlled vehicles',
          'Real-time GPS tracking',
          'Dangerous goods transportation'
        ]
      }
    },
    {
      icon: <FaWarehouse className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Warehousing',
      description:
        'Secure storage with advanced inventory management.',
      features: ['Secure Storage', 'Inventory Management', 'Order Fulfillment'],
      gradient: 'from-[#FFD700] to-[#E65100]',
      details: {
        specialFeatures: [
          '24/7 security systems',
          'Inventory management software',
          'Pick & pack services',
          'Cross-docking',
          'Returns handling'
        ]
      }
    }
  ]

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <section className="pt-0 pb-4 sm:pb-6 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-9">
        {/* HEADER - responsive gradient text */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 py-0 px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FFD700] to-[#E65100] bg-clip-text text-transparent inline-block">
            Our Services
          </h2>
        </div>

        {/* GRID - responsive columns and gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-2xl transition-all duration-300 flex flex-col ${
                expandedService === index
                  ? 'ring-2 ring-[#E65100] ring-opacity-50 z-10'
                  : ''
              }`}
            >
              {/* TOP BAR */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient} rounded-t-2xl`} />

              {/* CARD BODY - reduced padding on mobile */}
              <div className="p-5 sm:p-6 lg:p-8 flex-grow">
                <div
                  className={`mb-4 sm:mb-6 ${
                    service.gradient.includes('E65100') || service.gradient.includes('FFD700')
                      ? 'text-[#E65100]'
                      : 'text-[#FF8F00]'
                  }`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-700">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-relaxed break-words whitespace-normal">
                  {service.description}
                </p>

                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm sm:text-base text-gray-700">
                      <span
                        className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                          service.gradient.includes('E65100')
                            ? 'bg-[#E65100]'
                            : service.gradient.includes('FFD700')
                            ? 'bg-[#FFD700]'
                            : 'bg-[#FF8F00]'
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* LEARN MORE BUTTON - reduced padding on mobile */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8 mt-auto">
                <button
                  onClick={() => toggleService(index)}
                  className={`flex items-center justify-between w-full font-semibold transition-all text-sm sm:text-base cursor-pointer ${
                    service.gradient.includes('E65100') || service.gradient.includes('FFD700')
                      ? 'text-[#E65100] hover:text-[#FF8F00]'
                      : 'text-[#FF8F00] hover:text-[#E65100]'
                  }`}
                >
                  {expandedService === index ? 'Show Less' : 'Learn More'}
                  {expandedService === index ? (
                    <FaChevronDown className="text-xs sm:text-sm" />
                  ) : (
                    <FaChevronRight className="text-xs sm:text-sm" />
                  )}
                </button>
              </div>

              {/* EXPANDED DETAILS - now in normal flow (not absolute) for better mobile behavior */}
              {expandedService === index && (
                <div
                  className="mt-2 mx-4 mb-4 sm:mx-5 sm:mb-5 lg:mx-6 lg:mb-6 rounded-xl animate-fadeIn"
                  style={{
                    background: "linear-gradient(135deg, rgba(230,81,0,0.25), rgba(255,143,0,0.20), rgba(255,215,0,0.15))",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(230,81,0,0.3)",
                  }}
                >
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h4
                      className="text-base sm:text-lg font-bold mb-3 sm:mb-4"
                      style={{ color: "#E65100" }}
                    >
                      Service Details
                    </h4>

                    <ul className="space-y-2">
                      {service.details.specialFeatures.map((f, i) => (
                        <li key={i} className="flex items-start text-sm sm:text-base">
                          <FaChevronRight className="mt-1 mr-2 text-[#FF8F00] flex-shrink-0 text-xs sm:text-sm" />
                          <span style={{ color: "#4a4a4a" }} className="break-words">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setExpandedService(null)}
                      className="mt-4 sm:mt-6 w-full py-2 sm:py-3 font-semibold rounded-lg transition-all duration-300 cursor-pointer text-sm sm:text-base"
                      style={{
                        background: "rgba(230,81,0,0.2)",
                        border: "1px solid rgba(230,81,0,0.4)",
                        color: "#E65100",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(230,81,0,0.35)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(230,81,0,0.2)";
                      }}
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}