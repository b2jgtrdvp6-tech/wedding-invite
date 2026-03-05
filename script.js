const btn = document.getElementById("openBtn");
const content = document.getElementById("content");

btn.addEventListener("click", () => {
    content.classList.remove("hidden");
    content.scrollIntoView({ behavior: "smooth" });
});

const countdown = document.getElementById("countdown");
const weddingDate = new Date("March 14, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdown.innerHTML = `До операции осталось: ${days} дн. ${hours} ч. ${minutes} мин.`;
}, 1000);
