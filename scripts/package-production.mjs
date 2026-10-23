import { cp, mkdir, writeFile, rm } from "node:fs/promises";
import { execFileSync } from "node:child_process";
const output = process.env.SERENITY_OUTPUT || "/workspace/outputs/serenity-cinematic";
await rm(`${output}/production`, { recursive: true, force: true });
await mkdir(`${output}/production`, { recursive: true });
await cp("dist", `${output}/production`, { recursive: true });
await cp("scripts/serve-production.mjs", `${output}/production/serve.mjs`);
await writeFile(`${output}/production/START-HERE.txt`, `Serenity International School — видеокампус / video campus

1. Распакуйте архив целиком: index.html и папки assets, media, fonts и другие файлы должны оставаться вместе.
2. В терминале этой папки выполните: node serve.mjs (Node.js 22.12+).
3. Откройте http://localhost:5173 в своём браузере. Это адрес на вашем компьютере, не публичная ссылка.
Для production-сервера не нужны npm install, ключи и внешние сервисы. MP4 обслуживается с MIME video/mp4 и поддержкой Range.

Видеокарта: выбран исходный campus-loop-A.mp4, 8 секунд, 1280×720, 24 fps. Аудиодорожка runtime удалена, звук сайта включается отдельно по желанию. Перемещение и масштаб, 13 мест, правая панель (на телефоне — нижняя), десять отдельных панорам, карта, экскурсия, RU/EN и локальные демо сохранены. Горная библиотека справа сверху. Крыши не открываются. Это фиксированный ракурс; максимальное приближение ограничено исходной детализацией 720p.

При отсутствии видео остаётся постер с активными метками. В reduced motion нажмите «Включить видео», если хотите движение. Кнопка сброса показывает весь кампус. Удерживайте и перетаскивайте карту, используйте колесо / + и − / pinch. Клавиатура: Tab для мест; стрелки, +/− и Home на карте; Escape для возврата. Вне карты можно прокручивать страницу.

Здесь только готовая production-сборка. Редактируемые исходники, оригинальные ролики A/B/C, BRIEF и референсы — в отдельном Serenity-source.zip.
Файлы media/campus/manifest.json и media/asset-map.json содержат происхождение ассетов.
Голосования, брони и идеи — локальные демонстрации, без серверных отправок.

Для дальнейшего обновления уже существующего Site используйте весь этот production-каталог. Сборка рассчитана на корень сайта, с fallback index.html для /campus, /learning, /life, /events и /project. _redirects и .htaccess включены. Публикация в рамках этой задачи не выполнялась.

English: extract all files together, run node serve.mjs (Node.js >=22.12), open http://localhost:5173 on your own computer. No dependencies or credentials required. Includes a fixed-view 8-second 720p campus video, pan/zoom, 13 places, ten room panoramas, RU/EN, still fallback, guided tour, opt-in audio and local-only demos. Editable sources and unchanged originals are in Serenity-source.zip. Upload the complete build to the existing site root with SPA rewrites when ready.
`);
await writeFile(`${output}/production/_redirects`, "/* /index.html 200\n");
await writeFile(`${output}/production/.htaccess`, "<IfModule mod_rewrite.c>\nRewriteEngine On\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteRule . /index.html [L]\n</IfModule>\n");
execFileSync("python3", ["-c", `from pathlib import Path
from zipfile import ZipFile,ZIP_DEFLATED
root=Path(${JSON.stringify(output + "/production")})
with ZipFile(${JSON.stringify(output + "/Serenity-production.zip")},'w',ZIP_DEFLATED) as z:
 for p in sorted(root.rglob('*')):
  if p.is_file():z.write(p,p.relative_to(root))
with ZipFile(${JSON.stringify(output + "/Serenity-production.zip")}) as z:
 assert z.testzip() is None
 assert 'index.html' in z.namelist() and 'media/campus/campus-A.mp4' in z.namelist()
 print('Verified production ZIP:',len(z.namelist()),'files')
`], {stdio:"inherit"});
