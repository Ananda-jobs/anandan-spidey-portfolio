import json
import os

transcript_path = "/Users/ananda/.gemini/antigravity-ide/brain/9867bfe5-cdbe-4bc5-af4f-6d60763b8fd6/.system_generated/logs/transcript_full.jsonl"
with open(transcript_path, 'r') as f:
    lines = f.readlines()

changes_to_revert = []

for line in lines:
    try:
        data = json.loads(line)
        if 'tool_calls' in data:
            for tool_call in data['tool_calls']:
                # The name might be 'replace_file_content' or 'multi_replace_file_content'
                if tool_call['name'] in ['replace_file_content', 'multi_replace_file_content', 'default_api:replace_file_content', 'default_api:multi_replace_file_content']:
                    changes_to_revert.append(tool_call)
    except:
        pass

changes_to_revert.reverse()

for tool_call in changes_to_revert:
    args = tool_call.get('args', tool_call.get('arguments', {}))
    file_path = args.get('TargetFile')
    if not file_path or not os.path.exists(file_path): continue
    
    # Check if this tool call was from the current or previous session where we did the proportional scaling
    summary = args.get('toolSummary', '')
    desc = args.get('Description', '')
    action = args.get('toolAction', '')
    
    # We want to revert changes related to scaling or clamp
    is_scaling_change = any(x in (summary + desc + action).lower() for x in ['scale', 'clamp', 'proportional', 'mobile'])
    
    if not is_scaling_change:
        continue

    with open(file_path, 'r') as f:
        content = f.read()
    
    changed = False
    
    if 'multi' not in tool_call['name']:
        target = args['TargetContent']
        replacement = args['ReplacementContent']
        # Since I already stripped the style blocks using regex, the replacement won't match exactly.
        # But wait! If I just check if target is not in content, I can't just replace.
        # Actually, let's just write the target content directly if we can't find replacement?
        # NO! I should have just checked out the files from git. Since I can't, I need to restore the TargetContent carefully.
        
        # To be safe, if we find the exact `replacement` we replace it. 
        # Wait, since my regex stripped the style tags, `replacement` is NO LONGER IN THE FILE!
        pass
