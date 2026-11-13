"""Gera assets/og-image.png (1200x630), a imagem que aparece ao compartilhar o link.
Uso: python ferramentas/gerar_og_image.py   (requer: pip install pillow)"""
import random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

RAIZ = Path(__file__).resolve().parent.parent
W, H = 1200, 630
CIANO, VERDE = (34, 211, 238), (52, 211, 153)
F = "C:/Windows/Fonts/"

def fonte(nome, tam):
    return ImageFont.truetype(F + nome, tam)

random.seed(7)
img = Image.new("RGB", (W, H), (4, 13, 20))
# fundo em degradê vertical
px = img.load()
for y in range(H):
    t = y / H
    for x in range(W):
        px[x, y] = (int(4 + 4 * (1 - t)), int(13 + 24 * (1 - t)), int(20 + 26 * (1 - t)))
# brilhos (aurora)
glow = Image.new("RGB", (W, H), (0, 0, 0))
d = ImageDraw.Draw(glow)
d.ellipse((-120, -160, 520, 380), fill=(17, 105, 119))
d.ellipse((760, -200, 1320, 300), fill=(26, 105, 76))
glow = glow.filter(ImageFilter.GaussianBlur(110))
img = Image.blend(img, Image.composite(glow, img, glow.convert("L")), 0.9)
d = ImageDraw.Draw(img)
# estrelas
for _ in range(120):
    x, y, r = random.randint(0, W), random.randint(0, int(H * .75)), random.choice([1, 1, 2])
    a = random.randint(110, 255)
    d.ellipse((x, y, x + r, y + r), fill=(a, a, a))
# colinas
for cor, base, amp in (((10, 42, 54), 520, 38), ((7, 32, 42), 560, 30), ((4, 13, 20), 600, 22)):
    pts = [(0, H)] + [(x, base - amp * __import__("math").sin(x / 150 + base)) for x in range(0, W + 20, 20)] + [(W, H)]
    d.polygon(pts, fill=cor)

def degrade_texto(xy, texto, f):
    """Escreve texto com degradê ciano -> verde."""
    mascara = Image.new("L", (W, H), 0)
    ImageDraw.Draw(mascara).text(xy, texto, font=f, fill=255)
    box = mascara.getbbox()
    grad = Image.new("RGB", (W, H))
    gd = ImageDraw.Draw(grad)
    for x in range(box[0], box[2] + 1):
        t = (x - box[0]) / max(1, box[2] - box[0])
        gd.line((x, 0, x, H), fill=tuple(int(CIANO[i] + (VERDE[i] - CIANO[i]) * t) for i in range(3)))
    img.paste(grad, (0, 0), mascara)

# etiqueta
et = fonte("consola.ttf", 26)
d.rounded_rectangle((80, 96, 80 + 470, 96 + 48), radius=24, outline=(34, 211, 238), width=2, fill=(10, 50, 60))
d.ellipse((102, 112, 118, 128), fill=CIANO)
d.text((132, 108), "Disponível para estágio / júnior", font=et, fill=CIANO)
# título
d.text((80, 180), "Marcos Ribeiro", font=fonte("arialbd.ttf", 112), fill=(236, 246, 249))
degrade_texto((80, 300), "Full Stack Júnior", fonte("arialbd.ttf", 96))
d.text((82, 428), "React · TypeScript · Node.js · Java · Spring Boot · Kafka · Docker", font=fonte("arial.ttf", 32), fill=(155, 179, 189))
d.text((82, 478), "marcosfso.github.io", font=fonte("consola.ttf", 30), fill=CIANO)

(RAIZ / "assets").mkdir(exist_ok=True)
img.save(RAIZ / "assets" / "og-image.png", optimize=True)
print("Gerado:", RAIZ / "assets" / "og-image.png")
