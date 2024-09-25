let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    items.forEach((item, i) => {
        item.style.transform = `translateX(-${index * 100}%)`;
        dots[i].classList.remove('active');
    });
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

setInterval(nextSlide, 2000); // Troca a imagem a cada 5 segundos
