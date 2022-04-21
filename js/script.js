let branddrak = document.querySelector ('.branddrak');
let headerbars = document.querySelector('.headerbars');
let meuclose = document.querySelector('.meuclose');

function toggleMenu() {
    branddrak.classList.toggle('hidden');
}
headerbars.addEventListener('click', toggleMenu);
meuclose.addEventListener('click', toggleMenu);