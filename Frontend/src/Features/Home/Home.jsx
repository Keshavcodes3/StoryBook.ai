/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Feather, Star } from 'lucide-react';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#0B0A11] text-white font-sans selection:bg-violet-500/30">
            {/* Navbar */}
            <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <Feather className="text-violet-500 w-6 h-6 group-hover:rotate-12 transition-transform" />
                    <span className="font-bold text-xl tracking-tight">StoryBook<span className="text-violet-500">.ai</span></span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                    <Link to="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link to="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <Link to="#community" className="hover:text-white transition-colors">Community</Link>
                    <Link to="#blog" className="hover:text-white transition-colors">Blog</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="text-sm font-medium bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-full transition-colors shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="container mx-auto px-6 pt-12 pb-20 lg:pt-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                            Where your <br className="hidden lg:block" />
                            stories come alive.
                        </h1>
                        <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
                            AI-powered stories, poems and creativity tools to help you express, reflect and evolve.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-16 lg:mb-24">
                            <Link
                                to="/register"
                                className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                            >
                                Start Writing
                            </Link>
                            <Link
                                to="#explore"
                                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-3.5 rounded-full transition-colors"
                            >
                                Explore
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-3xl font-bold mb-1">50K+</h3>
                                <p className="text-sm text-white/50">Writers</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-1">200K+</h3>
                                <p className="text-sm text-white/50">Stories Created</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-1">1M+</h3>
                                <p className="text-sm text-white/50">Poems Generated</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-1 mb-1">
                                    <h3 className="text-3xl font-bold">4.9</h3>
                                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                </div>
                                <p className="text-sm text-white/50">Loved by writers</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content / Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-violet-600/20 blur-[100px] rounded-full" />

                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/5] lg:aspect-auto lg:h-[600px] flex items-center justify-center">
                            <img
                                src="/hero_illustration.png"
                                alt="Writer at night illustration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
};

export default Home;
