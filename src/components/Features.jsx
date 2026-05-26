import React from 'react';
import { motion } from 'framer-motion';

function ShieldIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none"
    >
      <path 
        d="M12 2L4 7V12C4 16 11 22 12 22C13 22 20 16 20 12V7L12 2Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}
export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 0.1s between each card
        delayChildren: 0.2,   // Wait 0.2s after section load before starting cards
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-indigo-400 font-medium text-sm tracking-wide uppercase">Security First</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We build enterprise-grade security solutions designed for scale and reliability.
          </p>
        </div>

        {/* FIXED: Wrapped grid in motion.div with containerVariants */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Feature Cards */}
{[
  { 
    icon: <ShieldIcon className="w-10 h-10 text-indigo-500" />, 
    title: "Encrypted Data", 
    desc: "End-to-end encryption for all user data at rest and in transit." 
  },
  { 
    icon: <ShieldIcon className="w-10 h-10 text-indigo-500" />, 
    title: "Real-time Monitoring", 
    desc: "24/7 threat detection and automated response protocols active." 
  },
  { 
    icon: <ShieldIcon className="w-10 h-10 text-indigo-500" />, 
    title: "Compliance Ready", 
    desc: "Pre-built templates for SOC2, HIPAA, and GDPR compliance." 
  },
  // ... other items
].map((item, index) => (
  <motion.div
    key={index}
    variants={itemVariants}
    className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-colors group relative overflow-hidden"
  >
    <div className="mb-6 relative z-10">{item.icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3 relative z-10">{item.title}</h3>
    <p className="text-slate-400 relative z-10">{item.desc}</p>
    
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </motion.div>
))}
        </motion.div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-indigo-900/20 hover:shadow-indigo-900/40 hover:-translate-y-1"
          >
            <span>Get a Security Audit</span>
            {/* <ArrowRight className="w-5 h-5" /> */}
          </a>
        </div>
      </div>
    </section>
  );
}