import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const PowersIdentityCard: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center lg:items-start mb-16 text-center lg:text-left z-20 relative">
          <span className="font-bebas text-4xl md:text-5xl tracking-widest leading-none">
            <span className="text-[#E21A22]">01</span> <span className="text-white">{t('powers.identity.title')}</span>
          </span>
          <span className="font-sans text-[11px] md:text-[13px] text-[rgba(255,255,255,0.6)] uppercase tracking-[0.25em] mt-3">
            {t('powers.identity.subtitle')}
          </span>
        </div>

        {/* Identity Card */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative group cursor-pointer my-4 z-10 w-full flex justify-center lg:justify-start"
          onClick={() => setIsOpen(true)}
        >
          <motion.img 
            src="/identity-card.png" 
            alt="Anandan Identity Card"
            className="w-[380px] lg:w-[400px] max-w-[27vw] max-md:w-[calc(100%-32px)] max-md:max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03] group-hover:brightness-110 drop-shadow-[0_20px_60px_rgba(0,0,0,0.55)] relative z-10"
          />
          
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E21A22]/20 to-[#146BFF]/20 blur-[40px] -z-10 opacity-60 rounded-xl" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/80 backdrop-blur-md px-8 py-4 rounded-none border border-[#E50914] text-white font-sans text-[14px] tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(229,9,20,0.5)]">
              {t('powers.identity.view')}
            </div>
          </div>
        </motion.div>

        {/* Label Below */}
        <div className="mt-8 text-center lg:text-left">
          <span className="font-sans text-[13px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.3em]">
            {t('powers.identity.scan')}
          </span>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setIsOpen(false)}
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-[#E50914]/20 to-transparent opacity-50 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(229,9,20,0.15) 0%, transparent 70%)' }}></div>
            
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors uppercase tracking-[0.2em] text-[12px]"
              onClick={() => setIsOpen(false)}
            >
              {t('powers.identity.close')}
            </button>
            
            {/* Enlarged Card */}
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src="/identity-card.png" 
              alt="Anandan Identity Card"
              className="max-w-full max-h-full object-contain drop-shadow-[0_0_30px_rgba(229,9,20,0.3)] z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
