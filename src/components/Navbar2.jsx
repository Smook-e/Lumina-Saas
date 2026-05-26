// src/components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Background Blur & Gradient for Glass Effect */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-lg border-b border-white/5"></div>
      
      {/* Floating Nav Content */}
      <div className="relative container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Lumina</span>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.div 
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {['Features', 'Solutions', 'Pricing', 'Docs'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
            >
              {item}
              {/* Hover Underline Animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">
            Sign In
          </a>
          <button className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium backdrop-blur-md transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Get Started
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;