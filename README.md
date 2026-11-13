# Portfólio · Marcos Ribeiro

Site estático (HTML, CSS e JavaScript puro). Abra `index.html` ou publique no GitHub Pages.

## Como atualizar

| O que | Como |
|---|---|
| Textos, projetos, tecnologias, "estudando agora", WhatsApp | Edite o bloco `DADOS` no topo de `js/main.js` |
| Cores | Variáveis `--acc` e `--acc2` no topo de `css/style.css` |
| Foto | Salve como `fotos/marcos.jpg` (sem foto, aparece "MR") |
| Currículo | Gere de novo: `python ferramentas/gerar_curriculo.py "caminho/do/Curriculo.pdf"` (remove o telefone e salva em `curriculo/`) |
| Imagem de compartilhamento | `python ferramentas/gerar_og_image.py` (cria `assets/og-image.png`) |
| Novo projeto | Copie um item de `projetos` em `DADOS` e troque os dados |

Se o endereço final do site não for `marcosfso.github.io`, troque-o nas tags `og:url` e `og:image` do `index.html` e em `ferramentas/gerar_og_image.py`.

Logos das tecnologias: [Devicon](https://devicon.dev) (licença MIT), salvos em `assets/icons/`.
