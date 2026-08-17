import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SocialCard } from './SocialCard';
import { ContactForm } from './ContactForm';

export const TheWeb: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut", staggerChildren: 0.2 }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const descVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section className="relative w-full min-h-[100dvh] h-auto md:h-screen md:min-h-[700px] overflow-hidden md:overflow-hidden overflow-y-auto bg-black font-sans text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="https://videotourl.com/videos/1786995592687-c9a20080-21e8-48ea-85b2-add0530792f9.mov"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center transform-gpu"
        />
        {/* Cinematic Overlay (35% to 45%) */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-multiply" 
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)' }}
        />
      </div>

      {/* Main Content Layer */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="relative z-20 w-full min-h-full h-auto md:h-full flex flex-col pt-[3vh] pb-[2vh] px-8 lg:px-[6vw] max-w-[1800px] mx-auto scrollbar-hide"
      >
        {/* TOP LEFT: Logo + Page heading */}
        <div className="flex flex-col items-start w-full">
          {/* Spider-Man Logo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
            src="/spiderman-logo.png"
            alt="Spider-Man Logo"
            className="w-[40px] md:w-[45px] object-contain pointer-events-none mb-[1vh] ml-[10px]"
          />
          
          <motion.div variants={titleVariants} className="flex flex-col items-start ml-[10px]">
            <div className="flex items-baseline space-x-3">
              <span className="font-bebas text-[clamp(35px,4vw,60px)] text-[#E50914] drop-shadow-[0_0_15px_rgba(229,9,20,0.6)] tracking-wide leading-none">04</span>
              <h2 className="font-bebas text-[clamp(35px,4vw,60px)] text-white tracking-wider leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_10px_rgba(255,255,255,0.2),_0_0_3px_rgba(20,107,255,0.4)] whitespace-nowrap">
                {t('theWeb.title')}
              </h2>
            </div>
            <motion.h3 variants={descVariants} className="text-[#C7C7C7] text-[10px] md:text-[12px] tracking-[0.4em] mt-2 uppercase font-[500] text-left">
              {t('theWeb.subtitle')}
            </motion.h3>
          </motion.div>
        </div>

        {/* CENTER: Contact Form (Shifted to Right) */}
        <div className="w-full flex-1 flex flex-col items-center md:items-end justify-center md:pr-[2vw] lg:pr-[4vw] flex-shrink-0 my-2 lg:my-0">
          <ContactForm />
        </div>

        {/* BOTTOM: Social Links */}
        <div className="w-full flex justify-center flex-shrink-0 mt-2 mb-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-[1000px]">
              <SocialCard platform="LINKEDIN" action={t('theWeb.social.connect')} url="https://www.linkedin.com/in/anandakrishnan-ushakumari-radhakrishnan/" index={0} />
              <SocialCard platform="INSTAGRAM" action={t('theWeb.social.follow')} url="https://www.instagram.com/an__an__d__an?igsh=MWdjeHRrcXdhdnEyMQ==" index={1} />
              <SocialCard platform="GITHUB" action={t('theWeb.social.explore')} url="https://github.com/Ananda-jobs" index={2} />
            </div>
        </div>
      </motion.div>
    </section>
  );
};
