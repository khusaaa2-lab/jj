"""Build runtime assets from originals; requires ffmpeg + Python Pillow."""
from pathlib import Path
from PIL import Image
import hashlib, json, subprocess, tempfile

root=Path(__file__).resolve().parents[1]
source=root/'reference/cinematic-update'
dest=root/'public/media/campus';dest.mkdir(parents=True,exist_ok=True)
subprocess.run(['ffmpeg','-v','error','-i',str(source/'campus-loop-A.mp4'),'-an','-c:v','libx264','-preset','slow','-crf','23','-pix_fmt','yuv420p','-movflags','+faststart','-y',str(dest/'campus-A.mp4')],check=True)
with tempfile.TemporaryDirectory() as temp:
    poster=Path(temp)/'poster.png'
    subprocess.run(['ffmpeg','-v','error','-i',str(source/'campus-loop-A.mp4'),'-frames:v','1','-y',str(poster)],check=True)
    Image.open(poster).save(dest/'poster.webp',quality=90,method=6)
im=Image.open(source/'campus-approved.png');im.save(dest/'approved.webp',quality=87,method=6)
im.thumbnail((960,540));im.save(dest/'approved-small.webp',quality=83,method=6)
manifest={
    'chosen':'campus-loop-A.mp4', 'width':1280,'height':720,'durationSeconds':8,'fps':24,
    'runtimeAudio':False,'format':'H.264/yuv420p/faststart',
    'loopTreatment':'Original 8-second loop; last 0.35 seconds dissolve into matching first-frame poster. No concatenation.',
    'anchors':'src/campus-media.js, measured on frame 0 of A',
    'originals':{},'runtime':{},
}
for name in ['campus-loop-A.mp4','campus-loop-B.mp4','campus-loop-C.mp4','campus-approved.png','campus-latest.png','kinetic-reference.mp4']:
    p=source/name;manifest['originals'][name]={'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()}
for p in sorted(dest.iterdir()):
    if p.suffix in ['.webp','.mp4']:manifest['runtime'][p.name]={'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()}
(dest/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('Prepared campus A, matching poster and approved high-resolution still; originals unchanged.')
