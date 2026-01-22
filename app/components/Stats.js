'use client'
import { FaGlobe, FaChartLine, FaBoxOpen, FaHeadset } from 'react-icons/fa'

export default function Stats() {
  const stats = [
    { 
      number: '150+', 
      label: 'Countries', 
      description: 'Global Coverage',
      icon: <FaGlobe className="text-2xl" />
    },
    { 
      number: '99.8%', 
      label: 'Success Rate', 
      description: 'On-time Delivery',
      icon: <FaChartLine className="text-2xl" />
    },
    { 
      number: '15K+', 
      label: 'Deliveries', 
      description: 'Monthly Shipments',
      icon: <FaBoxOpen className="text-2xl" />
    },
    { 
      number: '24/7', 
      label: 'Support', 
      description: 'Customer Service',
      icon: <FaHeadset className="text-2xl" />
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <p className="text-[#A0A1A2] text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}