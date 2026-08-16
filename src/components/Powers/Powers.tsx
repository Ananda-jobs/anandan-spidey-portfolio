import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PowersIdentityCard } from './PowersIdentityCard.tsx';
import { PowersModules } from './PowersModules.tsx';
import { PowersExperienceStrip } from './PowersExperienceStrip.tsx';
import { PowersNav } from './PowersNav.tsx';

import { WebTrail } from '../WebTrail.tsx';

export const Powers: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full min-h-[100dvh] h-auto md:h-screen overflow-x-hidden md:overflow-y-auto bg-black">
      {/* Spider-Man Background Image */}
      <img 
        src="/powers-bg-v3.jpg" 
        alt="Spider-Man profile" 
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-75"
      />
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-[1] bg-[rgba(0,0,0,0.75)] pointer-events-none" />
      
      {/* Obscure Watermark Overlay - Stronger to hide ARTIVERSE */}
      <div className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 w-[1200px] h-[250px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.85)_40%,transparent_75%)] pointer-events-none z-[5]" />

      <WebTrail />
      
      {/* Huge Background Number */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 font-bebas text-[80vh] leading-none text-[#5E080D] pointer-events-none select-none z-0"
      >
        02
      </motion.div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full min-h-full flex flex-col justify-between px-4 md:px-12 lg:px-16 py-10 lg:py-16">
        
        {/* Top/Center Main Grid */}
        <div className="flex-1 flex flex-col lg:flex-row items-start justify-between w-full max-w-[1800px] mx-auto pt-[2vh] lg:gap-12">
          
          {/* LEFT: Identity Card Anchor (34% width) */}
          <div className="w-full lg:w-[34%] flex flex-col justify-start h-full items-start mb-12 lg:mb-0">
            <PowersIdentityCard />
          </div>

          {/* RIGHT: Powers Content */}
          <div className="w-full flex-1 h-full flex flex-col items-start justify-start">
            
            {/* 02 POWERS Headline Block */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start max-w-[800px] mb-6"
            >
              <div className="flex items-baseline space-x-3 mb-1">
                <span className="font-bebas text-[#E21A22] text-3xl lg:text-[42px] leading-none relative">
                  02
                  <div className="absolute inset-0 bg-[#E21A22] opacity-30 blur-[20px] -z-10" />
                </span>
                <span className="font-bebas text-[#F5F5F5] text-3xl lg:text-[42px] tracking-wide leading-none" style={{ textShadow: "0 2px 0 rgba(0,0,0,0.8), 0 5px 18px rgba(220,0,0,0.35), 0 0 18px rgba(255,255,255,0.12)" }}>{t('powers.title')}</span>
              </div>
              
              <span className="font-sans text-[rgba(255,255,255,0.6)] text-[11px] lg:text-[12px] uppercase tracking-[0.25em] mb-2">{t('powers.whatIBring')}</span>
              
              <div className="font-bebas text-[24px] lg:text-[28px] tracking-wide flex flex-wrap gap-2 leading-none mb-3" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.75)" }}>
                <span className="text-[#E21A22] drop-shadow-[0_0_15px_rgba(226,26,34,0.3)]">{t('hero.title1')}</span>
                <span className="text-[#146BFF] mx-1 drop-shadow-[0_0_15px_rgba(20,107,255,0.3)]">&times;</span>
                <span className="text-[#F5F5F5] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{t('hero.title3')}</span>
              </div>
              
              <p className="font-sans text-[13px] lg:text-[14px] text-[#C8C4C0] leading-snug hidden lg:block">
                {t('powers.desc')}
              </p>
            </motion.div>

            <PowersModules />
          </div>
        </div>

        {/* BOTTOM: Experience Strip (Dedicated Row) */}
        <div className="w-full mt-auto pt-1 pb-2 pl-8 lg:pl-[6vw] pr-24 lg:pr-[12vw] max-w-[1800px] mx-auto">
          <PowersExperienceStrip />
        </div>

        {/* Absolute Bottom Right Scroll Indicator */}
        <div className="absolute bottom-[40px] right-[20px] lg:right-[3vw] z-50">
          <PowersNav />
        </div>

      </div>
    </div>
  );
};
