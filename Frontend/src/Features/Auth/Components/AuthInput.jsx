/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const AuthInput = ({ label, type = "text", placeholder, value, onChange, name, required = true, icon: Icon }) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-white text-sm font-medium">{label}</label>}
      <div className="relative group">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-violet-500 transition-colors">
            <Icon size={18} />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`w-full bg-violet-500/5 border border-white/10 rounded-lg ${Icon ? 'pl-10' : 'px-4'} py-3 text-white placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default AuthInput;
