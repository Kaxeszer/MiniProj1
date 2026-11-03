# MiniProj1 — Curriculum Vitae SPA

Mini projeto desenvolvido no âmbito da unidade curricular **Programação Web Avançada**, do **Mestrado em Engenharia Informática e Tecnologia Web (UAb / UTAD)**.

## Objetivo

Desenvolver um currículo pessoal interativo numa aplicação Web de página única (*Single Page Application — SPA*), utilizando **Vue.js 3**, HTML5, CSS3 e JavaScript.

## Funcionalidades

- **Quem sou eu?** — apresentação pessoal e informações de contacto.
- **O que faço?** — competências, experiência profissional, percurso académico e certificações.
- **Hobbies?** — apresentação dos interesses pessoais.
- Navegação entre vistas sem recarregamento da página.
- Alternância entre português (PT) e inglês (EN).
- Interface responsiva para diferentes tamanhos de ecrã.
- Animação de fundo inspirada no efeito Matrix, utilizando HTML Canvas.
- Barra de progresso de deslocamento da página.
- Rodapé com ligações para redes sociais.
- Apresentação dinâmica de conteúdos através de Vue.js.

## Tecnologias

- **HTML5** — estrutura e conteúdo.
- **CSS3** — estilos, animações e responsividade.
- **JavaScript** — lógica e interatividade.
- **Vue.js 3** — gestão das vistas, reatividade e apresentação dinâmica dos dados.
- **HTML Canvas** — animação de fundo.

O projeto utiliza uma versão local do Vue.js, sem necessidade de carregamento através de CDN.

## Estrutura do projeto

```text
MiniProj1/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── matrix.js
│   ├── progress.js
│   ├── data/
│   │   ├── certifications.js
│   │   └── experience.js
│   ├── locales/
│   │   ├── pt.js
│   │   └── en.js
│   └── vendor/
│       └── vue.global.prod.js
├── assets/
│   └── svg/
└── README.md
```

## Execução

1. Abrir o projeto no **WebStorm** ou noutro editor de código.
2. Iniciar um servidor Web local.
3. Abrir o ficheiro `index.html` através desse servidor.

Não é necessário instalar dependências com `npm` para executar o projeto.

## Organização do código

O projeto separa as principais responsabilidades:

- `app.js` — inicialização da aplicação Vue, navegação e gestão do idioma.
- `matrix.js` — animação de fundo em Canvas.
- `progress.js` — barra de progresso de deslocamento.
- `data/` — dados de experiência profissional e certificações.
- `locales/` — traduções em português e inglês.
- `style.css` — estilos e regras de responsividade.

## Estado

Funcionalidades principais implementadas. Projeto em fase de revisão, testes e melhorias finais.

## Autor

**Nome:** Luís Carlos Crispim Pereira  
**N.º de estudante:** 2026106983