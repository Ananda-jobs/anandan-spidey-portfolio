import json
import os

def update_lang(filename, data_to_merge):
    with open(filename, 'r') as f:
        data = json.load(f)
    
    # Merge
    if 'powers' not in data:
        data['powers'] = {}
    
    data['powers']['whatIBring'] = data_to_merge['whatIBring']
    data['powers']['desc'] = data_to_merge['desc']
    data['powers']['modulesData'] = data_to_merge['modulesData']
    data['powers']['expStrip'] = data_to_merge['expStrip']

    with open(filename, 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

en = {
    'whatIBring': 'WHAT I BRING',
    'desc': 'I develop digital strategies that strengthen brand visibility, build communities and generate measurable results.',
    'modulesData': [
        {
            "num": "01",
            "title": "DIGITAL MARKETING",
            "skills": ["Social Media", "Content Strategy", "Campaign Support", "Digital Marketing", "Market Research", "KPI Analysis & Reporting", "SEO Fundamentals", "Website Content / CMS"],
            "desc": "Building digital visibility through content strategy, research and audience-focused marketing."
        },
        {
            "num": "02",
            "title": "CONTENT & CREATIVE",
            "skills": ["Content Creation", "Visual Content", "Video Content", "Presentation Design", "Graphic Design", "Social Media Content"],
            "desc": "Creating visual and digital content that communicates ideas clearly and makes brands stand out."
        },
        {
            "num": "03",
            "title": "BUSINESS",
            "skills": ["Business Development", "International Business", "Customer Communication", "Competitive Analysis", "Sales Operations", "Business Reporting"],
            "desc": "Combining marketing creativity with international business thinking and practical market analysis."
        },
        {
            "num": "04",
            "title": "AI & DIGITAL",
            "skills": ["Artificial Intelligence", "AI Tools", "Data Analysis", "Digital Experiences", "Product Strategy", "UX & User Journeys", "Workflow Automation"],
            "desc": "Using modern AI and digital tools to improve processes, create digital experiences and develop ideas."
        }
    ],
    'expStrip': {
        'years': '03+ YEARS',
        'marketingExp': 'MARKETING\\nEXPERIENCE',
        'months': '06 MONTHS',
        'internshipTarget': 'INTERNSHIP\\nTARGET',
        'city': 'STRASBOURG',
        'country': 'FRANCE',
        'available': 'AVAILABLE',
        'immediately': 'IMMEDIATELY'
    }
}

fr = {
    'whatIBring': 'CE QUE J\'APPORTE',
    'desc': 'Je développe des stratégies digitales qui renforcent la visibilité de la marque, créent des communautés et génèrent des résultats mesurables.',
    'modulesData': [
        {
            "num": "01",
            "title": "MARKETING DIGITAL",
            "skills": ["Réseaux Sociaux", "Stratégie de Contenu", "Support de Campagne", "Marketing Digital", "Étude de Marché", "Analyse KPI & Reporting", "Fondamentaux SEO", "Contenu Web / CMS"],
            "desc": "Développer la visibilité numérique grâce à la stratégie de contenu, la recherche et le marketing axé sur l'audience."
        },
        {
            "num": "02",
            "title": "CONTENU & CRÉATIF",
            "skills": ["Création de Contenu", "Contenu Visuel", "Contenu Vidéo", "Design de Présentation", "Design Graphique", "Contenu Réseaux Sociaux"],
            "desc": "Créer du contenu visuel et numérique qui communique clairement les idées et fait ressortir les marques."
        },
        {
            "num": "03",
            "title": "BUSINESS",
            "skills": ["Développement Commercial", "Commerce International", "Communication Client", "Analyse Concurrentielle", "Opérations de Vente", "Reporting Commercial"],
            "desc": "Combiner la créativité marketing avec la réflexion commerciale internationale et l'analyse pratique du marché."
        },
        {
            "num": "04",
            "title": "IA & DIGITAL",
            "skills": ["Intelligence Artificielle", "Outils IA", "Analyse de Données", "Expériences Numériques", "Stratégie Produit", "UX & Parcours Utilisateur", "Automatisation de Workflow"],
            "desc": "Utiliser l'IA moderne et les outils numériques pour améliorer les processus, créer des expériences numériques et développer des idées."
        }
    ],
    'expStrip': {
        'years': '03+ ANNÉES',
        'marketingExp': 'EXPÉRIENCE EN\\nMARKETING',
        'months': '06 MOIS',
        'internshipTarget': 'OBJECTIF\\nDE STAGE',
        'city': 'STRASBOURG',
        'country': 'FRANCE',
        'available': 'DISPONIBLE',
        'immediately': 'IMMÉDIATEMENT'
    }
}

de = {
    'whatIBring': 'WAS ICH MITBRINGE',
    'desc': 'Ich entwickle digitale Strategien, die die Markenpräsenz stärken, Communities aufbauen und messbare Ergebnisse liefern.',
    'modulesData': [
        {
            "num": "01",
            "title": "DIGITALES MARKETING",
            "skills": ["Social Media", "Content-Strategie", "Kampagnenunterstützung", "Digitales Marketing", "Marktforschung", "KPI-Analyse & Reporting", "SEO-Grundlagen", "Web-Content / CMS"],
            "desc": "Aufbau digitaler Sichtbarkeit durch Content-Strategie, Forschung und zielgruppenorientiertes Marketing."
        },
        {
            "num": "02",
            "title": "CONTENT & KREATIV",
            "skills": ["Content-Erstellung", "Visueller Content", "Video-Content", "Präsentationsdesign", "Grafikdesign", "Social Media Content"],
            "desc": "Erstellung visueller und digitaler Inhalte, die Ideen klar kommunizieren und Marken hervorheben."
        },
        {
            "num": "03",
            "title": "BUSINESS",
            "skills": ["Geschäftsentwicklung", "Internationales Business", "Kundenkommunikation", "Wettbewerbsanalyse", "Vertriebsoperationen", "Geschäftsberichterstattung"],
            "desc": "Kombination von Marketing-Kreativität mit internationalem Geschäftsdenken und praktischer Marktanalyse."
        },
        {
            "num": "04",
            "title": "KI & DIGITAL",
            "skills": ["Künstliche Intelligenz", "KI-Tools", "Datenanalyse", "Digitale Erlebnisse", "Produktstrategie", "UX & User Journeys", "Workflow-Automatisierung"],
            "desc": "Nutzung moderner KI und digitaler Tools zur Verbesserung von Prozessen, Schaffung digitaler Erlebnisse und Entwicklung von Ideen."
        }
    ],
    'expStrip': {
        'years': '03+ JAHRE',
        'marketingExp': 'MARKETING-\\nERFAHRUNG',
        'months': '06 MONATE',
        'internshipTarget': 'PRAKTIKUMS-\\nZIEL',
        'city': 'STRASSBURG',
        'country': 'FRANKREICH',
        'available': 'VERFÜGBAR',
        'immediately': 'SOFORT'
    }
}

update_lang('src/locales/en.json', en)
update_lang('src/locales/fr.json', fr)
update_lang('src/locales/de.json', de)

