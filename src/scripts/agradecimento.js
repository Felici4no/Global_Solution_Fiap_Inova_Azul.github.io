document.addEventListener('DOMContentLoaded', function() {
    // Recupera os dados do localStorage
    const nome = localStorage.getItem('nome');
    const sobrenome = localStorage.getItem('sobrenome');

    // Atualiza o conteúdo do h1 com os dados
    const h1 = document.getElementById('confirmationMessage');
    if (nome && sobrenome) {
        h1.innerText = `Obrigado por se inscrever, ${nome} ${sobrenome}!`;
    } else {
        h1.innerText = 'Obrigado por se inscrever!';
    }
});

// scripts.js

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
const totalItems = track.children.length;
const visibleItems = 2;

nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const slideWidth = track.children[0].getBoundingClientRect().width;
    const amountToMove = slideWidth * currentIndex;
    track.style.transform = `translateX(-${amountToMove}px)`;
}

