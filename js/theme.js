// Theme changer code

const totalContainer = document.getElementById('total-container');
const leftMain = document.querySelector('[left-main]');
const rightMain = document.querySelector('[right-main]');
const smallArticleContainer = document.querySelectorAll('[small-article-container]');
const para = document.querySelectorAll('.para');
const articleTxtBottom = document.querySelectorAll('.article-txt-bottom');
const hElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const navA = document.querySelectorAll('.nav-a');
const rmDd = document.querySelector('.rm-dd');
const ddLink = document.querySelectorAll('.dd-link');


themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle('active');
});


// navUl.style.backgroundColor = darkGrey;    // only for mobile and possibly tablet
// change guides dropdown hover color in dark mode





//  change box shadow to oppsite color like white
//  change text alpha in dark mode

const themeIconImg = document.querySelector('[theme-icon]');
themeBtn.addEventListener('click', () => {
    switchTheme();
    // themeIconImg.src = './icons/moonIC.svg';
});

const lightBlack = '#1b1b1b';
const darkGrey = 'rgb(70, 70, 70)';
const white = '#fff';
let isDarkTheme = false;


function switchTheme() {
    // Theme changer code below
    if (!isDarkTheme) {
        themeIconImg.classList.toggle('dark');
        
        totalContainer.style.backgroundColor = lightBlack;
        leftMain.style.backgroundColor = darkGrey;
        leftMain.style.color =  white;
        rightMain.style.backgroundColor = lightBlack;
        rightMain.style.color = white;
        
    
        rmDd.style.backgroundColor = darkGrey;
        smallArticleContainer.forEach((smArticleContainer) => {
            smArticleContainer.style.backgroundColor = darkGrey;
            smArticleContainer.style.color = lightBlack;
        })
        ddLink.forEach((ddLink) => {
            ddLink.style.color = white;
        });
    
        para.forEach((para) => {
            para.style.color = white;
        });
        articleTxtBottom.forEach((articleTxtBottom) => {
            articleTxtBottom.style.color = white;
        });
        hElements.forEach((h) => {
            h.style.color = white;
        });
        navA.forEach((navA) => {
            navA.style.color = white;
        });
        lines.forEach((line) => {
            line.style.backgroundColor = white;
        });

        themeBtn.setAttribute('title', 'Switch to light mode');
    }



   
}