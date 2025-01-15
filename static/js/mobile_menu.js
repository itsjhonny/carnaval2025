// Funcionalidade do Menu Mobile
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Fechar o menu ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});