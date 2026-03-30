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
      case 'in transit': return 'from-[#E65100] to-[#FFD700]';
      case 'out for delivery': return 'from-[#FF8F00] to-[#E65100]';
      default: return 'from-gray-500 to-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case 'delivered': return <FaCheckCircle className="text-white/95 animate-pulse" />;
      case 'in transit': return <FaTruckLoading className="text-white/95 animate-bounce" />;
      case 'out for delivery': return <FaShippingFast className="text-white/95 animate-pulse" />;
      default: return <FaBox className="text-white/95" />;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-x-hidden">
        {/* Modern Header with Background Pattern */}
        <header className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white/95 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" 
              style={{
                backgroundImage: 'radial-gradient(circle at 25px 25px, #E65100 2%, transparent 2%), radial-gradient(circle at 75px 75px, #A0A1A2 2%, transparent 2%)',
                backgroundSize: '100px 100px'
              }}>
            </div>
          </div>
          
          {/* Animated Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E65100]/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              
              
              <h1 className="text-xl sm:text-3xl md:text-5xl font-light mb-4 sm:mb-5 -mt-8 leading-snug tracking-wide text-white/70 font-medium">
                Track{" "}
                <span className="bg-gradient-to-r from-[#FF8F00] to-[#FFD700] bg-clip-text text-transparent font-medium">
                  Shipments
                </span>
                <br />
                <span className="text-white/60 font-medium">
                  In Real-Time
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base max-w-xl mx-auto text-gray-400 mb-6 sm:mb-8 leading-relaxed px-2">
                Advanced tracking technology for precise, reliable, and transparent shipment monitoring worldwide.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto mt-8 sm:mt-12 md:mt-16">
                <div className="text-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E65100]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-1 sm:mb-2">50k+</div>
                    <div className="text-gray-400 text-xs sm:text-sm">Active Shipments</div>
                  </div>
                </div>
                <div className="text-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E65100]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-1 sm:mb-2">90+</div>
                    <div className="text-gray-400 text-xs sm:text-sm">Countries</div>
                  </div>
                </div>
                <div className="text-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E65100]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-1 sm:mb-2">99.8%</div>
                    <div className="text-gray-400 text-xs sm:text-sm">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="relative -mt-8 sm:-mt-12 md:-mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Tracking Card */}
            <div className="max-w-6xl mx-auto">
              {/* Floating Tracking Input */}
              <div className="relative mb-12 sm:mb-16">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E65100] to-[#FFD700] rounded-2xl sm:rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                    <div className="flex-1 w-full">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#E65100] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                          <FaSearch className="text-white/95 text-lg sm:text-2xl" />
                        </div>
                        <div>
                          <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 tracking-wide">
                            Enter Tracking Number
                          </h2>
                          <p className="text-gray-500/80 mt-1 sm:mt-2 flex items-center font-light text-xs sm:text-sm">
                            <FaShieldAlt className="mr-2 text-[#E65100]/80 text-xs" />
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
                          className="w-full pl-12 sm:pl-14 pr-10 sm:pr-12 py-4 sm:py-5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#E65100] focus:ring-4 focus:ring-[#E65100]/20 transition-all duration-300 text-sm sm:text-base placeholder-gray-400"
                        />
                        <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2">
                          <FaBox className="text-[#E65100] text-base sm:text-xl" />
                        </div>
                        <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                          <button 
                            onClick={handleTrack}
                            className="text-[#E65100] hover:text-[#FF8F00] transition-colors"
                          >
                            <FaChevronRight />
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-6 sm:mt-8">
                        <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3 flex items-center">
                          <FaBell className="mr-2 text-[#E65100] text-xs sm:text-sm" />
                          Quick access tracking numbers:
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {trackingNumbers.map((num) => (
                            <button
                              key={num}
                              onClick={() => setTrackingId(num)}
                              className="px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:border-[#E65100] hover:from-[#E65100]/5 hover:to-white rounded-lg sm:rounded-xl text-xs sm:text-sm text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:shadow-md group"
                            >
                              <span className="group-hover:text-[#E65100] transition-colors">{num}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleTrack}
                      className="group relative overflow-hidden bg-gradient-to-r from-[#E65100] to-[#FFD700] hover:from-[#FF8F00] hover:to-[#E65100] text-white/95 font-semibold py-3 px-6 text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center shadow-lg w-full lg:w-auto"
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
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-8 sm:mb-12">
                {/* Status Header */}
                <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 50%, #E65100 0%, transparent 50%), radial-gradient(circle at 70% 50%, #FFD700 0%, transparent 50%)'
                  }}></div>
                  <div className="relative p-5 sm:p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6">
                      <div className="w-full lg:w-auto">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#E65100] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                            {getStatusIcon(trackingInfo.status)}
                          </div>
                          <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-light text-white/70 tracking-wide">
                              Shipment Status
                            </h2>
                            <p className="text-gray-400/80 font-light text-xs sm:text-sm mt-0.5">
                              Updated in real-time
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:space-x-4">
                          <code className="bg-gray-800/50 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-mono text-[#FFD700] font-bold border border-gray-700 text-xs sm:text-sm break-all">
                            {trackingId}
                          </code>
                          <span className="text-gray-400 text-xs sm:text-sm">| Last updated: 2 hours ago</span>
                        </div>
                      </div>
                      
                      <div className="relative group w-full lg:w-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E65100] to-[#FFD700] rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className={`relative px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl border-2 border-white/20 bg-gradient-to-r ${getStatusColor(trackingInfo.status)} flex items-center justify-center w-full lg:w-auto`}>
                          <span className="relative z-10 flex items-center text-white/95">
                            {getStatusIcon(trackingInfo.status)}
                            <span className="ml-2 sm:ml-3">{trackingInfo.status}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
                    {[
                      { 
                        icon: <FaMapMarkerAlt />, 
                        title: 'Origin', 
                        value: trackingInfo.origin,
                        detail: 'Pickup completed',
                        color: 'from-[#E65100] to-[#FFD700]'
                      },
                      { 
                        icon: <FaMapMarkerAlt />, 
                        title: 'Destination', 
                        value: trackingInfo.destination,
                        detail: '2,882 km distance',
                        color: 'from-[#FF8F00] to-[#FFD700]'
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
                        color: 'from-[#E65100] to-[#FFD700]'
                      },
                    ].map((item, index) => (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl border border-gray-200 group-hover:border-[#E65100] transition-all duration-300 shadow-sm"></div>
                        <div className="relative p-4 sm:p-6">
                          <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <div className="text-white/95 text-base sm:text-xl">
                              {item.icon}
                            </div>
                          </div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">{item.title}</h3>
                          <p className="text-gray-900 text-lg sm:text-xl font-bold mb-1 sm:mb-2 break-words">{item.value}</p>
                          <p className="text-xs sm:text-sm text-[#A0A1A2]">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Timeline - Mobile Responsive */}
                  <div className="mb-10 sm:mb-12">
                    <div className="flex items-center mb-6 sm:mb-8 md:mb-10">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-[#E65100] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                        <FaClipboardList className="text-white/95 text-base sm:text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Shipment Journey</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">Step-by-step tracking history</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      {/* Progress Line - responsive left position */}
                      <div className="absolute left-3 sm:left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E65100] via-[#FFD700] to-gray-200">
                        <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-[#E65100] to-[#FFD700] animate-pulse"></div>
                      </div>
                      
                      {/* Timeline items with responsive margins */}
                      <div className="space-y-5 sm:space-y-6 ml-10 sm:ml-12 md:ml-16">
                        {trackingInfo.history.map((event, index) => (
                          <div key={index} className="relative group">
                            <div className={`absolute -left-10 sm:-left-12 md:-left-16 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ${event.completed ? 'bg-gradient-to-r from-[#E65100] to-[#FFD700]' : 'bg-gradient-to-r from-gray-300 to-gray-400'}`}>
                              {event.completed ? (
                                <FaCheckCircle className="text-white/95 text-xs sm:text-sm md:text-lg" />
                              ) : (
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/95 rounded-full"></div>
                              )}
                            </div>
                            
                            <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 group-hover:-translate-y-1 ${event.completed ? 'bg-gradient-to-br from-white to-gray-50 border-l-2 sm:border-l-4 border-[#E65100]' : 'bg-gradient-to-br from-gray-50/50 to-white/50'}`}>
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-2 sm:mb-4">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className={`font-bold text-sm sm:text-base md:text-lg ${event.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                                    {event.status}
                                  </span>
                                  {event.completed && (
                                    <span className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-semibold">
                                      ✓ Completed
                                    </span>
                                  )}
                                </div>
                                <span className="text-gray-600 font-medium text-xs sm:text-sm bg-gray-100 px-2 sm:px-3 py-1 rounded-lg">
                                  {event.date}
                                </span>
                              </div>
                              <div className="flex items-center text-gray-700 text-xs sm:text-sm">
                                <FaMapMarkerAlt className="mr-2 sm:mr-3 text-[#E65100] text-xs sm:text-sm" />
                                <p className="font-medium break-words">{event.location}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Detailed Information Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-[#E65100] transition-all duration-300 group hover:shadow-lg">
                      <div className="flex items-center mb-3 sm:mb-5">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                          <FaShippingFast className="text-white/95 text-sm sm:text-base" />
                        </div>
                        <h4 className="font-medium text-sm sm:text-base text-gray-700">Carrier Details</h4>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <p className="text-gray-700 font-medium text-sm sm:text-base break-words">{trackingInfo.carrier}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gapt-16 md:pt-20 pb-20 mt-3 sm:mt-4 border-t border-gray-100">
                          <button className="text-[#E65100] font-semibold hover:text-[#FF8F00] transition-colors flex items-center text-xs sm:text-sm">
                            <FaHeadphones className="mr-2" />
                            Contact Support
                          </button>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded text-center sm:text-left">24/7 Available</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-[#E65100] transition-all duration-300 group hover:shadow-lg">
                      <div className="flex items-center mb-3 sm:mb-5">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                          <FaBox className="text-white/95 text-sm sm:text-base" />
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-gray-900">Package Specs</h4>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                            <p className="text-[10px] sm:text-xs text-gray-500">Weight</p>
                            <p className="font-bold text-gray-900 text-xs sm:text-sm">{trackingInfo.weight}</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                            <p className="text-[10px] sm:text-xs text-gray-500">Dimensions</p>
                            <p className="font-bold text-gray-900 text-xs sm:text-sm break-words">{trackingInfo.dimensions}</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                          <p className="text-[10px] sm:text-xs text-gray-500">Service Type</p>
                          <p className="font-bold text-gray-900 text-xs sm:text-sm flex items-center flex-wrap gap-1">
                            {trackingInfo.serviceType}
                            <span className="text-[10px] sm:text-xs bg-[#E65100]/10 text-[#E65100] px-2 py-0.5 rounded">Express</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-[#E65100] transition-all duration-300 group hover:shadow-lg">
                      <div className="flex items-center mb-3 sm:mb-5">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                          <FaShieldAlt className="text-white/95 text-sm sm:text-base" />
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-gray-900">Security & Actions</h4>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-emerald-100">
                          <p className="text-xs sm:text-sm text-gray-700 mb-1">
                            <span className="font-bold">Insurance:</span> $1,500 Coverage
                          </p>
                          <p className="text-[10px] sm:text-xs text-gray-500">Fully insured shipment</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                          <button className="flex-1 bg-gradient-to-r from-gray-100 to-white border border-gray-200 text-gray-700 font-semibold py-2 sm:py-3 rounded-lg sm:rounded-xl hover:border-[#E65100] hover:text-[#E65100] transition-all duration-300 flex items-center justify-center text-xs sm:text-sm">
                            <FaDownload className="mr-1 sm:mr-2 text-xs sm:text-sm" />
                            Label
                          </button>
                          <button className="flex-1 bg-gradient-to-r from-gray-100 to-white border border-gray-200 text-gray-700 font-semibold py-2 sm:py-3 rounded-lg sm:rounded-xl hover:border-[#E65100] hover:text-[#E65100] transition-all duration-300 flex items-center justify-center text-xs sm:text-sm">
                            <FaShare className="mr-1 sm:mr-2 text-xs sm:text-sm" />
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-4 sm:p-6 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                    <div className="flex items-center w-full md:w-auto justify-center md:justify-start mb-3 md:mb-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#E65100] to-[#FFD700] rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                        <FaHeadphones className="text-white/95 text-xs sm:text-sm" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium text-xs sm:text-sm">Need assistance?</p>
                        <p className="text-[#E65100] font-semibold cursor-pointer hover:underline text-xs sm:text-sm">
                          Contact our support team
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
                      <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-100 to-white border-2 border-gray-200 text-gray-700 font-semibold rounded-lg sm:rounded-xl hover:border-[#E65100] hover:text-[#E65100] hover:shadow-lg transition-all duration-300 flex items-center justify-center text-xs sm:text-sm">
                        <FaPrint className="mr-2 text-xs sm:text-sm" />
                        Print Details
                      </button>
                      <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#E65100] to-[#FFD700] text-white/95 font-semibold rounded-lg sm:rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center text-xs sm:text-sm group">
                        <FaShare className="mr-2 group-hover:rotate-12 transition-transform text-xs sm:text-sm" />
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

      {/* Popup Modal - Mobile Responsive */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full mx-auto overflow-hidden animate-fadeIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#E65100] to-[#FFD700] p-5 sm:p-6 text-white/95">
              <div className="flex justify-between items-center">
                <h3 className="text-xl sm:text-2xl font-bold">We're Working On It</h3>
                <button 
                  onClick={closePopup}
                  className="text-white/95 hover:text-gray-200 transition-colors"
                >
                  <FaTimes className="text-lg sm:text-xl" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-8">
              <div className="text-center mb-5 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#E65100] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaSearch className="text-white/95 text-xl sm:text-2xl" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
                  Our team is currently processing your tracking request for:
                  <span className="block font-semibold text-gray-900 mt-2 break-words">{trackingId}</span>
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mb-6 sm:mb-8">
                  You will be contacted shortly with the tracking details. Thank you for your patience!
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E65100]/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <FaPhone className="text-[#E65100] text-base sm:text-lg" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Call Us</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">+31685865799</p>
                  </div>
                </div>

                <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E65100]/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <FaEnvelope className="text-[#E65100] text-base sm:text-lg" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Email Us</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base break-words">support@logistics.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 sm:px-8 pb-5 sm:pb-8">
              <button 
                onClick={closePopup}
                className="w-full bg-gradient-to-r from-[#E65100] to-[#FFD700] hover:from-[#FF8F00] hover:to-[#E65100] text-white/95 font-semibold py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}