'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function InputField({
  label = '',
  type = 'text',
  placeholder = '',
  value,
  onChange,
  icon,
  name,
  required = false,
  className = '',
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value?.length > 0;

  return (
    <div className={`relative w-full ${className}`}>
      {label && (
        <motion.label
          initial={false}
          animate={{
            y: isActive ? -20 : 10,
            x: 12,
            scale: isActive ? 0.75 : 1,
            color: isActive ? '#3b82f6' : '#9ca3af',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="absolute z-10 left-3 top-2 origin-[0] pointer-events-none text-sm"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </motion.label>
      )}

      <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition-all bg-white dark:bg-black">
        {icon && <span className="text-gray-500">{icon}</span>}
        <input
          name={name}
          type={type}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          placeholder={isActive ? placeholder : ''}
          className="w-full bg-transparent border-none outline-none placeholder:opacity-0 focus:placeholder:opacity-100 transition text-base"
        />
      </div>
    </div>
  );
}
