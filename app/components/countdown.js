"use client"
import React, { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'

export default function CyberpunkEventCountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set your event date and time here
    const eventDate = new Date("2025-02-18T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 flex items-center justify-center bg-black bg-opacity-90 bg-[url('/cyberpunk-grid.png')] bg-center">
      <Card className="w-full max-w-4xl p-8 bg-black bg-opacity-70 border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.5)]">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-cyan-400 font-['Orbitron',sans-serif] tracking-wider">
          Countdown to Cyber Revolution
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-gray-900 rounded-lg p-4 border border-pink-500 shadow-[0_0_10px_rgba(255,0,255,0.3)]">
              <div className="text-4xl md:text-6xl font-bold text-pink-500 font-['Share_Tech_Mono',monospace]">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-xl md:text-2xl font-semibold text-cyan-400 capitalize font-['Orbitron',sans-serif]">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
