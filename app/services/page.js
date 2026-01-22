"use client";
import { useState } from 'react';
import { FaShip, FaPlane, FaTruck, FaWarehouse, FaBoxes, FaTemperatureLow, FaCheckCircle, FaArrowRight, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);

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

  const processSteps = [
    { number: '01', title: 'Consultation', description: 'Understand your requirements and challenges' },
    { number: '02', title: 'Planning', description: 'Design optimal logistics solution' },
    { number: '03', title: 'Execution', description: 'Implement with precision and care' },
    { number: '04', title: 'Monitoring', description: 'Real-time tracking and updates' },
    { number: '05', title: 'Delivery', description: 'Safe and timely delivery' },
    { number: '06', title: 'Support', description: 'Post-delivery support and feedback' },
  ];

  const handleServiceClick = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
    setActiveFeature(null);
  };

  const handleFeatureClick = (featureIndex) => {
    if (activeFeature === featureIndex) {
      setActiveFeature(null);
    } else {
      setActiveFeature(featureIndex);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#FAB045] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#A0A1A2] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FAB045]/20 border border-[#FAB045]/30 text-[#FAB045] font-medium mb-6">
            <span className="w-2 h-2 bg-[#FAB045] rounded-full mr-2"></span>
            Global Logistics Solutions
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Our <span className="text-[#FAB045]">Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-10">
            Comprehensive logistics solutions tailored to your business needs with precision and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#FAB045] hover:bg-[#FAB045]/90 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Request a Quote
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-[#A0A1A2] hover:border-[#FAB045] text-white font-bold rounded-lg transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '150+', label: 'Countries Served' },
              { value: '10M+', label: 'Annual Shipments' },
              { value: '99.8%', label: 'On-time Delivery' },
              { value: '24/7', label: 'Customer Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-[#FAB045]">{stat.value}</div>
                <div className="text-gray-300 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`group relative bg-white rounded-2xl p-8 border transition-all duration-500 overflow-hidden ${
                  expandedService === service.id 
                    ? 'border-[#FAB045] shadow-2xl' 
                    : 'border-gray-200 hover:border-[#FAB045]/30 hover:shadow-xl'
                }`}
              >
                {/* Background accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FAB045] to-[#A0A1A2]"></div>
                
                {/* Icon container - Clickable */}
                <button 
                  onClick={() => handleServiceClick(service.id)}
                  className="relative mb-6 w-full text-left focus:outline-none"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className={`inline-flex p-4 rounded-xl transition-all duration-300 ${
                    expandedService === service.id
                      ? 'bg-gradient-to-br from-[#FAB045] to-[#FAB045]/80 text-white scale-110'
                      : 'bg-gradient-to-br from-[#FAB045]/10 to-[#A0A1A2]/10 text-[#FAB045] group-hover:scale-110'
                  }`}>
                    <div className="text-3xl">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#FAB045] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </button>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Expanded Content */}
                {expandedService === service.id && (
                  <div className="mb-8 animate-fadeIn">
                    <p className="text-gray-700 mb-6 bg-gray-50 p-4 rounded-lg">
                      {service.detailedDescription}
                    </p>
                    
                    {/* Features with expandable details */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-bold text-gray-800">Key Features:</h4>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="border-l-2 border-[#FAB045] pl-3">
                          <button
                            onClick={() => handleFeatureClick(idx)}
                            className="w-full text-left focus:outline-none"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <FaCheckCircle className="text-[#FAB045] mr-3 flex-shrink-0" />
                                <span className="font-medium text-gray-800">{feature.title}</span>
                              </div>
                              {activeFeature === idx ? (
                                <FaChevronUp className="text-[#FAB045]" />
                              ) : (
                                <FaChevronDown className="text-gray-400" />
                              )}
                            </div>
                            <p className="text-gray-600 ml-9 mt-1 text-sm">{feature.description}</p>
                            
                            {/* Feature Details */}
                            {activeFeature === idx && (
                              <div className="mt-3 ml-9 p-3 bg-gray-50 rounded-lg border border-gray-200 animate-slideDown">
                                <p className="text-gray-700">{feature.details}</p>
                              </div>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3">Additional Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-gradient-to-r from-[#FAB045]/10 to-[#A0A1A2]/10 text-gray-700 rounded-full text-sm border border-[#FAB045]/20"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => handleServiceClick(service.id)}
                    className="py-3 px-6 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-[#FAB045]/10 hover:to-[#FAB045]/5 text-gray-800 font-semibold rounded-lg border border-gray-200 hover:border-[#FAB045]/30 transition-all duration-300 flex items-center group/btn"
                  >
                    <span>
                      {expandedService === service.id ? 'Show Less' : 'Learn More'}
                    </span>
                    {expandedService === service.id ? (
                      <FaTimes className="ml-2 group-hover/btn:rotate-90 transition-transform duration-300" />
                    ) : (
                      <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    )}
                  </button>
                  
                  {expandedService === service.id && (
                    <button className="py-3 px-6 bg-[#FAB045] hover:bg-[#FAB045]/90 text-gray-900 font-semibold rounded-lg transition-all duration-300">
                      Get Quote
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#FAB045]">Our Process</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A systematic approach to ensure seamless logistics operations from start to finish.
            </p>
          </div>
          
          {/* Desktop Process Flow */}
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FAB045] via-[#A0A1A2] to-[#FAB045] transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-6 gap-6 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connection line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-12 right-0 w-full h-0.5 bg-[#A0A1A2]/30 transform translate-x-1/2"></div>
                  )}
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#FAB045]/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FAB045] to-[#A0A1A2] text-white font-bold text-lg flex items-center justify-center shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile/Tablet Process Steps */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#FAB045] to-[#A0A1A2] text-white font-bold text-lg flex items-center justify-center shadow-lg mr-6">
                    {step.number}
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#FAB045] to-[#A0A1A2]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-[#FAB045]">Optimize</span> Your Logistics?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Let's discuss how our comprehensive logistics solutions can streamline your operations and drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-4 bg-[#FAB045] hover:bg-[#FAB045]/90 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center">
                <span>Get Started Today</span>
                <FaArrowRight className="ml-3" />
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-[#A0A1A2] hover:border-[#FAB045] text-white font-bold rounded-lg transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400">
                Trusted by 5000+ companies worldwide. <span className="text-[#FAB045] font-medium">Join them today.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animations to global CSS or in your tailwind config */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
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
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}