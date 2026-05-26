import React from 'react';
import { motion } from 'framer-motion';

// --- New Icons for Pricing/Tech ---
const IconCheck = () => (
    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const IconX = () => (
    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const IconServer = () => (
    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
);

export default function PricingSection() {
    const plans = [
        {
            name: "Starter",
            price: "$0",
            period: "/mo",
            desc: "Perfect for individuals and side projects.",
            features: ["1 User", "10 Projects", "Community Support", "Basic Analytics"],
            color: "border-indigo-500/30 hover:border-indigo-500/60 bg-indigo-900/10"
        },
        {
            name: "Pro",
            price: "$29",
            period: "/mo",
            desc: "For growing teams needing more power.",
            highlight: true,
            features: ["5 Users", "Unlimited Projects", "Priority Support", "Advanced Analytics", "SSO Integration"],
            color: "border-violet-500/50 hover:border-violet-500/70 bg-violet-900/10"
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            desc: "Custom solutions for large organizations.",
            features: ["Unlimited Users", "Unlimited Projects", "24/7 Dedicated Support", "Audit Logs", "Custom Contracts"],
            color: "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-900/10"
        }
    ];

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 blur-[200px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-300 font-medium text-sm tracking-wide uppercase mb-6 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                        </span>
                        Choose your plan
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Flexible Pricing for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">Every Team Size</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        No hidden fees. Cancel anytime. Start building with our free tier today.
                    </motion.p>
                </div>

                {/* Bento Pricing Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{
                                delay: 0.1 * idx,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 100
                            }}
                            className={`
                relative group rounded-3xl p-8 border transition-all duration-500 ease-out
                flex flex-col justify-between min-h-[300px]
                ${plan.color}
                ${plan.highlight ? 'shadow-[0_0_40px_rgba(139,92,246,0.15)] scale-105 z-10' : 'hover:scale-[1.02] '}
              `}
                        >
                            {/* Decorative Glow for Highlight */}
                            {plan.highlight && (
                                <div className="absolute inset-0 rounded-3xl ring-1 ring-violet-500/50 pointer-events-none animate-pulse" />
                            )}

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                                        <p className="text-sm text-slate-400">{plan.desc}</p>
                                    </div>
                                    {plan.highlight && (
                                        <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold border border-violet-500/30">
                                            Most Popular
                                        </span>
                                    )}
                                </div>

                                <div className="text-center mb-8">
                                    <span className="text-4xl font-bold text-white mb-2 tracking-tight">
                                        {plan.price} <span className="text-lg text-slate-500 font-normal">{plan.period}</span>
                                    </span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                            <div className={`p-1 rounded-full ${plan.highlight ? 'bg-violet-500/20' : 'bg-white/5'}`}>
                                                {/* Determine which icon to show */}
                                                {feature.includes('Unlimited') || feature.includes('Priority') ? (
                                                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`
                    w-full py-4 rounded-xl font-bold text-white transition-all duration-300
                    ${plan.highlight
                                            ? 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:shadow-lg hover:shadow-violet-500/25 border-none'
                                            : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'}
                  `}
                                >
                                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tech Stack Section (Bonus Bento Item) */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 flex items-center justify-center gap-3 hover:border-white/10 transition-colors"
                    >
                        <IconServer />
                        <span className="text-slate-300 font-medium text-lg">AWS</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.45, duration: 0.5 }}
                        className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 flex items-center justify-center gap-3 hover:border-white/10 transition-colors"
                    >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
                        <span className="text-slate-300 font-medium text-lg">React</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 flex items-center justify-center gap-3 hover:border-white/10 transition-colors"
                    >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
                        <span className="text-slate-300 font-medium text-lg">TypeScript</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.55, duration: 0.5 }}
                        className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 flex items-center justify-center gap-3 hover:border-white/10 transition-colors"
                    >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
                        <span className="text-slate-300 font-medium text-lg">Next.js</span>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}