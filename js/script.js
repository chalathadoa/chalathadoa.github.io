// script slides
const cards = document.querySelectorAll('.card');
let currentSlide = 0;

showSlide(currentSlide);

function showSlide(currentSlide) {
    cards.forEach(card => {
        card.style.display = 'none';
    });
    cards[currentSlide].style.display = 'block';
}

function autoSlide() {
    currentSlide++;
    if (currentSlide >= cards.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}
setInterval(autoSlide, 30000);

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = cards.length - 1;
    }
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= cards.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);