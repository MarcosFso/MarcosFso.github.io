"""
Gera a versão pública do currículo, SEM o telefone.

Uso (depois de atualizar seu currículo original):
    python ferramentas/gerar_curriculo.py "C:/caminho/Curriculo_Marcos_Ribeiro.pdf"

Saída: curriculo/Marcos_Ribeiro_Curriculo.pdf (é esse arquivo que o botão do site baixa).
Requer:  pip install pymupdf
"""
import re
import sys
from pathlib import Path

try:
    import pymupdf as fitz
except ImportError:  # versões antigas
    import fitz

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "curriculo" / "Marcos_Ribeiro_Curriculo.pdf"
TELEFONE = re.compile(r"\s*\|\s*\(?\d{2}\)?\s*9?\d{4}-?\d{4}")


def fonte_parecida():
    """Carlito (usada no PDF) é compatível com Calibri; usa se existir no Windows."""
    for caminho in ("C:/Windows/Fonts/calibri.ttf", "C:/Windows/Fonts/carlito.ttf"):
        if Path(caminho).exists():
            return fitz.Font(fontfile=caminho)
    return fitz.Font("helv")


def main(origem: str):
    doc = fitz.open(origem)
    achou = False
    for pagina in doc:
        for bloco in pagina.get_text("dict")["blocks"]:
            for linha in bloco.get("lines", []):
                texto = "".join(s["text"] for s in linha["spans"])
                if not TELEFONE.search(texto):
                    continue
                achou = True
                novo = TELEFONE.sub("", texto)
                tamanho = linha["spans"][0]["size"]
                caixa = fitz.Rect(linha["bbox"])
                # apaga a linha inteira e reescreve centralizada, sem o telefone
                pagina.add_redact_annot(caixa + (-2, -1, 2, 1), fill=(1, 1, 1))
                pagina.apply_redactions()
                fonte = fonte_parecida()
                largura = fonte.text_length(novo, fontsize=tamanho)
                x = (pagina.rect.width - largura) / 2
                escritor = fitz.TextWriter(pagina.rect)
                escritor.append((x, caixa.y1 - 2.6), novo, font=fonte, fontsize=tamanho)
                escritor.write_text(pagina, color=(0, 0, 0))
    if not achou:
        print("Aviso: não encontrei telefone no PDF. Nada foi alterado, mas o arquivo foi copiado.")
    SAIDA.parent.mkdir(parents=True, exist_ok=True)
    doc.save(SAIDA, garbage=4, deflate=True)
    print("Gerado:", SAIDA)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
