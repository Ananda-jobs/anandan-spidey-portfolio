import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const PowersModules: React.FC = () => {
  const { t } = useTranslation();
  const powersData = t('powers.modulesData', { returnObjects: true }) as Array<{ num: string, title: string, skills: string[], desc: string }>;

  return (
    <div className="w-full flex flex-col justify-center max-w-[950px] mx-auto lg:mx-0">
      
      {/* Modules Grid - cards->cards gap: 18-24px */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 w-full">
        {powersData.map((power, index) => {
          // Color logic for numbers
          let numColor = "text-[#E21A22]";
          if (power.num === "02") numColor = "text-[#E21A22]";
          if (power.num === "04") numColor = "text-[#146BFF]";

          return (
            <motion.div
              key={power.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group relative p-5 lg:p-6 border border-[rgba(255,255,255,0.15)] bg-[rgba(10,10,15,0.6)] backdrop-blur-[12px] rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-[5px] shadow-[0_15px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_50px_rgba(226,26,34,0.25)] hover:border-[#E21A22]/40 flex flex-col items-start cursor-default overflow-hidden min-h-[160px] max-md:w-[calc(100%-32px)] max-md:mx-auto"
            >
              {/* Hover subtle glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E21A22]/0 to-[#146BFF]/0 group-hover:from-[#E21A22]/15 group-hover:to-[#146BFF]/10 transition-colors duration-300 pointer-events-none" />

              <div className="flex items-end gap-3 mb-3 z-10" style={{ textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}>
                <span className={`font-bebas ${numColor} text-3xl lg:text-4xl opacity-90 group-hover:opacity-100 transition-all drop-shadow-[0_0_10px_rgba(226,26,34,0.4)]`}>{power.num}</span>
                <span className="font-bebas text-[#F5F5F5] text-2xl lg:text-3xl tracking-wide pb-[1px]">{power.title}</span>
              </div>

              {/* Skills List - Clean Text format */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 z-10 font-sans text-[11px] lg:text-[12px] uppercase tracking-[0.1em] leading-snug text-[#C7C7C7]">
                {power.skills.map((skill, i) => (
                  <React.Fragment key={skill}>
                    <span className="whitespace-nowrap">{skill}</span>
                    {i < power.skills.length - 1 && <span className="text-[#E21A22]/50 font-bold px-1">&bull;</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* Description */}
              <p className="font-sans text-[12px] lg:text-[13px] leading-snug text-[#C7C7C7]/90 group-hover:text-white transition-colors mt-auto z-10">
                {power.desc}
              </p>

              {/* Subliminal web lines on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
