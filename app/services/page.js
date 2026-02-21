"use client";
import { useState } from 'react';
import {
  FaShip,
  FaPlane,
  FaTruck,
  FaWarehouse,
  FaBoxes,
  FaTemperatureLow,
  FaCheckCircle,
  FaArrowRight,
  FaTimes,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);

  const handleServiceClick = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
    setActiveFeature(null);
  };

  const handleFeatureClick = (featureIndex) => {
    setActiveFeature(activeFeature === featureIndex ? null : featureIndex);
  };

 const allServices = [
    {
      id: 'road-freight',
      icon: <FaTruck />,
      title: 'Road Freight',
      description: 'Comprehensive road transportation solutions for domestic and cross-border shipments.',
      detailedDescription: 'Our road freight services offer reliable and efficient transportation across local and international routes. We ensure timely delivery with real-time tracking and comprehensive insurance coverage.',
      features: [
        { 
          title: 'Full Truck Load (FTL)', 
          description: 'Dedicated truck for your shipment with priority handling and faster transit times.',
          details: 'Ideal for large shipments that require full container capacity. We provide door-to-door service with temperature control options.'
        },
        { 
          title: 'Less Than Truckload (LTL)', 
          description: 'Cost-effective solution for smaller shipments sharing space with other cargo.',
          details: 'Perfect for businesses with smaller shipment volumes. We optimize routes to ensure efficiency and cost savings.'
        },
        { 
          title: 'Temperature-controlled', 
          description: 'Specialized vehicles for perishable goods and sensitive products.',
          details: 'Maintain precise temperature ranges from -25°C to +25°C with real-time monitoring and alerts.'
        },
        { 
          title: 'Hazardous Materials', 
          description: 'Certified handling and transportation of dangerous goods.',
          details: 'Fully compliant with ADR regulations. Our drivers are specially trained in hazardous materials handling.'
        },
        { 
          title: 'Express Delivery', 
          description: 'Priority road service for urgent shipments.',
          details: 'Guaranteed next-day or same-day delivery options with dedicated express vehicles.'
        }
      ],
      benefits: ['Real-time GPS Tracking', 'Comprehensive Insurance', '24/7 Customer Support', 'Flexible Scheduling']
    },
    {
      id: 'air-freight',
      icon: <FaPlane />,
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services for time-sensitive shipments.',
      detailedDescription: 'Accelerate your supply chain with our premium air freight solutions. Partnering with major airlines worldwide for maximum coverage and reliability.',
      features: [
        { 
          title: 'Same Day Service', 
          description: 'Ultimate express service for critical shipments.',
          details: 'Priority boarding and dedicated handling. Available on select routes worldwide.'
        },
        { 
          title: 'Next Flight Out', 
          description: 'Guaranteed space on the next available flight.',
          details: 'Automated booking system ensures immediate confirmation and departure.'
        },
        { 
          title: 'Charter Services', 
          description: 'Exclusive aircraft for your specific needs.',
          details: 'Full aircraft charter for oversized, high-value, or confidential shipments.'
        },
        { 
          title: 'Dangerous Goods', 
          description: 'Certified handling of hazardous air cargo.',
          details: 'IATA certified staff and compliant packaging solutions.'
        },
        { 
          title: 'Perishables Handling', 
          description: 'Temperature-controlled air transport.',
          details: 'Cold chain management from origin to destination with specialized handling.'
        }
      ],
      benefits: ['Global Network', 'Priority Handling', 'Customs Clearance', 'Consolidation Services']
    },
    {
      id: 'ocean-freight',
      icon: <FaShip />,
      title: 'Ocean Freight',
      description: 'Cost-effective sea freight solutions with global coverage.',
      detailedDescription: 'Optimize your shipping costs with our comprehensive ocean freight services. We handle everything from port-to-port to door-to-door delivery.',
      features: [
        { 
          title: 'FCL Container', 
          description: 'Full container load services for maximum security.',
          details: '20ft, 40ft, and specialized containers available. Direct loading and unloading.'
        },
        { 
          title: 'LCL Consolidation', 
          description: 'Shared container space for smaller shipments.',
          details: 'Weekly consolidations to major ports worldwide with competitive rates.'
        },
        { 
          title: 'Bulk Shipping', 
          description: 'Specialized vessels for bulk commodities.',
          details: 'Dry bulk, liquid bulk, and breakbulk shipping solutions.'
        },
        { 
          title: 'Reefer Containers', 
          description: 'Refrigerated containers for temperature-sensitive goods.',
          details: 'Advanced reefer technology with continuous temperature monitoring.'
        },
        { 
          title: 'Project Cargo', 
          description: 'Heavy-lift and oversized cargo solutions.',
          details: 'Specialized equipment for machinery, equipment, and construction materials.'
        }
      ],
      benefits: ['Weekly Sailings', 'Competitive Rates', 'Documentation Handling', 'Port Services']
    },
    {
      id: 'warehousing',
      icon: <FaWarehouse />,
      title: 'Warehousing',
      description: 'Modern warehousing facilities with advanced inventory management.',
      detailedDescription: 'State-of-the-art warehousing solutions with advanced technology for inventory management and distribution.',
      features: [
        { 
          title: 'Bonded Warehouses', 
          description: 'Secure storage for goods awaiting customs clearance.',
          details: 'Defer customs duties until goods are released. Ideal for import/export businesses.'
        },
        { 
          title: 'Cross-docking', 
          description: 'Direct transfer from incoming to outgoing vehicles.',
          details: 'Reduce storage time and accelerate delivery with our efficient cross-docking facilities.'
        },
        { 
          title: 'Pick & Pack', 
          description: 'Order fulfillment and packaging services.',
          details: 'Automated picking systems with barcode scanning and quality control.'
        },
        { 
          title: 'Inventory Management', 
          description: 'Real-time stock control and reporting.',
          details: 'Cloud-based inventory system with API integration for seamless operations.'
        },
        { 
          title: 'Distribution', 
          description: 'Last-mile delivery and regional distribution.',
          details: 'Optimized routing and delivery scheduling for maximum efficiency.'
        }
      ],
      benefits: ['Climate Control', '24/7 Security', 'Inventory Reports', 'Flexible Storage']
    },
    {
      id: 'supply-chain',
      icon: <FaBoxes />,
      title: 'Supply Chain',
      description: 'End-to-end supply chain optimization and management.',
      detailedDescription: 'Transform your supply chain with our comprehensive management solutions. We integrate all aspects of your logistics for maximum efficiency.',
      features: [
        { 
          title: 'Order Fulfillment', 
          description: 'Complete order processing and delivery.',
          details: 'From receiving orders to final delivery, we handle the entire fulfillment process.'
        },
        { 
          title: 'Vendor Management', 
          description: 'Centralized management of your suppliers.',
          details: 'Streamline procurement and maintain optimal inventory levels across all vendors.'
        },
        { 
          title: 'Inventory Optimization', 
          description: 'Data-driven inventory control.',
          details: 'Predictive analytics to maintain optimal stock levels and reduce holding costs.'
        },
        { 
          title: 'Demand Planning', 
          description: 'Forecasting and planning for market demands.',
          details: 'Advanced algorithms to predict demand patterns and optimize inventory accordingly.'
        },
        { 
          title: 'Reverse Logistics', 
          description: 'Returns management and product recovery.',
          details: 'Efficient returns processing, refurbishment, and recycling services.'
        }
      ],
      benefits: ['End-to-End Visibility', 'Cost Reduction', 'Process Automation', 'Performance Analytics']
    },
    {
      id: 'cold-chain',
      icon: <FaTemperatureLow />,
      title: 'Cold Chain',
      description: 'Specialized temperature-controlled logistics solutions.',
      detailedDescription: 'Maintain product integrity with our advanced cold chain solutions. From pharmaceuticals to food products, we ensure perfect temperature conditions.',
      features: [
        { 
          title: 'Pharmaceutical Grade', 
          description: 'GDP compliant solutions for healthcare products.',
          details: 'Validated cold chain for vaccines, biologics, and temperature-sensitive pharmaceuticals.'
        },
        { 
          title: 'Food & Beverage', 
          description: 'Temperature-controlled transport for perishables.',
          details: 'From farm to table, we maintain optimal conditions for fresh and frozen foods.'
        },
        { 
          title: 'Real-time Monitoring', 
          description: 'Continuous temperature tracking and alerts.',
          details: 'IoT-enabled sensors provide real-time data with instant alert systems.'
        },
        { 
          title: 'GDP Compliance', 
          description: 'Good Distribution Practice certified.',
          details: 'Fully compliant with pharmaceutical distribution regulations worldwide.'
        },
        { 
          title: 'Validated Packaging', 
          description: 'Certified packaging solutions.',
          details: 'Tested and validated packaging for specific temperature ranges and durations.'
        }
      ],
      benefits: ['Temperature Validation', 'Regulatory Compliance', 'Risk Management', 'Quality Assurance']
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FAB045]">Our Logistics Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end logistics solutions designed to optimize your supply chain efficiency and reduce operational costs.
            </p>
          </div>

          {/* ✅ FIXED GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {allServices.map((service) => (
              <div
                key={service.id}
                className={`self-start group relative bg-white rounded-2xl p-8 border transition-all duration-500 overflow-hidden ${
                  expandedService === service.id
                    ? 'border-[#FAB045] shadow-2xl'
                    : 'border-gray-200 hover:border-[#FAB045]/30 hover:shadow-xl'
                }`}
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FAB045] to-[#A0A1A2]" />

                {/* ICON */}
                <button
                  onClick={() => handleServiceClick(service.id)}
                  className="relative mb-6 w-full text-left"
                >
                  <div className={`inline-flex p-4 rounded-xl ${
                    expandedService === service.id
                      ? 'bg-[#FAB045] text-white scale-110'
                      : 'bg-[#FAB045]/10 text-[#FAB045]'
                  } transition-all`}>
                    <div className="text-3xl">{service.icon}</div>
                  </div>
                </button>

                <h3 className="text-2xl text-black font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* EXPANDED CONTENT */}
                {expandedService === service.id && (
                  <div className="mb-8 animate-fadeIn">
                    <p className="text-gray-700 mb-6 bg-gray-50 p-4 rounded-lg">
                      {service.detailedDescription}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-bold text-black">Key Features:</h4>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="border-l-2 border-[#FAB045] pl-3">
                          <button
                            onClick={() => handleFeatureClick(idx)}
                            className="w-full text-left"
                          >
                            <div className="flex justify-between items-center ">
                              <div className="flex items-center">
                                <FaCheckCircle className="text-black mr-2" />
                                <span className='text-black'>{feature.title }</span>
                              </div>
                              { activeFeature === idx ? (
                                <FaChevronUp className='text-black' />
                              ) : (
                                <FaChevronDown className='text-black'/>
                              )}
                            </div>

                            <p className="text-sm text-black ml-6">
                              {feature.description}
                            </p>

                            {activeFeature === idx && (
                              <div className="mt-3 ml-6 p-3 text-black bg-gray rounded border">
                                {feature.details}
                              </div>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ACTIONS */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className="py-3 px-6  bg-yellow-200 hover:bg-[#FAB045] text-black rounded-lg flex items-center"
                  >
                    {expandedService === service.id ? 'Show Less' : 'Learn More'}
                    {expandedService === service.id ? (
                      <FaTimes className="ml-2" />
                    ) : (
                      <FaArrowRight className="ml-2" />
                    )}
                  </button>

                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes tefadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}
