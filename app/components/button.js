"use client"

import React from 'react'
import { Button } from "@/components/ui/button"

export default function CyberpunkButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center  bg-black bg-opacity-90 bg-[url('/cyberpunk-grid.png')] bg-center p-2">
      <Button 
        className="
          w-48 h-16 
          bg-cyan-500 hover:bg-cyan-600 
          text-black font-bold py-2 px-4 
          border-b-4 border-cyan-700 hover:border-cyan-500 
          rounded-none 
          transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] 
          transition-all duration-200
          font-['Share_Tech_Mono',monospace] text-lg
          relative overflow-hidden
          group
        "
      >
        <span className="relative z-10">REGISTER</span>
        <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-200"></span>
      </Button>

      <Button 
        variant="outline"
        className="
          w-48 h-16 
          bg-transparent hover:bg-pink-500 
          text-pink-500 hover:text-white 
          font-bold py-2 px-4
          border-2 border-pink-500 hover:border-transparent 
          rounded-none 
          transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] 
          transition-all duration-200
          font-['Orbitron',sans-serif] text-lg
          relative overflow-hidden
          group
        "
      >
        <span className="relative z-10">JOIN COMMUNITY</span>
        <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-200"></span>
      </Button>
    </div>
  )
}

