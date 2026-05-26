import { useState } from 'react'

import { FloatingNav } from './components/ui/floating-navbar'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Hero from './components/Hero' 
import Features from './components/Features'
import WhyWorkWithUs from './components/Whyworkwithus'
import PricingSection from './components/PricingSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
function App() {


  return (
    <>
    <main className='bg-slate-950'>  
     <section className='container  mx-auto '>
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Top Mesh Gradient */}
        <div className="absolute top-[30%] left-[40%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px]" />
        {/* <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/20 rounded-full blur-[120px]" /> */}
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      <Navbar2/>
      {/* <FloatingNav navItems={[{ name: "Home", link: "/" }, { name: "About", link: "/about" }]} /> */}
      
      <Hero/>
      
      <Features/>
      <WhyWorkWithUs/>
      <PricingSection/>
      
     </section>
      <Testimonials/>
      <Footer />
      
    </main>
    </>
  )
}

export default App
