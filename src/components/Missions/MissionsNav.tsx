import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Menu } from 'lucide-react';

export const MissionsNav: React.FC = () => {
  const navVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  };

  return (
    <motion.nav 
      variants={navVariants}
      className="absolute top-[35px] right-[35px] z-40 flex items-center text-[11px] md:text-[12px] lg:text-[13px] tracking-[1.5px] uppercase font-[500] text-white"
    >
      <div className="hidden md:flex items-center">
        {['Origin', 'Powers', 'Missions', 'The Web', 'Contact'].map((item, index) => {
          const isActive = index === 2; // Missions is active
          return (
            <React.Fragment key={item}>
              <a 
                href={`#${item.toLowerCase().replace(' ', '-')}-section`} 
                className={`${isActive ? 'text-[#E50914]' : 'text-white hover:text-[#0066FF]'} transition-colors duration-300 px-2 lg:px-[14px] font-[500]`}
              >
                {item}
              </a>
              {/* The vertical separator | */}
              <span className="text-white/40 font-[300] px-1">|</span>
            </React.Fragment>
          );
        })}
      </div>
      <button className="flex items-center justify-center p-2 hover:bg-white/10 rounded-full transition-colors ml-2">
        <Menu size={20} strokeWidth={1.5} />
      </button>
    </motion.nav>
  );
};
