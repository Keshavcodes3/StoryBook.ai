import React from 'react';
import Navbar from '../../Home/Components/Navbar';
import { Sparkles, BrainCircuit, Type, FileHeart, Palette, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const featuresList = [
        { icon: BrainCircuit, title: "Context-Aware AI", desc: "Our engine understands your story arc, keeping characters and plotlines consistent." },
        { icon: Sparkles, title: "Tone Matching", desc: "Seamlessly adapt the AI's writing style to match your unique authorial voice." },
        { icon: Wand2, title: "Auto-Completion", desc: "Stuck on a paragraph? Let the AI suggest the next perfect sentence." },
        { icon: Palette, title: "Mood & Vibe Settings", desc: "Dial in the exact atmosphere, from dark fantasy to contemporary romance." },
        { icon: FileHeart, title: "Poetry Generation", desc: "Rhyming schemes, meter, and lyrical prose crafted beautifully." },
        { icon: Type, title: "Advanced Formatting", desc: "Export to standard manuscript formats automatically." }
    ];

    return (
        <div className="min-h-screen bg-[#FAFAFE] text-[#110E2C] font-sans">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-20">
                <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center mb-20">
                    <h1 className="text-5xl font-extrabold mb-6">Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">Features</span></h1>
                    <p className="text-[#6E6B85] text-lg max-w-2xl mx-auto">Everything you need to write better, faster, and more creatively.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresList.map((feat, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{opacity:0, y:20}}
                            animate={{opacity:1, y:0}}
                            transition={{delay: idx * 0.1}}
                            className="bg-white p-8 rounded-3xl border border-purple-100/60 shadow-lg shadow-purple-500/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
                                <feat.icon className="w-6 h-6 text-violet-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                            <p className="text-[#6E6B85] leading-relaxed">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
