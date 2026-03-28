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
      icon: <FaPlane className="text-3xl" />,
      title: 'Air Freight',
      description:
        'Express air cargo  with real-time tracking across 150+ countries.',
      features: ['Same Day Delivery', 'Global Coverage', 'Temperature Control'],
      gradient: 'from-[#FAB045] to-[#f8c468]',
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
      icon: <FaShip className="text-4xl" />,
      title: 'Ocean Freight',
      description:
        'Cost-effective sea freight with comprehensive FCL/LCL options.',
      features: ['Port to Port', 'Door to Door', 'Customs Clearance'],
      gradient: 'from-[#A0A1A2] to-[#c0c1c2]',
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
      icon: <FaTruck className="text-4xl" />,
      title: 'Road Transport',
      description:
        'Efficient nationwide land transportation network.',
      features: ['LTL & FTL', 'Temperature Control', 'Express Delivery'],
      gradient: 'from-[#FAB045] to-[#f8c468]',
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
      icon: <FaWarehouse className="text-4xl" />,
      title: 'Warehousing',
      description:
        'Secure storage  with advanced inventory management.',
      features: ['Secure Storage', 'Inventory Management', 'Order Fulfillment'],
      gradient: 'from-[#A0A1A2] to-[#c0c1c2]',
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
    <div
  style={{
    textAlign: "center",
    marginBottom: "80px",
    padding: "40px 20px",
    borderRadius: "16px",

    // Transparent dark orange gradient
    background: "linear-gradient(135deg, rgba(230,81,0,0.25), rgba(255,140,0,0.20), rgba(255,179,71,0.15))",

    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,140,0,0.3)",
  }}
>
<h2
  style={{
    fontSize: "42px",
    fontWeight: "300",
    marginBottom: "16px",
    color: "rgba(0,0,0,0.7)", // black with transparency
  }}
>
  Our Services
</h2>

<p
  style={{
    color: "rgba(0,0,0,0.7)", // softer black (transparent feel)
    fontSize: "20px",
    maxWidth: "700px",
    margin: "0 auto",
    fontWeight: "100", // lighter font
  }}
>
  Comprehensive logistics designed for modern business needs.
</p>
</div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
                expandedService === index
                  ? 'ring-2 ring-[#FAB045] ring-opacity-50 z-10'
                  : ''
              }`}
            >
              {/* TOP BAR */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />

              {/* CARD BODY */}
              <div className="p-8">
                <div
                  className={`mb-6 ${
                    service.gradient.includes('FAB045')
                      ? 'text-[#FAB045]'
                      : 'text-[#A0A1A2]'
                  }`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-[#A0A1A2] mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span
                        className={`w-2 h-2 rounded-full mr-3 ${
                          service.gradient.includes('FAB045')
                            ? 'bg-[#FAB045]'
                            : 'bg-[#A0A1A2]'
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* EXPANDED DETAILS (OVERLAY – NO BLANK SPACE) */}
           {expandedService === index && (
  <div
    className="absolute left-0 top-full w-full shadow-2xl rounded-b-2xl border-t animate-fadeIn"
    style={{
      background: "linear-gradient(135deg, rgba(230,81,0,0.25), rgba(255,140,0,0.20), rgba(255,179,71,0.15))",
      backdropFilter: "blur(12px)",
      borderColor: "rgba(255,140,0,0.3)",
    }}
  >
    <div className="p-8">
      <h4
        className="text-lg font-bold mb-4"
        style={{ color: "#E65100" }}
      >
        Service Details
      </h4>

      <ul className="space-y-2">
        {service.details.specialFeatures.map((f, i) => (
          <li key={i} className="flex items-start">
            <FaChevronRight className="mt-1 mr-2 text-[#FF8C00]" />
            <span style={{ color: "#5a5a5a" }}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setExpandedService(null)}
        className="mt-6 w-full py-3 font-semibold rounded-lg transition-all duration-300"
        style={{
          background: "rgba(255,140,0,0.2)",
          border: "1px solid rgba(255,140,0,0.4)",
          color: "#E65100",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(255,140,0,0.35)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "rgba(255,140,0,0.2)";
        }}
      >
        Close Details
      </button>
    </div>
  </div>
)}

              {/* LEARN MORE */}
              <div className="px-8 pb-8">
                <button
                  onClick={() => toggleService(index)}
                  className={`flex items-center justify-between w-full font-semibold transition-all ${
                    service.gradient.includes('FAB045')
                      ? 'text-[#FAB045] hover:text-[#e8a035]'
                      : 'text-[#A0A1A2] hover:text-gray-800'
                  }`}
                >
                  {expandedService === index ? 'Show Less' : 'Learn More'}
                  {expandedService === index ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </button>
              </div>
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

