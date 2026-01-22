import { FaShip, FaPlane, FaTruck, FaWarehouse, FaBoxes, FaTemperatureLow, FaCheckCircle } from 'react-icons/fa';

export default function ServicesPage() {
  const allServices = [
    {
      icon: <FaTruck />,
      title: 'Road Freight',
      description: 'Comprehensive road transportation solutions for domestic and cross-border shipments.',
      features: ['Full Truck Load (FTL)', 'Less Than Truckload (LTL)', 'Temperature-controlled', 'Hazardous Materials', 'Express Delivery']
    },
    {
      icon: <FaPlane />,
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services for time-sensitive shipments.',
      features: ['Same Day Service', 'Next Flight Out', 'Charter Services', 'Dangerous Goods', 'Perishables Handling']
    },
    {
      icon: <FaShip />,
      title: 'Ocean Freight',
      description: 'Cost-effective sea freight solutions with global coverage.',
      features: ['FCL Container', 'LCL Consolidation', 'Bulk Shipping', 'Reefer Containers', 'Project Cargo']
    },
    {
      icon: <FaWarehouse />,
      title: 'Warehousing',
      description: 'Modern warehousing facilities with advanced inventory management.',
      features: ['Bonded Warehouses', 'Cross-docking', 'Pick & Pack', 'Inventory Management', 'Distribution']
    },
    {
      icon: <FaBoxes />,
      title: 'Supply Chain',
      description: 'End-to-end supply chain optimization and management.',
      features: ['Order Fulfillment', 'Vendor Management', 'Inventory Optimization', 'Demand Planning', 'Reverse Logistics']
    },
    {
      icon: <FaTemperatureLow />,
      title: 'Cold Chain',
      description: 'Specialized temperature-controlled logistics solutions.',
      features: ['Pharmaceutical Grade', 'Food & Beverage', 'Real-time Monitoring', 'GDP Compliance', 'Validated Packaging']
    },
  ];

  const processSteps = [
    { number: '01', title: 'Consultation', description: 'Understand your requirements and challenges' },
    { number: '02', title: 'Planning', description: 'Design optimal logistics solution' },
    { number: '03', title: 'Execution', description: 'Implement with precision and care' },
    { number: '04', title: 'Monitoring', description: 'Real-time tracking and updates' },
    { number: '05', title: 'Delivery', description: 'Safe and timely delivery' },
    { number: '06', title: 'Support', description: 'Post-delivery support and feedback' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to your business needs with precision and reliability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="text-blue-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A systematic approach to ensure seamless logistics operations from start to finish.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-blue-200 transform translate-x-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}