const botonModoOscuro = document.getElementById('modoOscuro');
const recipeCard = document.querySelector('.recipe-card-1');
let modoOscuroActivado = localStorage.getItem('modoOscuro') === 'true';

document.body.style.backgroundColor = modoOscuroActivado? '#1f1f1f' : '#F3E5D8';
document.body.style.color = modoOscuroActivado? '#f1eded' : '#333333';





botonModoOscuro.addEventListener('click', () => {
    modoOscuroActivado =!modoOscuroActivado;
    localStorage.setItem('modoOscuro', modoOscuroActivado);

    document.body.style.backgroundColor = modoOscuroActivado? '#1f1f1f' : '#F3E5D8';
    document.body.style.color = modoOscuroActivado? '#f1eded' : '#333333';

    
});
function redirigir() {
    window.location.href = "index.html";
}
document.querySelector("span:nth-child(2)").addEventListener("click", function() {
    
    window.location.href = "form.html";
});
const recipeCard1 = document.getElementById('recipe1');

recipeCard1.addEventListener('click', () => {
    window.location.href = 'recipe1.html';
});
const recipeCard2 = document.getElementById('recipe2');

recipeCard2.addEventListener('click', () => {
    window.location.href = 'recipe2.html';
});
const recipeCard3 = document.getElementById('recipe3');

recipeCard3.addEventListener('click', () => {
    window.location.href = 'recipe2.html';
});const recipeCard4 = document.getElementById('recipe4');

recipeCard2.addEventListener('click', () => {
    window.location.href = 'recipe2.html';
});const recipeCard5 = document.getElementById('recipe5');

recipeCard5.addEventListener('click', () => {
    window.location.href = 'recipe2.html';
});const recipeCard6 = document.getElementById('recipe6');

recipeCard6.addEventListener('click', () => {
    window.location.href = 'recipe2.html';
});
