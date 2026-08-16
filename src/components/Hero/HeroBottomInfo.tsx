import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown } from 'lucide-react';

export const HeroBottomInfo: React.FC = () => {
  const { t } = useTranslation();

  const navVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  };

  return (
    <motion.footer 
      variants={navVariants}
      className="relative md:absolute md:bottom-8 left-0 w-full md:px-10 flex flex-col md:flex-row justify-between items-end z-40"
    >
      {/* Sections Data Removed */}
      <div className="flex flex-col md:flex-row flex-1 justify-around px-4 md:px-10 lg:px-20 w-full mb-4">
      </div>

      {/* Scroll Indicator */}
      <div className="flex flex-col items-center ml-auto">
        <span 
          className="text-white/60 tracking-[0.3em] text-[10px] uppercase font-[300] hidden md:block"
          style={{ writingMode: 'vertical-rl' }}
        >
          {t('nav.scroll')}
        </span>
        <span 
          className="text-white/60 tracking-[0.3em] text-[10px] uppercase font-[300] md:hidden mb-2"
        >
          {t('nav.scroll')}
        </span>
        <motion.div 
          className="w-px h-12 md:h-16 bg-gradient-to-b from-white/60 to-transparent mt-2"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={12} strokeWidth={2} className="text-[#0066FF]" />
        </motion.div>
      </div>
    </motion.footer>
  );
};
