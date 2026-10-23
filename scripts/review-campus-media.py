"""Reproducible comparison of the supplied videos; never modifies originals."""
import json, subprocess
from pathlib import Path
import numpy as np
from scipy.signal import correlate

root = Path(__file__).resolve().parents[1]
out = root / 'docs/campus-media-review.json'
report = {}
# Architectural patches, avoiding lake, trees, people and sky. Source pixels.
patches = [(296, 235), (490, 259), (748, 320), (1005, 128), (1080, 275), (450, 535)]
for candidate in 'ABC':
    path = root / f'reference/cinematic-update/campus-loop-{candidate}.mp4'
    raw = subprocess.check_output(['ffmpeg','-v','error','-i',str(path),'-vf','fps=4','-f','rawvideo','-pix_fmt','gray','-'])
    frames = np.frombuffer(raw, np.uint8).reshape(-1,720,1280).astype(np.float32)
    drifts = []; errors = []
    for x,y in patches:
        template = frames[0,y-22:y+22,x-25:x+25].copy()
        template -= template.mean()
        shifts=[]
        for frame in frames:
            search=frame[y-30:y+30,x-33:x+33]
            # Zero-mean normalised cross-correlation, ±8 source pixels.
            shape=np.ones(template.shape,np.float32)
            n=template.size
            sums=correlate(search,shape,mode='valid',method='fft')
            squares=correlate(search**2,shape,mode='valid',method='fft')
            corr=correlate(search,template,mode='valid',method='fft') / np.sqrt(np.maximum(squares-sums**2/n,1)*np.sum(template**2))
            row,col=np.unravel_index(np.argmax(corr),corr.shape)
            shifts.append([int(col)-8,int(row)-8])
        drifts.append({'patch':[x,y],'max_displacement_px':max(float(np.linalg.norm(v)) for v in shifts),'last_displacement_px':shifts[-1]})
        errors.append(float(np.abs(frames[-1,y-22:y+22,x-25:x+25]-frames[0,y-22:y+22,x-25:x+25]).mean()))
    report[candidate]={'sample_fps':4,'samples':len(frames),'architectural_tracking':drifts,'roof_seam_mean_luma_difference_255':round(float(np.mean(errors)),3),'whole_frame_seam_mean_luma_difference_255':round(float(np.abs(frames[-1]-frames[0]).mean()),3)}
out.write_text(json.dumps(report,indent=2)+'\n')
print(out.read_text())
