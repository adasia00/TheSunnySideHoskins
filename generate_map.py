#!/usr/bin/env python3
"""
Generate the 'Where the Sunny Side Shines' map illustration
for The Sunny-Side Hoskins Family Reunion website.
"""

from PIL import Image, ImageDraw, ImageFilter
import math

# Create a high-resolution map image using PIL
width, height = 1600, 1000
# Create with dark gradient-like background
image = Image.new('RGB', (width, height), color='#0d0d0d')  # Very dark background
draw = ImageDraw.Draw(image, 'RGBA')

# Define color palette - premium gold tones
GOLD_DARK = '#9B7653'      # Darker gold for outlines
GOLD_MID = '#BF953F'       # Mid gold
GOLD_LIGHT = '#D4AF73'     # Light gold
GOLD_BRIGHT = '#E8C547'    # Bright gold for primary locations
ACCENT_GOLD = '#F4D8A8'    # Accent gold
WHITE = '#faf8f5'
CHARCOAL = '#1a1a1a'
GRID_COLOR = '#1a1a1a'

# Coordinates for locations (normalized to map area, then scaled)
# Using approximate lat/long positions then translating to image coordinates
locations = {
    'Marvell, AR': {
        'lat': 34.41,
        'lon': -90.75,
        'label': 'Marvell, AR\n(Where It All Started)',
        'importance': 'primary'
    },
    'Holly Grove, AR': {
        'lat': 34.28,
        'lon': -90.70,
        'label': 'Holly Grove, AR\n(First Child Born)',
        'importance': 'secondary'
    },
    'Grand Rapids, MI': {
        'lat': 42.96,
        'lon': -85.67,
        'label': 'Grand Rapids, MI',
        'importance': 'primary'
    },
    'Dallas, TX': {
        'lat': 32.78,
        'lon': -96.80,
        'label': 'Dallas, TX',
        'importance': 'primary'
    },
    'Atlanta, GA': {
        'lat': 33.75,
        'lon': -84.39,
        'label': 'Atlanta, GA',
        'importance': 'primary'
    },
    'Austin, TX': {
        'lat': 30.27,
        'lon': -97.74,
        'label': 'Austin, TX',
        'importance': 'primary'
    },
    'Memphis, TN': {
        'lat': 35.12,
        'lon': -90.01,
        'label': 'Memphis, TN\n(Reunion Location)',
        'importance': 'primary'
    },
    'Germany': {
        'lat': 51.17,
        'lon': 10.45,
        'label': 'Germany',
        'importance': 'secondary'
    },
}

# Convert lat/lon to image coordinates
# Map bounds: roughly -130 to -60 lon (90 range), 25 to 55 lat (30 range)
def latlon_to_coords(lat, lon):
    # North America bounds
    map_left = 80  # x position of westmost point
    map_right = 1200  # x position of eastmost point
    map_top = 100  # y position of northmost point
    map_bottom = 800  # y position of southmost point
    
    # Approximate bounds including Europe
    lon_min, lon_max = -130, 30  # Include Europe
    lat_min, lat_max = 20, 60
    
    x = map_left + (lon - lon_min) / (lon_max - lon_min) * (map_right - map_left)
    y = map_bottom - (lat - lat_min) / (lat_max - lat_min) * (map_bottom - map_top)
    
    return int(x), int(y)

# Draw decorative border with double lines
border_margin = 40
# Outer border
draw.rectangle(
    [(border_margin, border_margin), 
     (width - border_margin, height - border_margin)],
    outline=GOLD_DARK,
    width=4
)
# Inner border (accent)
draw.rectangle(
    [(border_margin + 8, border_margin + 8), 
     (width - border_margin - 8, height - border_margin - 8)],
    outline=GOLD_MID,
    width=1
)

# Draw ornamental corners with larger accent circles
corner_size = 15
corners = [
    (border_margin, border_margin),
    (width - border_margin, border_margin),
    (border_margin, height - border_margin),
    (width - border_margin, height - border_margin)
]
for corner in corners:
    # Outer circle
    draw.ellipse(
        [(corner[0] - corner_size, corner[1] - corner_size), 
         (corner[0] + corner_size, corner[1] + corner_size)],
        outline=GOLD_BRIGHT,
        width=2
    )
    # Inner circle
    draw.ellipse(
        [(corner[0] - corner_size//2, corner[1] - corner_size//2), 
         (corner[0] + corner_size//2, corner[1] + corner_size//2)],
        fill=GOLD_DARK
    )

# Draw simplified continent outlines
# USA outline (simplified)
usa_outline = [
    (130, 200), (180, 180), (250, 200), (280, 250),  # Northeast
    (300, 260), (320, 280), (340, 300), (350, 350),  # Southeast
    (320, 400), (280, 420), (200, 430), (150, 400),  # South
    (120, 380), (100, 350), (90, 300), (100, 250),   # West
    (110, 200)  # Back to start
]

# Draw USA outline with gold
for i in range(len(usa_outline) - 1):
    x1, y1 = usa_outline[i]
    x2, y2 = usa_outline[i + 1]
    draw.line([(x1, y1), (x2, y2)], fill=GOLD_DARK, width=2)

# Draw Europe outline (simple box for Germany area)
draw.rectangle(
    [(900, 150), (1050, 300)],
    outline=GOLD_DARK,
    width=2
)

# Draw connecting dotted lines between locations
coords_dict = {name: latlon_to_coords(data['lat'], data['lon']) 
               for name, data in locations.items()}

# Primary connection path (creates a journey)
connection_path = [
    'Marvell, AR',
    'Holly Grove, AR',
    'Memphis, TN',
    'Grand Rapids, MI',
    'Dallas, TX',
    'Austin, TX',
    'Atlanta, GA',
    'Germany'
]

# Draw dotted lines connecting locations
for i in range(len(connection_path) - 1):
    start_loc = connection_path[i]
    end_loc = connection_path[i + 1]
    
    if start_loc in coords_dict and end_loc in coords_dict:
        x1, y1 = coords_dict[start_loc]
        x2, y2 = coords_dict[end_loc]
        
        # Draw dotted line
        distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
        dots = int(distance / 15)
        
        for dot in range(dots):
            t = dot / dots if dots > 0 else 0
            x = int(x1 + (x2 - x1) * t)
            y = int(y1 + (y2 - y1) * t)
            draw.ellipse([(x - 2, y - 2), (x + 2, y + 2)], fill=GOLD_DARK)

# Draw sun icons and labels for each location
def draw_sun_icon(x, y, size=25, importance='primary'):
    """Draw a stylized sun icon with premium styling"""
    if importance == 'primary':
        outer_color = GOLD_BRIGHT
        inner_color = GOLD_LIGHT
        outline_color = GOLD_DARK
    else:
        outer_color = GOLD_LIGHT
        inner_color = ACCENT_GOLD
        outline_color = GOLD_MID
    
    # Draw halo/glow effect
    halo_size = size + 8
    draw.ellipse([(x - halo_size, y - halo_size), (x + halo_size, y + halo_size)],
                 outline=GOLD_MID, width=1)
    
    # Outer circle (sun body)
    draw.ellipse([(x - size, y - size), (x + size, y + size)], 
                 fill=outer_color, outline=outline_color, width=2)
    
    # Draw sun rays with varying lengths for dynamic look
    ray_length = size + 15
    num_rays = 8
    for i in range(num_rays):
        angle = (i / num_rays) * 2 * math.pi
        # Alternate ray lengths for visual interest
        current_ray_length = ray_length if i % 2 == 0 else ray_length - 5
        
        # Ray line
        rx1 = x + (size + 3) * math.cos(angle)
        ry1 = y + (size + 3) * math.sin(angle)
        rx2 = x + current_ray_length * math.cos(angle)
        ry2 = y + current_ray_length * math.sin(angle)
        draw.line([(int(rx1), int(ry1)), (int(rx2), int(ry2))], 
                 fill=outline_color, width=2)
    
    # Middle ring
    mid_ring_size = int(size * 0.6)
    draw.ellipse([(x - mid_ring_size, y - mid_ring_size), 
                  (x + mid_ring_size, y + mid_ring_size)],
                 outline=GOLD_MID, width=1)
    
    # Inner circle (core)
    inner_size = int(size * 0.35)
    draw.ellipse([(x - inner_size, y - inner_size), 
                  (x + inner_size, y + inner_size)],
                 fill=inner_color, outline=outline_color, width=1)

# Draw all locations with sun icons
for location_name, data in locations.items():
    if location_name in coords_dict:
        x, y = coords_dict[location_name]
        importance = data['importance']
        
        # Draw sun icon with premium styling
        icon_size = 32 if importance == 'primary' else 24
        draw_sun_icon(x, y, icon_size, importance)
        
        # Draw label box with premium styling
        label = data['label']
        label_y = y + 55 if y < height // 2 else y - 85
        
        box_width = 130 if importance == 'primary' else 110
        box_height = 45 if importance == 'primary' else 40
        
        # Box background with subtle border
        draw.rectangle(
            [(x - box_width // 2, label_y - box_height // 2),
             (x + box_width // 2, label_y + box_height // 2)],
            fill='#0d0d0d',
            outline=GOLD_MID,
            width=1
        )
        
        # Draw connecting line from icon to label
        draw.line([(x, y + icon_size + 2), (x, label_y - box_height // 2)],
                 fill=GOLD_MID, width=1)

# Add decorative title area
title_bg = 60
draw.rectangle(
    [(border_margin, border_margin), 
     (width - border_margin, border_margin + title_bg)],
    fill='#0d0d0d',
    outline=GOLD_MID,
    width=1
)

# Add title and decorative elements
title_y = border_margin + 10
draw.text((width // 2 - 220, title_y), 'Where the Sunny Side Shines', 
         fill=GOLD_BRIGHT)
draw.text((width // 2 - 170, title_y + 28), 'The Hoskins Family Journey Across Generations',
         fill=GOLD_LIGHT)

# Draw footer area
footer_bar_height = 50
draw.rectangle(
    [(border_margin, height - border_margin - footer_bar_height), 
     (width - border_margin, height - border_margin)],
    fill='#0d0d0d',
    outline=GOLD_MID,
    width=1
)
# Draw footer text
footer_text = "Tracing our legacy from Marvell, Arkansas to communities across North America"
draw.text((width // 2 - 350, height - border_margin - 35), footer_text, fill=GOLD_MID)

# Add ornamental compass rose in corner with premium styling
compass_x, compass_y = width - 150, height - 150
compass_size = 35

# Outer circle
draw.ellipse([(compass_x - compass_size, compass_y - compass_size), 
              (compass_x + compass_size, compass_y + compass_size)],
             outline=GOLD_DARK, width=2)

# Decorative inner circle
draw.ellipse([(compass_x - compass_size + 5, compass_y - compass_size + 5), 
              (compass_x + compass_size - 5, compass_y + compass_size - 5)],
             outline=GOLD_MID, width=1)

# Cardinal directions (cross)
draw.line([(compass_x, compass_y - compass_size + 5), (compass_x, compass_y + compass_size - 5)],
         fill=GOLD_LIGHT, width=2)
draw.line([(compass_x - compass_size + 5, compass_y), (compass_x + compass_size - 5, compass_y)],
         fill=GOLD_LIGHT, width=2)

# Diagonal lines (subtle)
draw.line([(compass_x - 20, compass_y - 20), (compass_x + 20, compass_y + 20)],
         fill=GOLD_MID, width=1)
draw.line([(compass_x + 20, compass_y - 20), (compass_x - 20, compass_y + 20)],
         fill=GOLD_MID, width=1)

# Center dot
draw.ellipse([(compass_x - 4, compass_y - 4), (compass_x + 4, compass_y + 4)],
             fill=GOLD_BRIGHT)

# Save the image
output_path = 'public/images/image_0.png'
image.save(output_path, 'PNG', quality=95)
print(f"✅ Map generated successfully: {output_path}")
