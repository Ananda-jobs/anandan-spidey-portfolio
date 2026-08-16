import os

files_to_fix = {
    'src/components/Hero/HeroTitle.tsx': [
        ('text-7xl md:text-[8rem]', 'text-5xl md:text-[8rem]'),
        ('text-3xl md:text-[2.8rem]', 'text-xl md:text-[2.8rem]'),
        ('text-2xl md:text-[1.8rem]', 'text-lg md:text-[1.8rem]'),
        ('text-xs md:text-sm mb-6', 'text-[10px] md:text-sm mb-4'),
        ('text-xs md:text-sm px-4 md:px-6 py-2 md:py-3', 'text-[10px] md:text-sm px-3 md:px-6 py-1.5 md:py-3'),
        ('gap-2 md:gap-4', 'gap-2 md:gap-4 flex-col sm:flex-row')
    ],
    'src/components/Powers/Powers.tsx': [
        ('flex flex-row justify-between items-start h-full gap-4 md:gap-8 xl:gap-[80px]', 'flex flex-col md:flex-row justify-between items-start h-full gap-4 md:gap-8 xl:gap-[80px]'),
        ('w-[30%] max-w-[400px]', 'w-full md:w-[30%] max-w-[400px] mb-8 md:mb-0'),
        ('w-[65%]', 'w-full md:w-[65%] mt-4 md:mt-0')
    ],
    'src/components/Powers/PowersIdentityCard.tsx': [
        ('text-2xl md:text-3xl', 'text-xl md:text-3xl'),
        ('max-w-[27vw]', 'max-w-[60vw] md:max-w-[27vw]'),
        ('text-[10px] md:text-xs', 'text-[9px] md:text-xs'),
        ('text-[8px] md:text-[10px]', 'text-[8px] md:text-[10px]')
    ],
    'src/components/Powers/PowersModules.tsx': [
        ('grid-cols-2 gap-x-2 md:gap-x-5 gap-y-2 md:gap-y-5', 'grid-cols-1 sm:grid-cols-2 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5'),
        ('text-3xl md:text-5xl', 'text-2xl md:text-5xl'),
        ('text-lg md:text-3xl', 'text-base md:text-3xl'),
        ('min-h-[50px] md:min-h-[160px]', 'min-h-[100px] md:min-h-[160px] p-4 md:p-6')
    ],
    'src/components/Powers/PowersExperienceStrip.tsx': [
        ('grid grid-cols-4', 'grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-0'),
        ('text-3xl md:text-5xl', 'text-2xl md:text-5xl')
    ],
    'src/components/Missions/Missions.tsx': [
        ('text-[120px] md:text-[180px]', 'text-[70px] md:text-[180px]'),
        ('text-[80px] md:text-[140px]', 'text-[45px] md:text-[140px]'),
        ('text-sm md:text-xl', 'text-xs md:text-xl'),
        ('grid-cols-3', 'grid-cols-1 md:grid-cols-3'),
        ('flex flex-row', 'flex flex-col md:flex-row')
    ],
    'src/components/Missions/MissionCard.tsx': [
        ('min-h-[300px]', 'min-h-[220px] md:min-h-[300px]'),
        ('text-3xl md:text-5xl', 'text-2xl md:text-5xl'),
        ('text-2xl md:text-4xl', 'text-xl md:text-4xl'),
        ('p-6 md:p-8', 'p-4 md:p-8')
    ],
    'src/components/TheWeb/TheWeb.tsx': [
        ('flex flex-row', 'flex flex-col md:flex-row'),
        ('w-[40%]', 'w-full md:w-[40%]'),
        ('w-[60%]', 'w-full md:w-[60%] mt-8 md:mt-0'),
        ('text-[80px] md:text-[140px]', 'text-[60px] md:text-[140px]'),
        ('text-[60px] md:text-[100px]', 'text-[45px] md:text-[100px]')
    ],
    'src/components/TheWeb/ContactForm.tsx': [
        ('p-4 md:p-6', 'p-4 md:p-6 w-full max-w-full md:max-w-[500px]')
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
            
print("Refinements applied!")
