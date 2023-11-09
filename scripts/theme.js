const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const navLink = document.querySelectorAll('.nav_link');
const menu = document.querySelector('.header__menu');
const title = document.querySelector('.theme_title')
const navList = document.querySelector('.nav_list')
let color = '';
let textColor = '';

if (localStorage.getItem('bg-color') !== null) {
    color = localStorage.getItem('bg-color');
    textColor = localStorage.getItem('text-color');
    header.style.background = color;
    footer.style.background = color;
    menu.style.background = color;
    title.style.color = textColor
    navList.style.background = color
    navLink.forEach((el) => {
        el.style.color = textColor;
    });
}

function choiceDark() {
    console.log('Dark');
    header.style.background = 'black';
    header.style.transition = '1s ease-out 0.5s';
    footer.style.background = 'black';
    footer.style.transition = '1s ease-out 0.5s';
    menu.style.background = 'black';
    menu.style.transition = '1s ease-out 0.5s';
    navList.style.background = 'black';
    navList.style.transition = '1s ease-out 0.5s';
    navLink.forEach((el) => {
        el.style.transition = '1s ease-out 0.5s';
        el.style.color = 'white';
    });
    title.style.transition = '1s ease-out 0.5s';
    title.style.color = 'white';
    localStorage.setItem('bg-color', 'black');
    localStorage.setItem('text-color', 'white');
}



function choiceWhite() {
    console.log('White');
    header.style.background = 'rgb(87, 87, 255)';
    header.style.transition = '1s ease-out 0.5s';
    footer.style.background = 'rgb(87, 87, 255)';
    footer.style.transition = '1s ease-out 0.5s';
    menu.style.background = 'rgb(87, 87, 255)';
    menu.style.transition = '1s ease-out 0.5s';
    navList.style.background = 'rgb(87, 87, 255)';
    navList.style.transition = '1s ease-out 0.5s';
    navLink.forEach((el) => {
        el.style.transition = '1s ease-out 0.5s';
        el.style.color = 'rgb(255, 143, 143)';
    });
    title.style.transition = '1s ease-out 0.5s';
    title.style.color = 'rgb(255, 143, 143)';
    localStorage.setItem('bg-color', 'rgb(87, 87, 255)');
    localStorage.setItem('text-color', 'rgb(255, 143, 143)');
}