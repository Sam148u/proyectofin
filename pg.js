const botonModoOscuro = document.getElementById('modoOscuro');
let modoOscuroActivado = false;

botonModoOscuro.addEventListener('click', () => {
    modoOscuroActivado = !modoOscuroActivado;
    document.body.style.backgroundColor = modoOscuroActivado ? '#333' : '#fff';
    document.body.style.color = modoOscuroActivado ? '#fff' : '#333';
});
function redirigir() {
    window.location.href = "index.html";
}
