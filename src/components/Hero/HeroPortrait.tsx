import React from 'react';
import { motion } from 'framer-motion';

export const HeroPortrait: React.FC<{ isMobileFlow?: boolean }> = ({ isMobileFlow = false }) => {
  // portrait.png asset is not present in the project — hide on mobile to prevent broken image icon
  if (isMobileFlow) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
      className="hidden md:flex absolute bottom-0 left-[35%] md:left-[30%] lg:left-[25%] xl:left-[20%] -translate-x-1/2 w-[60vw] md:w-[50vw] lg:w-[45vw] h-[75vh] lg:h-[85vh] z-20 pointer-events-none justify-center items-end"
    >
      <div className="relative w-full h-full flex justify-center items-end">
         {/* Ambient web strands behind/around portrait */}
         <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)]"
          style={{ backgroundSize: '40px 40px', opacity: 0.4 }}
        />
        <img 
          src="/portrait.png" 
          alt="Anandan Portrait"
          className="max-h-full object-contain relative z-10"
          style={{ 
            filter: 'drop-shadow(0 0 40px rgba(0, 0, 0, 0.7)) drop-shadow(-10px 0 20px rgba(255, 255, 255, 0.15)) drop-shadow(10px 0 20px rgba(255, 0, 0, 0.15))' 
          }}
        />
      </div>
    </motion.div>
  );
};
