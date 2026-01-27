// components/GetStartedModal.jsx
'use client'

import { useState } from 'react'
import { FaTimes, FaCheck, FaInfoCircle, FaExclamationTriangle, FaShippingFast, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function GetStartedModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1
    serviceType: '',
    shipmentWeight: '',
    shipmentValue: '',
    
    // Step 2
    origin: '',
    destination: '',
    
    // Step 3
    pickupDate: '',
    deliveryDate: '',
    
    // Step 4
    name: '',
    email: '',
    phone: '',
    company: '',
    specialInstructions: ''
  })
  const [orderSubmitted, setOrderSubmitted] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState('')

  const serviceOptions = [
    { value: 'express', label: 'Express Delivery', desc: '24-48 hours', price: '$$$' },
    { value: 'standard', label: 'Standard Shipping', desc: '3-7 days', price: '$$' },
    { value: 'economy', label: 'Economy', desc: '7-14 days', price: '$' },
    { value: 'fragile', label: 'Fragile Goods', desc: 'Special handling', price: '$$$$' },
    { value: 'bulk', label: 'Bulk Shipment', desc: 'Large quantities', price: '$$$' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceSelect = (service) => {
    setFormData(prev => ({
      ...prev,
      serviceType: service
    }))
    setStep(2)
  }

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      setStep(5)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    try {
      console.log('Form submitted:', formData)
      
      const tracking = 'TRK' + Math.floor(100000 + Math.random() * 900000)
      setTrackingNumber(tracking)
      setOrderSubmitted(true)
      
      const submittedData = { ...formData }
      setFormData({
        serviceType: '',
        shipmentWeight: '',
        shipmentValue: '',
        origin: '',
        destination: '',
        pickupDate: '',
        deliveryDate: '',
        name: '',
        email: '',
        phone: '',
        company: '',
        specialInstructions: ''
      })
      
      setTimeout(() => {
        onClose()
        setStep(1)
        setOrderSubmitted(false)
      }, 3000)
      
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error submitting your request. Please try again.')
    }
  }

  const calculateEstimate = () => {
    const basePrice = 50
    const serviceMultiplier = {
      'express': 2.5,
      'standard': 1.5,
      'economy': 1,
      'fragile': 3,
      'bulk': 2
    }
    
    if (!formData.serviceType || !formData.shipmentWeight) return null
    
    const weight = parseFloat(formData.shipmentWeight) || 1
    const multiplier = serviceMultiplier[formData.serviceType] || 1
    const valueSurcharge = formData.shipmentValue > 1000 ? 1.2 : 1
    
    return Math.round(basePrice * weight * multiplier * valueSurcharge)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden mx-2 sm:mx-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] p-4 sm:p-6 flex justify-between items-center">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">Start Your Shipment</h2>
            <p className="text-white/90 text-xs sm:text-sm truncate">Complete the form below to get a quote</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-1 sm:p-2 rounded-full transition-colors flex-shrink-0 ml-2"
            aria-label="Close modal"
          >
            <FaTimes className="text-lg sm:text-xl" />
          </button>
        </div>

        {/* Mobile Progress Bar */}
        <div className="sm:hidden px-4 pt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-700">
              Step {step} of 5
            </div>
            <div className="w-24 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#FAB045] rounded-full h-2 transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Desktop Progress Steps */}
        <div className="hidden sm:block px-6 pt-6">
          <div className="flex items-center justify-between mb-6">
            {[1, 2, 3, 4, 5].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base
                  ${step === stepNum ? 'bg-[#FAB045] text-white' : 
                    step > stepNum ? 'bg-green-500 text-white' : 
                    'bg-gray-200 text-gray-600'}
                `}>
                  {step > stepNum ? <FaCheck className="text-xs sm:text-sm" /> : stepNum}
                </div>
                {stepNum < 5 && (
                  <div className={`
                    h-1 w-8 sm:w-16 mx-1 sm:mx-2
                    ${step > stepNum ? 'bg-green-500' : 'bg-gray-200'}
                  `}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Title */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center">
            {step === 1 && 'Select Service Type'}
            {step === 2 && 'Shipment Details'}
            {step === 3 && 'Schedule'}
            {step === 4 && 'Contact Information'}
            {step === 5 && 'Confirmation'}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm text-center mt-1">
            {step < 5 ? `Step ${step} of 5` : 'Final Review'}
          </p>
        </div>

        {/* Form Content */}
        <div className="px-3 sm:px-6 pb-4 sm:pb-6 overflow-y-auto max-h-[50vh] sm:max-h-[55vh]">
          {step === 1 && (
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">
                  Choose Service Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.value}
                      onClick={() => handleServiceSelect(service.value)}
                      className={`
                        p-3 sm:p-4 rounded-lg sm:rounded-xl border text-left transition-all
                        ${formData.serviceType === service.value 
                          ? 'border-[#FAB045] bg-orange-50' 
                          : 'border-gray-200 hover:border-gray-300'}
                      `}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm sm:text-base truncate">{service.label}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">{service.desc}</p>
                        </div>
                        <span className="font-bold text-[#FAB045] text-sm sm:text-base ml-2 flex-shrink-0">
                          {service.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Shipment Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="shipmentWeight"
                    value={formData.shipmentWeight}
                    onChange={handleInputChange}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
                    placeholder="e.g., 10"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Estimated Value ($)
                  </label>
                  <input
                    type="number"
                    name="shipmentValue"
                    value={formData.shipmentValue}
                    onChange={handleInputChange}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
                    placeholder="e.g., 1000"
                  />
                </div>
              </div>

              {formData.serviceType && formData.shipmentWeight && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="flex items-start">
                    <FaInfoCircle className="text-blue-500 mt-0.5 sm:mt-1 text-sm sm:text-base flex-shrink-0 mr-2 sm:mr-3" />
                    <div className="min-w-0">
                      <h4 className="font-semibold text-blue-800 text-sm sm:text-base">Estimated Cost</h4>
                      <p className="text-xl sm:text-2xl font-bold text-[#FAB045] mt-1 sm:mt-2">
                        ${calculateEstimate()}
                        <span className="text-xs sm:text-sm text-gray-600 ml-2">approximate</span>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                        This is an estimate. Final price may vary based on exact requirements.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Origin Location
                  </label>
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleInputChange}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
                    placeholder="e.g., New York, USA"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
                    placeholder="e.g., London, UK"
                    required
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="flex items-start">
                  <FaExclamationTriangle className="text-yellow-500 mt-0.5 sm:mt-1 text-sm sm:text-base flex-shrink-0 mr-2 sm:mr-3" />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-yellow-800 text-sm sm:text-base">Important Note</h4>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1">
                      Please ensure the addresses are complete and accurate. 
                      Customs documentation may be required for international shipments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Preferred Pickup Date
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Expected Delivery Date
                  </label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Special Instructions (Optional)
                </label>
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base h-24 sm:h-32"
                  placeholder="Any special handling requirements, fragile items, temperature control, etc."
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="text-center">
                  <FaCheck className="text-green-500 text-xl sm:text-2xl md:text-3xl mx-auto mb-2 sm:mb-3" />
                  <h4 className="font-semibold text-green-800 text-sm sm:text-base">Review & Submit</h4>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    Please review all your information before submitting. 
                    Click "Submit Request" to finalize your order.
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4 sm:space-y-6">
              {orderSubmitted ? (
                <div className="text-center py-4 sm:py-8">
                  <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <FaShippingFast className="text-green-600 text-2xl sm:text-3xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 mb-2 sm:mb-3">
                    Your Order is Shipped!
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 px-2">
                    Thank you for your order. Your shipment has been processed and is on its way.
                  </p>
                  {trackingNumber && (
                    <div className="bg-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4 max-w-md mx-auto">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Tracking Number:</p>
                      <p className="text-lg sm:text-xl font-mono font-bold text-[#FAB045] break-all">{trackingNumber}</p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">
                        You'll receive tracking updates at {formData.email}
                      </p>
                    </div>
                  )}
                  <p className="text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6 animate-pulse">
                    Closing automatically in 3 seconds...
                  </p>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-center">
                      <FaCheck className="text-blue-500 text-xl sm:text-2xl md:text-3xl mx-auto mb-2 sm:mb-3" />
                      <h4 className="font-semibold text-blue-800 text-sm sm:text-base">Ready to Submit</h4>
                      <p className="text-xs sm:text-sm text-gray-700 mt-1">
                        Click the "Submit Order" button below to finalize your shipment request.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg mb-3 sm:mb-4">Order Summary</h4>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-xs sm:text-sm">Service:</span>
                        <span className="font-medium text-xs sm:text-sm">{formData.serviceType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-xs sm:text-sm">From:</span>
                        <span className="font-medium text-xs sm:text-sm">{formData.origin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-xs sm:text-sm">To:</span>
                        <span className="font-medium text-xs sm:text-sm">{formData.destination}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-xs sm:text-sm">Contact:</span>
                        <span className="font-medium text-xs sm:text-sm truncate ml-2">{formData.name} ({formData.email})</span>
                      </div>
                      <div className="pt-2 sm:pt-3 border-t">
                        <div className="flex justify-between text-sm sm:text-lg font-bold">
                          <span className="text-xs sm:text-base">Estimated Total:</span>
                          <span className="text-[#FAB045]">${calculateEstimate()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Navigation - Always visible except during auto-close */}
        {!orderSubmitted && (
          <div className="sm:hidden border-t px-4 py-3 bg-gray-50">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center
                  ${step === 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-gray-100'}
                `}
              >
                <FaChevronLeft className="mr-1" />
                Back
              </button>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={step === 5 ? handleSubmit : handleNext}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center
                    ${step === 5
                      ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                      : 'bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-[#e8a035] hover:to-[#e8a035]'}
                    text-white
                  `}
                >
                  {step === 4 ? 'Submit' : step === 5 ? 'Confirm' : 'Next'}
                  {step < 5 && <FaChevronRight className="ml-1" />}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Navigation - For steps 1-4 */}
        {step < 5 && !orderSubmitted && (
          <div className="hidden sm:block border-t px-6 py-4 bg-gray-50">
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className={`
                  px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors flex items-center
                  ${step === 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-gray-100'}
                `}
              >
                <FaChevronLeft className="mr-1 sm:mr-2" />
                Back
              </button>
              
              <div className="flex gap-3 sm:gap-4">
                <button
                  onClick={onClose}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-gray-700 hover:bg-gray-100 rounded-lg text-sm sm:text-base font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleNext}
                  className={`
                    px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors flex items-center
                    bg-gradient-to-r from-[#FAB045] to-[#f8c468] 
                    hover:from-[#e8a035] hover:to-[#e8a035] 
                    text-white
                  `}
                >
                  {step === 4 ? 'Submit Request' : 'Continue'}
                  {step < 4 && <FaChevronRight className="ml-1 sm:ml-2" />}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Submit Button for Step 5 */}
        {step === 5 && !orderSubmitted && (
          <div className="hidden sm:block border-t px-6 py-4 bg-gray-50">
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Back
              </button>
              
              <div className="flex gap-4">
                <button
                  onClick={onClose}
                  className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className={`
                    px-8 py-3 rounded-lg font-medium transition-colors
                    bg-gradient-to-r from-green-500 to-green-600
                    hover:from-green-600 hover:to-green-700
                    text-white
                  `}
                >
                  Submit Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}