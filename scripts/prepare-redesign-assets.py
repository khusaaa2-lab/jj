"""Optimize all eleven supplied references without changing their composition."""
from pathlib import Path
from PIL import Image
import hashlib
import json

source = Path('/workspace/attachments/serenity-redesign/serenity-generated-assets')
extra = Path('/workspace/attachments/serenity-redesign-extra/serenity-extra-interiors')
target = Path('public/media')
target.mkdir(parents=True, exist_ok=True)
consumers = {
    'campus-master': ['home hero', 'campus loading / WebGL fallback', 'architectural reference'],
    'library-panorama': ['library interior', 'home library chapter'],
    'classroom-panorama': ['learning-studio interior', 'learning page'],
    'games-panorama': ['games-lounge interior', 'school life / booking'],
    'main-hall-panorama': ['main-hall interior', 'home welcome chapter'],
    'tech-lab-panorama': ['technology-lab interior', 'home making chapter'],
    'dining-panorama': ['dining-a / dining-hall interior', 'school life'],
    'workshop-panorama': ['workshop interior'],
    'garden-dining-panorama': ['dining-b / garden-dining interior'],
    'quiet-room-panorama': ['quiet-room upstairs interior'],
    'residence-panorama': ['residence interior'],
}
manifest = {'source': ['User supplied serenity-generated-assets.zip', 'User supplied serenity-extra-interiors.zip'], 'panoramaType': 'bounded perspective; not 360 degrees', 'assets': []}
for name, uses in consumers.items():
    path = source / (name + '.png')
    if not path.exists():
        path = extra / (name + '.png')
    with Image.open(path) as raw:
        im = raw.convert('RGB')
        im.save(target / (name + '.webp'), 'WEBP', quality=87, method=6)
        preview = im.copy()
        preview.thumbnail((1000, 600))
        preview.save(target / (name + '-small.webp'), 'WEBP', quality=78, method=6)
        manifest['assets'].append({'id': name, 'src': '/media/' + name + '.webp', 'preview': '/media/' + name + '-small.webp', 'width': im.width, 'height': im.height, 'bytes': (target / (name + '.webp')).stat().st_size, 'originalSHA256': hashlib.sha256(path.read_bytes()).hexdigest(), 'consumers': uses})
(target / 'asset-map.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
print(json.dumps(manifest, indent=2))
