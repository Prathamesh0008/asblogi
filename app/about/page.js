import { FaUsers, FaAward, FaGlobeAmericas, FaChartLine, FaLightbulb, FaHandshake, FaLeaf, FaRocket } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export default function About() {
  const stats = [
    { icon: <FaGlobeAmericas />, value: '150+', label: 'Countries Served', description: 'Global network coverage' },
    { icon: <FaChartLine />, value: '15K+', label: 'Monthly Shipments', description: 'With 99.8% on-time rate' },
    { icon: <FaUsers />, value: '500+', label: 'Dedicated Team', description: 'Experts in logistics' },
    { icon: <FaAward />, value: '25+', label: 'Industry Awards', description: 'Recognized excellence' },
  ];

  const values = [
    { icon: <FaRocket />, title: 'Innovation', description: 'Leveraging cutting-edge technology for smarter logistics solutions.' },
    { icon: <FaHandshake />, title: 'Reliability', description: 'Consistent, dependable service you can count on every time.' },
    { icon: <FaLightbulb />, title: 'Excellence', description: 'Striving for perfection in every shipment and interaction.' },
    { icon: <FaLeaf />, title: 'Sustainability', description: 'Eco-friendly solutions for a greener supply chain.' },
  ];

  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started with 5 employees' },
    { year: '2014', title: 'Global Expansion', description: 'Opened offices in Europe' },
    { year: '2018', title: 'Tech Integration', description: 'Launched AI-powered logistics' },
    { year: '2023', title: 'Market Leader', description: 'Serving 150+ countries' },
  ];

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
              <button className="px-8 py-4 bg-[#FAB045] hover:bg-[#FAB045]/90 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Explore Our Services</span>
                <FiArrowRight className="text-lg" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-[#A0A1A2] hover:border-[#FAB045] text-white font-bold rounded-lg transition-all duration-300">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                  
                  <div className="text-[#A0A1A2] text-sm">
                    {stat.description}
                  </div>
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
                  <button className="px-8 py-4 bg-[#FAB045] hover:bg-[#FAB045]/90 text-gray-900 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <span>View Case Studies</span>
                    <FiArrowRight />
                  </button>
                  <button className="px-8 py-4 bg-white border-2 border-[#A0A1A2] hover:border-[#FAB045] text-gray-800 font-bold rounded-lg transition-all duration-300">
                    Download Brochure
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

      {/* Values Section */}
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
                className="group relative bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#FAB045]/50 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FAB045] to-[#A0A1A2]"></div>
                
                <div className="relative mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#FAB045]/10 to-[#A0A1A2]/10 text-[#FAB045] text-3xl group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
                
                <div className="mt-6">
                  <span className="inline-flex items-center text-[#FAB045] font-semibold group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <FiArrowRight className="ml-0 group-hover:ml-2 transition-all duration-300" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#FAB045]/50 hover:shadow-xl transition-all duration-300">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FAB045] to-[#A0A1A2] flex items-center justify-center text-white font-bold text-xl">
                        {milestone.year}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
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
              <button className="px-10 py-4 bg-[#FAB045] hover:bg-[#FAB045]/90 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center">
                <span>Start Your Journey</span>
                <FiArrowRight className="ml-3" />
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-[#A0A1A2] hover:border-[#FAB045] text-white font-bold rounded-lg transition-all duration-300">
                Schedule Consultation
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
    </div>
  );
}