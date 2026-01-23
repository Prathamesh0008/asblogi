// components/LightningLottie.jsx
'use client'
import React from 'react'
import Lottie from 'lottie-react'
import lightningAnimation from '@/public/animations/lightning.json' // You'll need to save the JSON

const LightningLottie = () => {
  return (
    <div className="w-16 h-16">
      <Lottie 
        animationData={lightningAnimation}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default LightningLottie