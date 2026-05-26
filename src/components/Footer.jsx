import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" },
      { name: "Integrations", href: "#integrations" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
    ]
  };

  return (
    <footer className="bg-slate-950 relative pt-20 pb-10 border-t border-white/10 overflow-hidden">
      
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-indigo-900/20 to-slate-950 pointer-events-none" />
      {/* <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-violet-900/20 to-slate-950 pointer-events-none" /> */}

      {/* Top Grid Section */}
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">Lumina</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Empowering developers to build the next generation of digital products with speed, security, and scale.
            </p>
            
            {/* Newsletter */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
              <div className="relative flex items-center bg-slate-900/80 border border-white/10 rounded-lg p-3 pl-4">
                <svg className="w-5 h-5 text-slate-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-slate-500"
                />
                <button className="bg-white text-indigo-900 text-xs font-bold px-4 py-2 rounded-md hover:bg-indigo-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 relative z-10 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Lumina. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {[
              { name: "Twitter", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3 4.48 4.48 0 0 0-7.9 3A21.64 21.64 0 0 0 3 13.19a8.55 8.55 0 0 0 1.53 5 4.48 4.48 0 0 0 3 1.3 1 1 0 0 1 1 1 1.2 1.2 0 0 1-1.2 1.2 1.2 1.2 0 0 1-1.2-1.2v-.78a4.48 4.48 0 0 0-1.8 5.3A11.9 11.9 0 0 0 10 23a11.9 11.9 0 0 0 8.2-3.1 4.48 4.48 0 0 0 5.3-1.8v.78a1.2 1.2 0 0 1-1.2 1.2 1.2 1.2 0 0 1-1.2-1.2 1 1 0 0 1 1-1 4.48 4.48 0 0 0 3-1.3 4.48 4.48 0 0 0 5-6.46 4.48 4.48 0 0 0-3-1.3 10.9 10.9 0 0 1-3.14-1.53z" }
            ].map((social, i) => (
              <a key={i} href="#" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110 duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}