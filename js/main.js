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

navUl.addEventListener('click', () => {
    
});

themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle('active');
});

const totalContainer = document.getElementById('total-container');
const leftMain = document.querySelector('[left-main]');
const rightMain = document.querySelector('[right-main]');
const smallArticleContainer = document.querySelector('[small-article-container]');
const para = document.querySelectorAll('.para');
const articleTxtBottom = document.querySelectorAll('.article-txt-bottom');
const hElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const navA = document.querySelectorAll('.nav-a');
const rmDd = document.querySelector('.rm-dd');
const ddLink = document.querySelectorAll('.dd-link');

let lBlackColor = '#1b1b1b';
let dGrayColor = 'rgb(70, 70, 70)';
totalContainer.style.backgroundColor = lBlackColor;
leftMain.style.backgroundColor = dGrayColor;
leftMain.style.color = 'white';
rightMain.style.backgroundColor = lBlackColor;
rightMain.style.color = 'white';
smallArticleContainer.style.backgroundColor = dGrayColor;
smallArticleContainer.style.color = lBlackColor;

rmDd.style.backgroundColor = dGrayColor;

ddLink.forEach((ddLink) => {
    ddLink.style.color = '#fff';
});

para.forEach((para) => {
    para.style.color = '#fff';
});
articleTxtBottom.forEach((articleTxtBottom) => {
    articleTxtBottom.style.color = '#fff';
});
hElements.forEach((h) => {
    h.style.color = '#fff';
});
navA.forEach((navA) => {
    navA.style.color = '#fff';
});
lines.forEach((line) => {
    line.style.backgroundColor = '#fff';
});

// navUl.style.backgroundColor = dGrayColor;    // only for mobile and possibly tablet
// change guides dropdown hover color in dark mode





//  change box shadow to oppsite color like white
//  change text alpha in dark mode