import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HeroPortrait } from './HeroPortrait';

export const HeroTitle: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const { t } = useTranslation();

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 30 : 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const desktopClasses = "absolute top-1/2 -translate-y-1/2 right-[2vw] lg:right-[2vw] xl:right-[4vw] z-30 flex flex-col items-start text-left w-[42vw] max-w-[700px] pointer-events-none hidden md:flex";
  const mobileClasses = "flex flex-col items-start text-left w-full z-30 md:hidden mt-8 px-6 max-w-[90vw]";

  return (
    <div className={isMobile ? mobileClasses : desktopClasses}>
      {/* The main name */}
      <motion.h1 
        variants={fadeUpVariants}
        className="font-cinematic text-white leading-[0.85] pointer-events-auto font-[900]"
        style={{ 
          fontSize: isMobile ? 'clamp(4rem, 15vw, 6rem)' : 'clamp(5rem, 10vw, 11rem)', 
          letterSpacing: '-0.03em',
          textShadow: '3px 0 15px rgba(229, 9, 20, 0.4), -3px 0 15px rgba(0, 102, 255, 0.4), 0 20px 40px rgba(0,0,0,0.4)',
          marginBottom: isMobile ? '20px' : '35px'
        }}
      >
        ANANDAN
      </motion.h1>

      {/* Subtext */}
      <motion.div 
        variants={fadeUpVariants}
        className={`flex flex-col font-cinematic leading-[1.1] pointer-events-auto items-start font-[700] w-full`}
        style={{ 
          letterSpacing: '0.04em',
          marginBottom: isMobile ? '16px' : '45px' 
        }}
      >
        <span className="text-[#E50914] whitespace-nowrap" style={{ fontSize: isMobile ? '1.5rem' : 'clamp(1.8rem, 3.2vw, 2.8rem)' }}>{t('hero.title1')}</span>
        <span className="text-[#0066FF] font-serif italic my-1" style={{ fontSize: isMobile ? '1.25rem' : 'clamp(1.4rem, 2vw, 1.8rem)' }}>{t('hero.title2')}</span>
        <span className="text-white whitespace-nowrap" style={{ fontSize: isMobile ? '1.5rem' : 'clamp(1.8rem, 3.2vw, 2.8rem)' }}>{t('hero.title3')}</span>
      </motion.div>

      {/* Portrait injected for precise mobile stacking */}
      {isMobile && (
        <div className="w-full max-w-sm mx-auto h-[350px] mb-6 mt-2 z-20">
          <HeroPortrait isMobileFlow={true} />
        </div>
      )}

      {/* Tagline & Info Container aligned left */}
      <motion.div 
        variants={fadeUpVariants}
        className="flex flex-col font-sans pointer-events-auto items-start text-left w-full"
      >
        <span className="text-[rgba(255,255,255,0.75)] uppercase tracking-wider font-[400] text-[11px] md:text-[13px] lg:text-[14px]" style={{ marginBottom: isMobile ? '20px' : '40px' }}>
          {t('hero.creativeThinker')}
        </span>

        <div className="flex flex-col items-start text-left" style={{ marginBottom: isMobile ? '24px' : '45px' }}>
          <span className="font-[500] text-[12px] md:text-[13px] lg:text-[14px] text-white/90 uppercase tracking-wide">{t('hero.master')}</span>
          <span className="font-[400] text-[11px] md:text-[12px] lg:text-[13px] text-white/60 mt-1 uppercase tracking-wider">{t('hero.school')}</span>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div 
        variants={fadeUpVariants}
        className="flex flex-col md:flex-row gap-4 pointer-events-auto w-full items-start"
      >
        <button onClick={() => document.getElementById('web-section')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 border border-[#E50914] text-white hover:bg-[#E50914] transition-colors duration-300 font-sans tracking-widest text-[12px] md:text-[13px] uppercase font-[500] flex items-center justify-center gap-2 group whitespace-nowrap">
          {t('hero.enterWeb').replace('→', '')} 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
        <button onClick={() => document.getElementById('powers-section')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 border border-[#0066FF] text-white hover:bg-[#0066FF] transition-colors duration-300 font-sans tracking-widest text-[12px] md:text-[13px] uppercase font-[500] flex items-center justify-center gap-2 group whitespace-nowrap">
          {t('hero.discoverPowers').replace('↓', '')} 
          <span className="group-hover:translate-y-1 transition-transform">↓</span>
        </button>
      </motion.div>
    </div>
  );
};
