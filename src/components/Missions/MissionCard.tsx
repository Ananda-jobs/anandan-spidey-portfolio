import React from 'react';
import { motion } from 'framer-motion';

interface MissionData {
  id: string;
  company: string;
  role: string;
  date: string;
  responsibilities: string[];
}

interface MissionCardProps {
  mission: MissionData;
  index: number;
}

export const MissionCard: React.FC<MissionCardProps> = ({ mission, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: (index + 1) * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex flex-col p-[28px_30px] min-h-[220px] rounded-lg bg-[rgba(5,5,5,0.7)] backdrop-blur-[4px] border border-[rgba(255,255,255,0.15)] overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:border-[rgba(255,255,255,0.25)] h-full"
    >
      {/* Decorative spider-inspired edge highlight on hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header section: 01 + Company + Date */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <div className="flex items-center space-x-3 mb-1">
            <span className="font-bebas text-3xl lg:text-4xl text-[#E50914] drop-shadow-[0_0_8px_rgba(229,9,20,0.5)]">
              {mission.id}
            </span>
            <h4 className="font-bebas text-xl lg:text-2xl text-white tracking-wider leading-none">
              {mission.company}
            </h4>
          </div>
          <h5 className="font-sans font-[500] text-[#0066FF] text-xs lg:text-sm tracking-[0.1em] uppercase">
            {mission.role}
          </h5>
        </div>
        <span className="font-sans font-[300] text-[#888888] text-[10px] lg:text-xs tracking-wider whitespace-nowrap pt-1">
          {mission.date}
        </span>
      </div>

      {/* Responsibilities list */}
      <ul className="flex flex-col space-y-[10px] mt-4">
        {mission.responsibilities.map((task, i) => (
          <li key={i} className="flex items-start text-[13px] lg:text-[14px] text-[#D1D1D1] font-[300] leading-[1.5]">
            <span className="text-[#E50914] mr-3 text-[10px] mt-[6px]">▹</span>
            <span className="flex-1">{task}</span>
          </li>
        ))}
      </ul>
      
    </motion.div>
  );
};
