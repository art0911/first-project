const nav = document.querySelector('.nav_list');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav_link')

function burgerClick() {
    console.log("BURGER");
    nav.classList.toggle('nav_list_active');
    burger.classList.toggle('active');
    navLinks.forEach((link, index) => {
        console.log(index);
    });
}