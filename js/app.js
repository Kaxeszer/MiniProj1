/* global Vue */
// noinspection JSUnresolvedReference

const { createApp } = Vue;

createApp({
    data() {
        return {
            vistaAtiva: "quem-sou-eu",
            formacaoAtiva: 3
        };
    }
}).mount("#app");

const canvas = document.getElementById("matrix-canvas");

if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");

    if (ctx) {
        let W;
        let H;
        let cols;
        let drops;

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコサシスセソ";
        const fs = 14;

        function init() {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
            cols = Math.floor(W / fs);
            drops = Array(cols).fill(1);
        }

        function draw() {
            ctx.fillStyle = "rgba(2,12,2,0.05)";
            ctx.fillRect(0, 0, W, H);

            ctx.font = fs + "px Share Tech Mono, monospace";

            for (let i = 0; i < drops.length; i++) {
                const c = chars[Math.floor(Math.random() * chars.length)];

                ctx.fillStyle = Math.random() > 0.95 ? "#fff" : "#00ff41";
                ctx.fillText(c, i * fs, drops[i] * fs);

                if (drops[i] * fs > H && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        init();

        window.addEventListener("resize", init);
        window.setInterval(draw, 40);
    }
}

const progress = document.getElementById("progress");

function atualizarProgresso() {
    if (!progress) {
        return;
    }

    const alturaDisponivel =
        document.documentElement.scrollHeight - window.innerHeight;

    const percentagem = alturaDisponivel > 0
        ? (window.scrollY / alturaDisponivel) * 100
        : 0;

    progress.style.width =
        `${Math.min(100, Math.max(0, percentagem))}%`;
}

window.addEventListener("scroll", atualizarProgresso, { passive: true });
window.addEventListener("resize", atualizarProgresso);

atualizarProgresso();