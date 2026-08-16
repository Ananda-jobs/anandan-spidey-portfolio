import json

def update_lang(filename, data_to_merge):
    with open(filename, 'r') as f:
        data = json.load(f)
    
    if 'powers' not in data:
        data['powers'] = {}
        
    data['powers']['identity'] = data_to_merge
    
    with open(filename, 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

en = {
    'title': 'IDENTITY',
    'subtitle': 'GET TO KNOW ANANDAN',
    'view': 'VIEW IDENTITY',
    'scan': 'SCAN • EXPLORE • CONNECT',
    'close': '[ CLOSE ]'
}

fr = {
    'title': 'IDENTITÉ',
    'subtitle': 'FAITES CONNAISSANCE AVEC ANANDAN',
    'view': 'VOIR L\'IDENTITÉ',
    'scan': 'SCANNER • EXPLORER • CONNECTER',
    'close': '[ FERMER ]'
}

de = {
    'title': 'IDENTITÄT',
    'subtitle': 'LERNEN SIE ANANDAN KENNEN',
    'view': 'IDENTITÄT ANZEIGEN',
    'scan': 'SCANNEN • ERKUNDEN • VERBINDEN',
    'close': '[ SCHLIESSEN ]'
}

update_lang('src/locales/en.json', en)
update_lang('src/locales/fr.json', fr)
update_lang('src/locales/de.json', de)

