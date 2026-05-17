/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const AuthButton = ({ children, onClick, type = "submit", isLoading = false }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className="w-full transition-all duration-200 bg-linear-to-r from-violet-950 to-violet-600 hover:from-violet-600 hover:to-violet-950 text-white font-medium py-3 rounded-full transition-all duration-500 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-violet-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default AuthButton;
