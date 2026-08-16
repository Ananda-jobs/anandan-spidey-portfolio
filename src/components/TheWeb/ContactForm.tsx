import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    
    setStatus('LOADING');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-[calc(100%-32px)] md:w-[450px] lg:w-[500px] max-w-full bg-[rgba(10,10,10,0.7)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] rounded-[16px] p-4 md:p-5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-50" />
      
      <div className="text-center mb-4">
        <h2 className="font-bebas text-2xl md:text-3xl tracking-wider text-white mb-1">{t('theWeb.form.title')}</h2>
        <p className="font-sans text-[12px] text-[#C7C7C7] tracking-wide" dangerouslySetInnerHTML={{ __html: t('theWeb.form.desc') }} />
      </div>

      {status === 'SUCCESS' ? (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-center py-6"
        >
          <div className="w-12 h-12 rounded-full border-2 border-[#0066FF] flex items-center justify-center mx-auto mb-3">
            <span className="text-[#0066FF] text-xl">✓</span>
          </div>
          <h3 className="font-bebas text-xl text-white tracking-wider mb-1">{t('theWeb.form.successTitle')}</h3>
          <p className="font-sans text-xs text-[#C7C7C7]">{t('theWeb.form.successDesc')}</p>
          <button 
            onClick={() => setStatus('IDLE')}
            className="mt-4 text-[10px] uppercase tracking-[2px] text-[#0066FF] hover:text-white transition-colors"
          >
            {t('theWeb.form.sendAnother')}
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          {status === 'ERROR' && (
            <div className="bg-[rgba(229,9,20,0.1)] border border-[#E50914] text-[#E50914] px-3 py-2 rounded-lg text-xs text-center">
              {t('theWeb.form.error')}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-[2px] text-[#C7C7C7] mb-1 font-[500]">{t('theWeb.form.nameLabel')}</label>
              <input 
                required
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('theWeb.form.namePlaceholder')}
                className="bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#E50914] transition-colors placeholder-[#666]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-[2px] text-[#C7C7C7] mb-1 font-[500]">{t('theWeb.form.emailLabel')}</label>
              <input 
                required
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('theWeb.form.emailPlaceholder')}
                className="bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#0066FF] transition-colors placeholder-[#666]"
              />
            </div>
          </div>
          
          <div className="flex flex-col">
            <label className="text-[9px] uppercase tracking-[2px] text-[#C7C7C7] mb-1 font-[500]">{t('theWeb.form.subjectLabel')}</label>
            <input 
              required
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t('theWeb.form.subjectPlaceholder')}
              className="bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#E50914] transition-colors placeholder-[#666]"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-[9px] uppercase tracking-[2px] text-[#C7C7C7] mb-1 font-[500]">{t('theWeb.form.messageLabel')}</label>
            <textarea 
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('theWeb.form.messagePlaceholder')}
              rows={2}
              className="bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#0066FF] transition-colors placeholder-[#666] resize-y min-h-[60px]"
            />
          </div>
          
          <button 
            disabled={status === 'LOADING'}
            type="submit" 
            className="group relative w-full bg-white text-black font-bebas text-lg tracking-[0.1em] py-2 rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] mt-1 disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {status === 'LOADING' ? t('theWeb.form.sending') : t('theWeb.form.submit')}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E50914] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              {status === 'LOADING' ? t('theWeb.form.sending') : t('theWeb.form.submit')}
            </span>
          </button>
        </form>
      )}
    </motion.div>
  );
};
