'use client'
import { useState, useEffect, useRef } from 'react'
import { FaTruck, FaSearch } from 'react-icons/fa'
import GetStartedModal from './GetStartedModal'
import Lottie from 'lottie-react'
import lightningLottie from '@/public/lottie/Loading_car.json'
import GlobalLottie from '@/public/lottie/Global Network.json'
import SecuredLottie from '@/public/lottie/Secured.json'
import DeliveryLottie from '@/public/lottie/Dlivery Map.json'

// Counter component for animated numbers
const Counter = ({ end, duration = 2000, suffix = '', prefix = '', decimals = 0, className = '' }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            animateCounter()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  const animateCounter = () => {
    const startTime = Date.now()
    const startValue = 0
    
    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = startValue + (end - startValue) * easeOutQuart
      
      setCount(parseFloat(currentValue.toFixed(decimals)))
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }
    
    requestAnimationFrame(updateCounter)
  }

  return (
    <span ref={countRef} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const features = [
    {
      icon: (
        <div className="w-25 h-25">
          <Lottie
            animationData={lightningLottie}
            loop
            autoplay
          />
        </div>
      ),
      title: 'Lightning Fast',
      desc: 'Same-Day Dispatch',
      color: 'text-[#FAB045]',
      gradient: 'from-[#FAB045] to-[#FFD700]'
    },
    {
      icon: (
        <div className="w-25 h-25">
          <Lottie
            animationData={DeliveryLottie}
            loop
            autoplay
          />
        </div>
      ),
      title: 'Live Tracking',
      desc: 'Real-time Updates',
      color: 'text-[#FAB045]',
      gradient: 'from-[#FAB045] to-[#FFD700]'
    },
    {
      icon: (
        <div className="w-35 h-25">
          <Lottie
            animationData={SecuredLottie}
            loop
            autoplay
          />
        </div>
      ),
      title: 'Armored Security',
      desc: 'Advanced Protection',
      color: 'text-[#FAB045]',
      gradient: 'from-[#FAB045] to-[#FFD700]'
    },
    {
      icon: (
        <div className="w-35 h-25">
          <Lottie
            animationData={GlobalLottie}
            loop
            autoplay
          />
        </div>
      ),
      title: 'Global Network',
      desc: '180+ Countries',
      color: 'text-[#FAB045]',
      gradient: 'from-[#FAB045] to-[#FFD700]'
    },
  ]

  const handleTrackShipment = () => {
    const trackingNumber = prompt('Please enter your tracking number:')
    if (trackingNumber) {
      alert(`Tracking number: ${trackingNumber}\n\nIn a real application, this would redirect to a tracking page.`)
    }
  }

  const handleGetStarted = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <section 
        className="relative text-white overflow-hidden min-h-screen"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}  
      >
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FAB045]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#4CC9F0]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(90deg, transparent 95%, #FAB045 100%),
                               linear-gradient(0deg, transparent 95%, #4CC9F0 100%)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
              {/* Left side - Text content */}
              <div className="lg:w-1/2 lg:pr-8">
                <div className="mb-10 lg:mb-12">
                  <span className="relative inline-block bg-gradient-to-r from-[#FAB045] to-[#f8c468] text-white px-8 py-3 rounded-full text-sm font-bold tracking-wide shadow-2xl overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FF8C00] to-[#FAB045] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative flex items-center">
                      <span className="mr-2 animate-pulse">⚡</span>
                      Elite Global Logistics
                    </span>
                  </span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-white to-[#FAB045] bg-clip-text text-transparent">
                    Precision
                  </span>
                  <span className="block bg-gradient-to-r from-[#FAB045] via-[#FFD700] to-[#FAB045] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Logistics
                  </span>
                  <span className="block text-white mt-2 text-4xl lg:text-5xl">
                    Solutions
                  </span>
                </h1>
                
                <p className="text-xl text-gray-200 mb-10 lg:mb-12 max-w-2xl leading-relaxed font-light">
                  Revolutionizing global supply chains with cutting-edge technology, 
                  real-time visibility, and unparalleled security for your shipments.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-12 lg:mb-0">
                  <button 
                    onClick={handleGetStarted}
                    className="group relative bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-[#FF8C00] hover:to-[#FFD700] text-white font-bold py-5 px-10 rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      <FaTruck className="mr-3 text-xl group-hover:animate-bounce" />
                      Launch Shipment
                    </span>
                  </button>
                  
                  <button 
                    onClick={handleTrackShipment}
                    className="group relative border-2 border-white/30 hover:border-[#FAB045]/50 text-white font-semibold py-5 px-10 rounded-xl text-lg transition-all duration-300 backdrop-blur-xl bg-white/5 hover:bg-white/10"
                  >
                    <span className="relative flex items-center justify-center">
                      <FaSearch className="mr-3 group-hover:rotate-90 transition-transform duration-300" />
                      <span className="group-hover:text-[#FAB045] transition-colors duration-300">
                        Track Consignment
                      </span>
                    </span>
                  </button>
                </div>
              </div>

              {/* Right side - Feature boxes */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="group relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl p-7 border border-white/20 hover:border-[#FAB045]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                    >
                      {/* Background gradient on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <div className="relative flex flex-col items-center text-center">
                        <div className={`${feature.color} mb-5 text-4xl group-hover:scale-110 transition-transform duration-500`}>
                          {feature.icon}
                        </div>
                        <h4 className="font-bold text-xl mb-3 group-hover:text-[#FAB045] transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                          {feature.desc}
                        </p>
                      </div>
                      
                      {/* Animated underline */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#FAB045] to-[#4CC9F0] group-hover:w-16 transition-all duration-500"></div>
                    </div>
                  ))}
                </div>
                
                {/* Stats overlay with animated counters */}
                <div className="mt-8 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-2xl rounded-2xl p-6 border border-white/10">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div className="group">
                      <div className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                        <Counter 
                          end={99.8} 
                          duration={2500} 
                          suffix="%"
                          decimals={1}
                          className="bg-gradient-to-r from-[#FAB045] to-[#FFD700] bg-clip-text text-transparent"
                        />
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 mt-2">
                        Delivery Rate
                      </div>
                    </div>
                    <div className="group">
                      <div className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                        <Counter 
                          end={180} 
                          duration={1800} 
                          suffix="+"
                          className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent"
                        />
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 mt-2">
                        Countries
                      </div>
                    </div>
                    <div className="group">
                      <div className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                        <Counter 
                          end={24} 
                          duration={1200} 
                          suffix="/7"
                          className="bg-gradient-to-r from-[#4CC9F0] to-[#4361EE] bg-clip-text text-transparent"
                        />
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 mt-2">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add global animations */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        /* Counter animation styles */
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .counter-animate {
          animation: countUp 0.5s ease-out forwards;
        }
      `}</style>

      <GetStartedModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}