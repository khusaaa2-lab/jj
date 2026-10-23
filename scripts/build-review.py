"""Build a self-contained visual review from durable browser captures."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import base64, io, json, os

root = Path(os.environ.get('SERENITY_OUTPUT', '/workspace/outputs/serenity-upgrade/recheck'))
rooms = [('main-hall', 'Main Hall'), ('library', 'Hillside Library'),
         ('learning-studio', 'Learning Studio'), ('technology-lab', 'Technology Lab'),
         ('dining-hall', 'Dining Hall'), ('games-lounge', 'Games Lounge')]
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 24)
small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 17)
board = Image.new('RGB', (1600, 1740), '#f6f2e8')
draw = ImageDraw.Draw(board)
draw.text((35, 20), 'SERENITY / SIX FURNISHED 3D ROOMS', '#164f48', font=font)
for i, (key, title) in enumerate(rooms):
    x, y = 35 + i % 2 * 790, 85 + i // 2 * 545
    draw.text((x, y), title, '#203b36', font=font)
    im = Image.open(root / 'renders' / f'interior-{key}.png').convert('RGB')
    board.paste(im.resize((750, 469)), (x, y + 43))
board.save(root / 'six-interiors.png')

comparison = Image.new('RGB', (1600, 1220), '#f6f2e8')
draw = ImageDraw.Draw(comparison)
draw.text((35, 20), 'SERENITY / REPEAT REVIEW / BEFORE AND AFTER', '#164f48', font=font)
pairs = [('Campus', root/'before/campus.png', root/'renders/campus.png'),
         ('Library selection', root/'before/library.png', root/'after/library.png')]
for row, (title, before, after) in enumerate(pairs):
    y = 80 + row * 555
    draw.text((35, y), title, '#203b36', font=font)
    for col, (label, path) in enumerate([('BEFORE', before), ('AFTER', after)]):
        x = 35 + col * 790
        draw.text((x, y+40), label, '#65715c', font=small)
        im = Image.open(path).convert('RGB')
        im.thumbnail((750, 469))
        comparison.paste(im, (x, y+75))
comparison.save(root/'comparison.png')

def embedded(path):
    im = Image.open(path).convert('RGB')
    im.thumbnail((1440, 1200))
    buf = io.BytesIO()
    im.save(buf, format='WEBP', quality=87)
    return 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode()

gallery = ''.join(f'<figure><img src="{embedded(root/"renders"/f"interior-{key}.png")}" alt="Actual 3D {title}"><figcaption>{title}</figcaption></figure>' for key, title in rooms)
compare_html = ''
for i, (title, before, after) in enumerate(pairs):
    compare_html += f'''<section><h2>{title}: до / после</h2><div class="compare" id="compare-{i}"><img src="{embedded(before)}" alt="До"><img class="after" src="{embedded(after)}" alt="После"></div><label>Передвигайте ползунок для сравнения <input type="range" value="50" min="0" max="100" aria-label="Сравнить {title}" oninput="document.getElementById('compare-{i}').style.setProperty('--cut',this.value+'%')"></label><p class="note">Слева — предыдущий результат, справа — повторная доработка.</p></section>'''
results = json.loads((root/'browser-tests.json').read_text())['stats']
assert results['unexpected'] == 0, 'Browser checks have unresolved failures'
passed = results['expected']
html = f'''<!doctype html><html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Serenity — повторная проверка</title><style>
*{{box-sizing:border-box}}body{{margin:0;background:#f6f2e8;color:#203b36;font:16px/1.75 system-ui}}main{{max-width:1280px;margin:auto;padding:45px 6%}}h1,h2{{font-family:Georgia;font-weight:400}}h1{{font-size:clamp(34px,5vw,57px);line-height:1.13}}h2{{font-size:30px;margin-top:55px}}.eyebrow{{font-size:11px;letter-spacing:2px}}.note,figcaption{{font-size:13px;color:#526b59}}img{{display:block;width:100%;border-radius:5px}}.gallery{{display:grid;grid-template-columns:1fr 1fr;gap:28px}}figure{{margin:0}}figcaption{{margin-top:8px}}.compare{{--cut:50%;position:relative;aspect-ratio:1.6;overflow:hidden;border-radius:5px;background:#dce3cd}}.compare img{{position:absolute;width:100%;height:100%;object-fit:cover}}.compare .after{{clip-path:inset(0 0 0 var(--cut))}}input{{width:100%;accent-color:#164f48}}.mobile{{display:flex;gap:28px;align-items:flex-start}}.mobile img{{width:min(45%,390px)}}.status{{background:#e5e9da;padding:22px;border-left:3px solid #164f48}}@media(max-width:650px){{.gallery{{grid-template-columns:1fr}}main{{padding:30px 6%}}}}
</style><main><p class="eyebrow">SERENITY INTERNATIONAL SCHOOL / REPEAT REVIEW</p><h1>Заново сверено<br>с вашим заданием.</h1><p>Исправлены окна, соединения корпусов, склон библиотеки и нижний дворик игровой. Дополнены все шесть комнат, оставлена одна панель выбора, исправлены история браузера и мобильный ракурс.</p><div class="status"><strong>Проверено:</strong> 10 проверок данных, {passed} браузерных сценариев, production build, пять ширин, отдельный режим без WebGL. Двухпальцевое вращение проверено эмуляцией касаний Chromium. Все изображения ниже сняты с настоящих сцен.</div>{compare_html}<section><h2>Шесть интерьеров</h2><div class="gallery">{gallery}</div></section><section><h2>На телефоне</h2><div class="mobile"><img src="{embedded(root/'after/mobile-library-panel.png')}" alt="Выбранная библиотека на мобильном"><img src="{embedded(root/'after/mobile-games.png')}" alt="Мобильная игровая"></div></section><section><h2>Ограничения</h2><p>Архитектура остаётся стилизованной процедурной моделью. Она не является точной оцифровкой утверждённой иллюстрации. Исходные файлы логотипа и иллюстрации недоступны: SVG — реконструкция, снимки — результат рендера. Физический телефон не использовался. Публичная публикация — отдельный шаг.</p><p>Полная сверка: AUDIT.md. Проверки: VALIDATION.md. Сайт со всеми ресурсами: Serenity-production.zip; распаковать и запустить node serve.mjs с Node.js 22.12+.</p></section></main></html>'''
(root/'Review.html').write_text(html)
print('Created self-contained Review.html, comparison.png and six-interiors.png')
