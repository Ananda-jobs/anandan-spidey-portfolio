import React from 'react';
import { motion } from 'framer-motion';

export const PowersNav: React.FC = () => {
  const scrollToNext = () => {
    document.getElementById('missions-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex flex-col items-center justify-center cursor-pointer group"
      onClick={scrollToNext}
    >
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mb-3 text-[#F5F5F5] group-hover:text-[#E21A22] transition-colors"
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
      <div className="font-bebas text-[14px] text-[#F5F5F5] tracking-[0.3em]" style={{ writingMode: 'vertical-rl' }}>
        SCROLL
      </div>
    </motion.div>
  );
};
