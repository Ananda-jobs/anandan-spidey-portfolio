from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    # Use the top-left pixel as the background color to remove
    bg_color = img.getpixel((0, 0))
    tolerance = 40
    
    new_data = []
    for item in data:
        # Check if pixel is close to bg_color
        r_diff = abs(item[0] - bg_color[0])
        g_diff = abs(item[1] - bg_color[1])
        b_diff = abs(item[2] - bg_color[2])
        
        if r_diff < tolerance and g_diff < tolerance and b_diff < tolerance:
            # Change to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

img_path = '/Users/ananda/.gemini/antigravity-ide/brain/9867bfe5-cdbe-4bc5-af4f-6d60763b8fd6/.user_uploaded/media_1786901498295.png'
remove_background(img_path, '/Users/ananda/Documents/SPIDEY/public/spiderman-logo.png')
remove_background(img_path, '/Users/ananda/Documents/SPIDEY/public/spider-logo.png')
