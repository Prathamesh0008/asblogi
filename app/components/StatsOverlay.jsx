"use client";

import { useEffect, useState } from "react";

// Counter Component
function Counter({ end = 100, duration = 2000, suffix = "", decimals = 0, className = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className={className}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// Main StatsOverlay Component - White background, gray + golden yellow
export default function StatsOverlay() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* White background container – no dark blobs */}
      <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 transition-all duration-500 hover:shadow-2xl overflow-hidden">
        
        {/* Golden gradient accents (soft) */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-amber-400 to-transparent rounded-tl-2xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-500 to-transparent rounded-br-2xl opacity-20" />

        {/* Inner Content */}
        <div className="p-6 md:p-8">
          
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Performance Overview
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-3 rounded-full" />
            <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
              Real‑time delivery & support metrics
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Delivery Rate */}
            <div className="group relative bg-gray-50 backdrop-blur-sm rounded-xl p-5 border border-gray-200 transition-all duration-500 hover:scale-105 hover:bg-white hover:border-amber-400 shadow-sm hover:shadow-lg">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black transition-transform duration-300 group-hover:scale-110">
                  <Counter
                    end={99.8}
                    duration={2500}
                    suffix="%"
                    decimals={1}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent"
                  />
                </div>
                <div className="text-gray-500 group-hover:text-gray-800 transition-colors duration-300 mt-2 text-xs uppercase tracking-wider font-semibold">
                  Delivery Rate
                </div>
              </div>
            </div>

            {/* Countries */}
            <div className="group relative bg-gray-50 backdrop-blur-sm rounded-xl p-5 border border-gray-200 transition-all duration-500 hover:scale-105 hover:bg-white hover:border-amber-400 shadow-sm hover:shadow-lg">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black transition-transform duration-300 group-hover:scale-110">
                  <Counter
                    end={180}
                    duration={1800}
                    suffix="+"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent"
                  />
                </div>
                <div className="text-gray-500 group-hover:text-gray-800 transition-colors duration-300 mt-2 text-xs uppercase tracking-wider font-semibold">
                  Countries
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="group relative bg-gray-50 backdrop-blur-sm rounded-xl p-5 border border-gray-200 transition-all duration-500 hover:scale-105 hover:bg-white hover:border-amber-400 shadow-sm hover:shadow-lg">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black transition-transform duration-300 group-hover:scale-110">
                  <Counter
                    end={24}
                    duration={1200}
                    suffix="/7"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent"
                  />
                </div>
                <div className="text-gray-500 group-hover:text-gray-800 transition-colors duration-300 mt-2 text-xs uppercase tracking-wider font-semibold">
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}