import React from 'react'
import Image from 'next/image'
import ParallaxBackground from './components/parallax';
import CyberpunkEventCountdownTimer from './components/countdown';
import CyberpunkButtons from './components/button';
import About from './section/aboutus';
const Home = () => {
  return (
   
  
    <div className="bg-black text-neonYellow flex flex-col overflow-hidden text-opacity  min-h-screen">
      <ParallaxBackground />
      
       
      <div className='flex flex-col items-center p-2 border-4 mt-[] border-cyan-600 shadow-lg shadow-cyan-700 border-lg mx-10 justify-space-between'> 
      <h1 className='text-transparent text-center font-serif text-8xl my-10 bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600'>
        Welcome to AceHacks!
      </h1>
      
      <Image src={'/logo.png'} alt={""}  width={'600'} height={'400'} className='mx-auto' />
      <h2 className='text-4xl text-center font-serif font-style:italic  text-pink-600'>See you on 18th February</h2>
      <CyberpunkEventCountdownTimer />
      <CyberpunkButtons />
      <About />
      </div>
    </div>
    
  )
}

export default Home
