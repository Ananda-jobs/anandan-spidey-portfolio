from PIL import Image

def remove_black_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if the pixel is black or very dark
        if item[0] < 30 and item[1] < 30 and item[2] < 30:
            # Change to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

remove_black_background('/Users/ananda/.gemini/antigravity-ide/brain/9867bfe5-cdbe-4bc5-af4f-6d60763b8fd6/.user_uploaded/media_1786900939541.jpg', '/Users/ananda/Documents/SPIDEY/public/spiderman-logo.png')
remove_black_background('/Users/ananda/.gemini/antigravity-ide/brain/9867bfe5-cdbe-4bc5-af4f-6d60763b8fd6/.user_uploaded/media_1786900939541.jpg', '/Users/ananda/Documents/SPIDEY/public/spider-logo.png')
