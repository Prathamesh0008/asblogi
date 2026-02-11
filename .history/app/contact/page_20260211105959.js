'use client';
import { useState } from 'react';
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
      // REPLACE THIS WITH YOUR FORMSPREE FORM ID
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
          subject: formData.subject,
          message: formData.message,
          // Optional: These help Formspree format the email better
          _subject: `New Contact Form: ${formData.subject || 'General Inquiry'}`,
          _replyto: formData.email,
          _format: 'plain'
        }),
      });

      console.log('Formspree response:', response);

      if (response.ok) {
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
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        
        if (errorData.errors && errorData.errors.length > 0) {
          setError(`Error: ${errorData.errors[0].message}`);
        } else {
          setError('Failed to send message. Please try again.');
        }
      }
    } catch (err) {
      console.error('Network error:', err);
      setError('Network error. Please check your connection and try again.');
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
      bgColor: 'bg-gradient-to-br from-[#FAB045]/10 to-orange-400/10'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: ['invictus@logistics.com', 'support@invictustlogistics.com'],
      description: 'Response within 2 hours',
      color: 'from-[#A0A1A2] to-gray-400',
      bgColor: 'bg-gradient-to-br from-[#A0A1A2]/10 to-gray-400/10'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      details: ['+918291293651'],
      description: 'Instant chat support',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-500/10 to-green-600/10'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      details: ['123 Logistics Street', 'New York, NY 10001, USA'],
      description: 'Head Office - Mon-Fri 9AM-6PM',
      color: 'from-[#FAB045] to-orange-400',
      bgColor: 'bg-gradient-to-br from-[#FAB045]/10 to-orange-400/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FAB045] rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#A0A1A2] rounded-full mix-blend-overlay filter blur-3xl"></div>
          </div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#FAB045]/20 to-[#A0A1A2]/20 rounded-full backdrop-blur-sm mb-6">
            <FaTruck className="mr-2 text-[#FAB045]" />
            <span className="text-sm font-semibold">CONNECT WITH EXPERTS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Get In <span className="bg-gradient-to-r from-[#FAB045] to-orange-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8 leading-relaxed">
            Connect with our logistics experts for tailored solutions that streamline your supply chain
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-12 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FAB045] mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FAB045] mb-2">2h</div>
              <div className="text-gray-400">Avg. Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FAB045] mb-2">150+</div>
              <div className="text-gray-400">Countries Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information Cards */}
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FAB045]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-[#FAB045]/30 transition-all duration-300">
                      <div className="flex items-start mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mr-5 shadow-lg`}>
                          <div className="text-white text-2xl">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{info.title}</h3>
                          <p className="text-gray-500 text-sm">{info.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                        ))}
                      </div>
                      {info.title === 'WhatsApp' && (
                        <a 
                          href={`https://wa.me/${info.details[0].replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 group/wa"
                        >
                          <FaWhatsapp className="mr-2" />
                          Chat on WhatsApp
                          <span className="ml-2 opacity-0 group-hover/wa:opacity-100 transition-opacity">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}

                {/* Office Hours Card */}
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A0A1A2]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-xl p-8 border border-gray-800">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#FAB045] to-orange-400 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
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
                      <p className="text-sm text-gray-600">Critical shipments</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    For urgent shipment issues requiring immediate attention
                  </p>
                  <div className="flex items-center">
                    <FaPhone className="text-[#FAB045] mr-2" />
                    <span className="font-bold text-gray-900">+1 (555) 911-2233</span>
                  </div>
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

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-3">
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
                            className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-3">
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
                            className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#A0A1A2]/10 to-gray-400/10 rounded-lg flex items-center justify-center mr-3">
                              <FaPhone className="text-[#A0A1A2]" />
                            </div>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg"
                            placeholder="+918291293651"
                          />
                        </div>
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#A0A1A2]/10 to-gray-400/10 rounded-lg flex items-center justify-center mr-3">
                              <FaBuilding className="text-[#A0A1A2]" />
                            </div>
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045]/10 to-orange-400/10 rounded-lg flex items-center justify-center mr-3">
                            <FaClipboard className="text-[#FAB045]" />
                          </div>
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg appearance-none cursor-pointer"
                        >
                          <option value="">Select a subject</option>
                          <option value="quote">Get a Quote</option>
                          <option value="tracking">Tracking Issue</option>
                          <option value="service">Service Inquiry</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
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
                          className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg resize-none"
                          placeholder="Tell us about your logistics needs, challenges, and how we can help streamline your supply chain..."
                        />
                      </div>

                      {/* Status Messages */}
                      {isSuccess && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center animate-fadeIn">
                          <FaCheckCircle className="text-green-500 mr-3 text-xl flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-green-800">Message sent successfully!</p>
                            <p className="text-green-600 text-sm">We'll get back to you within 2 hours.</p>
                          </div>
                        </div>
                      )}

                      {error && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center animate-fadeIn">
                          <FaExclamationTriangle className="text-red-500 mr-3 text-xl flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-red-800">{error}</p>
                            <p className="text-red-600 text-sm">Please try again or use our phone/email directly.</p>
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
                          className={`group relative overflow-hidden bg-gradient-to-r from-[#FAB045] to-orange-400 hover:from-orange-400 hover:to-[#FAB045] text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center shadow-lg ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                        >
                          <span className="relative z-10 flex items-center">
                            {isLoading ? (
                              <>
                                <FaSpinner className="mr-3 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <FaPaperPlane className="mr-3" />
                                Send Message
                              </>
                            )}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </button>
                      </div>

                      {/* Formspree Setup Instructions (Remove after setup) */}
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl mt-4">
                        <p className="text-sm font-semibold text-blue-800 mb-2">⚠️ Setup Required:</p>
                        <ol className="text-sm text-blue-700 list-decimal pl-5 space-y-1">
                          <li>Go to <a href="https://formspree.io" target="_blank" className="underline font-bold">Formspree.io</a> and sign up</li>
                          <li>Create a new form and get your Form ID</li>
                          <li>Replace <code className="bg-blue-100 px-1 rounded">YOUR_FORM_ID_HERE</code> in line 63 with your actual Form ID</li>
                          <li>Save and test the form</li>
                        </ol>
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
                  
                  {/* Enhanced Map Placeholder */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-72 flex flex-col items-center justify-center relative">
                      {/* Map Pattern Background */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `
                            radial-gradient(circle at 20% 30%, #FAB045 1px, transparent 1px),
                            radial-gradient(circle at 80% 70%, #A0A1A2 1px, transparent 1px)
                          `,
                          backgroundSize: '50px 50px'
                        }}></div>
                      </div>
                      
                      {/* Location Pin */}
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#FAB045] to-orange-400 rounded-full flex items-center justify-center mb-4 shadow-xl">
                          <FaMapMarkerAlt className="text-white text-2xl" />
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-gray-900 mb-2">Leyweg 8362545 GR Den Haag, Netherlands</p>
                          <p className="text-gray-600"> 
                                      Leyweg 836, 2545GR The Hague</p> 
                          <div className="mt-4">
                            <button className="px-6 py-2 bg-white border-2 border-[#FAB045] text-[#FAB045] font-semibold rounded-lg hover:bg-[#FAB045] hover:text-white transition-all">
                              Get Directions
                            </button>
                          </div>
                        </div>  
                      </div>
                    </div>
                    
                    {/* Map Info */}
                    <div className="bg-white p-6 border-t border-gray-200">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Parking</p>
                          <p className="font-semibold text-gray-900">Available</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Nearest Airport</p>
                          <p className="font-semibold text-gray-900">JFK - 15 miles</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Meeting Rooms</p>
                          <p className="font-semibold text-gray-900">Available upon request</p>
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
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-6 h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2">
                        <span className="text-[#FAB045] text-xs">1</span>
                      </div>
                      Include tracking numbers if applicable
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-6 h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2">
                        <span className="text-[#FAB045] text-xs">2</span>
                      </div>
                      Specify shipment urgency level
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-6 h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2">
                        <span className="text-[#FAB045] text-xs">3</span>
                      </div>
                      Mention preferred contact method
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-6 h-6 bg-[#FAB045]/20 rounded-full flex items-center justify-center mr-2">
                        <span className="text-[#FAB045] text-xs">4</span>
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

      {/* Add CSS for animations */}
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
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}