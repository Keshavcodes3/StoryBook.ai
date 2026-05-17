/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Feather } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 bg-[#0B0A11]/80 backdrop-blur-md border-b border-white/5 px-7"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Feather className="text-violet-500 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-bold text-xl tracking-tight text-white">StoryBook.ai</span>
        </Link>



        <div className="flex items-center gap-6">
          <Link to="/login" className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300">
            Login
          </Link>
          <Link
            to="/register"
            className="text-sm font-medium bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-[1.02]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
