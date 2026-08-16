import React, { useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Volume2, VolumeX } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { HeroNav } from './HeroNav';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { HeroSocial } from './HeroSocial';
import { HeroTitle } from './HeroTitle';
import { HeroInternshipLeft } from './HeroInternshipLeft';
import { HeroBottomInfo } from './HeroBottomInfo';
import { WebTrail } from '../WebTrail';

export interface HeroProps {
  isMuted: boolean;
  toggleMute: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isMuted, toggleMute }) => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut", staggerChildren: 0.2 }
    }
  };

  return (
    <section className="relative w-full min-h-[100dvh] h-auto md:h-screen bg-black text-white font-sans overflow-hidden md:overflow-hidden overflow-y-auto">
      {/* Background layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-black overflow-hidden"
      >
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videotourl.com/videos/1786827456691-864c1a27-3bc8-4025-85e4-b17bad313d8a.mov"
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </motion.div>
      
      {/* Spider Logo Embellishment (Optional subtle glow if emblem is baked in) */}
      <motion.div 
        className="absolute top-8 left-8 lg:left-12 w-24 h-24 rounded-full bg-white/20 blur-2xl z-10"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ pointerEvents: 'none' }}
      />

      <WebTrail />

      {/* Main UI Overlay - Desktop uses absolute positioning, Mobile uses normal document flow */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full min-h-full h-auto md:h-full overflow-x-hidden overflow-y-auto md:overflow-hidden scrollbar-hide"
      >
        {/* Top-Left Spider Logo */}
        <motion.img 
          src="/spider-logo.png" 
          alt="Spider Emblem" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[35px] left-[40px] w-[50px] z-50 pointer-events-none filter grayscale brightness-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        />

        <HeroNav />
        <LanguageSwitcher />

        {/* Desktop Absolute Layout Elements */}
        <div className="hidden md:block">
          <HeroSocial />
          <HeroInternshipLeft />
          <HeroTitle />
          <HeroBottomInfo />
          
          {/* Audio Control */}
          <button 
            onClick={toggleMute}
            aria-label={isMuted ? "Turn video sound on" : "Turn video sound off"}
            className="absolute bottom-[90px] right-[35px] z-50 flex items-center justify-center space-x-2 px-3 py-2 border border-white/20 bg-black/30 backdrop-blur-md text-white text-[10px] md:text-[11px] font-sans font-[300] tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            {isMuted ? <VolumeX size={14} strokeWidth={1.5} className="text-[#E50914]" /> : <Volume2 size={14} strokeWidth={1.5} className="text-[#0066FF]" />}
            <span>{isMuted ? t('nav.soundOff') : t('nav.soundOn')}</span>
          </button>
        </div>

        {/* Mobile Document Flow Elements */}
        <div className="md:hidden flex flex-col pt-24 pb-12 w-full z-30">
          <HeroTitle isMobile={true} />
          
          <div className="mt-12 px-6">
             <HeroBottomInfo />
          </div>

          <div className="mt-12 flex justify-center w-full">
             <HeroSocial />
          </div>

          <div className="mt-8 flex justify-center w-full pb-8">
            <button 
              onClick={toggleMute}
              aria-label={isMuted ? "Turn video sound on" : "Turn video sound off"}
              className="flex items-center justify-center space-x-2 px-4 py-2 border border-white/20 bg-black/30 backdrop-blur-md text-white text-[10px] font-sans font-[300] tracking-[0.2em] uppercase transition-all duration-300 active:scale-95"
            >
              {isMuted ? <VolumeX size={14} strokeWidth={1.5} className="text-[#E50914]" /> : <Volume2 size={14} strokeWidth={1.5} className="text-[#0066FF]" />}
              <span>{isMuted ? t('nav.soundOff') : t('nav.soundOn')}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
