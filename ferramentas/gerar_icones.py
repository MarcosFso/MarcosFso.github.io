"""Gera o favicon e o ícone de perfil (iniciais MR no degradê ciano -> verde).

Uso: python ferramentas/gerar_icones.py
Saídas (em assets/): favicon.svg, favicon-32.png, apple-touch-icon.png, icone-linkedin-400.png
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "assets"
C1, C2 = (34, 211, 238), (52, 211, 153)   # ciano -> verde
ESCURO = (4, 16, 31)
FONTE = r"C:\Windows\Fonts\seguibl.ttf"


def gradiente(n):
    img = Image.new("RGB", (n, n))
    px = img.load()
    for y in range(n):
        for x in range(n):
            t = (x + y) / (2 * (n - 1))
            px[x, y] = tuple(round(a + (b - a) * t) for a, b in zip(C1, C2))
    return img


def icone(n, raio=0.22, fator=0.46):
    s = 4  # supersampling para bordas suaves
    g = gradiente(n * s)
    d = ImageDraw.Draw(g)
    fonte = ImageFont.truetype(FONTE, int(n * s * fator))
    d.text((n * s / 2, n * s / 2), "MR", font=fonte, fill=ESCURO, anchor="mm")
    mascara = Image.new("L", (n * s, n * s), 0)
    ImageDraw.Draw(mascara).rounded_rectangle((0, 0, n * s - 1, n * s - 1), radius=int(n * s * raio), fill=255)
    saida = Image.new("RGBA", (n * s, n * s), (0, 0, 0, 0))
    saida.paste(g, (0, 0), mascara)
    return saida.resize((n, n), Image.LANCZOS)


icone(32, .2, .5).save(SAIDA / "favicon-32.png")
icone(180, .22, .46).save(SAIDA / "apple-touch-icon.png")
# LinkedIn recorta em círculo/quadrado: sem cantos arredondados, o app aplica a máscara
icone(400, 0, .44).convert("RGB").save(SAIDA / "icone-linkedin-400.png")

(SAIDA / "favicon.svg").write_text(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">'
    '<stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#34d399"/></linearGradient></defs>'
    '<rect width="64" height="64" rx="14" fill="url(#g)"/>'
    '<text x="32" y="43" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" '
    'font-size="29" font-weight="900" fill="#04101f">MR</text></svg>',
    encoding="utf-8",
)
print("ok:", *sorted(p.name for p in SAIDA.glob("*") if p.is_file()))
