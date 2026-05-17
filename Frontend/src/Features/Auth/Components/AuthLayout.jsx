/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <section className="relative min-h-screen bg-[#030014] flex flex-col md:flex-row items-center justify-center px-4 py-10 md:py-20 gap-10 md:gap-20 overflow-hidden">
      {/* Background Glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none size-140 bg-violet-600/20 rounded-full blur-[150px] md:blur-[200px]"></div>

      {/* Left Content - Hero Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left z-10"
      >
        <div className="flex items-center p-1.5 rounded-full border border-violet-900/50 text-xs w-fit mx-auto md:mx-0 bg-violet-950/20 backdrop-blur-md">
          <div className="flex items-center">
            <img className="size-7 rounded-full border border-violet-900" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="User 1" />
            <img className="size-7 rounded-full border border-violet-900 -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="User 2" />
            <img className="size-7 rounded-full border border-violet-900 -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="User 3" />
          </div>
          <p className="-translate-x-2 text-xs text-slate-300 pr-2 font-medium">Join 1m+ storytellers worldwide</p>
        </div>

        <h1 className="font-semibold text-4xl md:text-6xl/tight bg-linear-to-r from-white via-white to-violet-400 bg-clip-text text-transparent max-w-[500px] mt-6 tracking-tight">
          {title}
        </h1>
        <p className="text-base/relaxed text-white/60 max-w-[380px] mt-6 mx-auto md:mx-0">
          {subtitle}
        </p>
      </motion.div>

      {/* Right Content - Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AuthLayout;
