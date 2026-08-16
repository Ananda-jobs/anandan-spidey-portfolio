import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Linkedin, Instagram, GitHub, Mail } from 'react-feather';

export const HeroSocial: React.FC = () => {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 0.8 } }
  };

  return (
    <motion.div 
      variants={fadeUpVariants}
      className="flex md:absolute left-[35px] md:top-[120px] lg:top-[140px] flex-row md:flex-col space-x-6 md:space-x-0 md:space-y-6 z-40 justify-center w-full md:w-auto"
    >
      {[
        { Icon: Linkedin, hoverColor: 'group-hover:text-[#0066FF] group-hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.8)]', url: 'https://www.linkedin.com/in/anandakrishnan-ushakumari-radhakrishnan/' },
        { Icon: Instagram, hoverColor: 'group-hover:text-[#E50914] group-hover:drop-shadow-[0_0_8px_rgba(229,9,20,0.8)]', url: 'https://www.instagram.com/an__an__d__an?igsh=MWdjeHRrcXdhdnEyMQ==' },
        { Icon: GitHub, hoverColor: 'group-hover:text-[#0066FF] group-hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.8)]', url: 'https://github.com/Ananda-jobs' },
        { Icon: Mail, hoverColor: 'group-hover:text-[#E50914] group-hover:drop-shadow-[0_0_8px_rgba(229,9,20,0.8)]', url: 'mailto:akrishnanur2023@gmail.com' }
      ].map(({ Icon, hoverColor, url }, idx) => (
        <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="relative group p-2 flex items-center transition-transform duration-300 hover:-translate-y-1">
          <Icon 
            size={18} 
            strokeWidth={1.5} 
            className={`text-[#C7C7C7] transition-all duration-300 group-hover:scale-125 ${hoverColor}`} 
          />
        </a>
      ))}
    </motion.div>
  );
};
