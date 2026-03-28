'use client';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUser,
  FaBuilding, FaClipboard, FaClock, FaHeadset, FaGlobe,
  FaShieldAlt, FaTruck, FaWhatsapp, FaSpinner, FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  // EmailJS configuration – replace with your actual IDs
  const EMAILJS_CONFIG = {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    TEAM_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEAM_TEMPLATE,
    AUTO_REPLY_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_AUTO_TEMPLATE,
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate all required fields
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (formData.phone && !/^[\d\s+()-]+$/.test(formData.phone)) {
      errors.phone = 'Phone number contains invalid characters';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Generate a random reference number
  const generateReferenceNumber = () => {
    return 'INV-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');
    setIsSuccess(false);

    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      const referenceNumber = generateReferenceNumber();
      const submissionTime = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'long'
      });

      const teamParams = {
        to_email: 'info@invictuslogi.com',
        title: formData.subject || 'New Inquiry',
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        subject: formData.subject || 'General Inquiry',
        message: formData.message,
        submitted_at: submissionTime,
        reference_number: referenceNumber
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEAM_TEMPLATE_ID,
        teamParams
      );

      const autoReplyParams = {
        to_email: formData.email,
        to_name: formData.name,
        from_name: 'Invictus Logistics',
        from_email: 'info@invictuslogi.com',
        reply_to: 'info@invictuslogi.com',
        subject: formData.subject || 'General Inquiry',
        message: formData.message,
        submitted_at: submissionTime,
        reference_number: referenceNumber
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID,
        autoReplyParams
      );

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setValidationErrors({});
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(
        err?.text
          ? `Failed: ${err.text}`
          : 'Failed to send message. Please try again or contact us directly via phone.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Contact info cards data
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: ['+31685865799'],
      description: 'Available 24/7',
      color: 'from-[#FAB045] to-orange-300',
      bgColor: 'bg-gradient-to-br from-[#FAB045]/10 to-orange-400/10',
      action: 'tel:+31685865799'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: ['info@invictuslogi.com'],
      description: 'Response within 2 hours',
      color: 'from-[#A0A1A2] to-gray-400',
      bgColor: 'bg-gradient-to-br from-[#A0A1A2]/10 to-gray-400/10',
      action: 'mailto:info@invictuslogi.com'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      details: ['+918291293651'],
      description: 'Instant chat support',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-500/10 to-green-600/10',
      action: 'https://wa.me/918291293651'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white/80 py-12 sm:py-16 md:py-20">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-[#FAB045]/70 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-[#A0A1A2]/70 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* TOP BADGE */}
          <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm mb-4 sm:mb-6 border border-white/10">
            <FaTruck className="mr-2 text-[#FAB045]/80 text-xs sm:text-sm" />
            <span className="text-xs font-light tracking-wide text-white/70">
              CONNECT WITH LOGISTICS EXPERTS
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light mb-4 sm:mb-6 leading-snug tracking-wide text-white/70">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#FAB045]/80 via-orange-300/80 to-[#FAB045]/80 bg-clip-text text-transparent font-normal">
              Touch
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-gray-400/80 mb-8 sm:mb-10 leading-relaxed font-light px-4">
            Connect with our logistics experts for tailored solutions that streamline your supply chain
          </p>

          {/* STATS - Responsive Grid */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 mt-8 sm:mt-12">
            <div className="text-center group">
              <div className="text-xl sm:text-2xl font-light text-[#FAB045]/90 mb-1">24/7</div>
              <div className="text-gray-400/80 flex items-center justify-center gap-2 text-xs sm:text-sm font-light">
                <FaClock className="text-[#FAB045]/80 text-xs sm:text-sm" />
                <span>Support Available</span>
              </div>
            </div>
            <div className="text-center group">
              <div className="text-xl sm:text-2xl font-light text-[#FAB045]/90 mb-1">2h</div>
              <div className="text-gray-400/80 flex items-center justify-center gap-2 text-xs sm:text-sm font-light">
                <FaHeadset className="text-[#FAB045]/80 text-xs sm:text-sm" />
                <span>Avg. Response Time</span>
              </div>
            </div>
            <div className="text-center group">
              <div className="text-xl sm:text-2xl font-light text-[#FAB045]/90 mb-1">150+</div>
              <div className="text-gray-400/80 flex items-center justify-center gap-2 text-xs sm:text-sm font-light">
                <FaGlobe className="text-[#FAB045]/80 text-xs sm:text-sm" />
                <span>Countries Supported</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-8 sm:-mt-12 md:-mt-16 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Contact Information Cards - Stack on mobile */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative overflow-hidden block transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FAB045]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 border border-gray-100 hover:border-[#FAB045]/30 transition-all duration-300 hover:shadow-2xl">
                      <div className="flex items-start mb-4 sm:mb-6">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${info.color} rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <div className="text-white text-lg sm:text-2xl">{info.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 group-hover:text-[#FAB045] transition-colors">{info.title}</h3>
                          <p className="text-gray-500 text-xs sm:text-sm">{info.description}</p>
                        </div>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium text-base sm:text-lg break-all">{detail}</p>
                        ))}
                      </div>
                      {info.title === 'WhatsApp' && (
                        <div className="mt-3 sm:mt-4 inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500 text-white font-semibold rounded-lg text-xs sm:text-sm group-hover/wa:bg-green-600 transition-all">
                          <FaWhatsapp className="mr-2" />
                          Chat on WhatsApp
                          <span className="ml-2 opacity-0 group-hover/wa:opacity-100 transition-opacity">→</span>
                        </div>
                      )}
                    </div>
                  </a>
                ))}

                {/* Office Hours Card */}
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A0A1A2]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 border border-gray-800">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FAB045] to-orange-400 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 shadow-lg group-hover:scale-110 transition-transform">
                        <FaClock className="text-white text-lg sm:text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-1">Business Hours</h3>
                        <p className="text-gray-100 text-xs sm:text-sm">We're here when you need us</p>
                      </div>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-gray-700 text-sm sm:text-base">
                        <span className="text-gray-300">Monday - Friday</span>
                        <span className="font-bold text-[#FAB045]">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-gray-700 text-sm sm:text-base">
                        <span className="text-gray-300">Saturday</span>
                        <span className="font-bold text-[#FAB045]">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center text-sm sm:text-base">
                        <span className="text-gray-300">Sunday</span>
                        <span className="font-bold text-[#FAB045]">Emergency Only</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Support */}
                <div className="bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-2xl p-5 sm:p-6 border border-[#FAB045]/20">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#FAB045] to-orange-400 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      <FaHeadset className="text-white text-base sm:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-gray-700">Emergency Support</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Critical shipments only</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm mb-3">
                    For urgent shipment issues requiring immediate attention
                  </p>
                  <a href="tel:+31685865799" className="flex items-center group">
                    <FaPhone className="text-[#FAB045] mr-2 group-hover:animate-bounce text-sm" />
                    <span className="font-bold text-gray-900 group-hover:text-[#FAB045] transition-colors text-sm sm:text-base">+31685865799</span>
                  </a>
                </div>
              </div>

              {/* Contact Form Section - Full width on mobile */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
                  <div className="relative p-5 sm:p-8 md:p-12">
                    <div className="flex items-center mb-6 sm:mb-8 md:mb-10">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FAB045] to-orange-400 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg">
                        <FaPaperPlane className="text-white text-lg sm:text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700/80 mb-1 tracking-wide">
                          Send Us a Message
                        </h2>
                        <p className="text-gray-500/80 font-light text-xs sm:text-sm leading-relaxed">
                          Fill out the form below and we'll get back to you promptly
                        </p>
                      </div>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        {/* Name Field */}
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3 flex items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform">
                              <FaUser className="text-[#FAB045] text-xs sm:text-sm" />
                            </div>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-gray-600 bg-white border-2 ${
                              validationErrors.name ? 'border-red-500' : 'border-gray-200'
                            } rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-sm sm:text-base`}
                            placeholder="John Doe"
                          />
                          {validationErrors.name && <p className="mt-1 text-xs sm:text-sm text-red-600">{validationErrors.name}</p>}
                        </div>

                        {/* Email Field */}
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3 flex items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform">
                              <FaEnvelope className="text-[#FAB045] text-xs sm:text-sm" />
                            </div>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-gray-600 bg-white border-2 ${
                              validationErrors.email ? 'border-red-500' : 'border-gray-200'
                            } rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-sm sm:text-base`}
                            placeholder="john@example.com"
                          />
                          {validationErrors.email && <p className="mt-1 text-xs sm:text-sm text-red-600">{validationErrors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        {/* Phone Field */}
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3 flex items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#A0A1A2]/10 to-gray-400/10 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform">
                              <FaPhone className="text-[#A0A1A2] text-xs sm:text-sm" />
                            </div>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-gray-600 bg-white border-2 ${
                              validationErrors.phone ? 'border-red-500' : 'border-gray-200'
                            } rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-sm sm:text-base`}
                            placeholder="+31 6 85865799"
                          />
                          {validationErrors.phone && <p className="mt-1 text-xs sm:text-sm text-red-600">{validationErrors.phone}</p>}
                        </div>

                        {/* Company Field */}
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3 flex items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#A0A1A2]/10 to-gray-400/10 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform">
                              <FaBuilding className="text-[#A0A1A2] text-xs sm:text-sm" />
                            </div>
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 sm:px-5 py-3 sm:py-4 text-gray-600 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-sm sm:text-base"
                            placeholder="Your Company Name"
                          />
                        </div>
                      </div>

                      {/* Subject Select */}
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3 flex items-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform">
                            <FaClipboard className="text-[#FAB045] text-xs sm:text-sm" />
                          </div>
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 sm:px-5 py-3 sm:py-4 text-gray-600 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-sm sm:text-base appearance-none cursor-pointer"
                        >
                          <option value="">Select a subject</option>
                          <option value="quote">📋 Get a Quote</option>
                          <option value="tracking">📍 Tracking Issue</option>
                          <option value="service">⚡ Service Inquiry</option>
                          <option value="partnership">🤝 Partnership Opportunity</option>
                          <option value="urgent">🚨 Urgent Shipment</option>
                          <option value="other">💬 Other</option>
                        </select>
                      </div>

                      {/* Message Field */}
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className={`w-full text-gray-600 px-4 sm:px-5 py-3 sm:py-4 bg-white border-2 ${
                            validationErrors.message ? 'border-red-500' : 'border-gray-200'
                          } rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-sm sm:text-base resize-none`}
                          placeholder="Tell us about your logistics needs, challenges, and how we can help streamline your supply chain..."
                        />
                        {validationErrors.message && <p className="mt-1 text-xs sm:text-sm text-red-600">{validationErrors.message}</p>}
                      </div>

                      {/* Status Messages */}
                      {isSuccess && (
                        <div className="p-4 sm:p-6 bg-green-50 border border-green-200 rounded-xl flex items-start animate-fadeIn">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                            <FaCheckCircle className="text-white text-sm sm:text-xl" />
                          </div>
                          <div>
                            <p className="font-semibold text-green-800 text-sm sm:text-lg mb-1">Message sent successfully!</p>
                            <p className="text-green-600 text-xs sm:text-sm">We'll get back to you within 2 hours. A confirmation has been sent to your email.</p>
                            <p className="text-green-500 text-xs sm:text-sm mt-2">Reference: {generateReferenceNumber()}</p>
                          </div>
                        </div>
                      )}

                      {error && (
                        <div className="p-4 sm:p-6 bg-red-50 border border-red-200 rounded-xl flex items-start animate-fadeIn">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                            <FaExclamationTriangle className="text-white text-sm sm:text-xl" />
                          </div>
                          <div>
                            <p className="font-semibold text-red-800 text-sm sm:text-lg mb-1">{error}</p>
                            <p className="text-red-600 text-xs sm:text-sm">Please try again or use our phone/email directly.</p>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row items-center justify-between pt-4 sm:pt-6 border-t border-gray-100 gap-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#A0A1A2]/10 to-gray-400/10 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                            <FaShieldAlt className="text-[#A0A1A2] text-xs sm:text-sm" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-600">Secure & encrypted form</p>
                            <p className="text-[10px] sm:text-xs text-gray-500">Your information is protected</p>
                          </div>
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`group relative overflow-hidden bg-gradient-to-r from-[#FAB045] to-orange-400 hover:from-orange-400 hover:to-[#FAB045] text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center shadow-lg w-full sm:w-auto justify-center ${
                            isLoading ? 'opacity-80 cursor-not-allowed' : ''
                          }`}
                        >
                          <span className="relative z-10 flex items-center">
                            {isLoading ? (
                              <>
                                <FaSpinner className="mr-2 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <FaPaperPlane className="mr-2 group-hover:translate-x-1 transition-transform" />
                                Send Message
                              </>
                            )}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Location Section */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 border border-gray-100">
                  <div className="flex items-center mb-5 sm:mb-8">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-[#A0A1A2] to-gray-400 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5">
                      <FaGlobe className="text-white text-base sm:text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-600 mb-1">Global Headquarters</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">Visit our main operations center</p>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border-2 border-gray-200">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 sm:h-80 flex flex-col items-center justify-center relative">
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `
                            radial-gradient(circle at 20% 30%, #FAB045 2px, transparent 2px),
                            radial-gradient(circle at 80% 70%, #A0A1A2 2px, transparent 2px)
                          `,
                          backgroundSize: '60px 60px'
                        }}></div>
                      </div>
                      
                      <div className="relative z-10 group cursor-pointer text-center px-4">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-r from-[#FAB045] to-orange-400 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce-slow mx-auto">
                          <FaMapMarkerAlt className="text-white text-xl sm:text-3xl" />
                        </div>
                        <div className="transform group-hover:scale-105 transition-transform">
                          <p className="text-base sm:text-xl font-bold text-gray-700 mb-1">Leyweg 836</p>
                          <p className="text-gray-600 text-sm sm:text-lg">2545GR The Hague, Netherlands</p>
                          <div className="mt-4 sm:mt-6">
                            <a 
                              href="https://maps.google.com/?q=Leyweg+836+2545GR+The+Hague+Netherlands" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-[#FAB045] text-[#FAB045] font-semibold rounded-lg text-xs sm:text-sm hover:bg-[#FAB045] hover:text-white transition-all group/btn"
                            >
                              <span>Get Directions</span>
                              <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 sm:p-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        <div className="flex items-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                            <span className="text-green-600 text-xs sm:text-sm">✓</span>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500 mb-1">Parking</p>
                            <p className="font-semibold text-gray-700 text-xs sm:text-sm">Available</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                            <span className="text-blue-600 text-xs sm:text-sm">✈️</span>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500 mb-1">Nearest Airport</p>
                            <p className="font-semibold text-gray-700 text-xs sm:text-sm">RTM - 15 min</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                            <span className="text-purple-600 text-xs sm:text-sm">🏢</span>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500 mb-1">Meeting Rooms</p>
                            <p className="font-semibold text-gray-700 text-xs sm:text-sm">Available</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Tips */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-[#FAB045]/5 to-orange-400/5 rounded-xl sm:rounded-2xl border border-[#FAB045]/20">
                  <h4 className="font-bold text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 flex items-center">
                    <FaShieldAlt className="text-[#FAB045] mr-2 text-sm sm:text-base" />
                    Quick Tips for Faster Response
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <li className="flex items-center text-xs sm:text-sm text-gray-700 group hover:text-[#FAB045] transition-colors">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-[#FAB045] group-hover:text-white transition-all">
                        <span className="text-[#FAB045] text-[10px] sm:text-xs group-hover:text-white">1</span>
                      </div>
                      Include tracking numbers if applicable
                    </li>
                    <li className="flex items-center text-xs sm:text-sm text-gray-700 group hover:text-[#FAB045] transition-colors">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-[#FAB045] group-hover:text-white transition-all">
                        <span className="text-[#FAB045] text-[10px] sm:text-xs group-hover:text-white">2</span>
                      </div>
                      Specify shipment urgency level
                    </li>
                    <li className="flex items-center text-xs sm:text-sm text-gray-700 group hover:text-[#FAB045] transition-colors">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-[#FAB045] group-hover:text-white transition-all">
                        <span className="text-[#FAB045] text-[10px] sm:text-xs group-hover:text-white">3</span>
                      </div>
                      Mention preferred contact method
                    </li>
                    <li className="flex items-center text-xs sm:text-sm text-gray-700 group hover:text-[#FAB045] transition-colors">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-[#FAB045] group-hover:text-white transition-all">
                        <span className="text-[#FAB045] text-[10px] sm:text-xs group-hover:text-white">4</span>
                      </div>
                      Provide company VAT if for quotes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-gradient { animation: gradient 3s ease infinite; background-size: 200% auto; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}