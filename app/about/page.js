import { FaUsers, FaAward, FaGlobeAmericas, FaChartLine } from 'react-icons/fa';

export default function About() {
  const stats = [
    { icon: <FaGlobeAmericas />, value: '150+', label: 'Countries Served' },
    { icon: <FaChartLine />, value: '15K+', label: 'Monthly Shipments' },
    { icon: <FaUsers />, value: '500+', label: 'Dedicated Team' },
    { icon: <FaAward />, value: '25+', label: 'Industry Awards' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About SwiftLogistics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Pioneering global logistics solutions with innovation, reliability, and customer-centric approach since 2010.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story & Mission</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, SwiftLogistics started with a simple mission: to make global logistics 
                accessible, reliable, and efficient for businesses of all sizes.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we're a global leader in supply chain solutions, leveraging cutting-edge technology 
                and a vast network to deliver excellence across borders.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                Get in Touch
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  <span>Reliability & Precision</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  <span>Customer-Centric Approach</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  <span>Innovation & Technology</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  <span>Sustainability & Responsibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}