import React from 'react';
import { motion } from 'framer-motion';

// --- Icons ---
const IconSparkles = () => (
  <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 10v4m-2-2l2-2m4 4l2-2m6 2l-2-2m2 2l-2-2m0 6l2 2m-2-2l2 2m-6-6h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
  </svg>
);

const IconUsers = () => (
  <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconSpeed = () => (
  <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconCode = () => (
  <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const IconSupport = () => (
  <svg className="w-8 h-8 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconAnalytics = () => (
  <svg className="w-8 h-8 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export default function WhyWorkWithUs() {
  const gridItems = [
    { 
      colSpan: 'md:col-span-2', 
      rowSpan: 'md:row-span-2', 
      title: "Cut Development Time by 40%", 
      desc: "Our pre-built components and AI-assisted coding features allow you to launch MVPs in days, not months.",
      img: "https://images.unsplash.com/photo-1531403009284-440f58651934?q=80&w=2564&auto=format&fit=crop",
      accent: "bg-indigo-500"
    },
    { 
      colSpan: 'md:col-span-1', 
      rowSpan: 'md:row-span-1', 
      title: "Team Collaboration", 
      desc: "Built for teams. Real-time sync, role-based access, and seamless integration with your favorite tools.",
      icon: <IconUsers />
    },
    { 
      colSpan: 'md:col-span-1', 
      rowSpan: 'md:row-span-1', 
      title: "Lightning Fast", 
      desc: "Optimized performance ensures your dashboard loads instantly, keeping your workflow uninterrupted.",
      icon: <IconSpeed />
    },
    { 
      colSpan: 'md:col-span-1', 
      rowSpan: 'md:row-span-1', 
      title: "Developer Friendly", 
      desc: "Open architecture with extensive API documentation. Extend functionality with your own plugins.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14ee0c4?q=80&w=2564&auto=format&fit=crop",
      accent: "bg-cyan-500",
      icon: <IconCode />
    },
    { 
      colSpan: 'md:col-span-2', 
      rowSpan: 'md:row-span-1', 
      title: "Deep Analytics", 
      desc: "Gain insights into user behavior with our robust tracking and reporting dashboard.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f73?q=80&w=2670&auto=format&fit=crop",
      accent: "bg-violet-500",
      icon: <IconAnalytics />
    },
    
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* 2. Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V0h4V2h-4zM22 40v-4H20v4H16v2h4v4h2v-4h4v-2H22zm0-14v-4H20v4H16v2h4v4h2v-4h4v-2H22z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <div className="container mx-auto px-6">
        {/* 3. Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 font-medium text-sm tracking-wide uppercase mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Platform Advantages
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Why work with us?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            We provide the tools and environment you need to build, scale, and succeed without friction.
          </motion.p>
        </div>

        {/* 4. Optimized Bento Grid */}
        <motion.div 
          // No initial/animate on parent. Grid renders statically.
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          // Optional: If you want the whole grid to fade in once:
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 0.6 }}
        >
          {gridItems.map((item, idx) => (
            <motion.div
              key={idx}
              // Animation triggers only when scrolled into view
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: 0.05 * idx, 
                duration: 0.5, 
                type: "spring", 
                stiffness: 100,
                damping: 20 
              }}
              className={`
                relative group rounded-[24px] p-8 overflow-hidden 
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:shadow-indigo-900/20
                flex flex-col justify-between min-h-[260px]
                border border-white/5 hover:scale-[1.02]
                hover:border-white/15 hover:bg-white/[0.03]
                ${item.colSpan} ${item.rowSpan}
              `}
            >
              {/* Background Layer 1: Image (Optional) */}
              {item.img && (
                <div className="absolute inset-0 z-0">
                 
                  {/* Gradient Mask for Text Readability */}
                  <div className={`absolute inset-0 bg-gradient-to-b opacity-70 ${item.accent || 'from-indigo-500/20'} to-slate-950/95 mix-blend-overlay`} />
                </div>
              )}

              {/* Solid Background Layer 2 (for non-image cards) */}
              {!item.img && (
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/20" />
              )}

              {/* Content Layer */}
              <div className="relative z-10 h-full flex flex-col h-full">
                {/* Icon Container */}
                {/* Note: Removed initial/whileInView from icons so they appear immediately */}
                {item.icon && (
                  <div className="mb-5 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:bg-white/10 group-hover:scale-100 group-hover:-translate-y-1">
                    {item.icon}
                  </div>
                )}
                
                {/* Text Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className={`text-xl md:text-2xl font-bold text-white mb-3 leading-tight ${item.rowSpan.includes('2') ? 'md:text-3xl' : ''}`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light flex-grow">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Elements */}
                {/* Animated border glow on hover */}
                {/* <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/20 rounded-[24px] transition-all duration-500 pointer-events-none" /> */}
                
                {/* Random Floating Blob for visual interest */}
                {/* <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" /> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}