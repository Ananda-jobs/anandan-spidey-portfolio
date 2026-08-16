import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MissionCard } from './MissionCard.tsx';
import { WebTrail } from '../WebTrail';

export const Missions: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const descVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.3 } }
  };

  const missionsData = t('missions.data', { returnObjects: true }) as Array<any>;


  const scrollToNext = () => {
    document.getElementById('web-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[100dvh] h-auto md:h-screen overflow-x-hidden overflow-y-auto md:overflow-hidden bg-black font-sans text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/missions-bg.jpg"
          alt="Spider-Man Missions Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Cinematic Overlays */}
        {/* custom gradient: top 0.35, center 0.25, bottom 0.55 */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%)' }}
        />
      </div>

      <WebTrail />

      {/* Spider-Man Logo (Top-Left) */}
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        src="/spiderman-logo.png"
        alt="Spider-Man Logo"
        className="absolute z-50 top-[35px] left-[45px] w-[50px] object-contain pointer-events-none"
      />

      {/* Main Content Layer */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-20 w-full min-h-full h-auto md:h-full flex flex-col justify-center pt-[12vh] px-8 lg:px-[6vw] max-w-[1800px] mx-auto overflow-y-auto scrollbar-hide pb-4"
      >
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center h-full gap-8 xl:gap-[80px]">
          
          {/* Left Column: Title & Intro */}
          <motion.div variants={titleVariants} className="w-full xl:w-[35%] max-w-[500px] flex flex-col justify-center">
            <div className="flex items-baseline space-x-2">
              <span className="font-bebas text-[clamp(56px,6vw,100px)] text-[#E50914] drop-shadow-[0_0_15px_rgba(229,9,20,0.6)] tracking-wide leading-none">03</span>
              <h2 className="font-bebas text-[clamp(56px,6vw,100px)] text-white tracking-wider leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_10px_rgba(255,255,255,0.2),_0_0_3px_rgba(20,107,255,0.4)] whitespace-nowrap">
                {t('missions.title')}
              </h2>
            </div>
            
            <motion.h3 variants={descVariants} className="text-[#C7C7C7] text-xs md:text-sm tracking-[0.3em] mt-4 mb-6 uppercase font-[500]">
              {t('missions.subtitle')}
            </motion.h3>
            
            <motion.p variants={descVariants} className="text-[#D1D1D1] text-sm md:text-base font-[300] leading-[1.6]">
              {t('missions.desc')}
            </motion.p>
          </motion.div>

          {/* Right Column: 2x2 Grid */}
          <div className="w-full xl:w-[62%] flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] w-full">
              {missionsData.map((mission, index) => (
                <MissionCard key={mission.id} mission={mission} index={index} />
              ))}
            </div>
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-[40px] right-[20px] lg:right-[3vw] z-50 flex flex-col items-center justify-center cursor-pointer group"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mb-3 text-[#F5F5F5] group-hover:text-[#E50914] transition-colors"
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
            {t('nav.scroll')}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};
