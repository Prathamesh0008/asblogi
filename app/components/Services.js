'use client'
import { FaPlane, FaShip, FaTruck, FaWarehouse, FaChevronRight } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaPlane className="text-4xl" />,
      title: 'Air Freight',
      description: 'Express air cargo solutions with real-time tracking across 150+ countries.',
      features: ['Same Day Delivery', 'Global Coverage', 'Temperature Control'],
      gradient: 'from-[#FAB045] to-[#f8c468]'
    },
    {
      icon: <FaShip className="text-4xl" />,
      title: 'Ocean Freight',
      description: 'Cost-effective sea freight with comprehensive FCL/LCL options.',
      features: ['Port to Port', 'Door to Door', 'Customs Clearance'],
      gradient: 'from-[#A0A1A2] to-[#c0c1c2]'
    },
    {
      icon: <FaTruck className="text-4xl" />,
      title: 'Road Transport',
      description: 'Efficient nationwide land transportation network.',
      features: ['LTL & FTL', 'Temperature Control', 'Express Delivery'],
      gradient: 'from-[#FAB045] to-[#f8c468]'
    },
    {
      icon: <FaWarehouse className="text-4xl" />,
      title: 'Warehousing',
      description: 'Secure storage solutions with advanced inventory management.',
      features: ['Secure Storage', 'Inventory Management', 'Order Fulfillment'],
      gradient: 'from-[#A0A1A2] to-[#c0c1c2]'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="text-[#FAB045]">Services</span>
          </h2>
          <p className="text-[#A0A1A2] text-xl max-w-3xl mx-auto">
            Comprehensive logistics solutions designed for modern business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-8">
                <div className={`mb-6 transform group-hover:scale-110 transition-transform duration-500 ${
                  service.gradient.includes('FAB045') ? 'text-[#FAB045]' : 'text-[#A0A1A2]'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FAB045] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#A0A1A2] mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        service.gradient.includes('FAB045') ? 'bg-[#FAB045]' : 'bg-[#A0A1A2]'
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <button className={`flex items-center font-semibold group-hover:translate-x-2 transition-transform duration-300 ${
                  service.gradient.includes('FAB045') 
                    ? 'text-[#FAB045] hover:text-[#e8a035]' 
                    : 'text-[#A0A1A2] hover:text-gray-800'
                }`}>
                  Learn More
                  <FaChevronRight className="ml-2 group-hover:ml-4 transition-all duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}