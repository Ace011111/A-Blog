const menuBtn = document.querySelector('.menu-btn');
const lines = document.querySelectorAll('.line');
const navUl = document.querySelector('[nav-ul]');
const themeBtn = document.querySelector('[theme-btn]');
const themeBtnMoonImg = document.querySelector('#theme-btn-moon-img');
const themeBtnSunImg = document.querySelector('#theme-btn-sun-img');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navUl.classList.toggle('active');
});





