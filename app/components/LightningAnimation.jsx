// components/LightningAnimation.jsx
'use client'
import React from 'react'

const LightningAnimation = ({ className = 'w-12 h-12' }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background glow effect */}
      <defs>
        <radialGradient id="lightningGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FAB045" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FAB045" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Animated glow background */}
      <circle 
        cx="250" 
        cy="250" 
        r="100" 
        fill="url(#lightningGlow)"
        opacity="0.7"
      >
        <animate 
          attributeName="r"
          values="100;120;100"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate 
          attributeName="opacity"
          values="0.7;0.4;0.7"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Lightning bolt shape - animated */}
      <path 
        d="M200,150 L220,200 L210,200 L230,250 L215,250 L260,350 L280,300 L270,300 L250,250 L265,250 L240,200 L255,200 Z" 
        fill="#FFD700"
        stroke="#FAB045"
        strokeWidth="3"
        filter="url(#glow)"
      >
        {/* Lightning strike animation */}
        <animate 
          attributeName="opacity"
          values="0;1;0"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate 
          attributeName="stroke-width"
          values="3;5;3"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Spark particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <circle 
          key={i}
          cx={250 + Math.cos(i * 45 * Math.PI/180) * 60}
          cy={250 + Math.sin(i * 45 * Math.PI/180) * 60}
          r="3"
          fill="#FFD700"
        >
          <animate 
            attributeName="r"
            values="3;1;3"
            dur="1s"
            begin={`${i * 0.15}s`}
            repeatCount="indefinite"
          />
          <animate 
            attributeName="opacity"
            values="1;0;1"
            dur="1s"
            begin={`${i * 0.15}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      
      {/* Additional lightning branches */}
      <path 
        d="M240,180 L245,190 L242,190 L250,210 L248,210 L255,230 L258,225 L257,225 L250,210 L252,210 L245,190 L247,190 Z" 
        fill="#FFED99"
        stroke="#FAB045"
        strokeWidth="2"
        opacity="0.7"
      >
        <animate 
          attributeName="opacity"
          values="0.7;0;0.7"
          dur="2s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </path>
      
      <path 
        d="M260,200 L265,215 L262,215 L270,235 L268,235 L275,255 L278,250 L277,250 L270,235 L272,235 L265,215 L267,215 Z" 
        fill="#FFED99"
        stroke="#FAB045"
        strokeWidth="2"
        opacity="0.7"
      >
        <animate 
          attributeName="opacity"
          values="0.7;0;0.7"
          dur="2s"
          begin="0.6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export default LightningAnimation