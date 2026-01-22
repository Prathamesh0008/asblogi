// components/GetStartedModal.jsx
'use client'

import { useState } from 'react'
import { FaTimes, FaCheck, FaInfoCircle, FaExclamationTriangle, FaShippingFast } from 'react-icons/fa'

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
      // Show the submit button on step 4, don't auto-submit
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
      // Here you would typically send data to your backend
      console.log('Form submitted:', formData)
      
      // Generate a random tracking number
      const tracking = 'TRK' + Math.floor(100000 + Math.random() * 900000)
      setTrackingNumber(tracking)
      
      // Set submitted state to true
      setOrderSubmitted(true)
      
      // Reset form data but keep it for display
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
      
      // After 3 seconds, close the modal
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
    // Simple estimation logic (in real app, this would be more complex)
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
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Start Your Shipment</h2>
            <p className="text-white/90">Complete the form below to get a quote</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 pt-6">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4, 5].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${step === stepNum ? 'bg-[#FAB045] text-white' : 
                    step > stepNum ? 'bg-green-500 text-white' : 
                    'bg-gray-200 text-gray-600'}
                `}>
                  {step > stepNum ? <FaCheck /> : stepNum}
                </div>
                {stepNum < 5 && (
                  <div className={`
                    h-1 w-16 mx-2
                    ${step > stepNum ? 'bg-green-500' : 'bg-gray-200'}
                  `}></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">
              {step === 1 && 'Select Service Type'}
              {step === 2 && 'Shipment Details'}
              {step === 3 && 'Schedule'}
              {step === 4 && 'Contact Information'}
              {step === 5 && 'Confirmation'}
            </h3>
            <p className="text-gray-600">
              Step {step} of 5
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-6 overflow-y-auto max-h-[50vh]">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Choose Service Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.value}
                      onClick={() => handleServiceSelect(service.value)}
                      className={`
                        p-4 rounded-xl border-2 text-left transition-all
                        ${formData.serviceType === service.value 
                          ? 'border-[#FAB045] bg-orange-50' 
                          : 'border-gray-200 hover:border-gray-300'}
                      `}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{service.label}</h4>
                          <p className="text-sm text-gray-600 mt-1">{service.desc}</p>
                        </div>
                        <span className="font-bold text-[#FAB045]">{service.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipment Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="shipmentWeight"
                    value={formData.shipmentWeight}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="e.g., 10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Value ($)
                  </label>
                  <input
                    type="number"
                    name="shipmentValue"
                    value={formData.shipmentValue}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="e.g., 1000"
                  />
                </div>
              </div>

              {formData.serviceType && formData.shipmentWeight && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start">
                    <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-blue-800">Estimated Cost</h4>
                      <p className="text-2xl font-bold text-[#FAB045] mt-2">
                        ${calculateEstimate()}
                        <span className="text-sm text-gray-600 ml-2">approximate</span>
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        This is an estimate. Final price may vary based on exact requirements.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Origin Location
                  </label>
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="e.g., New York, USA"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="e.g., London, UK"
                    required
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start">
                  <FaExclamationTriangle className="text-yellow-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Important Note</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Please ensure the addresses are complete and accurate. 
                      Customs documentation may be required for international shipments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Pickup Date
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Delivery Date
                  </label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions (Optional)
                </label>
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg h-32"
                  placeholder="Any special handling requirements, fragile items, temperature control, etc."
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="text-center">
                  <FaCheck className="text-green-500 text-3xl mx-auto mb-3" />
                  <h4 className="font-semibold text-green-800">Review & Submit</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Please review all your information before submitting. 
                    Click "Submit Request" to finalize your order.
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              {orderSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaShippingFast className="text-green-600 text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-3">
                    Your Order is Shipped!
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Thank you for your order. Your shipment has been processed and is on its way.
                  </p>
                  {trackingNumber && (
                    <div className="bg-gray-100 rounded-xl p-4 max-w-md mx-auto">
                      <p className="text-sm text-gray-600 mb-2">Tracking Number:</p>
                      <p className="text-xl font-mono font-bold text-[#FAB045]">{trackingNumber}</p>
                      <p className="text-sm text-gray-600 mt-3">
                        You'll receive tracking updates at {formData.email}
                      </p>
                    </div>
                  )}
                  <p className="text-gray-500 mt-6 animate-pulse">
                    Closing automatically in 3 seconds...
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="text-center">
                      <FaCheck className="text-blue-500 text-3xl mx-auto mb-3" />
                      <h4 className="font-semibold text-blue-800">Ready to Submit</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        Click the "Submit Order" button below to finalize your shipment request.
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Order Summary</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">{formData.serviceType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">From:</span>
                        <span className="font-medium">{formData.origin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">To:</span>
                        <span className="font-medium">{formData.destination}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Contact:</span>
                        <span className="font-medium">{formData.name} ({formData.email})</span>
                      </div>
                      <div className="pt-3 border-t">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Estimated Total:</span>
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

        {/* Footer with Navigation - Only show for steps 1-4 */}
        {step < 5 && (
          <div className="border-t px-6 py-4 bg-gray-50">
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-colors
                  ${step === 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-gray-100'}
                `}
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
                  onClick={handleNext}
                  className={`
                    px-8 py-3 rounded-lg font-medium transition-colors
                    bg-gradient-to-r from-[#FAB045] to-[#f8c468] 
                    hover:from-[#e8a035] hover:to-[#e8a035] 
                    text-white
                  `}
                >
                  {step === 4 ? 'Submit Request' : 'Continue'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button for Step 5 - Only show when not submitted yet */}
        {step === 5 && !orderSubmitted && (
          <div className="border-t px-6 py-4 bg-gray-50">
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