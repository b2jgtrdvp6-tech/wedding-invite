const btn = document.getElementById("openBtn");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
    content.classList.remove("hidden");
    content.scrollIntoView({ behavior: "smooth" });

    // Включение музыки по клику
    music.play();
});

// Эффект печатной машинки
function typeWriter(element, speed = 40) {
    const text = element.innerHTML;
    element.innerHTML = "";
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Запуск печати для всех h2 и p
window.addEventListener("load", () => {
    const elements = document.querySelectorAll("h2, p");
    elements.forEach(el => {
        typeWriter(el, 20);
    });
});

// Таймер
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
