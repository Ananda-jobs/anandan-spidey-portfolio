import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const HeroNav: React.FC = () => {
  const { t } = useTranslation();
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
        {['powers', 'missions', 'theWeb'].map((item, index, array) => {
          let sectionId = '';
          if (item === 'powers') sectionId = 'powers-section';
          else if (item === 'missions') sectionId = 'missions-section';
          else if (item === 'theWeb') sectionId = 'web-section';

          return (
            <React.Fragment key={item}>
              <a 
                href={`#${sectionId}`} 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[#C7C7C7] hover:text-white transition-colors duration-300 px-2 lg:px-[14px] font-[500]"
              >
                {t(`nav.${item}`)}
              </a>
              {/* The vertical separator | */}
              {index < array.length - 1 && <span className="text-white/40 font-[300] px-1">|</span>}
            </React.Fragment>
          );
        })}
      </div>
    </motion.nav>
  );
};
