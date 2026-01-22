'use client'
import { FaTruck, FaSearch, FaShippingFast, FaGlobe, FaShieldAlt, FaClock } from 'react-icons/fa'

export default function Hero() {
  const features = [
    { 
      icon: <FaShippingFast />, 
      title: 'Fast Delivery', 
      desc: '24/7 Express Services',
      color: 'text-[#FAB045]'
    },
    { 
      icon: <FaGlobe />, 
      title: 'Global Reach', 
      desc: '150+ Countries',
      color: 'text-[#A0A1A2]'
    },
    { 
      icon: <FaShieldAlt />, 
      title: 'Secure Shipping', 
      desc: 'Insured Shipments',
      color: 'text-[#FAB045]'
    },
    { 
      icon: <FaClock />, 
      title: 'Real-time Tracking', 
      desc: 'Live Updates',
      color: 'text-[#A0A1A2]'
    },
  ]

  return (
    <section 
      className="relative text-white overflow-hidden min-h-screen"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FAB045] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A0A1A2] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            {/* Left side - Text content */}
            <div className="lg:w-1/2 lg:pr-8">
              <div className="mb-10 lg:mb-12">
                <span className="inline-block bg-gradient-to-r from-[#FAB045] to-[#f8c468] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  Trusted Worldwide Logistics Partner
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
                Precision <span className="text-[#FAB045]">Logistics</span> Solutions
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-200 mb-10 lg:mb-12 max-w-2xl leading-relaxed">
                Delivering excellence across borders with advanced tracking, 
                secure handling, and reliable global transportation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12 lg:mb-0">
                <button className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-[#e8a035] hover:to-[#e8a035] text-white font-semibold py-4 px-8 sm:px-10 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center">
                  <FaTruck className="mr-3" />
                  Get Started
                </button>
                <button className="border-2 border-white/50 hover:border-[#FAB045] text-white hover:text-[#FAB045] font-semibold py-4 px-8 sm:px-10 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm bg-white/5">
                  <FaSearch className="inline mr-3" />
                  Track Shipment
                </button>
              </div>
            </div>

            {/* Right side - Feature boxes */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-20">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20 hover:border-[#FAB045] transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center text-center"
                  >
                    <div className={`${feature.color} mb-4 text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-lg lg:text-xl mb-2 group-hover:text-[#FAB045] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-300">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}