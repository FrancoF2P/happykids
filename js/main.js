const ham = document.querySelector('.ham');
const usuario = document.querySelector('.usuario');
const enlaces = document.querySelector('.lista');
const nav = document.querySelector('.nav');

ham.addEventListener('click', () => {
    usuario.classList.toggle('activado');
    enlaces.classList.toggle('activado');
    nav.classList.toggle('activado');
});