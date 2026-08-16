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
            return base64.b64decode(data['data'])
    except Exception as e:
        print(f"Error fetching file {uid}: {e}")
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
                with open(child_path, 'wb') as f:
                    f.write(content)

tree = get_file_tree()
# We want to process the root directory
for item in tree:
    if item['type'] == 'directory' and item['name'] == 'src':
        # src directory is at the root? Let's check tree structure
        pass

# Wait, we know the tree is a flat list of top-level files/directories
# Let's just process the pseudo root
pseudo_root = {'children': tree}
process_directory(pseudo_root, "/Users/ananda/Documents/SPIDEY_RESTORED")
print("Done!")
