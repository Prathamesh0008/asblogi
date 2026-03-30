'use client';
import { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaDollarSign, FaUsers, FaChartLine, FaHeartbeat, FaGraduationCap, FaCode, FaTruck, FaGlobe, FaShieldAlt, FaLightbulb, FaHandshake, FaArrowRight, FaCheckCircle, FaRegPaperPlane } from 'react-icons/fa';

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    linkedin: '',
    coverLetter: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      linkedin: '',
      coverLetter: '',
      resume: null
    });
  };

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Logistics Manager',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$90,000 - $120,000',
      description: 'Lead logistics operations and optimize supply chain processes.',
      requirements: ['5+ years logistics experience', 'Strong leadership skills', 'Supply chain certification preferred'],
      color: 'from-[#E65100] to-[#FFD700]'
    },
    {
      id: 2,
      title: 'Supply Chain Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '$70,000 - $90,000',
      description: 'Analyze supply chain data and optimize distribution networks.',
      requirements: ['Strong analytical skills', 'SQL/Python experience', 'Supply chain background'],
      color: 'from-[#FF8F00] to-[#FFD700]'
    },
    {
      id: 3,
      title: 'Customer Success Manager',
      department: 'Client Services',
      location: 'Chicago, IL',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$75,000 - $95,000',
      description: 'Build and maintain strong client relationships.',
      requirements: ['Excellent communication', 'Logistics industry experience', 'Customer service background'],
      color: 'from-[#E65100] to-[#FFD700]'
    },
    {
      id: 4,
      title: 'Software Engineer',
      department: 'Technology',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$110,000 - $140,000',
      description: 'Develop logistics and tracking software solutions.',
      requirements: ['React/Next.js experience', 'Node.js proficiency', 'API development'],
      color: 'from-[#FF8F00] to-[#FFD700]'
    },
    {
      id: 5,
      title: 'Warehouse Supervisor',
      department: 'Operations',
      location: 'Dallas, TX',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$65,000 - $85,000',
      description: 'Oversee warehouse operations and inventory management.',
      requirements: ['Warehouse management', 'Team leadership', 'Inventory systems'],
      color: 'from-[#E65100] to-[#FFD700]'
    },
    {
      id: 6,
      title: 'International Logistics Coordinator',
      department: 'Global Operations',
      location: 'Miami, FL',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$60,000 - $80,000',
      description: 'Coordinate international shipments and customs clearance.',
      requirements: ['International shipping knowledge', 'Customs experience', 'Bilingual preferred'],
      color: 'from-[#FF8F00] to-[#FFD700]'
    }
  ];

  const benefits = [
    {
      icon: <FaDollarSign />,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with bonuses',
      color: 'from-[#E65100] to-[#FFD700]'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision insurance',
      color: 'from-[#FF8F00] to-[#FFD700]'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Learning & Development',
      description: 'Professional development and certification programs',
      color: 'from-[#E65100] to-[#FFD700]'
    },
    {
      icon: <FaChartLine />,
      title: 'Career Growth',
      description: 'Clear promotion paths and growth opportunities',
      color: 'from-[#FF8F00] to-[#FFD700]'
    },
    {
      icon: <FaUsers />,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events',
      color: 'from-[#E65100] to-[#FFD700]'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Hours',
      description: 'Flexible scheduling and remote work options',
      color: 'from-[#FF8F00] to-[#FFD700]'
    }
  ];

  const values = [
    {
      icon: <FaTruck />,
      title: 'Excellence in Delivery',
      description: 'We never compromise on quality and timeliness',
      color: 'from-[#E65100] to-[#FFD700]'
    },
    {
      icon: <FaGlobe />,
      title: 'Global Mindset',
      description: 'Thinking globally while acting locally',
      color: 'from-[#FF8F00] to-[#FFD700]'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Integrity First',
      description: 'Honest, transparent, and ethical in all we do',
      color: 'from-[#E65100] to-[#FFD700]'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation Driven',
      description: 'Constantly improving through technology and ideas',
      color: 'from-[#FF8F00] to-[#FFD700]'
    },
    {
      icon: <FaHandshake />,
      title: 'Team Collaboration',
      description: 'Working together to achieve extraordinary results',
      color: 'from-[#E65100] to-[#FFD700]'
    },
    {
      icon: <FaCode />,
      title: 'Tech Forward',
      description: 'Leveraging technology to solve complex problems',
      color: 'from-[#FF8F00] to-[#FFD700]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E65100] rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FFD700] rounded-full mix-blend-overlay filter blur-3xl"></div>
          </div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-15">
          <h1 className="text-3xl md:text-5xl font-light mb-6 leading-snug tracking-wide text-white/70 font-medium">
            Build Your{" "}
            <span className="relative bg-gradient-to-r from-[#E65100] via-[#FFD700] to-[#FF8F00] bg-clip-text text-transparent animate-shine">
              Career
            </span>
            <br />
            <span className="text-white/60 font-light font-medium">
              With Us
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8 leading-relaxed font-medium">
            Join a team that's revolutionizing global logistics through innovation,
            technology, and exceptional service delivery.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-12 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD700] mb-2">500+</div>
              <div className="text-gray-400">Global Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD700] mb-2">25+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD700] mb-2">98%</div>
              <div className="text-gray-400">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-light text-gray-700/80 mb-4 tracking-wide font-medium">
              Why{" "}
              <span className="bg-gradient-to-r from-[#E65100] via-[#FFD700] to-[#FF8F00] bg-clip-text text-transparent animate-shine font-medium">
                InvictusLogistics
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-500/80 max-w-2xl mx-auto font-light leading-relaxed">
              We're building the future of logistics, and we need talented people to help us get there.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#E65100]/30 transition-all duration-300 hover:shadow-xl">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white text-2xl">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-light mb-3 tracking-wide text-white/70">
                <span className="bg-gradient-to-r from-[#E65100] via-[#FFD700] to-[#FF8F00] bg-clip-text text-transparent animate-shine font-medium">
                  Employee Benefits
                </span>
              </h2>
              <p className="text-gray-400/80 text-lg font-light max-w-2xl mx-auto leading-relaxed font-medium">
                We take care of our team with comprehensive benefits
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                    <div className="text-white text-xl">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Open <span className="text-[#E65100]">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect role and apply today. We're always looking for talented individuals.
            </p>
          </div>

          {/* Job Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search positions..."
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20 text-lg"
              />
            </div>
            <select className="px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20">
              <option value="">All Departments</option>
              <option value="operations">Operations</option>
              <option value="technology">Technology</option>
              <option value="sales">Sales</option>
              <option value="analytics">Analytics</option>
            </select>
            <select className="px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20">
              <option value="">All Locations</option>
              <option value="remote">Remote</option>
              <option value="new-york">New York</option>
              <option value="san-francisco">San Francisco</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>

          {/* Job Listings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {jobOpenings.map((job) => (
              <div key={job.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#E65100]/30 transition-all duration-300 hover:-translate-y-2">
                <div className="p-8">
                  <div className="inline-block bg-gray-900 text-white/90 px-4 py-1 rounded-full text-xs font-light tracking-wide mb-4">
                    {job.department}
                  </div>
                
                  <h3 className="text-2xl font-light text-gray-800 mb-4 group-hover:text-[#E65100] transition-colors">
                    {job.title}
                  </h3>
                  
                  <p className="text-gray-600/80 font-light mb-6">{job.description}</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="text-[#E65100] mr-3" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaBriefcase className="text-[#E65100] mr-3" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaClock className="text-[#E65100] mr-3" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaDollarSign className="text-[#E65100] mr-3" />
                      <span className="font-semibold">{job.salary}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <FaCheckCircle className="text-[#FFD700] mr-2 text-sm" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-gray-50 to-white border-2 border-[#E65100] text-[#E65100] font-semibold rounded-xl hover:bg-gradient-to-r hover:from-[#E65100] hover:to-[#FFD700] hover:text-white transition-all duration-300 group">
                    <span className="flex items-center justify-center">
                      Apply Now
                      <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#E65100] to-[#FFD700] text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
              <FaRegPaperPlane className="mr-3" />
              View All Positions
            </button>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Apply for a <span className="text-[#E65100]">Position</span>
                </h2>
                <p className="text-gray-600">Can't find your perfect role? Send us your details anyway!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20 transition-all duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Position Applying For *
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20 transition-all duration-300 appearance-none"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map(job => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Years of Experience *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20 transition-all duration-300 appearance-none"
                    >
                      <option value="">Select experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20 transition-all duration-300"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20 transition-all duration-300 resize-none"
                    placeholder="Tell us why you're interested in joining our team..."
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Resume/CV *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-[#E65100] transition-colors">
                    <FaRegPaperPlane className="text-[#FF8F00] text-3xl mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Drop your resume here or click to browse</p>
                    <p className="text-sm text-gray-500 mb-4">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                    <label className="cursor-pointer">
                      <span className="px-6 py-3 bg-gradient-to-r from-[#E65100] to-[#FFD700] text-white font-semibold rounded-xl hover:shadow-lg transition-all inline-block">
                        Choose File
                      </span>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleChange}
                        required
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#E65100] to-[#FFD700] text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                  >
                    <span className="flex items-center">
                      <FaRegPaperPlane className="mr-3" />
                      Submit Application
                      <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-5 tracking-wide text-white/70">
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#E65100] via-[#FFD700] to-[#FF8F00] bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Global Logistics?
            </h2>
            <p className="text-lg text-gray-300/80 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Join a team that's making shipping smarter, faster, and more reliable worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-7 py-3 bg-gradient-to-r from-[#E65100] to-[#FFD700] text-white font-medium tracking-wide rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                Browse Open Positions
              </button>
              <button className="px-7 py-3 bg-white/80 backdrop-blur-md text-gray-700 font-light tracking-wide rounded-xl text-sm border border-gray-200/60 hover:bg-white/90 hover:shadow-md transition-all duration-300">
                Schedule a Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}