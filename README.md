# Adiel Ribeiro · Portfólio

Portfólio profissional em React + TypeScript + Vite, publicado em:
https://adielribeiro.github.io/adiel-portfolio/

## Desenvolvimento

```bash
npm ci
npm run dev
```

## Validação e publicação

```bash
npm run lint
npm run build
npm run deploy
```

O deploy usa `gh-pages` e publica `dist/` na branch `gh-pages`. No GitHub, em **Settings → Pages**, a origem deve continuar em **Deploy from a branch → gh-pages → / (root)**. O caminho base do Vite é `/adiel-portfolio/`.

Para publicar de outra máquina, configure a autenticação do GitHub (Git Credential Manager ou SSH). Não coloque tokens no código.

## Onde editar

- `src/data.ts`: perfil, projetos, tecnologias e experiência.
- `src/App.tsx`: seções e navegação.
- `src/portfolio.css`: identidade visual e responsividade.
- `public/adiel-perfil.jpg`: foto do perfil.
- `public/Curriculo_Adiel_Ribeiro_do_Vale_Junior.pdf`: arquivo baixado em todos os botões de currículo.
- `scripts/generate-cv.py`: fonte reproduzível do currículo (Python, ReportLab e fontes DejaVu Sans).

Para atualizar o currículo pelo script:

```bash
python3 -m pip install reportlab
python3 scripts/generate-cv.py
cp public/Curriculo_Adiel_Ribeiro_do_Vale_Junior.pdf src/assets/docs/Adiel_Ribeiro_CV.pdf
npm run deploy
```

As datas de experiência foram mantidas conforme o currículo fornecido. Projetos corporativos são descritos sem código, endpoints ou dados internos. Projetos em desenvolvimento têm seu estágio identificado. As fontes DM Sans e Manrope são carregadas pelo Google Fonts, com fallback local sans-serif.

## Referências de organização

- https://brittanychiang.com/ — apresentação clara de experiência, projetos e tecnologias.
- https://leerob.com/ — comunicação direta e conteúdo objetivo.

O layout e o conteúdo deste portfólio foram implementados para Adiel Ribeiro, sem copiar código dessas referências.
