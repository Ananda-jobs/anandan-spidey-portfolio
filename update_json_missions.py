import json

def update_lang(filename, data_to_merge):
    with open(filename, 'r') as f:
        data = json.load(f)
    
    if 'missions' not in data:
        data['missions'] = {}
        
    data['missions']['title'] = data_to_merge['title']
    data['missions']['subtitle'] = data_to_merge['subtitle']
    data['missions']['desc'] = data_to_merge['desc']
    data['missions']['data'] = data_to_merge['data']
    
    with open(filename, 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

en = {
    'title': 'MISSIONS',
    'subtitle': 'What I Have Done',
    'desc': 'Experience in digital marketing, business development, market research, KPI reporting, website management and cross-functional project coordination.',
    'data': [
        {
            "id": "01",
            "company": "CONSULTAI",
            "role": "FOUNDER & AI PRODUCT DEVELOPER",
            "date": "2026 — PRESENT",
            "responsibilities": [
                "Defined product requirements and user journeys for an AI-powered business platform.",
                "Conducted market research and competitor analysis.",
                "Collaborated on product strategy and development planning."
            ]
        },
        {
            "id": "02",
            "company": "AD AGENCY — FRANCE",
            "role": "DIGITAL MARKETING & PROJECT COORDINATOR",
            "date": "2025 — 2026",
            "responsibilities": [
                "Coordinated digital marketing projects from planning to execution.",
                "Supported campaigns and prepared KPI dashboards.",
                "Conducted market research and competitor benchmarking.",
                "Maintained website content using CMS.",
                "Collaborated with cross-functional teams."
            ]
        },
        {
            "id": "03",
            "company": "COCONUT FASHION STORE",
            "role": "FOUNDER",
            "date": "2024 — 2025",
            "responsibilities": [
                "Developed digital marketing strategies.",
                "Managed suppliers.",
                "Created social media content.",
                "Monitored KPIs.",
                "Improved website visibility using SEO fundamentals."
            ]
        },
        {
            "id": "04",
            "company": "HOLIDAY INN GOA",
            "role": "MARKETING ASSISTANT",
            "date": "2020 — 2022",
            "responsibilities": [
                "Supported marketing campaigns and promotional activities.",
                "Prepared reports and presentations.",
                "Conducted customer and market analysis.",
                "Coordinated with internal departments."
            ]
        }
    ]
}

fr = {
    'title': 'MISSIONS',
    'subtitle': 'Ce Que J\'ai Fait',
    'desc': 'Expérience en marketing digital, développement commercial, étude de marché, reporting KPI, gestion de site web et coordination de projets transverses.',
    'data': [
        {
            "id": "01",
            "company": "CONSULTAI",
            "role": "FONDATEUR & DÉVELOPPEUR PRODUIT IA",
            "date": "2026 — PRÉSENT",
            "responsibilities": [
                "Définition des exigences du produit et des parcours utilisateurs pour une plateforme commerciale basée sur l'IA.",
                "Réalisation d'études de marché et d'analyses concurrentielles.",
                "Collaboration sur la stratégie produit et la planification du développement."
            ]
        },
        {
            "id": "02",
            "company": "AGENCE DE PUB — FRANCE",
            "role": "COORDINATEUR DE PROJETS & MARKETING DIGITAL",
            "date": "2025 — 2026",
            "responsibilities": [
                "Coordination de projets de marketing digital de la planification à l'exécution.",
                "Support des campagnes et préparation de tableaux de bord KPI.",
                "Réalisation d'études de marché et de benchmarking concurrentiel.",
                "Maintenance du contenu du site web à l'aide d'un CMS.",
                "Collaboration avec des équipes interfonctionnelles."
            ]
        },
        {
            "id": "03",
            "company": "COCONUT FASHION STORE",
            "role": "FONDATEUR",
            "date": "2024 — 2025",
            "responsibilities": [
                "Développement de stratégies de marketing digital.",
                "Gestion des fournisseurs.",
                "Création de contenu pour les réseaux sociaux.",
                "Suivi des KPI.",
                "Amélioration de la visibilité du site web en utilisant les fondamentaux SEO."
            ]
        },
        {
            "id": "04",
            "company": "HOLIDAY INN GOA",
            "role": "ASSISTANT MARKETING",
            "date": "2020 — 2022",
            "responsibilities": [
                "Soutien aux campagnes marketing et aux activités promotionnelles.",
                "Préparation de rapports et de présentations.",
                "Réalisation d'analyses clients et marchés.",
                "Coordination avec les départements internes."
            ]
        }
    ]
}

de = {
    'title': 'MISSIONEN',
    'subtitle': 'Was Ich Getan Habe',
    'desc': 'Erfahrung im digitalen Marketing, in der Geschäftsentwicklung, Marktforschung, KPI-Berichterstattung, Website-Verwaltung und bereichsübergreifenden Projektkoordination.',
    'data': [
        {
            "id": "01",
            "company": "CONSULTAI",
            "role": "GRÜNDER & KI-PRODUKTENTWICKLER",
            "date": "2026 — HEUTE",
            "responsibilities": [
                "Definition der Produktanforderungen und User Journeys für eine KI-gestützte Geschäftsplattform.",
                "Durchführung von Marktforschungen und Wettbewerbsanalysen.",
                "Zusammenarbeit bei der Produktstrategie und Entwicklungsplanung."
            ]
        },
        {
            "id": "02",
            "company": "WERBEAGENTUR — FRANKREICH",
            "role": "DIGITALES MARKETING & PROJEKTKOORDINATOR",
            "date": "2025 — 2026",
            "responsibilities": [
                "Koordination digitaler Marketingprojekte von der Planung bis zur Ausführung.",
                "Unterstützung von Kampagnen und Vorbereitung von KPI-Dashboards.",
                "Durchführung von Marktforschungen und Wettbewerbs-Benchmarking.",
                "Pflege von Website-Inhalten über CMS.",
                "Zusammenarbeit mit bereichsübergreifenden Teams."
            ]
        },
        {
            "id": "03",
            "company": "COCONUT FASHION STORE",
            "role": "GRÜNDER",
            "date": "2024 — 2025",
            "responsibilities": [
                "Entwicklung digitaler Marketingstrategien.",
                "Verwaltung von Lieferanten.",
                "Erstellung von Social-Media-Inhalten.",
                "Überwachung von KPIs.",
                "Verbesserung der Website-Sichtbarkeit durch SEO-Grundlagen."
            ]
        },
        {
            "id": "04",
            "company": "HOLIDAY INN GOA",
            "role": "MARKETING-ASSISTENT",
            "date": "2020 — 2022",
            "responsibilities": [
                "Unterstützung bei Marketingkampagnen und Werbeaktionen.",
                "Erstellung von Berichten und Präsentationen.",
                "Durchführung von Kunden- und Marktanalysen.",
                "Koordination mit internen Abteilungen."
            ]
        }
    ]
}

update_lang('src/locales/en.json', en)
update_lang('src/locales/fr.json', fr)
update_lang('src/locales/de.json', de)

