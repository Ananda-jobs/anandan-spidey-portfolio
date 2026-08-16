from PIL import Image
import os

input_path = "/Users/ananda/.gemini/antigravity-ide/brain/9867bfe5-cdbe-4bc5-af4f-6d60763b8fd6/.user_uploaded/media_1786900939541.jpg"
public_dir = "/Users/ananda/Documents/SPIDEY/public"

try:
    img = Image.open(input_path)
    
    # Make it square if it isn't (crop to center)
    width, height = img.size
    new_size = min(width, height)
    left = (width - new_size) / 2
    top = (height - new_size) / 2
    right = (width + new_size) / 2
    bottom = (height + new_size) / 2
    
    img = img.crop((left, top, right, bottom))
    
    # Save different sizes
    img.resize((32, 32)).save(os.path.join(public_dir, 'favicon.ico'), format='ICO')
    img.resize((16, 16)).save(os.path.join(public_dir, 'favicon-16x16.png'), format='PNG')
    img.resize((32, 32)).save(os.path.join(public_dir, 'favicon-32x32.png'), format='PNG')
    img.resize((180, 180)).save(os.path.join(public_dir, 'apple-touch-icon.png'), format='PNG')
    img.resize((192, 192)).save(os.path.join(public_dir, 'android-chrome-192x192.png'), format='PNG')
    img.resize((512, 512)).save(os.path.join(public_dir, 'android-chrome-512x512.png'), format='PNG')
    
    print("Favicons generated successfully.")
except Exception as e:
    print(f"Error: {e}")
