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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-300 md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Trusted by industry leaders worldwide for our reliability and exceptional service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500">
              <FaQuoteLeft className="text-blue-300 text-4xl mb-6" />
              
              <p className="text-gray-700 text-xl mb-8 leading-relaxed">
                "{testimonials[current].content}"
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-xl mr-6">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 ml-1 text-xl" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={next}                                                                                                  
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
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
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Additional Mini Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Outstanding service! Our international shipments have never been smoother."</p>
              <p className="font-semibold">David Miller</p>
              <p className="text-sm text-gray-500">Export Manager</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Professional team, transparent pricing, and reliable delivery every time."</p>
              <p className="font-semibold">Lisa Wong</p>
              <p className="text-sm text-gray-500">Operations Director</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Their technology platform makes tracking and management a breeze."</p>
              <p className="font-semibold">Robert Kim</p>
              <p className="text-sm text-gray-500">IT Logistics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}