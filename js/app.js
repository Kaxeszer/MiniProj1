/* global Vue */
const { createApp } = Vue;

createApp({
    data() {
        return {
            vistaAtiva: "quem-sou-eu",
            formacaoAtiva: 3,
            idioma: "pt",
            certificacoes: window.portfolioCertifications,
            experiencia: window.portfolioExperience
        };
    },

    methods: {
        textoCurso(texto) {
            return texto.key ? this.t(texto.key) : texto.literal;
        },
        t(chave) {
            const obterTexto = (idioma) => chave.split(".").reduce(
                (valor, parte) => valor?.[parte],
                window.portfolioLocales[idioma]
            );

            return obterTexto(this.idioma) ?? obterTexto("pt") ?? chave;
        }
    },

    watch: {
        idioma(novoIdioma) {
            document.documentElement.lang = novoIdioma === "pt" ? "pt-PT" : "en";
        },
        vistaAtiva() {
            this.$nextTick(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });
            });
        }
    }
}).mount("#app");