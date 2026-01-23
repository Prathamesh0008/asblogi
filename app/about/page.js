"use client";
import { useState } from 'react';
import { FaUsers, FaAward, FaGlobeAmericas, FaChartLine, FaLightbulb, FaHandshake, FaLeaf, FaRocket, FaChevronDown, FaChevronUp, FaDownload, FaTimes } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export default function About() {
  const [expandedStats, setExpandedStats] = useState(Array(4).fill(false));
  const [expandedValues, setExpandedValues] = useState(Array(4).fill(false));
  const [expandedMilestones, setExpandedMilestones] = useState(Array(4).fill(false));

  const stats = [
    { 
      icon: <FaGlobeAmericas />, 
      value: '150+', 
      label: 'Countries Served', 
      description: 'Global network coverage',
      moreInfo: [
        'Network spans across 6 continents',
        'Local partners in each region for seamless operations',
        '24/7 multilingual customer support',
        'Customs clearance expertise in 50+ key markets',
        'Strategic hubs in Europe, Asia, and North America'
      ]
    },
    { 
      icon: <FaChartLine />, 
      value: '15K+', 
      label: 'Monthly Shipments', 
      description: 'With 99.8% on-time rate',
      moreInfo: [
        'Average delivery time: 2-3 days for domestic, 5-7 days for international',
        'Real-time GPS tracking for 100% of shipments',
        'Temperature-controlled shipments available',
        'Dangerous goods handling certification',
        'White-glove delivery services'
      ]
    },
    { 
      icon: <FaUsers />, 
      value: '500+', 
      label: 'Dedicated Team', 
      description: 'Experts in logistics',
      moreInfo: [
        'Average team experience: 8+ years in logistics',
        'Certified specialists in customs, warehousing, and transport',
        'Continuous training and development programs',
        '24/7 operations team for round-the-clock support',
        'Multilingual customer service representatives'
      ]
    },
    { 
      icon: <FaAward />, 
      value: '25+', 
      label: 'Industry Awards', 
      description: 'Recognized excellence',
      moreInfo: [
        'Logistics Excellence Award 2023',
        'Supply Chain Innovation Award 2022',
        'Best Customer Service Award 2021-2023',
        'Sustainable Logistics Champion 2022',
        'Global Logistics Provider of the Year 2021'
      ]
    },
  ];

  const values = [
    { 
      icon: <FaRocket />, 
      title: 'Innovation', 
      description: 'Leveraging cutting-edge technology for smarter logistics solutions.',
      moreInfo: 'Our innovation lab continuously researches emerging technologies including AI route optimization, blockchain for supply chain transparency, and IoT-enabled tracking. We\'ve invested over $10M in R&D over the past 5 years and hold 15+ technology patents in logistics optimization.'
    },
    { 
      icon: <FaHandshake />, 
      title: 'Reliability', 
      description: 'Consistent, dependable service you can count on every time.',
      moreInfo: 'We maintain redundant systems across all operations with 99.99% uptime. Our quality management system is ISO 9001 certified, and we conduct regular audits and performance reviews. All our drivers and operators undergo rigorous training and certification processes.'
    },
    { 
      icon: <FaLightbulb />, 
      title: 'Excellence', 
      description: 'Striving for perfection in every shipment and interaction.',
      moreInfo: 'We implement Six Sigma methodologies throughout our operations, achieving defect rates below 0.1%. Our customer satisfaction score consistently exceeds 98%, and we conduct quarterly service reviews with clients to identify improvement opportunities.'
    },
    { 
      icon: <FaLeaf />, 
      title: 'Sustainability', 
      description: 'Eco-friendly solutions for a greener supply chain.',
      moreInfo: 'We\'ve reduced our carbon footprint by 40% over 5 years through electric vehicle adoption, optimized routing, and sustainable packaging. Our warehouses are LEED certified, and we offer carbon offset options for all shipments. We aim for carbon neutrality by 2025.'
    },
  ];

  const milestones = [
    { 
      year: '2010', 
      title: 'Company Founded', 
      description: 'Started with 5 employees',
      moreInfo: 'Founded by logistics industry veterans with a vision to transform global supply chains through technology and exceptional service. Started operations from a single warehouse in Chicago.'
    },
    { 
      year: '2014', 
      title: 'Global Expansion', 
      description: 'Opened offices in Europe',
      moreInfo: 'Expanded operations to Germany, France, and the UK, establishing our international presence. Introduced our proprietary logistics management platform.'
    },
    { 
      year: '2018', 
      title: 'Tech Integration', 
      description: 'Launched AI-powered logistics',
      moreInfo: 'Implemented AI-driven route optimization and predictive analytics, reducing delivery times by 25%. Launched mobile app with real-time tracking for customers.'
    },
    { 
      year: '2023', 
      title: 'Market Leader', 
      description: 'Serving 150+ countries',
      moreInfo: 'Achieved market leadership with operations spanning 150+ countries. Recognized as industry innovator with 25+ awards. Launched sustainable logistics initiative with electric fleet.'
    },
  ];

  const handleDownloadBrochure = () => {
    // Create a mock brochure download
    const brochureContent = `SwiftLogistics Company Brochure\n\n` +
      `About Us:\n` +
      `Founded in 2010, SwiftLogistics has grown into a global leader in logistics solutions.\n\n` +
      `Key Statistics:\n` +
      `- Operating in 150+ countries\n` +
      `- 15,000+ monthly shipments\n` +
      `- 500+ dedicated professionals\n` +
      `- 25+ industry awards\n\n` +
      `Services:\n` +
      `- Road Freight\n- Air Freight\n- Ocean Freight\n- Warehousing\n- Supply Chain Management\n- Cold Chain Logistics\n\n` +
      `Contact:\n` +
      `Email: info@swiftlogistics.com\nPhone: +1-800-LOGISTIC\nWebsite: www.swiftlogistics.com`;
    
    const blob = new Blob([brochureContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SwiftLogistics_Company_Brochure.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExploreServices = () => {
    // Redirect to services page or show services modal
    // For demo purposes, we'll show an alert and simulate navigation
    alert('Navigating to Services page...\n\nServices Available:\n1. Road Freight\n2. Air Freight\n3. Ocean Freight\n4. Warehousing\n5. Supply Chain Management\n6. Cold Chain Logistics');
    
    // In a real application, you would use:
    // router.push('/services');
    // or
    // window.location.href = '/services';
  };

  const handleViewCaseStudies = () => {
    // Redirect to case studies page or show case studies modal
    // For demo purposes, we'll show an alert with case study info
    const caseStudies = [
      'Global Retail Chain: Reduced delivery times by 35%',
      'Pharmaceutical Company: Achieved 99.9% temperature compliance',
      'Automotive Manufacturer: Saved $2.5M in logistics costs',
      'E-commerce Giant: Streamlined cross-border shipping'
    ];
    
    alert('Viewing Case Studies...\n\n' + caseStudies.map((study, i) => `${i+1}. ${study}`).join('\n'));
    
    // In a real application, you would use:
    // router.push('/case-studies');
    // or
    // window.location.href = '/case-studies';
  };

  const toggleStatExpansion = (index) => {
    const newExpandedStats = [...expandedStats];
    newExpandedStats[index] = !newExpandedStats[index];
    setExpandedStats(newExpandedStats);
  };

  const toggleValueExpansion = (index) => {
    const newExpandedValues = [...expandedValues];
    newExpandedValues[index] = !newExpandedValues[index];
    setExpandedValues(newExpandedValues);
  };

  const toggleMilestoneExpansion = (index) => {
    const newExpandedMilestones = [...expandedMilestones];
    newExpandedMilestones[index] = !newExpandedMilestones[index];
    setExpandedMilestones(newExpandedMilestones);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#FAB045] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#A0A1A2] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FAB045]/20 border border-[#FAB045]/30 text-[#FAB045] font-medium mb-6">
              <span className="w-2 h-2 bg-[#FAB045] rounded-full mr-2"></span>
              Our Journey Since 2010
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Pioneering <span className="text-[#FAB045]">Global Logistics</span> Solutions
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-10">
              Delivering innovation, reliability, and customer-centric logistics solutions that transform supply chains worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleExploreServices}
                className="px-8 py-4 bg-[#FAB045] hover:bg-[#FAB045]/90 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Explore Our Services</span>
                <FiArrowRight className="text-lg" />
              </button>
              <button 
                onClick={handleDownloadBrochure}
                className="px-8 py-4 bg-transparent border-2 border-[#A0A1A2] hover:border-[#FAB045] text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaDownload className="text-lg" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Expandable Information */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FAB045] via-[#A0A1A2] to-[#FAB045]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group relative p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50 border border-gray-200 hover:border-[#FAB045]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FAB045]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#FAB045]/10 to-[#A0A1A2]/10 text-[#FAB045] text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  
                  <div className="text-5xl font-bold text-gray-900 mb-2 group-hover:text-[#FAB045] transition-colors duration-300">
                    {stat.value}
                  </div>
                  
                  <div className="text-xl font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </div>
                  
                  <div className="text-[#A0A1A2] text-sm mb-4">
                    {stat.description}
                  </div>

                  {/* Expandable More Information */}
                  {expandedStats[index] && (
                    <div className="mt-4 mb-4 animate-fadeIn">
                      <ul className="space-y-2 text-left">
                        {stat.moreInfo.map((info, idx) => (
                          <li key={idx} className="flex items-start text-gray-700 text-sm">
                            <span className="text-[#FAB045] mr-2">•</span>
                            <span>{info}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Learn More Button */}
                  <button 
                    onClick={() => toggleStatExpansion(index)}
                    className="mt-4 text-[#FAB045] font-semibold text-sm hover:text-[#FAB045]/80 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
                  >
                    {expandedStats[index] ? (
                      <>
                        <FaChevronUp className="text-xs" />
                        <span>Show Less</span>
                      </>
                    ) : (
                      <>
                        <span>Learn More</span>
                        <FaChevronDown className="text-xs" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="text-[#FAB045] font-semibold mb-4 tracking-wider uppercase">OUR JOURNEY</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                  Building the Future of <span className="text-[#FAB045]">Logistics</span>
                </h2>
                
                <div className="space-y-6 text-gray-700 text-lg">
                  <p>
                    Founded in 2010, SwiftLogistics started with a simple mission: to make global logistics 
                    accessible, reliable, and efficient for businesses of all sizes. What began as a modest 
                    operation with just five employees has evolved into an industry leader.
                  </p>
                  <p>
                    Our journey is marked by continuous innovation, strategic expansion, and an unwavering 
                    commitment to customer satisfaction. We've grown alongside our clients, adapting to 
                    market changes and embracing technological advancements.
                  </p>
                  <p>
                    Today, we stand as a testament to what's possible when expertise meets innovation in 
                    the logistics industry.
                  </p>
                </div>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleViewCaseStudies}
                    className="px-8 py-4 bg-[#FAB045] hover:bg-[#FAB045]/90 text-gray-900 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>View Case Studies</span>
                    <FiArrowRight />
                  </button>
                  <button 
                    onClick={handleDownloadBrochure}
                    className="px-8 py-4 bg-white border-2 border-[#A0A1A2] hover:border-[#FAB045] text-gray-800 font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaDownload />
                    <span>Download Brochure</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
                <div className="text-[#FAB045] font-semibold mb-6 tracking-wider uppercase">OUR MISSION</div>
                <h3 className="text-3xl font-bold mb-8">
                  To Transform Global Supply Chains Through <span className="text-[#FAB045]">Innovation</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#FAB045] flex items-center justify-center text-white">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Customer-Centric Excellence</h4>
                      <p className="text-gray-300">
                        We put our clients at the heart of everything we do, delivering tailored solutions 
                        that drive their business forward.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#FAB045] flex items-center justify-center text-white">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Sustainable Growth</h4>
                      <p className="text-gray-300">
                        Committed to environmentally responsible practices while maintaining operational 
                        excellence and business growth.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#FAB045] flex items-center justify-center text-white">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Global Reach, Local Touch</h4>
                      <p className="text-gray-300">
                        Combining our extensive global network with deep local market knowledge for 
                        seamless cross-border logistics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FAB045]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#A0A1A2]/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Expandable Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#FAB045] font-semibold mb-4 tracking-wider uppercase">OUR FOUNDATION</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Core <span className="text-[#FAB045]">Values</span> That Drive Us
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              These principles guide every decision we make and every service we deliver.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border transition-all duration-500 overflow-hidden ${
                  expandedValues[index] ? 'border-[#FAB045] shadow-xl' : 'border-gray-200 hover:border-[#FAB045]/50 hover:shadow-xl'
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FAB045] to-[#A0A1A2]"></div>
                
                <div className="relative mb-6">
                  <button 
                    onClick={() => toggleValueExpansion(index)}
                    className="cursor-pointer focus:outline-none"
                  >
                    <div className={`inline-flex p-4 rounded-xl transition-all duration-300 ${
                      expandedValues[index]
                        ? 'bg-gradient-to-br from-[#FAB045] to-[#FAB045]/80 text-white scale-110'
                        : 'bg-gradient-to-br from-[#FAB045]/10 to-[#A0A1A2]/10 text-[#FAB045] group-hover:scale-110'
                    }`}>
                      <div className="text-3xl">
                        {value.icon}
                      </div>
                    </div>
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 mb-4">{value.description}</p>

                {/* Expandable More Information */}
                {expandedValues[index] && (
                  <div className="mb-4 animate-fadeIn">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-gray-700 text-sm leading-relaxed">{value.moreInfo}</p>
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={() => toggleValueExpansion(index)}
                  className="mt-4 inline-flex items-center text-[#FAB045] font-semibold hover:text-[#FAB045]/80 transition-colors duration-300"
                >
                  {expandedValues[index] ? (
                    <>
                      <FaChevronUp className="mr-2" />
                      <span>Show Less</span>
                    </>
                  ) : (
                    <>
                      <span>Learn More</span>
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with Expandable Information */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#FAB045] font-semibold mb-4 tracking-wider uppercase">OUR JOURNEY</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Milestones & <span className="text-[#FAB045]">Achievements</span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FAB045] via-[#A0A1A2] to-[#FAB045] transform -translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative mb-12 lg:mb-0 ${
                  index % 2 === 0 ? 'lg:pr-1/2 lg:pl-8 lg:text-right' : 'lg:pl-1/2 lg:pr-8'
                }`}
              >
                <div className="lg:absolute lg:w-1/2 lg:px-8">
                  <div className={`bg-white rounded-2xl p-8 border transition-all duration-300 ${
                    expandedMilestones[index] ? 'border-[#FAB045] shadow-xl' : 'border-gray-200 hover:border-[#FAB045]/50 hover:shadow-xl'
                  }`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <button 
                        onClick={() => toggleMilestoneExpansion(index)}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FAB045] to-[#A0A1A2] flex items-center justify-center text-white font-bold text-xl hover:scale-110 transition-transform duration-300"
                      >
                        {milestone.year}
                      </button>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Expandable More Information */}
                    {expandedMilestones[index] && (
                      <div className="mt-4 animate-fadeIn">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-gray-700 text-sm leading-relaxed">{milestone.moreInfo}</p>
                        </div>
                        
                        <button 
                          onClick={() => toggleMilestoneExpansion(index)}
                          className="mt-4 text-[#FAB045] font-semibold text-sm hover:text-[#FAB045]/80 transition-colors duration-300 flex items-center gap-1"
                        >
                          <FaChevronUp className="text-xs" />
                          <span>Show Less Details</span>
                        </button>
                      </div>
                    )}
                    
                    {!expandedMilestones[index] && (
                      <button 
                        onClick={() => toggleMilestoneExpansion(index)}
                        className="mt-4 text-[#FAB045] font-semibold text-sm hover:text-[#FAB045]/80 transition-colors duration-300 flex items-center gap-1"
                      >
                        <FaChevronDown className="text-xs" />
                        <span>Learn More</span>
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 w-6 h-6 bg-white border-4 border-[#FAB045] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-[#FAB045]">Partner</span> With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join thousands of satisfied clients who trust SwiftLogistics for their global supply chain needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={handleExploreServices}
                className="px-10 py-4 bg-[#FAB045] hover:bg-[#FAB045]/90 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center"
              >
                <span>Start Your Journey</span>
                <FiArrowRight className="ml-3" />
              </button>
              <button 
                onClick={handleDownloadBrochure}
                className="px-10 py-4 bg-transparent border-2 border-[#A0A1A2] hover:border-[#FAB045] text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload />
                <span>Download Brochure</span>
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400">
                Trusted by industry leaders worldwide. <span className="text-[#FAB045] font-medium">Become our next success story.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}