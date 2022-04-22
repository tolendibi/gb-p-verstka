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
let filtersIcon = document.querySelector('.filtersIcon');
let filtersLabel = document.querySelector('.filtersLabel');

filtersLabel.addEventListener('click', function() {
    filterPopup.classList.toggle('hiddenn');
    filtersLabel.classList.toggle('filterslabelpink');
    filtersIcon.classList.toggle('filterslabelpink');
    if (filtersIcon.getAttribute('src') === '../images/filter.svg') {
        filtersIcon.setAttribute('src','../images/filterhover.svg')
    } else 
    filtersIcon.setAttribute('src','../images/filter.svg')
});
// let filtersIcon = document.querySelector('.filtersIcon');
// filtersIcon.addEventListener('click', function() {
//     filterPopup.classList.toggle('hiddenn');
//     filtersIcon.classList.toggle('filtersIconpink');
// });
/*app-js end*/