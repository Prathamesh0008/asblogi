'use client';
import { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaTruckLoading, FaClipboardList, FaBox, FaShippingFast, FaRoute, FaCheckCircle } from 'react-icons/fa';

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('TRK789012345');
  const [trackingInfo] = useState({
    status: 'In Transit',
    estimatedDelivery: '2024-01-20',
    currentLocation: 'Chicago Distribution Center',
    origin: 'Seattle, WA',
    destination: 'Boston, MA',
    weight: '150 kg',
    dimensions: '120 × 80 × 60 cm',
    carrier: 'SwiftLogistics Express',
    serviceType: 'Express Delivery',
    history: [
      { date: '2024-01-15 09:30', status: 'Picked Up', location: 'Seattle Warehouse', completed: true },
      { date: '2024-01-16 14:20', status: 'Processing', location: 'Seattle Hub', completed: true },
      { date: '2024-01-17 11:45', status: 'Departed', location: 'Seattle Airport', completed: true },
      { date: '2024-01-18 16:30', status: 'Arrived', location: 'Chicago Hub', completed: true },
      { date: '2024-01-19 09:15', status: 'In Transit', location: 'Chicago Distribution', completed: true },
      { date: '2024-01-20 14:00', status: 'Out for Delivery', location: 'Boston Area', completed: false },
      { date: '2024-01-20 18:00', status: 'Delivered', location: 'Destination', completed: false },
    ]
  });

  const handleTrack = () => {
    // In real app, this would call an API
    alert(`Tracking shipment: ${trackingId}`);
  };

  const trackingNumbers = [
    'TRK123456789',
    'TRK789012345',
    'SL2024001234',
    'SL2024005678'
  ];

  const getStatusColor = (status) => {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
      case 'in transit': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'out for delivery': return 'bg-[#FAB045] text-white border-[#FAB045]';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with New Colors */}
      <section className="relative bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#FAB045] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#A0A1A2] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Track Your <span className="text-[#FAB045]">Shipment</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-10">
            Real-time tracking updates for all your shipments across the globe with precision and reliability.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FAB045]">50k+</div>
              <div className="text-gray-400">Monthly Shipments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FAB045]">150+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FAB045]">99.8%</div>
              <div className="text-gray-400">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Tracking Input */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-xl flex items-center justify-center mr-4">
                    <FaSearch className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Track Your Package</h2>
                    <p className="text-gray-600 mt-1">Enter your tracking number below</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <FaBox className="text-[#A0A1A2]" />
                      </div>
                      <input
                        type="text"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        placeholder="Enter your tracking number (e.g., TRK789012345)"
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FAB045] focus:border-transparent transition-all duration-300 text-lg placeholder-gray-500"
                      />
                    </div>
                    
                    <div className="mt-6">
                      <p className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                        <FaShippingFast className="mr-2 text-[#FAB045]" />
                        Recent tracking numbers:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {trackingNumbers.map((num) => (
                          <button
                            key={num}
                            onClick={() => setTrackingId(num)}
                            className="text-sm bg-gray-100 hover:bg-[#FAB045] hover:text-white text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-[#FAB045] font-medium"
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleTrack}
                    className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-[#e8a035] hover:to-[#e8a035] text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center"
                  >
                    <FaSearch className="mr-2" />
                    Track Shipment
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Tracking Results */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Header with Gradient */}
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-[#FAB045] opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-lg flex items-center justify-center mr-3">
                          <FaRoute className="text-white" />
                        </div>
                        <h2 className="text-3xl font-bold">Tracking Details</h2>
                      </div>
                      <div className="flex items-center mt-2">
                        <p className="text-gray-300 mr-4">Tracking ID:</p>
                        <code className="bg-gray-800 px-3 py-1 rounded-lg font-mono text-[#FAB045] font-bold">
                          {trackingId}
                        </code>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`inline-flex items-center px-5 py-3 rounded-xl font-bold text-lg border-2 ${getStatusColor(trackingInfo.status)}`}>
                        {trackingInfo.status === 'In Transit' && <FaTruckLoading className="mr-2 animate-pulse" />}
                        {trackingInfo.status === 'Delivered' && <FaCheckCircle className="mr-2" />}
                        {trackingInfo.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipment Details Cards */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#FAB045] transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Origin</h3>
                    <p className="text-gray-700 font-medium">{trackingInfo.origin}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#FAB045] transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Destination</h3>
                    <p className="text-gray-700 font-medium">{trackingInfo.destination}</p>
                    <div className="mt-3 text-sm text-[#FAB045] font-semibold flex items-center">
                      <FaRoute className="mr-1" /> 2,882 km
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#FAB045] transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FaCalendarAlt className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Estimated Delivery</h3>
                    <p className="text-gray-700 font-medium">{trackingInfo.estimatedDelivery}</p>
                    <div className="mt-2 text-sm text-[#A0A1A2]">Expected by 18:00</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#FAB045] transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FaTruckLoading className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Current Location</h3>
                    <p className="text-gray-700 font-medium">{trackingInfo.currentLocation}</p>
                    <div className="mt-2 text-sm text-[#A0A1A2]">Updated 2 hours ago</div>
                  </div>
                </div>

                {/* Enhanced Timeline */}
                <div className="mb-12">
                  <div className="flex items-center mb-8">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-xl flex items-center justify-center mr-3">
                      <FaClipboardList className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Shipment Journey</h3>
                  </div>
                  
                  <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FAB045] via-[#A0A1A2] to-gray-300"></div>
                    
                    <div className="space-y-8 ml-12">
                      {trackingInfo.history.map((event, index) => (
                        <div key={index} className="relative">
                          <div className={`absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center ${event.completed ? 'bg-gradient-to-r from-[#FAB045] to-[#f8c468]' : 'bg-gray-300'}`}>
                            {event.completed ? (
                              <FaCheckCircle className="text-white text-lg" />
                            ) : (
                              <div className="w-4 h-4 bg-white rounded-full"></div>
                            )}
                          </div>
                          
                          <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 ${event.completed ? 'border-[#FAB045]/20' : 'border-gray-200'} hover:border-[#FAB045]/40 transition-all duration-300`}>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                              <div className="flex items-center">
                                <span className={`font-bold text-lg ${event.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                                  {event.status}
                                </span>
                                {event.completed && (
                                  <span className="ml-3 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                    Completed
                                  </span>
                                )}
                              </div>
                              <span className="text-gray-600 font-medium mt-1 md:mt-0">{event.date}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <FaMapMarkerAlt className="mr-2 text-[#FAB045]" />
                              <p className="font-medium">{event.location}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Shipment Information */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold mb-8 text-gray-900">Shipment Details</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#FAB045] transition-all duration-300 group">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-lg flex items-center justify-center mr-3">
                          <FaTruckLoading className="text-white" />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900">Carrier Information</h4>
                      </div>
                      <p className="text-gray-700 font-medium">{trackingInfo.carrier}</p>
                      <p className="text-sm text-[#A0A1A2] mt-2">24/7 Customer Support</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#FAB045] transition-all duration-300 group">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-lg flex items-center justify-center mr-3">
                          <FaBox className="text-white" />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900">Package Details</h4>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          <span className="font-medium">Weight:</span> {trackingInfo.weight}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Dimensions:</span> {trackingInfo.dimensions}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Items:</span> 3 Packages
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#FAB045] transition-all duration-300 group">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-lg flex items-center justify-center mr-3">
                          <FaShippingFast className="text-white" />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900">Service & Delivery</h4>
                      </div>
                      <p className="text-gray-700 font-medium">{trackingInfo.serviceType}</p>
                      <p className="text-sm text-[#A0A1A2] mt-2">
                        <span className="font-medium text-gray-700">Insurance:</span> $1,500 Coverage
                      </p>
                      <div className="mt-4">
                        <button className="text-[#FAB045] font-semibold hover:text-[#e8a035] transition-colors duration-300 flex items-center">
                          Download Shipping Label
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="bg-gray-50 p-6 border-t border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-600 mb-4 md:mb-0">
                    Need help? <span className="text-[#FAB045] font-semibold cursor-pointer hover:underline">Contact Support</span>
                  </p>
                  <div className="flex gap-4">
                    <button className="px-6 py-3 border-2 border-[#FAB045] text-[#FAB045] font-semibold rounded-xl hover:bg-[#FAB045] hover:text-white transition-all duration-300">
                      Print Details
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-[#FAB045] to-[#f8c468] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
                      Share Tracking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}