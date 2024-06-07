'use client'

import { useEffect, useState } from 'react'
import Confetti from 'react-dom-confetti'

const DesignPreview = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  useEffect(() => setShowConfetti(true))

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
      >
        <Confetti
          
          config={{
            elementCount: 400,
            spread: 150,
            
          }}
          
          active={showConfetti}
        />
      </div>
    </>
  )
}

export default DesignPreview
