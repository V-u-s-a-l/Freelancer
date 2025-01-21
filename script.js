
const navSpan = document.querySelector('.nav-span');
const navLinks = document.querySelector('#nav-links');
navSpan.addEventListener('click',navSpanclick);
function navSpanclick(){
    navSpan.classList.toggle('active');
    navLinks.classList.toggle('active');
}

const nav = document.querySelector('nav');
window.addEventListener('scroll',navScrol);
function navScrol(){
    nav.classList.toggle('nav-fixed', window.scrollY > 0);
}