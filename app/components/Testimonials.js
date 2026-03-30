'use client'
import { useState } from 'react'
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  
  const testimonials = [
    {
      name: 'Michael Rodriguez',
      company: 'TechGiant Inc.',
      role: 'Supply Chain Director',
      content: 'SwiftLogistics transformed our global distribution network. Their real-time tracking and proactive communication are exceptional.',
      rating: 5,
    },
    {
      name: 'Sarah Chen',
      company: 'Global Retail Corp',
      role: 'Logistics Manager',
      content: 'We\'ve reduced shipping costs by 30% while improving delivery times. Their team is responsive and professional.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      company: 'PharmaPlus',
      role: 'Operations Head',
      content: 'The cold chain solutions for our pharmaceutical products are outstanding. Temperature monitoring gives us peace of mind.',
      rating: 5,
    },
    {
      name: 'Emily Thompson',
      company: 'AutoParts Global',
      role: 'Logistics Coordinator',
      content: 'Their customs clearance service saved us countless hours. Everything arrives on time, every time.',
      rating: 5,
    },
  ]

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Heading */}
          <h2 className="md:text-5xl font-light mb-4 relative tracking-wide">
            {/* 🔶 Transparent Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#E65100]/10 via-[#FFD700]/5 to-transparent blur-xl"></span>

            {/* 🔶 Gradient Text */}
            <span className="relative bg-gradient-to-r from-[#E65100] via-[#FFD700] to-[#FF8F00] bg-clip-text text-transparent font-medium tracking-wide">
              What Our Clients Say
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg max-w-3xl mx-auto font-medium leading-relaxed 
            bg-gradient-to-r from-[#E65100]/80 via-[#FF8F00]/70 to-[#FFD700]/80 
            bg-clip-text text-transparent">
            Trusted by industry leaders worldwide for our reliability and exceptional service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500 cursor-pointer border border-gray-100">
              <FaQuoteLeft className="text-[#FF8F00]/50 text-4xl mb-6" />
              
              <p className="text-gray-700 text-xl mb-8 leading-relaxed font-light">
                "{testimonials[current].content}"
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#E65100] to-[#FFD700] flex items-center justify-center text-white font-light text-xl mr-6">
                    {testimonials[current].name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="text-xl font-medium text-gray-800">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-gray-500 font-light">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#FFD700] ml-1 text-xl" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-[#FF8F00]/10 text-[#E65100] flex items-center justify-center hover:bg-[#FF8F00]/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#E65100] to-[#FFD700] text-white flex items-center justify-center hover:from-[#FF8F00] hover:to-[#E65100] transition-all"
                aria-label="Next testimonial"
              >
                <FaArrowRight />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current 
                      ? 'bg-gradient-to-r from-[#E65100] to-[#FFD700] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Additional Mini Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#FFD700] mr-1" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Outstanding service! Our international shipments have never been smoother."</p>
              <p className="font-semibold text-gray-800">David Miller</p>
              <p className="text-sm text-gray-500">Export Manager</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#FFD700] mr-1" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Professional team, transparent pricing, and reliable delivery every time."</p>
              <p className="font-semibold text-gray-800">Lisa Wong</p>
              <p className="text-sm text-gray-500">Operations Director</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#FFD700] mr-1" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Their technology platform makes tracking and management a breeze."</p>
              <p className="font-semibold text-gray-800">Robert Kim</p>
              <p className="text-sm text-gray-500">IT Logistics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}