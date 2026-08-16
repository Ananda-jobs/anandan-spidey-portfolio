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
                if 'src/components/' in file_path:
                    if 'TargetContent' in args and 'style={{' in args['TargetContent'] and 'clamp' in args['TargetContent']:
                        print("=====", file_path, "=====")
                        print(args['TargetContent'])
                    elif 'ReplacementChunks' in args:
                        for chunk in args['ReplacementChunks']:
                            if 'style={{' in chunk['TargetContent'] and 'clamp' in chunk['TargetContent']:
                                print("=====", file_path, "=====")
                                print(chunk['TargetContent'])
    except Exception:
        pass
