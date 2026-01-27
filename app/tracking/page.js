'use client';
import { useState } from 'react';
import { 
  FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaTruckLoading, 
  FaClipboardList, FaBox, FaShippingFast, FaRoute, 
  FaCheckCircle, FaChevronRight, FaDownload, FaShare, 
  FaPrint, FaHeadphones, FaGlobe, FaShieldAlt, FaBell, 
  FaTimes, FaPhone, FaEnvelope 
} from 'react-icons/fa';

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('TRK789012345');
  const [showPopup, setShowPopup] = useState(false);
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
    // Remove the alert and show popup instead
    // alert(`Tracking shipment: ${trackingId}`);
    
    if (trackingId.trim()) {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTrack();
    }
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
      case 'delivered': return 'from-green-500 to-emerald-400';
      case 'in transit': return 'from-blue-500 to-cyan-400';
      case 'out for delivery': return 'from-[#FAB045] to-orange-400';
      default: return 'from-gray-500 to-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case 'delivered': return <FaCheckCircle className="text-white animate-pulse" />;
      case 'in transit': return <FaTruckLoading className="text-white animate-bounce" />;
      case 'out for delivery': return <FaShippingFast className="text-white animate-pulse" />;
      default: return <FaBox className="text-white" />;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Modern Header with Background Pattern */}
        <header className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" 
              style={{
                backgroundImage: 'radial-gradient(circle at 25px 25px, #FAB045 2%, transparent 2%), radial-gradient(circle at 75px 75px, #A0A1A2 2%, transparent 2%)',
                backgroundSize: '100px 100px'
              }}>
            </div>
          </div>
          
          {/* Animated Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FAB045]/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A0A1A2]/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#FAB045]/20 to-[#A0A1A2]/20 rounded-full backdrop-blur-sm mb-6">
                <FaGlobe className="mr-2 text-[#FAB045]" />
                <span className="text-sm font-semibold">GLOBAL TRACKING NETWORK</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Track <span className="bg-gradient-to-r from-[#FAB045] to-orange-400 bg-clip-text text-transparent">Shipments</span>
                <br />In Real-Time
              </h1>
              
              <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12 leading-relaxed">
                Advanced tracking technology for precise, reliable, and transparent shipment monitoring worldwide.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
                <div className="text-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FAB045]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-[#FAB045] mb-2">50k+</div>
                    <div className="text-gray-400 text-sm">Active Shipments</div>
                  </div>
                </div>
                <div className="text-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FAB045]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-[#FAB045] mb-2">150+</div>
                    <div className="text-gray-400 text-sm">Countries</div>
                  </div>
                </div>
                <div className="text-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FAB045]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-3xl font-bold text-[#FAB045] mb-2">99.8%</div>
                    <div className="text-gray-400 text-sm">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="relative -mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Tracking Card */}
            <div className="max-w-6xl mx-auto">
              {/* Floating Tracking Input */}
              <div className="relative mb-16">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAB045] to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#FAB045] to-[#f8c468] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                          <FaSearch className="text-white text-2xl" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900">Enter Tracking Number</h2>
                          <p className="text-gray-600 mt-2 flex items-center">
                            <FaShieldAlt className="mr-2 text-[#FAB045]" />
                            Secure & encrypted tracking
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <input
                          type="text"
                          value={trackingId}
                          onChange={(e) => setTrackingId(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Enter tracking number (e.g., TRK789012345)"
                          className="w-full pl-14 pr-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAB045] focus:ring-4 focus:ring-[#FAB045]/20 transition-all duration-300 text-lg placeholder-gray-400"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <FaBox className="text-[#FAB045] text-xl" />
                        </div>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <button 
                            onClick={handleTrack}
                            className="text-[#FAB045] hover:text-orange-600 transition-colors"
                          >
                            <FaChevronRight />
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <p className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                          <FaBell className="mr-2 text-[#FAB045]" />
                          Quick access tracking numbers:
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {trackingNumbers.map((num) => (
                            <button
                              key={num}
                              onClick={() => setTrackingId(num)}
                              className="px-4 py-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:border-[#FAB045] hover:from-[#FAB045]/5 hover:to-white rounded-xl text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:shadow-md group"
                            >
                              <span className="group-hover:text-[#FAB045] transition-colors">{num}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleTrack}
                      className="group relative overflow-hidden bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-orange-500 hover:to-[#FAB045] text-white font-semibold py-5 px-10 rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center shadow-lg"
                    >
                      <span className="relative z-10 flex items-center">
                        <FaSearch className="mr-3" />
                        Track Now
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Status Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-12">
                {/* Status Header */}
                <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 50%, #FAB045 0%, transparent 50%), radial-gradient(circle at 70% 50%, #A0A1A2 0%, transparent 50%)'
                  }}></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#FAB045] to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                            {getStatusIcon(trackingInfo.status)}
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">Shipment Status</h2>
                            <p className="text-gray-300">Updated in real-time</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <code className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-xl font-mono text-[#FAB045] font-bold border border-gray-700">
                            {trackingId}
                          </code>
                          <span className="text-gray-400 text-sm">| Last updated: 2 hours ago</span>
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FAB045] to-orange-500 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className={`relative px-8 py-4 rounded-2xl font-bold text-xl border-2 border-white/20 bg-gradient-to-r ${getStatusColor(trackingInfo.status)} flex items-center justify-center`}>
                          <span className="relative z-10 flex items-center">
                            {getStatusIcon(trackingInfo.status)}
                            <span className="ml-3">{trackingInfo.status}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="p-8 md:p-10">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {[
                      { 
                        icon: <FaMapMarkerAlt />, 
                        title: 'Origin', 
                        value: trackingInfo.origin,
                        detail: 'Pickup completed',
                        color: 'from-blue-500 to-cyan-400'
                      },
                      { 
                        icon: <FaMapMarkerAlt />, 
                        title: 'Destination', 
                        value: trackingInfo.destination,
                        detail: '2,882 km distance',
                        color: 'from-purple-500 to-pink-400'
                      },
                      { 
                        icon: <FaCalendarAlt />, 
                        title: 'ETA', 
                        value: trackingInfo.estimatedDelivery,
                        detail: 'By 18:00 local time',
                        color: 'from-emerald-500 to-teal-400'
                      },
                      { 
                        icon: <FaTruckLoading />, 
                        title: 'Current Location', 
                        value: trackingInfo.currentLocation,
                        detail: 'In transit',
                        color: 'from-[#FAB045] to-orange-400'
                      },
                    ].map((item, index) => (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 group-hover:border-[#FAB045] transition-all duration-300 shadow-sm"></div>
                        <div className="relative p-6">
                          <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <div className="text-white text-xl">
                              {item.icon}
                            </div>
                          </div>
                          <h3 className="font-bold text-lg text-gray-700 mb-2">{item.title}</h3>
                          <p className="text-gray-900 text-xl font-bold mb-2">{item.value}</p>
                          <p className="text-sm text-[#A0A1A2]">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Timeline */}
                  <div className="mb-12">
                    <div className="flex items-center mb-10">
                      <div className="w-14 h-14 bg-gradient-to-r from-[#FAB045] to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <FaClipboardList className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Shipment Journey</h3>
                        <p className="text-gray-600">Step-by-step tracking history</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      {/* Animated Progress Line */}
                      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FAB045] via-orange-300 to-gray-200">
                        <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-[#FAB045] to-orange-300 animate-pulse"></div>
                      </div>
                      
                      <div className="space-y-6 ml-16">
                        {trackingInfo.history.map((event, index) => (
                          <div key={index} className="relative group">
                            <div className={`absolute -left-20 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${event.completed ? 'bg-gradient-to-r from-[#FAB045] to-orange-500' : 'bg-gradient-to-r from-gray-300 to-gray-400'}`}>
                              {event.completed ? (
                                <FaCheckCircle className="text-white text-lg" />
                              ) : (
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                              )}
                            </div>
                            
                            <div className={`rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1 ${event.completed ? 'bg-gradient-to-br from-white to-gray-50 border-l-4 border-[#FAB045]' : 'bg-gradient-to-br from-gray-50/50 to-white/50'}`}>
                              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div className="flex items-center">
                                  <span className={`font-bold text-lg ${event.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                                    {event.status}
                                  </span>
                                  {event.completed && (
                                    <span className="ml-3 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-semibold">
                                      ✓ Completed
                                    </span>
                                  )}
                                </div>
                                <span className="text-gray-600 font-medium mt-1 md:mt-0 bg-gray-100 px-3 py-1 rounded-lg">
                                  {event.date}
                                </span>
                              </div>
                              <div className="flex items-center text-gray-700">
                                <FaMapMarkerAlt className="mr-3 text-[#FAB045]" />
                                <p className="font-medium">{event.location}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Detailed Information Cards */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#FAB045] transition-all duration-300 group hover:shadow-lg">
                      <div className="flex items-center mb-5">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                          <FaShippingFast className="text-white" />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900">Carrier Details</h4>
                      </div>
                      <div className="space-y-3">
                        <p className="text-gray-700 font-medium">{trackingInfo.carrier}</p>
                        <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                          <button className="text-[#FAB045] font-semibold hover:text-orange-600 transition-colors flex items-center group">
                            <FaHeadphones className="mr-2" />
                            Contact Support
                          </button>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">24/7 Available</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#FAB045] transition-all duration-300 group hover:shadow-lg">
                      <div className="flex items-center mb-5">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mr-4">
                          <FaBox className="text-white" />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900">Package Specs</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-gray-500">Weight</p>
                            <p className="font-bold text-gray-900">{trackingInfo.weight}</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-gray-500">Dimensions</p>
                            <p className="font-bold text-gray-900">{trackingInfo.dimensions}</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-500">Service Type</p>
                          <p className="font-bold text-gray-900 flex items-center">
                            {trackingInfo.serviceType}
                            <span className="ml-2 text-xs bg-[#FAB045]/10 text-[#FAB045] px-2 py-1 rounded">Express</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#FAB045] transition-all duration-300 group hover:shadow-lg">
                      <div className="flex items-center mb-5">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center mr-4">
                          <FaShieldAlt className="text-white" />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900">Security & Actions</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-100">
                          <p className="text-sm text-gray-700 mb-2">
                            <span className="font-bold">Insurance:</span> $1,500 Coverage
                          </p>
                          <p className="text-xs text-gray-500">Fully insured shipment</p>
                        </div>
                        <div className="flex space-x-3">
                          <button className="flex-1 bg-gradient-to-r from-gray-100 to-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:border-[#FAB045] hover:text-[#FAB045] transition-all duration-300 flex items-center justify-center">
                            <FaDownload className="mr-2" />
                            Label
                          </button>
                          <button className="flex-1 bg-gradient-to-r from-gray-100 to-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:border-[#FAB045] hover:text-[#FAB045] transition-all duration-300 flex items-center justify-center">
                            <FaShare className="mr-2" />
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#FAB045] to-orange-500 rounded-xl flex items-center justify-center mr-3">
                        <FaHeadphones className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Need assistance?</p>
                        <p className="text-[#FAB045] font-semibold cursor-pointer hover:underline text-sm">
                          Contact our support team
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-gray-100 to-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#FAB045] hover:text-[#FAB045] hover:shadow-lg transition-all duration-300 flex items-center">
                        <FaPrint className="mr-2" />
                        Print Details
                      </button>
                      <button className="px-8 py-3 bg-gradient-to-r from-[#FAB045] to-orange-500 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center group">
                        <FaShare className="mr-2 group-hover:rotate-12 transition-transform" />
                        Share Tracking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] p-6 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">We're Working On It</h3>
                <button 
                  onClick={closePopup}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            {/* Content from-[#FAB045] to-[#f8c468]*/}
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FAB045] to-[#f8c468] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSearch className="text-white text-2xl" />
                </div>
                <p className="text-gray-700 text-lg mb-6">
                  Our team is currently processing your tracking request for:
                  <span className="block font-semibold text-gray-900 mt-2">{trackingId}</span>
                </p>
                <p className="text-gray-600 mb-8">
                  You will be contacted shortly with the tracking details. Thank you for your patience!
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#FAB045]/10 rounded-lg flex items-center justify-center mr-4">
                    <FaPhone className="text-[#FAB045] text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-semibold text-gray-900">+31685865799</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#FAB045]/10 rounded-lg flex items-center justify-center mr-4">
                    <FaEnvelope className="text-[#FAB045] text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-semibold text-gray-900">support@logistics.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 pb-8">
              <button 
                onClick={closePopup}
                className="w-full bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-orange-500 hover:to-[#FAB045] text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}