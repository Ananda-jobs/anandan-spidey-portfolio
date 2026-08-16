import json

def update_lang(filename, data_to_merge):
    with open(filename, 'r') as f:
        data = json.load(f)
    
    if 'theWeb' not in data:
        data['theWeb'] = {}
        
    for k, v in data_to_merge.items():
        data['theWeb'][k] = v
    
    with open(filename, 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

en = {
    'title': 'THE WEB',
    'subtitle': 'CONNECT WITH ANANDAN',
    'form': {
        'title': 'LET\'S CONNECT',
        'desc': 'Have a project, opportunity, or question?<br />Send me a message.',
        'successTitle': 'MESSAGE SENT',
        'successDesc': 'Thank you. I\'ll get back to you soon.',
        'sendAnother': 'SEND ANOTHER MESSAGE',
        'error': 'MESSAGE COULD NOT BE SENT. Please try again.',
        'nameLabel': 'Full Name',
        'namePlaceholder': 'Your name',
        'emailLabel': 'Email',
        'emailPlaceholder': 'your@email.com',
        'subjectLabel': 'Subject',
        'subjectPlaceholder': 'What would you like to discuss?',
        'messageLabel': 'Message',
        'messagePlaceholder': 'Write your message...',
        'sending': 'SENDING...',
        'submit': 'SEND MESSAGE →'
    },
    'social': {
        'connect': 'CONNECT',
        'follow': 'FOLLOW',
        'explore': 'EXPLORE'
    }
}

fr = {
    'title': 'LA TOILE',
    'subtitle': 'CONNECTEZ-VOUS AVEC ANANDAN',
    'form': {
        'title': 'CONNECTONS-NOUS',
        'desc': 'Un projet, une opportunité ou une question ?<br />Envoyez-moi un message.',
        'successTitle': 'MESSAGE ENVOYÉ',
        'successDesc': 'Merci. Je reviendrai vers vous bientôt.',
        'sendAnother': 'ENVOYER UN AUTRE MESSAGE',
        'error': 'LE MESSAGE N\'A PAS PU ÊTRE ENVOYÉ. Veuillez réessayer.',
        'nameLabel': 'Nom Complet',
        'namePlaceholder': 'Votre nom',
        'emailLabel': 'Email',
        'emailPlaceholder': 'votre@email.com',
        'subjectLabel': 'Sujet',
        'subjectPlaceholder': 'De quoi aimeriez-vous discuter ?',
        'messageLabel': 'Message',
        'messagePlaceholder': 'Écrivez votre message...',
        'sending': 'ENVOI...',
        'submit': 'ENVOYER LE MESSAGE →'
    },
    'social': {
        'connect': 'SE CONNECTER',
        'follow': 'SUIVRE',
        'explore': 'EXPLORER'
    }
}

de = {
    'title': 'DAS NETZ',
    'subtitle': 'VERBINDEN SIE SICH MIT ANANDAN',
    'form': {
        'title': 'LASS UNS VERBINDEN',
        'desc': 'Haben Sie ein Projekt, eine Gelegenheit oder eine Frage?<br />Senden Sie mir eine Nachricht.',
        'successTitle': 'NACHRICHT GESENDET',
        'successDesc': 'Danke. Ich melde mich bald bei Ihnen.',
        'sendAnother': 'WEITERE NACHRICHT SENDEN',
        'error': 'NACHRICHT KONNTE NICHT GESENDET WERDEN. Bitte versuchen Sie es erneut.',
        'nameLabel': 'Vollständiger Name',
        'namePlaceholder': 'Ihr Name',
        'emailLabel': 'E-Mail',
        'emailPlaceholder': 'ihre@email.com',
        'subjectLabel': 'Betreff',
        'subjectPlaceholder': 'Worüber möchten Sie sprechen?',
        'messageLabel': 'Nachricht',
        'messagePlaceholder': 'Schreiben Sie Ihre Nachricht...',
        'sending': 'WIRD GESENDET...',
        'submit': 'NACHRICHT SENDEN →'
    },
    'social': {
        'connect': 'VERBINDEN',
        'follow': 'FOLGEN',
        'explore': 'ERKUNDEN'
    }
}

update_lang('src/locales/en.json', en)
update_lang('src/locales/fr.json', fr)
update_lang('src/locales/de.json', de)

