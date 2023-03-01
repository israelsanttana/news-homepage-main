const openButton = document.getElementById("open");
const closeButton = document.getElementById('close');
const nav = document.getElementById('nav');
const body = document.body;

openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

function openMenu() {
    nav.classList.add('active');
    openButton.classList.add('hidden');
    closeButton.classList.add('active');
    body.classList.add('no-scroll');
    window.addEventListener('scroll', closeMenuOnScroll);
}

function closeMenu() {
    nav.classList.remove('active');
    openButton.classList.remove('hidden');
    closeButton.classList.remove('active');
    body.classList.remove('no-scroll');
    window.removeEventListener('scroll', closeMenuOnScroll);
}

function closeMenuOnScroll() {
    closeMenu();
}