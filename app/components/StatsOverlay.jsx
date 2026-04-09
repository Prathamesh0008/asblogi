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

// Main StatsOverlay Component - Wider Version
export default function StatsOverlay() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Animated background glow - slightly larger to match wider card */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-56 h-56 bg-[#ec671f]/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-[#d85f1d]/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Main Card - wider, same compact padding */}
      <div className="relative bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl rounded-2xl border border-white/15 shadow-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,103,31,0.3)] overflow-hidden">
        
        {/* Gradient Border Accents */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#ec671f] to-transparent rounded-tl-2xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#d85f1d] to-transparent rounded-br-2xl opacity-30" />

        {/* Inner Content */}
        <div className="p-6 md:p-8">
          
          {/* Header */}
     <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Performance Overview
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#ec671f] to-[#d85f1d] mx-auto mt-3 rounded-full" />
            <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
              Real‑time delivery & support metrics
            </p>
          </div>

          {/* Stats Grid - wider spacing but still compact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Delivery Rate */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-[#ec671f]/60 shadow-md hover:shadow-[0_0_20px_rgba(236,103,31,0.4)]">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black transition-transform duration-300 group-hover:scale-110">
                  <Counter
                    end={99.8}
                    duration={2500}
                    suffix="%"
                    decimals={1}
                    className="bg-gradient-to-r from-[#ec671f] to-[#d85f1d] bg-clip-text text-transparent"
                  />
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300 mt-2 text-xs uppercase tracking-wider font-semibold">
                  Delivery Rate
                </div>
              </div>
            </div>

            {/* Countries */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-[#ec671f]/60 shadow-md hover:shadow-[0_0_20px_rgba(236,103,31,0.4)]">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black transition-transform duration-300 group-hover:scale-110">
                  <Counter
                    end={180}
                    duration={1800}
                    suffix="+"
                    className="bg-gradient-to-r from-[#ec671f] to-[#d85f1d] bg-clip-text text-transparent"
                  />
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300 mt-2 text-xs uppercase tracking-wider font-semibold">
                  Countries
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-[#ec671f]/60 shadow-md hover:shadow-[0_0_20px_rgba(236,103,31,0.4)]">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black transition-transform duration-300 group-hover:scale-110">
                  <Counter
                    end={24}
                    duration={1200}
                    suffix="/7"
                    className="bg-gradient-to-r from-[#ec671f] to-[#d85f1d] bg-clip-text text-transparent"
                  />
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300 mt-2 text-xs uppercase tracking-wider font-semibold">
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