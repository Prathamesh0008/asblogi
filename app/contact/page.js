'use client';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaPaperPlane, 
  FaUser, 
  FaBuilding,
  FaClipboard,
  FaClock, 
  FaHeadset, 
  FaGlobe, 
  FaShieldAlt, 
  FaTruck,
  FaWhatsapp,
  FaSpinner,
  FaCheckCircle,
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

  // EmailJS configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_jvtp4f4',
    TEAM_TEMPLATE_ID: 'template_zid2k7k',    // For team notifications
    AUTO_REPLY_TEMPLATE_ID: 'template_94mdjgo', // For auto-reply to customers
    PUBLIC_KEY: 'ZL-_rPtdPsPFhDvrP'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const generateReferenceNumber = () => {
    return 'INV-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setIsSuccess(false);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      const referenceNumber = generateReferenceNumber();
      const submissionTime = new Date().toLocaleString('en-US', { 
        dateStyle: 'full', 
        timeStyle: 'long' 
      });

      // Prepare template parameters for team notification
      const teamParams = {
        to_name: 'Invictus Logistics Team',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        subject: formData.subject || 'General Inquiry',
        title: formData.subject || 'General Inquiry', // For {{title}} in template
        message: formData.message,
        reply_to: formData.email,
        
        // Additional fields
        user_email: formData.email,
        user_phone: formData.phone,
        user_company: formData.company,
        
        // For the auto-reply to user
        user_name: formData.name,
        user_message: formData.message,
        
        // Metadata
        submitted_at: submissionTime,
        reference_number: referenceNumber,
        
        // For insights
        email_domain: formData.email.split('@')[1] || 'personal',
        phone_provided: formData.phone ? 'Yes' : 'No',
        subject_priority: formData.subject === 'urgent' ? 'High' : 'Normal'
      };

      // Send email to your team (info@invictuslogi.com)
      const teamResponse = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEAM_TEMPLATE_ID,  // Fixed: using TEAM_TEMPLATE_ID
        teamParams
      );

      if (teamResponse.status === 200) {
        // Prepare template parameters for auto-reply to customer
        const autoReplyParams = {
          to_email: formData.email,
          to_name: formData.name,
          from_name: 'Invictus Logistics',
          from_email: 'info@invictuslogi.com',
          reply_to: 'info@invictuslogi.com',
          subject: formData.subject || 'General Inquiry',
          title: formData.subject || 'General Inquiry',
          message: formData.message,
          submitted_at: submissionTime,
          reference_number: referenceNumber
        };

        // Send auto-reply to customer
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID,  // Fixed: using AUTO_REPLY_TEMPLATE_ID
          autoReplyParams
        );

        setIsSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again or contact us directly via phone.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: ['+31685865799'],
      description: 'Available 24/7',
      color: 'from-[#FAB045] to-orange-400',
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FAB045] rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#A0A1A2] rounded-full mix-blend-overlay filter blur-3xl"></div>
          </div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FAB045]/20 to-[#A0A1A2]/20 rounded-full backdrop-blur-sm mb-6 border border-white/10">
            <FaTruck className="mr-2 text-[#FAB045] animate-pulse" />
            <span className="text-sm font-semibold tracking-wider">CONNECT WITH LOGISTICS EXPERTS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Get In{' '}
            <span className="bg-gradient-to-r from-[#FAB045] via-orange-400 to-[#FAB045] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Touch
            </span>
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8 leading-relaxed">
            Connect with our logistics experts for tailored solutions that streamline your supply chain
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16">
            <div className="text-center group">
              <div className="text-4xl font-bold text-[#FAB045] mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-400 flex items-center justify-center gap-2">
                <FaClock className="text-[#FAB045]" />
                <span>Support Available</span>
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-[#FAB045] mb-2 group-hover:scale-110 transition-transform">2h</div>
              <div className="text-gray-400 flex items-center justify-center gap-2">
                <FaHeadset className="text-[#FAB045]" />
                <span>Avg. Response Time</span>
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-[#FAB045] mb-2 group-hover:scale-110 transition-transform">150+</div>
              <div className="text-gray-400 flex items-center justify-center gap-2">
                <FaGlobe className="text-[#FAB045]" />
                <span>Countries Supported</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information Cards */}
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative overflow-hidden block transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FAB045]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-[#FAB045]/30 transition-all duration-300 hover:shadow-2xl">
                      <div className="flex items-start mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <div className="text-white text-2xl">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#FAB045] transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-gray-500 text-sm">{info.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium text-lg">{detail}</p>
                        ))}
                      </div>
                      {info.title === 'WhatsApp' && (
                        <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-lg group-hover/wa:bg-green-600 transition-all">
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
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-xl p-8 border border-gray-800">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#FAB045] to-orange-400 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform">
                        <FaClock className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Business Hours</h3>
                        <p className="text-gray-300">We're here when you need us</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                        <span className="text-gray-300">Monday - Friday</span>
                        <span className="font-bold text-[#FAB045]">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                        <span className="text-gray-300">Saturday</span>
                        <span className="font-bold text-[#FAB045]">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Sunday</span>
                        <span className="font-bold text-[#FAB045]">Emergency Only</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Support */}
                <div className="bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-2xl p-6 border border-[#FAB045]/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FAB045] to-orange-400 rounded-xl flex items-center justify-center mr-4">
                      <FaHeadset className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">Emergency Support</h4>
                      <p className="text-sm text-gray-600">Critical shipments only</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    For urgent shipment issues requiring immediate attention
                  </p>
                  <a href="tel:+31685865799" className="flex items-center group">
                    <FaPhone className="text-[#FAB045] mr-2 group-hover:animate-bounce" />
                    <span className="font-bold text-gray-900 group-hover:text-[#FAB045] transition-colors">+31685865799</span>
                  </a>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="lg:col-span-2">
                {/* Form Card */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
                  <div className="relative p-8 md:p-12">
                    <div className="flex items-center mb-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#FAB045] to-orange-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                        <FaPaperPlane className="text-white text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                        <p className="text-gray-600">Fill out the form below and we'll get back to you promptly</p>
                      </div>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                              <FaUser className="text-[#FAB045]" />
                            </div>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 text-gray-600 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                              <FaEnvelope className="text-[#FAB045]" />
                            </div>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-white border-2 text-gray-600 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#A0A1A2]/10 to-gray-400/10 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                              <FaPhone className="text-[#A0A1A2]" />
                            </div>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 text-gray-600 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg"
                            placeholder="+31 6 85865799"
                          />
                        </div>
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#A0A1A2]/10 to-gray-400/10 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                              <FaBuilding className="text-[#A0A1A2]" />
                            </div>
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-5 py-4 text-gray-600 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg"
                            placeholder="Your Company Name"
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                            <FaClipboard className="text-[#FAB045]" />
                          </div>
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-5 py-4 text-gray-600 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg appearance-none cursor-pointer"
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

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full text-gray-600 px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg resize-none"
                          placeholder="Tell us about your logistics needs, challenges, and how we can help streamline your supply chain..."
                        />
                      </div>

                      {/* Status Messages */}
                      {isSuccess && (
                        <div className="p-6 bg-green-50 border border-green-200 rounded-xl flex items-start animate-fadeIn">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <FaCheckCircle className="text-white text-xl" />
                          </div>
                          <div>
                            <p className="font-semibold text-green-800 text-lg mb-1">Message sent successfully!</p>
                            <p className="text-green-600">We'll get back to you within 2 hours. A confirmation has been sent to your email.</p>
                            <p className="text-green-500 text-sm mt-2">Reference: {generateReferenceNumber()}</p>
                          </div>
                        </div>
                      )}

                      {error && (
                        <div className="p-6 bg-red-50 border border-red-200 rounded-xl flex items-start animate-fadeIn">
                          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <FaExclamationTriangle className="text-white text-xl" />
                          </div>
                          <div>
                            <p className="font-semibold text-red-800 text-lg mb-1">{error}</p>
                            <p className="text-red-600">Please try again or use our phone/email directly.</p>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-100">
                        <div className="flex items-center mb-4 sm:mb-0">
                          <div className="w-10 h-10 bg-gradient-to-r from-[#A0A1A2]/10 to-gray-400/10 rounded-lg flex items-center justify-center mr-3">
                            <FaShieldAlt className="text-[#A0A1A2]" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Secure & encrypted form</p>
                            <p className="text-xs text-gray-500">Your information is protected</p>
                          </div>
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`group relative overflow-hidden bg-gradient-to-r from-[#FAB045] to-orange-400 hover:from-orange-400 hover:to-[#FAB045] text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center shadow-lg ${
                            isLoading ? 'opacity-80 cursor-not-allowed' : ''
                          }`}
                        >
                          <span className="relative z-10 flex items-center">
                            {isLoading ? (
                              <>
                                <FaSpinner className="mr-3 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <FaPaperPlane className="mr-3 group-hover:translate-x-1 transition-transform" />
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
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8 border border-gray-100">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#A0A1A2] to-gray-400 rounded-2xl flex items-center justify-center mr-5">
                      <FaGlobe className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Headquarters</h3>
                      <p className="text-gray-600">Visit our main operations center</p>
                    </div>
                  </div>
                  
                  {/* Map Placeholder */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 flex flex-col items-center justify-center relative">
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `
                            radial-gradient(circle at 20% 30%, #FAB045 2px, transparent 2px),
                            radial-gradient(circle at 80% 70%, #A0A1A2 2px, transparent 2px)
                          `,
                          backgroundSize: '60px 60px'
                        }}></div>
                      </div>
                      
                      <div className="relative z-10 group cursor-pointer">
                        <div className="w-20 h-20 bg-gradient-to-r from-[#FAB045] to-orange-400 rounded-full flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce-slow">
                          <FaMapMarkerAlt className="text-white text-3xl" />
                        </div>
                        <div className="text-center transform group-hover:scale-105 transition-transform">
                          <p className="text-xl font-bold text-gray-900 mb-2">Leyweg 836</p>
                          <p className="text-gray-600 text-lg">2545GR The Hague, Netherlands</p>
                          <div className="mt-6">
                            <a 
                              href="https://maps.google.com/?q=Leyweg+836+2545GR+The+Hague+Netherlands" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-6 py-3 bg-white border-2 border-[#FAB045] text-[#FAB045] font-semibold rounded-lg hover:bg-[#FAB045] hover:text-white transition-all group/btn"
                            >
                              <span>Get Directions</span>
                              <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Location Details */}
                    <div className="bg-white p-6 border-t border-gray-200">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-green-600 text-sm">✓</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Parking</p>
                            <p className="font-semibold text-gray-900">Available</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-blue-600 text-sm">✈️</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Nearest Airport</p>
                            <p className="font-semibold text-gray-900">RTM - 15 min</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-purple-600 text-sm">🏢</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Meeting Rooms</p>
                            <p className="font-semibold text-gray-900">Available</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Tips */}
                <div className="mt-8 p-6 bg-gradient-to-r from-[#FAB045]/5 to-orange-400/5 rounded-2xl border border-[#FAB045]/20">
                  <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                    <FaShieldAlt className="text-[#FAB045] mr-2" />
                    Quick Tips for Faster Response
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center text-sm text-gray-700 group hover:text-[#FAB045] transition-colors">
                      <div className="w-6 h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-[#FAB045] group-hover:text-white transition-all">
                        <span className="text-[#FAB045] text-xs group-hover:text-white">1</span>
                      </div>
                      Include tracking numbers if applicable
                    </li>
                    <li className="flex items-center text-sm text-gray-700 group hover:text-[#FAB045] transition-colors">
                      <div className="w-6 h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-[#FAB045] group-hover:text-white transition-all">
                        <span className="text-[#FAB045] text-xs group-hover:text-white">2</span>
                      </div>
                      Specify shipment urgency level
                    </li>
                    <li className="flex items-center text-sm text-gray-700 group hover:text-[#FAB045] transition-colors">
                      <div className="w-6 h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-[#FAB045] group-hover:text-white transition-all">
                        <span className="text-[#FAB045] text-xs group-hover:text-white">3</span>
                      </div>
                      Mention preferred contact method
                    </li>
                    <li className="flex items-center text-sm text-gray-700 group hover:text-[#FAB045] transition-colors">
                      <div className="w-6 h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-[#FAB045] group-hover:text-white transition-all">
                        <span className="text-[#FAB045] text-xs group-hover:text-white">4</span>
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

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}