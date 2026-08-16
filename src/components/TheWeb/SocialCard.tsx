import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, GitHub } from 'react-feather';

export interface SocialCardProps {
  platform: 'LINKEDIN' | 'INSTAGRAM' | 'GITHUB';
  action: string;
  url: string;
  index: number;
}

export const SocialCard: React.FC<SocialCardProps> = ({ platform, action, url, index }) => {
  const getIcon = () => {
    switch (platform) {
      case 'LINKEDIN':
        return <Linkedin size={28} strokeWidth={1.5} className="text-white group-hover:text-[#0066FF] transition-colors duration-300" />;
      case 'INSTAGRAM':
        return <Instagram size={28} strokeWidth={1.5} className="text-white group-hover:text-[#E50914] transition-colors duration-300" />;
      case 'GITHUB':
        return <GitHub size={28} strokeWidth={1.5} className="text-white group-hover:text-[#0066FF] transition-colors duration-300" />;
      default:
        return null;
    }
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: (index + 1) * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center px-4 rounded-[16px] bg-[rgba(10,10,10,0.7)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] group transition-all duration-400 ease-out hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,9,20,0.25)] hover:border-[rgba(255,255,255,0.4)] w-full max-w-[280px] mx-auto h-[110px] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    >
      {/* Edge glows */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[16px]" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-[16px]" />

      <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
        {getIcon()}
      </div>

      <div className="flex flex-col items-center text-center">
        <h3 className="font-bebas text-xl tracking-[0.1em] text-white mb-1 group-hover:text-white">
          {platform}
        </h3>
        <p className="font-sans text-[10px] tracking-[0.2em] text-[#C7C7C7] uppercase font-[500] group-hover:text-[#0066FF] transition-colors duration-300">
          {action}
        </p>
      </div>
    </motion.a>
  );
};
