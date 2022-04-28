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
let filterCategoryHeader = document.querySelectorAll('.filterCategoryHeader');
filterCategoryHeader.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filtersizes = document.querySelector('.filtersizes');
let filtersizewrap = document.querySelector('.filtersizewrap');
filtersizewrap.addEventListener('click', function() {
    filtersizes.classList.toggle('hidden');
});

// let sliderimg = document.querySelector('.sliderimg');
// let slider-button = document.querySelector('.slider-button');
// slider-button.addEventListener('click', function() {
//     sliderimg.classList.toggle('hidden');
// });


// let filtersIcon = document.querySelector('.filtersIcon');
// filtersIcon.addEventListener('click', function() {
//     filterPopup.classList.toggle('hiddenn');
//     filtersIcon.classList.toggle('filtersIconpink');
// });
/*app-js end*/