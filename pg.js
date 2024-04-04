const botonModoOscuro = document.getElementById('modoOscuro');
let modoOscuroActivado = localStorage.getItem('modoOscuro') === 'true';

document.body.style.backgroundColor = modoOscuroActivado ? '#1f1f1f' : '#F3E5D8';
document.body.style.color = modoOscuroActivado ? '#f1eded' : '#333333';

botonModoOscuro.addEventListener('click', () => {
    modoOscuroActivado = !modoOscuroActivado;
    document.body.style.backgroundColor = modoOscuroActivado ? '#1f1f1f' : '#F3E5D8';
    document.body.style.color = modoOscuroActivado ? '#f1eded' : '#333333';

    localStorage.setItem('modoOscuro', modoOscuroActivado);
});
function redirigir() {
    window.location.href = "index.html";
}
document.querySelector("span:nth-child(2)").addEventListener("click", function() {
    
    window.location.href = "form.html";
});
