'use client';
import { useState } from 'react';
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding, 
  FaClipboard, 
  FaShieldAlt, 
  FaTimes,
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

export default function GetQuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setIsSuccess(false);

    try {
      // Replace with your Formspree endpoint for quotes
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjpdzyb';
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          _subject: `Quote Request: ${formData.service || 'Logistics Service'}`,
          _replyto: formData.email,
          _format: 'plain'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });

        // Auto-close after success
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        const errorData = await response.json();
        if (errorData.errors && errorData.errors.length > 0) {
          setError(`Error: ${errorData.errors[0].message}`);
        } else {
          setError('Failed to send quote request. Please try again.');
        }
      }
    } catch (err) {
      console.error('Network error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[100] backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-[101] overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <FaTimes className="text-gray-600 text-lg" />
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FAB045] to-orange-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <FaPaperPlane className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Get a Quote</h2>
                  <p className="text-gray-600">Fill out this quick form and we'll send you a custom quote within 24 hours</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-2">
                        <FaUser className="text-[#FAB045] text-sm" />
                      </div>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-2 focus:ring-[#FAB045]/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-2">
                        <FaEnvelope className="text-[#FAB045] text-sm" />
                      </div>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-2 focus:ring-[#FAB045]/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#A0A1A2]/10 to-gray-400/10 rounded-lg flex items-center justify-center mr-2">
                        <FaPhone className="text-[#A0A1A2] text-sm" />
                      </div>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-2 focus:ring-[#FAB045]/20 transition-all duration-300"
                      placeholder="+918291293651"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#A0A1A2]/10 to-gray-400/10 rounded-lg flex items-center justify-center mr-2">
                        <FaBuilding className="text-[#A0A1A2] text-sm" />
                      </div>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-2 focus:ring-[#FAB045]/20 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-2">
                      <FaClipboard className="text-[#FAB045] text-sm" />
                    </div>
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-2 focus:ring-[#FAB045]/20 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="air-freight">Air Freight</option>
                    <option value="ocean-freight">Ocean Freight</option>
                    <option value="road-freight">Road Freight</option>
                    <option value="warehousing">Warehousing</option>
                    <option value="supply-chain">Supply Chain Management</option>
                    <option value="cold-chain">Cold Chain Logistics</option>
                    <option value="customs">Customs Clearance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-2 focus:ring-[#FAB045]/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your shipment details, requirements, or any special instructions..."
                  />
                </div>

                {/* Status Messages */}
                {isSuccess && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center animate-fadeIn">
                    <FaCheckCircle className="text-green-500 mr-3 text-xl flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-800">Quote request sent successfully!</p>
                      <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center animate-fadeIn">
                    <FaExclamationTriangle className="text-red-500 mr-3 text-xl flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-800">{error}</p>
                      <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#A0A1A2]/10 to-gray-400/10 rounded-lg flex items-center justify-center mr-3">
                      <FaShieldAlt className="text-[#A0A1A2]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Secure & encrypted form</p>
                      <p className="text-xs text-gray-500">Your information is protected</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`group relative overflow-hidden bg-gradient-to-r from-[#FAB045] to-orange-400 hover:from-orange-400 hover:to-[#FAB045] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                    >
                      <span className="relative z-10 flex items-center">
                        {isLoading ? (
                          <>
                            <FaSpinner className="mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="mr-2" />
                            Get Quote
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}