const menuBtn = document.querySelector('.menu-btn');
const lines = document.querySelectorAll('.line');
const navUl = document.querySelector('[nav-ul]');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navUl.classList.toggle('active');
});

navUl.addEventListener('click', () => {
    
})
