import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, role, index }) => (
  <motion.div
    key={index}
    // Animation triggers when scrolled into view
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    className="relative w-[300px] flex-shrink-0 flex flex-col justify-between bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-slate-800/90 hover:border-indigo-500/40 transition-all duration-500 shadow-xl group z-10"
  >
    {/* Top Decorative Icon */}
    <div className="absolute top-6 left-6 text-indigo-400/20 group-hover:text-indigo-400/50 transition-colors duration-500 pointer-events-none">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H19.017C21.7642 5 24.017 7.25278 24.017 10V15C24.017 17.7572 21.7642 20 19.017 20H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H10.0166C12.7639 5 15.0166 7.25278 15.0166 10V15C15.0166 17.7572 12.7639 20 10.0166 20H7.0166V21H5.0166Z" />
      </svg>
    </div>

    {/* Content */}
    <div className="relative z-10 flex-grow flex flex-col justify-center pt-6">
      <p className="text-slate-300 font-light leading-relaxed text-sm mb-6 group-hover:text-slate-200 transition-colors duration-500">
        "{quote}"
      </p>
      <div className="w-10 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    {/* Footer */}
    <div className="relative z-10 pt-6 mt-2 flex items-center gap-3">
      <div className="h-9 w-9 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 text-xs font-bold shrink-0 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
        {author.charAt(0)}
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-xs leading-tight tracking-wide">{author}</span>
        <span className="text-indigo-400 text-[10px] uppercase font-bold tracking-widest leading-none opacity-80">{role}</span>
      </div>
    </div>
  </motion.div>
);

const data = [
  { quote: "This platform completely transformed how our team ships code. The AI assistance is not just a gimmick, it's a real productivity multiplier.", author: "Elena Fisher", role: "CTO @ TechFlow" },
  { quote: "The attention to detail in the design system is unmatched. We've saved weeks of design time by simply plugging into their components.", author: "Marcus Chen", role: "Senior UX Designer" },
  { quote: "Security was our biggest concern, and the enterprise-grade encryption they provide gives us the peace of mind to scale globally.", author: "Sarah Jenkins", role: "Product Lead @ SecureNet" },
  { quote: "I've used dozens of developer tools, but the developer experience here is simply the best. Fast, responsive, and intuitive.", author: "David Ross", role: "Full Stack Engineer" },
  { quote: "Customer support is incredibly responsive. They didn't just give us a canned response; they actually solved our integration issue within minutes.", author: "Priya Patel", role: "Lead Developer" },
  { quote: "We integrated with their API in less than an hour. The documentation is clear, and the SDKs are incredibly well maintained.", author: "James Wilson", role: "Engineering Manager" },
  { quote: "The performance improvements we saw after switching to their platform were immediate. Our load times dropped by 40%!", author: "Linda Gomez", role: "DevOps Engineer" },
  { quote: "The collaborative features have changed how our remote team works together. It's like we're all in the same room, even when we're not.", author: "Tom Lee", role: "Team Lead" },
  { quote: "The pricing is transparent and fair. We were able to scale our usage without worrying about unexpected costs, which is a huge relief.", author: "Emily Davis", role: "Finance Director" },
  { quote: "The community around this platform is fantastic. The forums are active, and the team is always engaging with users to gather feedback.", author: "Carlos Martinez", role: "Community Manager" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Header */}
      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl text-center font-bold text-white mb-4 tracking-tight"
        >
          Loved by developers <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400">worldwide</span>
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm font-light leading-relaxed">
          Join thousands of developers building the future with our platform.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden bg-slate-900/30 backdrop-blur-[2px] border-y border-white/5">
  
  <motion.div
    className="flex w-max"
    animate={{ x: "-50%" }}
    transition={{
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    }}
  >
    
    {/* First Set */}
    <div className="flex shrink-0 gap-8">
      {data.map((item, idx) => (
        <TestimonialCard
          key={`first-${idx}`}
          {...item}
          index={idx}
        />
      ))}
    </div>

    {/* Second Set */}
    <div className="flex ml-5 shrink-0 gap-8">
      {data.map((item, idx) => (
        <TestimonialCard
          key={`second-${idx}`}
          {...item}
          index={idx}
        />
      ))}
    </div>

  </motion.div>
</div>
    </section>
  );
}
