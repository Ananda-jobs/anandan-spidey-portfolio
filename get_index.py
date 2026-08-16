import urllib.request
import json
import base64
import os

token = ""
deployment_id = "dpl_Ht1yJzcbLkwwAKmf7zL2V5neuBty"

url = f"https://api.vercel.com/v6/deployments/{deployment_id}/files"
req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
try:
    with urllib.request.urlopen(req) as response:
        tree = json.loads(response.read().decode())
        for item in tree:
            if item['name'] == 'index.html':
                uid = item['uid']
                url2 = f"https://api.vercel.com/v7/deployments/{deployment_id}/files/{uid}"
                req2 = urllib.request.Request(url2, headers={"Authorization": f"Bearer {token}"})
                with urllib.request.urlopen(req2) as response2:
                    data = json.loads(response2.read().decode())
                    content = base64.b64decode(data['data']).decode('utf-8')
                    with open('/Users/ananda/Documents/SPIDEY/index.html', 'w') as f:
                        f.write(content)
                    print("Restored index.html")
except Exception as e:
    print(f"Error: {e}")
