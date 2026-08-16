import json

transcript_path = "/Users/ananda/.gemini/antigravity-ide/brain/9867bfe5-cdbe-4bc5-af4f-6d60763b8fd6/.system_generated/logs/transcript_full.jsonl"
with open(transcript_path, 'r') as f:
    lines = f.readlines()

for line in lines:
    try:
        data = json.loads(line)
        if 'tool_calls' in data:
            for tool_call in data['tool_calls']:
                args = tool_call.get('args', tool_call.get('arguments', {}))
                file_path = args.get('TargetFile', '')
                if 'HeroTitle.tsx' in file_path:
                    if 'TargetContent' in args:
                        content = args['TargetContent']
                        if content.count('\n') > 70:
                            print("=== FOUND FULL FILE ===")
                            print(content)
                            exit(0)
    except Exception:
        pass
