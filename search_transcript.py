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
                        print("Found TargetContent:", args['TargetContent'])
                        exit(0)
                    elif 'ReplacementChunks' in args:
                        for chunk in args['ReplacementChunks']:
                            print("Found Chunk TargetContent:", chunk['TargetContent'])
                        exit(0)
    except Exception as e:
        pass
