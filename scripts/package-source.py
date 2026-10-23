"""Editable source delivery; explicit allowlist excludes credentials and dependencies."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import os, hashlib, json
root=Path(__file__).resolve().parents[1]
out=Path(os.environ.get('SERENITY_OUTPUT','/workspace/outputs/serenity-cinematic'));out.mkdir(parents=True,exist_ok=True)
archive=out/'Serenity-source.zip'
files=[]
for directory in ['src','public','scripts','tests','docs','reference']:
    files.extend(p for p in (root/directory).rglob('*') if p.is_file() and '__pycache__' not in p.parts)
for name in ['package.json','package-lock.json','vite.config.js','playwright.config.js','README.md','AGENTS.md','.gitignore']:
    if (root/name).is_file():files.append(root/name)
with ZipFile(archive,'w',ZIP_DEFLATED,compresslevel=6) as z:
    for p in sorted(files):z.write(p,'serenity-source/'+p.relative_to(root).as_posix())
    # Editable Vite HTML, not the older generated task-preview snapshot.
    z.write(root/'src/index.vite.template','serenity-source/index.html')
with ZipFile(archive) as z:
    assert z.testzip() is None
    assert 'serenity-source/src/video-campus.js' in z.namelist()
    assert all('serenity-source/reference/cinematic-update/campus-loop-'+c+'.mp4' in z.namelist() for c in 'ABC')
report={'archive':str(archive),'bytes':archive.stat().st_size,'files':len(files)+1,'sha256':hashlib.sha256(archive.read_bytes()).hexdigest(),'excludes':['node_modules','.git','.env','compiled task snapshot','old delivery ZIPs'],'originals':'reference/cinematic-update'}
(out/'source-manifest.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
