/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LiveWorkspacePreview from './LiveWorkspacePreview';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-24 relative px-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Text Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* Pre-header badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block py-1.5 px-3 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-wide">
              v2.0 Generation Pipeline Launched
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-white">
            Where your <br className="hidden lg:block" />
            <span className="text-violet-400">stories</span> come alive.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            AI-powered stories, poems and creativity tools to help you express, reflect and evolve.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Link
              to="/register"
              className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:scale-[1.02]"
            >
              Start Writing
            </Link>
            <Link
              to="#explore"
              className="bg-transparent border border-white/20 hover:border-white/40 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02]"
            >
              Explore
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10"
        >
          <LiveWorkspacePreview />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
