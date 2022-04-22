/*menu start*/
let branddrak = document.querySelector ('.branddrak');
let headerbars = document.querySelector('.headerbars');
let meuclose = document.querySelector('.meuclose');

function toggleMenu() {
    branddrak.classList.toggle('hidden');
}
headerbars.addEventListener('click', toggleMenu);
meuclose.addEventListener('click', toggleMenu);
/*menu end*/
/*app-js sart*/

let filterPopup = document.querySelector('.filterPopup');

let filtersLabel = document.querySelector('.filtersLabel');
filtersLabel.addEventListener('click', function() {
    filterPopup.classList.toggle('hiddenn');
});
let filtersIcon = document.querySelector('.filtersIcon');
filtersIcon.addEventListener('click', function() {
    filterPopup.classList.toggle('hiddenn');
});
/*app-js end*/