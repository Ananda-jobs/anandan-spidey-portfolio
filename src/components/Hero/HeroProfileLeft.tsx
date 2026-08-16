import React from 'react';
import { motion, type Variants } from 'framer-motion';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

export const HeroProfileLeft: React.FC = () => {
  return (
    <motion.div 
      variants={fadeUpVariants}
      className="hidden lg:flex absolute z-30 flex-col items-start text-left pointer-events-none"
      style={{ left: '8vw', top: '38%', width: '300px' }}
    >
      <div className="flex items-center space-x-3 mb-4">
        <span className="font-cinematic text-white text-[24px] font-[500] leading-none">01</span>
        <span className="font-sans text-[rgba(255,255,255,0.6)] text-[10px] tracking-[0.2em] uppercase font-[300]">/ PROFILE</span>
      </div>

      <h3 className="font-cinematic text-white text-[16px] leading-[1.2] tracking-[0.05em] uppercase font-[500]">
        DIGITAL MARKETING<br/>
        INTERNATIONAL BUSINESS
      </h3>
      
      <span className="font-sans text-[rgba(255,255,255,0.7)] text-[11px] tracking-[0.1em] mt-2 mb-4 uppercase font-[300]">
        STRASBOURG &bull; FRANCE
      </span>

      <div className="w-full h-px bg-white/20 mb-4" />

      <span className="font-sans text-[rgba(255,255,255,0.7)] text-[10px] tracking-[0.15em] uppercase font-[300] mb-1">
        LOOKING FOR
      </span>
      <span className="font-sans text-[#E50914] text-[13px] tracking-[0.1em] uppercase font-[600] mb-2">
        6-MONTH CÉSURE INTERNSHIP
      </span>
      <span className="font-sans text-[#0066FF] text-[11px] tracking-[0.1em] uppercase font-[500] mb-4">
        AVAILABLE IMMEDIATELY
      </span>

      <div className="w-full h-px bg-white/20 mb-4" />

      <span className="font-sans text-[rgba(255,255,255,0.7)] text-[10px] tracking-[0.15em] uppercase font-[300] mb-2">
        CORE POWERS
      </span>
      <ul className="space-y-[4px]">
        {['DIGITAL MARKETING', 'CONTENT CREATION', 'STRATEGY & ANALYSIS', 'AI & DIGITAL TOOLS'].map((skill, idx) => (
          <li key={idx} className="font-sans text-[11px] text-white tracking-[0.1em] uppercase font-[400] flex items-center">
            <span className="w-1 h-1 bg-[#E50914] mr-2" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
