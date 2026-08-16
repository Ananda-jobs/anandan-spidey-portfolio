import urllib.request
import json
import base64
import os

token = ""
deployment_id = "dpl_Ht1yJzcbLkwwAKmf7zL2V5neuBty"

def get_file_tree():
    url = f"https://api.vercel.com/v6/deployments/{deployment_id}/files"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except Exception as e:
        print(f"Error fetching tree: {e}")
        return []

def get_file_content(uid):
    url = f"https://api.vercel.com/v7/deployments/{deployment_id}/files/{uid}"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            return base64.b64decode(data['data']).decode('utf-8')
    except Exception as e:
        print(f"Error fetching file {uid}: {e}")
        return None

def find_components_dir(nodes):
    for item in nodes:
        if item['name'] == 'components' and item['type'] == 'directory':
            return item
        if 'children' in item:
            res = find_components_dir(item['children'])
            if res:
                return res
    return None

def process_directory(node, path):
    if not os.path.exists(path):
        os.makedirs(path)
    for child in node.get('children', []):
        child_path = os.path.join(path, child['name'])
        if child['type'] == 'directory':
            process_directory(child, child_path)
        elif child['type'] == 'file':
            print(f"Restoring {child_path}...")
            content = get_file_content(child['uid'])
            if content is not None:
                with open(child_path, 'w') as f:
                    f.write(content)

tree = get_file_tree()
components_dir = find_components_dir(tree)
if components_dir:
    print("Found components directory, restoring...")
    process_directory(components_dir, "/Users/ananda/Documents/SPIDEY/src/components")
    print("Done!")
else:
    print("Could not find components in tree")

