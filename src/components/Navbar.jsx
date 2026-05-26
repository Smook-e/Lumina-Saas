import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "../lib/utils"; // Adjust path based on your project

const navLinks = [
  { 
    name: "Products", 
    items: [
      { name: "Analytics", desc: "Real-time data tracking", href: "#" },
      { name: "Automation", desc: "Workflow optimization", href: "#" },
      { name: "Security", desc: "Enterprise grade protection", href: "#" },
    ] 
  },
  { 
    name: "Resources", 
    items: [
      { name: "Documentation", desc: "Learn how to integrate", href: "#" },
      { name: "Blog", desc: "Latest industry news", href: "#" },
      { name: "Community", desc: "Join our developer forum", href: "#" },
    ] 
  },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
];

export default function NavbarDarkShadow() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      {/* Main Container with the "Ridge/Groove" Shadow Effect */}
      <div className={cn(
        "relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
        "bg-zinc-950 text-zinc-300 border border-zinc-800",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)]",
        "max-w-6xl w-full"
      )}>
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-white cursor-pointer">
          <div className="w-6 h-6 bg-white rounded-sm rotate-45" />
          <span className="text-lg tracking-tight">ACETERNITY</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.items && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={link.href || "#"} 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white flex items-center gap-1",
                  activeDropdown === link.name && "text-white"
                )}
              >
                {link.name}
                {link.items && <ChevronDown size={14} className="opacity-50" />}
              </a>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {link.items && activeDropdown === link.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-4 p-3 rounded-2xl",
                      "bg-zinc-900 border border-zinc-800 shadow-2xl w-64",
                      "shadow-[0_0_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]"
                    )}
                  >
                    {link.items.map((item) => (
                      <a 
                        key={item.name} 
                        href={item.href} 
                        className="flex flex-col p-3 rounded-lg transition-colors hover:bg-zinc-800 group/item"
                      >
                        <span className="text-sm font-medium text-zinc-200 group-hover/item:text-white">
                          {item.name}
                        </span>
                        <span className="text-xs text-zinc-500 group-hover/item:text-zinc-400">
                          {item.desc}
                        </span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className={cn(
            "px-4 py-2 text-sm font-medium text-white rounded-full",
            "bg-zinc-100 text-black hover:bg-white transition-all",
            "shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]",
            "active:scale-95"
          )}>
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-400 p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 p-4 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <a href={link.href || "#"} className="text-zinc-200 font-medium py-2 border-b border-zinc-800">
                    {link.name}
                  </a>
                  {link.items?.map(item => (
                    <a key={item.name} href={item.href} className="pl-4 text-sm text-zinc-500 py-1">
                      {item.name}
                    </a>
                  ))}
                </div>
              ))}
              <button className="w-full py-3 mt-4 rounded-xl bg-white text-black font-bold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}