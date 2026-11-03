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