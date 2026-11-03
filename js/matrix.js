const canvas = document.getElementById("matrix-canvas");

if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");

    if (ctx) {
        let W;
        let H;
        let cols;
        let drops;
        let intervalId = null;

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

        function start() {
            if (intervalId === null) {
                intervalId = window.setInterval(draw, 40);
            }
        }

        function stop() {
            if (intervalId !== null) {
                window.clearInterval(intervalId);
                intervalId = null;
            }
        }

        init();
        window.addEventListener("resize", init);

        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                stop();
            } else {
                start();
            }
        });

        if (!document.hidden) {
            start();
        }
    }
}