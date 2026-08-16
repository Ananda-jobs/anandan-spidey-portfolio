import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'react-feather';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-[65px] right-[35px] z-50 flex items-center bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl">
      <Globe size={14} className="text-white/80 mr-3" />
      <div className="flex items-center space-x-2">
        <button 
          translate="no"
          onClick={() => changeLanguage('fr')} 
          className={`notranslate text-[11px] font-sans tracking-wider transition-colors ${i18n.language === 'fr' ? 'text-[#E50914] font-[700]' : 'text-[#A0A0A0] hover:text-white'}`}
        >
          FR
        </button>
        <span className="text-white/40 text-[11px] font-light mx-2">|</span>
        <button 
          translate="no"
          onClick={() => changeLanguage('en')} 
          className={`notranslate text-[11px] font-sans tracking-wider transition-colors ${i18n.language === 'en' ? 'text-[#E50914] font-[700]' : 'text-[#A0A0A0] hover:text-white'}`}
        >
          EN
        </button>
        <span className="text-white/40 text-[11px] font-light mx-2">|</span>
        <button 
          translate="no"
          onClick={() => changeLanguage('de')} 
          className={`notranslate text-[11px] font-sans tracking-wider transition-colors ${i18n.language === 'de' ? 'text-[#E50914] font-[700]' : 'text-[#A0A0A0] hover:text-white'}`}
        >
          DE
        </button>
      </div>
    </div>
  );
};
