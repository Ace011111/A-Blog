const burger = document.querySelector('.menu-btn');
const lines = document.querySelectorAll('.line');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
})