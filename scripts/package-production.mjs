import { cp, mkdir, writeFile, rm } from "node:fs/promises";
import { execFileSync } from "node:child_process";
const output =
  process.env.SERENITY_OUTPUT || "/workspace/outputs/serenity-upgrade";
await rm(`${output}/production`, { recursive: true, force: true });
await mkdir(`${output}/production`, { recursive: true });
await cp("dist", `${output}/production`, { recursive: true });
await cp("scripts/serve-production.mjs", `${output}/production/serve.mjs`);
await writeFile(
  `${output}/production/START-HERE.txt`,
  `Serenity International School\n\nThis is the complete production build. All images, fonts, campus data and JavaScript are included. No API keys or package installation are required to run it.\n\n1. Extract this ZIP.\n2. Install Node.js 22.12 or newer if necessary.\n3. Open a terminal in this folder and run: node serve.mjs\n4. Open http://localhost:5173 in your own browser.\n\nThe website includes a genuine procedural 3D campus, six rooms, a map and rendered galleries when WebGL is unavailable. This is a fictional school; bookings, voting and ideas remain local demonstrations. Public deployment is a separate step.\n\nStatic hosting: upload this folder without serve.mjs and this instruction file. SPA rewrites are provided in _redirects and .htaccess.\n\nOriginal approved reference attachments could not be accessed as files. The logo is a reconstruction; the images are captures of the actual 3D scenes, not the approved original illustration.\n`,
);
await writeFile(`${output}/production/_redirects`, "/* /index.html 200\n");
await writeFile(
  `${output}/production/.htaccess`,
  "<IfModule mod_rewrite.c>\nRewriteEngine On\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteRule . /index.html [L]\n</IfModule>\n",
);
execFileSync(
  "python3",
  [
    "-c",
    `from pathlib import Path\nfrom zipfile import ZipFile,ZIP_DEFLATED\nroot=Path(${JSON.stringify(output + "/production")})\nwith ZipFile(${JSON.stringify(output + "/Serenity-production.zip")},'w',ZIP_DEFLATED) as z:\n for p in root.rglob('*'):\n  if p.is_file():z.write(p,p.relative_to(root))\nwith ZipFile(${JSON.stringify(output + "/Serenity-production.zip")}) as z:\n assert z.testzip() is None\n assert 'index.html' in z.namelist() and 'serve.mjs' in z.namelist()\n print('Verified production ZIP:',len(z.namelist()),'files')\n`,
  ],
  { stdio: "inherit" },
);
