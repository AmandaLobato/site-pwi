const btnMobile = documento.getElementById('btn-mobile');


function toggleMenu() {
    const nav = documento.getElementById('nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu)