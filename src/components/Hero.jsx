import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } // Elements fade in one after another
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } // Bezier for smooth pop
    }
  };

  return (
    <section className="relative min-h-screen pt-24 md:pt-0 flex items-center justify-between overflow-hidden  text-white font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Background Effects */}
      

      <motion.div 
        className="container mx-auto px-6 relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Column: Text Content */}
        <motion.div 
          className=" text-center  mb-12 lg:mb-0"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6 backdrop-blur-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            v2.0 is now live. See what's new.
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Design the future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              without limits.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Build faster with our next-generation platform. Unlock unlimited creativity with AI-powered tools and seamless collaboration for your entire team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]"
            >
              Get Started Free
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, x: [0, 3, 0] }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-colors text-slate-300"
            >
              Watch Demo
            </motion.button>
          </div>
          
          <motion.p 
            className="mt-8 text-sm text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-slate-400">No credit card required for the 14-day trial.</span>
          </motion.p>
        </motion.div>

        {/* Right Column: Visual/Abstract Shape */}
                
        <motion.div 
          // Responsive height: minimum 400px, grows up to 70vh on large screens
          className="lg:w-1/3  hidden items-center justify-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Abstract Illustration Container */}
          {/* 
             max-w-[600px] ensures it doesn't get too thin on smaller laptops. 
             aspect-video maintains a good ratio, or aspect-square if you prefer a square.
          */}
          <div className="relative w-full h-full min-h-[400px] max-w-[600px] mx-auto p-2">
            
            {/* Main Image Container - The "Cutout" */}
            <div className="absolute inset-0  backdrop-blur-xl rounded-3xl  border-white/10 shadow-2xl  group">
                
              {/* Background Image */}
              
              
              {/* Image Overlay Gradient - Ensures text readability */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent mix-blend-overlay pointer-events-none"></div> */}

              {/* Floating Card 1: Analytics */}
              <motion.div 
                layoutId="floating-card"
                className="absolute top-1/4 -left-4 lg:-left-10 md:top-1/5 p-6 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl max-w-xs z-20 cursor-default"
                initial={{ y: 60, opacity: 0, x: -10 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">

                  <div className="flex flex-col">
                    <div className="text-white font-bold text-sm leading-tight">Analytics Active</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Last sync: 2m ago</div>
                  </div>
                </div>
                <div className="h-2 w-full bg-slate-700/50 rounded-full mb-2 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full w-[75%] shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-indigo-300 font-medium">Optimal Performance</span>
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
              </motion.div>

              {/* Floating Card 2: Growth */}
              <motion.div 
                layoutId="floating-card-2"
                className="absolute top-1/3 -right-4 lg:-right-10 md:top-1/4 p-6 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl max-w-xs z-20 cursor-default"
                initial={{ x: 60, opacity: 0, y: 20 }}
                animate={{ x: 0, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.5 }}
              >
                <div className="flex items-center justify-between mb-2">
                    <div className="text-4xl animate-bounce-slow">🚀</div>
                    <div className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2 py-1 rounded-lg border border-emerald-500/20">+128%</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-white font-bold text-lg leading-none">Growth in Conversion</div>
                    <div className="text-xs text-slate-400 mt-1">Since last month</div>
                </div>
              </motion.div>
              
             
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Trusted By Section (Bottom) */}
      

    </section>
  );
};

export default HeroSection;