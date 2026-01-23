'use client'
import { useState } from 'react'
import { FaPlane, FaShip, FaTruck, FaWarehouse, FaChevronRight, FaChevronDown } from 'react-icons/fa'

export default function Services() {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      icon: <FaPlane className="text-4xl" />,
      title: 'Air Freight',
      description: 'Express air cargo solutions with real-time tracking across 150+ countries.',
      features: ['Same Day Delivery', 'Global Coverage', 'Temperature Control'],
      gradient: 'from-[#FAB045] to-[#f8c468]',
      details: {
        transitTime: '24-72 hours',
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
      description: 'Cost-effective sea freight with comprehensive FCL/LCL options.',
      features: ['Port to Port', 'Door to Door', 'Customs Clearance'],
      gradient: 'from-[#A0A1A2] to-[#c0c1c2]',
      details: {
        transitTime: '15-45 days',
        containerTypes: ['20ft', '40ft', 'Reefer', 'Open Top'],
        specialFeatures: [
          'Full Container Load (FCL) & Less than Container Load (LCL)',
          'Port-to-port and door-to-door service',
          'Customs clearance assistance',
          'Cargo insurance options',
          'Consolidation services available'
        ]
      }
    },
    {
      icon: <FaTruck className="text-4xl" />,
      title: 'Road Transport',
      description: 'Efficient nationwide land transportation network.',
      features: ['LTL & FTL', 'Temperature Control', 'Express Delivery'],
      gradient: 'from-[#FAB045] to-[#f8c468]',
      details: {
        transitTime: '1-7 days',
        coverage: 'Nationwide',
        specialFeatures: [
          'Less Than Truckload (LTL) and Full Truckload (FTL)',
          'Temperature-controlled trailers',
          'Express delivery options',
          'Real-time GPS tracking',
          'Dangerous goods transportation'
        ]
      }
    },
    {
      icon: <FaWarehouse className="text-4xl" />,
      title: 'Warehousing',
      description: 'Secure storage solutions with advanced inventory management.',
      features: ['Secure Storage', 'Inventory Management', 'Order Fulfillment'],
      gradient: 'from-[#A0A1A2] to-[#c0c1c2]',
      details: {
        facilityTypes: ['Ambient', 'Temperature Controlled', 'Bonded'],
        features: [
          'State-of-the-art security systems',
          'Advanced inventory management software',
          'Pick and pack services',
          'Cross-docking capabilities',
          'Returns processing'
        ],
        additionalServices: [
          'Inventory reporting',
          'Seasonal storage solutions',
          'Value-added services',
          'Distribution management'
        ]
      }
    }
  ]

  const toggleService = (index) => {
    // Close all others and toggle this one
    if (expandedService === index) {
      setExpandedService(null)
    } else {
      setExpandedService(index)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
           <span className="text-[#FAB045]">Our Services</span>
          </h2>
          <p className="text-[#A0A1A2] text-xl max-w-3xl mx-auto">
            Comprehensive logistics solutions designed for modern business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden ${
                expandedService === index ? 'ring-2 ring-[#FAB045] ring-opacity-50' : ''
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-8">
                <div className={`mb-6 transform transition-transform duration-500 ${
                  service.gradient.includes('FAB045') ? 'text-[#FAB045]' : 'text-[#A0A1A2]'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#A0A1A2] mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 transition-colors duration-300">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        service.gradient.includes('FAB045') ? 'bg-[#FAB045]' : 'bg-[#A0A1A2]'
                      }`}></div>
                      {feature}
                    </li>
                  ))}  
                </ul>
              </div>
              
              {/* Expanded Content - ONLY SHOWS FOR THE CLICKED SERVICE */}
              {expandedService === index && (
                <div className="px-8 pb-8 border-t border-gray-100 animate-fadeIn">
                  <div className="pt-8">
                    <h4 className="text-lg font-bold mb-4 text-gray-900">Service Details</h4>
                    
                    {/* Air Freight Specific Details */}
                    {service.title === 'Air Freight' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[#A0A1A2]">Transit Time:</span>
                          <span className="font-semibold">{service.details.transitTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#A0A1A2]">Global Coverage:</span>
                          <span className="font-semibold">{service.details.coverage}</span>
                        </div>
                        <div className="mt-6">
                          <h5 className="font-semibold mb-3">Special Features:</h5>
                          <ul className="space-y-2">
                            {service.details.specialFeatures.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaChevronRight className="w-3 h-3 mt-1 mr-2 text-[#FAB045] flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {/* Ocean Freight Specific Details */}
                    {service.title === 'Ocean Freight' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[#A0A1A2]">Transit Time:</span>
                          <span className="font-semibold">{service.details.transitTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#A0A1A2]">Container Types:</span>
                          <span className="font-semibold">{service.details.containerTypes.join(', ')}</span>
                        </div>
                        <div className="mt-6">
                          <h5 className="font-semibold mb-3">Service Features:</h5>
                          <ul className="space-y-2">
                            {service.details.specialFeatures.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaChevronRight className="w-3 h-3 mt-1 mr-2 text-[#A0A1A2] flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {/* Road Transport Specific Details */}
                    {service.title === 'Road Transport' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[#A0A1A2]">Transit Time:</span>
                          <span className="font-semibold">{service.details.transitTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#A0A1A2]">Coverage:</span>
                          <span className="font-semibold">{service.details.coverage}</span>
                        </div>
                        <div className="mt-6">
                          <h5 className="font-semibold mb-3">Service Features:</h5>
                          <ul className="space-y-2">
                            {service.details.specialFeatures.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaChevronRight className="w-3 h-3 mt-1 mr-2 text-[#FAB045] flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {/* Warehousing Specific Details */}
                    {service.title === 'Warehousing' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[#A0A1A2]">Facility Types:</span>
                          <span className="font-semibold">{service.details.facilityTypes.join(', ')}</span>
                        </div>
                        <div className="mt-6">
                          <h5 className="font-semibold mb-3">Core Features:</h5>
                          <ul className="space-y-2 mb-6">
                            {service.details.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaChevronRight className="w-3 h-3 mt-1 mr-2 text-[#A0A1A2] flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <h5 className="font-semibold mb-3">Additional Services:</h5>
                          <ul className="space-y-2">
                            {service.details.additionalServices.map((service, idx) => (
                              <li key={idx} className="flex items-start">
                                <FaChevronRight className="w-3 h-3 mt-1 mr-2 text-[#A0A1A2] flex-shrink-0" />
                                <span className="text-gray-700">{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => toggleService(index)}
                      className="mt-6 w-full py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 font-semibold rounded-lg transition-all duration-300"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              )}
              
              {/* Learn More Button */}
              <div className="px-8 pb-8">
                <button 
                  onClick={() => toggleService(index)}
                  className={`flex items-center font-semibold w-full justify-between transition-all duration-300 ${
                    service.gradient.includes('FAB045') 
                      ? 'text-[#FAB045] hover:text-[#e8a035]' 
                      : 'text-[#A0A1A2] hover:text-gray-800'
                  }`}
                >
                  <span>{expandedService === index ? 'Show Less' : 'Learn More'}</span>
                  {expandedService === index ? (
                    <FaChevronDown className="ml-2 transition-all duration-300" />
                  ) : (
                    <FaChevronRight className="ml-2 transition-all duration-300" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}