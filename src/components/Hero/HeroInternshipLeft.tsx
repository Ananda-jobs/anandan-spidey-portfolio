import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.3, ease: "easeOut" } }
};

export const HeroInternshipLeft: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.div 
      variants={fadeUpVariants}
      className="hidden lg:flex absolute z-30 flex-col items-start text-left pointer-events-none"
      style={{ left: '8vw', top: '50vh', width: '320px' }}
    >
      <span className="font-sans text-[#E50914] text-[16px] xl:text-[18px] tracking-[0.1em] uppercase font-[600] mb-[12px] drop-shadow-md">
        {t('hero.lookingFor')} <br className="hidden md:block"/> {t('hero.internship')}
      </span>
      
      <span className="font-sans text-[rgba(255,255,255,0.7)] text-[11px] xl:text-[12px] tracking-[0.15em] uppercase font-[400] mb-[16px] leading-relaxed drop-shadow-sm">
        {t('hero.internshipDesc')}
      </span>
      
      <span className="font-sans text-[#0066FF] text-[14px] xl:text-[16px] tracking-[0.1em] uppercase font-[500] drop-shadow-md">
        {t('hero.available')}
      </span>
    </motion.div>
  );
};
