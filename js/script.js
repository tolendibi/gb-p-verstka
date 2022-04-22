let branddrak = document.querySelector ('.branddrak');
let headerbars = document.querySelector('.headerbars');
let meuclose = document.querySelector('.meuclose');

function toggleMenu() {
    branddrak.classList.toggle('hidden');
}
headerbars.addEventListener('click', toggleMenu);
meuclose.addEventListener('click', toggleMenu);
/*app-js*/
let filterPopup = document.querySelector('.filterPopup');

let filtersLabel = document.querySelector('.filtersLabel');
filtersLabel.addEventListener('click', function() {
    filterPopup.classList.toggle('hiddenn');
});