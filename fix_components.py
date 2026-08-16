import os

files_to_fix = {
    'src/components/Powers/PowersIdentityCard.tsx': [
        ('className="font-bebas tracking-widest leading-none"', 'className="font-bebas tracking-widest leading-none text-2xl md:text-3xl lg:text-4xl"'),
        ('className="font-sans text-[rgba(255,255,255,0.6)] uppercase tracking-[0.25em] mt-1 md:mt-3"', 'className="font-sans text-[rgba(255,255,255,0.6)] uppercase tracking-[0.25em] mt-1 md:mt-3 text-[10px] md:text-xs"'),
        ('className="font-sans text-[rgba(255,255,255,0.4)] uppercase tracking-[0.3em]"', 'className="font-sans text-[rgba(255,255,255,0.4)] uppercase tracking-[0.3em] text-[8px] md:text-[10px]"')
    ],
    'src/components/Powers/PowersModules.tsx': [
        ('<span className={`font-bebas ${numColor} opacity-90 group-hover:opacity-100 transition-all drop-shadow-[0_0_10px_rgba(226,26,34,0.4)]`}>{power.num}</span>', '<span className={`font-bebas ${numColor} opacity-90 group-hover:opacity-100 transition-all drop-shadow-[0_0_10px_rgba(226,26,34,0.4)] text-3xl md:text-5xl`}>{power.num}</span>'),
        ('<span className="font-bebas text-[#F5F5F5] tracking-wide pb-[1px]">{power.title}</span>', '<span className="font-bebas text-[#F5F5F5] tracking-wide pb-[1px] text-lg md:text-3xl lg:text-4xl">{power.title}</span>'),
        ('className="flex flex-wrap items-center gap-x-1 md:gap-x-3 gap-y-0.5 md:gap-y-1 mb-1 md:mb-3 z-10 font-sans uppercase tracking-[0.1em] leading-snug text-[#C7C7C7]"', 'className="flex flex-wrap items-center gap-x-1 md:gap-x-3 gap-y-0.5 md:gap-y-1 mb-1 md:mb-3 z-10 font-sans uppercase tracking-[0.1em] leading-snug text-[#C7C7C7] text-[10px] md:text-[13px]"'),
        ('<p className="font-sans leading-snug text-[#C7C7C7]/90 group-hover:text-white transition-colors mt-auto z-10">', '<p className="font-sans leading-snug text-[#C7C7C7]/90 group-hover:text-white transition-colors mt-auto z-10 text-[10px] md:text-sm lg:text-base">')
    ],
    'src/components/Powers/PowersExperienceStrip.tsx': [
        ('className="grid grid-cols-4 w-full text-[rgba(255,255,255,0.6)] font-sans uppercase tracking-[0.15em] px-0 lg:px-8 items-end gap-2 md:gap-4 mt-0"', 'className="grid grid-cols-4 w-full text-[rgba(255,255,255,0.6)] font-sans uppercase tracking-[0.15em] px-0 lg:px-8 items-end gap-2 md:gap-4 mt-0 text-[10px] md:text-sm"'),
        ('<span className="font-bebas text-[#F5F5F5] tracking-wide leading-none mb-0.5 md:mb-1">{t(\'powers.expStrip.years\')}</span>', '<span className="font-bebas text-[#F5F5F5] tracking-wide leading-none mb-0.5 md:mb-1 text-3xl md:text-5xl lg:text-6xl">{t(\'powers.expStrip.years\')}</span>'),
        ('<span className="font-bebas text-[#F5F5F5] tracking-wide leading-none mb-0.5 md:mb-1">{t(\'powers.expStrip.months\')}</span>', '<span className="font-bebas text-[#F5F5F5] tracking-wide leading-none mb-0.5 md:mb-1 text-3xl md:text-5xl lg:text-6xl">{t(\'powers.expStrip.months\')}</span>'),
        ('<span className="font-bebas text-[#F5F5F5] tracking-wide leading-none mb-0.5 md:mb-1">{t(\'powers.expStrip.city\')}</span>', '<span className="font-bebas text-[#F5F5F5] tracking-wide leading-none mb-0.5 md:mb-1 text-3xl md:text-5xl lg:text-6xl">{t(\'powers.expStrip.city\')}</span>'),
        ('<span className="font-bebas text-[#146BFF] tracking-wide leading-none mb-0.5 md:mb-1 drop-shadow-[0_0_8px_rgba(20,107,255,0.5)]">{t(\'powers.expStrip.available\')}</span>', '<span className="font-bebas text-[#146BFF] tracking-wide leading-none mb-0.5 md:mb-1 drop-shadow-[0_0_8px_rgba(20,107,255,0.5)] text-3xl md:text-5xl lg:text-6xl">{t(\'powers.expStrip.available\')}</span>')
    ],
    'src/components/Missions/Missions.tsx': [
        ('<span className="font-bebas text-[#E50914] drop-shadow-[0_0_15px_rgba(229,9,20,0.6)] tracking-wide leading-none">03</span>', '<span className="font-bebas text-[#E50914] drop-shadow-[0_0_15px_rgba(229,9,20,0.6)] tracking-wide leading-none text-[120px] md:text-[180px] lg:text-[220px]">03</span>'),
        ('<h2 className="font-bebas text-white tracking-wider leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_10px_rgba(255,255,255,0.2),_0_0_3px_rgba(20,107,255,0.4)] whitespace-nowrap">', '<h2 className="font-bebas text-white tracking-wider leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_10px_rgba(255,255,255,0.2),_0_0_3px_rgba(20,107,255,0.4)] whitespace-nowrap text-[80px] md:text-[140px] lg:text-[160px] xl:text-[180px]">'),
        ('<motion.h3 variants={descVariants} className="text-[#C7C7C7] uppercase font-[500]">', '<motion.h3 variants={descVariants} className="text-[#C7C7C7] uppercase font-[500] text-sm md:text-xl lg:text-2xl tracking-[0.3em] mt-4 md:mt-8 mb-6 md:mb-12">'),
        ('<motion.p variants={descVariants} className="text-[#D1D1D1] font-[300] leading-[1.6]">', '<motion.p variants={descVariants} className="text-[#D1D1D1] font-[300] leading-[1.6] text-sm md:text-lg lg:text-xl max-w-[85%]">')
    ],
    'src/components/Missions/MissionCard.tsx': [
        ('className="relative group border border-[rgba(255,255,255,0.15)] bg-[rgba(10,10,15,0.6)] backdrop-blur-[12px] rounded-lg md:rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-[5px] shadow-[0_15px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_50px_rgba(226,26,34,0.25)] hover:border-[#E21A22]/40 overflow-hidden flex flex-col justify-start min-h-[300px]"', 'className="relative group border border-[rgba(255,255,255,0.15)] bg-[rgba(10,10,15,0.6)] backdrop-blur-[12px] rounded-lg md:rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-[5px] shadow-[0_15px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_50px_rgba(226,26,34,0.25)] hover:border-[#E21A22]/40 overflow-hidden flex flex-col justify-start min-h-[300px] p-6 md:p-8"'),
        ('<span className="font-bebas text-[#E50914] drop-shadow-[0_0_8px_rgba(229,9,20,0.5)]">', '<span className="font-bebas text-[#E50914] drop-shadow-[0_0_8px_rgba(229,9,20,0.5)] text-3xl md:text-5xl lg:text-6xl">'),
        ('<h4 className="font-bebas text-white tracking-wider leading-none">', '<h4 className="font-bebas text-white tracking-wider leading-none text-2xl md:text-4xl lg:text-5xl">'),
        ('<h5 className="font-sans font-[500] text-[#0066FF] tracking-[0.1em] uppercase">', '<h5 className="font-sans font-[500] text-[#0066FF] tracking-[0.1em] uppercase text-xs md:text-sm lg:text-base">'),
        ('<span className="font-sans font-[300] text-[#888888] tracking-wider whitespace-nowrap pt-1">', '<span className="font-sans font-[300] text-[#888888] tracking-wider whitespace-nowrap pt-1 text-[10px] md:text-xs">'),
        ('<ul className="flex flex-col mt-1 md:mt-4">', '<ul className="flex flex-col mt-1 md:mt-4 gap-2 md:gap-4">'),
        ('<li key={i} className="flex items-start text-[#D1D1D1] font-[300] leading-[1.5]">', '<li key={i} className="flex items-start text-[#D1D1D1] font-[300] leading-[1.5] text-xs md:text-sm lg:text-base">'),
        ('<span className="text-[#E50914] mr-1 md:mr-3 mt-[2px] md:mt-[6px]">▹</span>', '<span className="text-[#E50914] mr-1 md:mr-3 mt-[2px] md:mt-[6px] text-[10px] md:text-xs">▹</span>')
    ],
    'src/components/TheWeb/TheWeb.tsx': [
        ('<span className="font-bebas text-[#E50914] drop-shadow-[0_0_15px_rgba(229,9,20,0.6)] tracking-wide leading-none">04</span>', '<span className="font-bebas text-[#E50914] drop-shadow-[0_0_15px_rgba(229,9,20,0.6)] tracking-wide leading-none text-[80px] md:text-[140px] xl:text-[180px]">04</span>'),
        ('<h2 className="font-bebas text-white tracking-wider leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_10px_rgba(255,255,255,0.2),_0_0_3px_rgba(20,107,255,0.4)] whitespace-nowrap">', '<h2 className="font-bebas text-white tracking-wider leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_10px_rgba(255,255,255,0.2),_0_0_3px_rgba(20,107,255,0.4)] whitespace-nowrap text-[60px] md:text-[100px] xl:text-[140px]">'),
        ('<motion.h3 variants={descVariants} className="text-[#C7C7C7] uppercase font-[500] text-left">', '<motion.h3 variants={descVariants} className="text-[#C7C7C7] uppercase font-[500] text-left text-[10px] md:text-sm tracking-[0.4em] mt-2 md:mt-4">')
    ],
    'src/components/TheWeb/SocialCard.tsx': [
        ('className="relative flex flex-col items-center justify-center rounded-[8px] md:rounded-[16px] bg-[rgba(10,10,10,0.7)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] group transition-all duration-400 ease-out hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,9,20,0.25)] hover:border-[rgba(255,255,255,0.4)] w-full max-w-[280px] mx-auto shadow-[0_4px_30px_rgba(0,0,0,0.5)]"', 'className="relative flex flex-col items-center justify-center rounded-[16px] bg-[rgba(10,10,10,0.7)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] group transition-all duration-400 ease-out hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(229,9,20,0.25)] hover:border-[rgba(255,255,255,0.4)] w-full max-w-[280px] mx-auto h-[80px] md:h-[110px] shadow-[0_4px_30px_rgba(0,0,0,0.5)] px-3 md:px-4"'),
        ('<h3 className="font-bebas tracking-[0.1em] text-white mb-0 md:mb-1 group-hover:text-white">', '<h3 className="font-bebas tracking-[0.1em] text-white mb-0 md:mb-1 group-hover:text-white text-lg md:text-xl">'),
        ('<p className="font-sans tracking-[0.2em] text-[#C7C7C7] uppercase font-[500] group-hover:text-[#0066FF] transition-colors duration-300">', '<p className="font-sans tracking-[0.2em] text-[#C7C7C7] uppercase font-[500] group-hover:text-[#0066FF] transition-colors duration-300 text-[8px] md:text-[10px]">')
    ],
    'src/components/TheWeb/ContactForm.tsx': [
        ('className="bg-[rgba(10,10,10,0.7)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.5)] relative overflow-hidden mx-auto"', 'className="w-[calc(100%-32px)] md:w-[450px] lg:w-[500px] max-w-full bg-[rgba(10,10,10,0.7)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] rounded-[16px] p-4 md:p-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)] relative overflow-hidden mx-auto"')
    ]
}

for file_path, replacements in files_to_fix.items():
    if os.path.exists(file_path):
        with open(file_path, 'r') as f:
            content = f.read()
        for target, replacement in replacements:
            if target in content:
                content = content.replace(target, replacement)
        with open(file_path, 'w') as f:
            f.write(content)
