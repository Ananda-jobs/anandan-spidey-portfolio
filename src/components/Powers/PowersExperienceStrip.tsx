import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const PowersExperienceStrip: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="hidden md:grid grid-cols-4 w-full text-[rgba(255,255,255,0.6)] font-sans text-[9px] lg:text-[10px] uppercase tracking-[0.15em] px-0 lg:px-8 items-end gap-4"
    >
      <div className="flex flex-col items-start">
        <span className="font-bebas text-[#F5F5F5] text-xl lg:text-2xl tracking-wide leading-none mb-1">{t('powers.expStrip.years')}</span>
        <span className="text-[#C7C7C7]" dangerouslySetInnerHTML={{ __html: t('powers.expStrip.marketingExp').replace('\n', '<br />') }} />
      </div>

      <div className="flex flex-col items-center text-center">
        <span className="font-bebas text-[#F5F5F5] text-xl lg:text-2xl tracking-wide leading-none mb-1">{t('powers.expStrip.months')}</span>
        <span className="text-[#C7C7C7]" dangerouslySetInnerHTML={{ __html: t('powers.expStrip.internshipTarget').replace('\n', '<br />') }} />
      </div>

      <div className="flex flex-col items-center text-center">
        <span className="font-bebas text-[#F5F5F5] text-xl lg:text-2xl tracking-wide leading-none mb-1">{t('powers.expStrip.city')}</span>
        <span className="text-[#C7C7C7]">{t('powers.expStrip.country')}</span>
      </div>

      <div className="flex flex-col items-start lg:ml-10">
        <span className="font-bebas text-[#146BFF] text-xl lg:text-2xl tracking-wide leading-none mb-1 drop-shadow-[0_0_8px_rgba(20,107,255,0.5)]">{t('powers.expStrip.available')}</span>
        <span className="text-[#C7C7C7]">{t('powers.expStrip.immediately')}</span>
      </div>
    </motion.div>
  );
};
