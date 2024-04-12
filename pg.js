const botonModoOscuro = document.getElementById('modoOscuro');

let modoOscuroActivado = localStorage.getItem('modoOscuro') === 'true';

function toggleDarkMode() {
  modoOscuroActivado =!modoOscuroActivado;
  localStorage.setItem('modoOscuro', modoOscuroActivado);

  document.body.classList.toggle('dark-mode', modoOscuroActivado);
}

botonModoOscuro.addEventListener('click', toggleDarkMode);


function redirigir() {
    window.location.href = "index.html";
}
document.querySelector("span:nth-child(2)").addEventListener("click", function() {
    
    window.location.href = "form.html";
});
const recipeCards = document.querySelectorAll('.recipe-card');

recipeCards.forEach((card) => {
  card.addEventListener('click', () => {
    window.location.href = "recipe1.html";
  });
});
const recipe = document.querySelectorAll('.recipe');

recipe.forEach((recipe) => {
  recipe.addEventListener('click', () => {
    window.location.href = "recipe2.html";
  });
});

