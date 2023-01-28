// Last Modified
let currentDate = document.lastModified;
document.querySelector('#lastModified').textContent = currentDate;

// Year
let date = new Date();
let year = date.getFullYear();
document.querySelector('#ear').innerHTML = year;

// Today's Date
const dateField = document.querySelector(".date");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
dateField.innerHTML = fullDate;

// Hamburger Menu
let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');



//ham from lesson 3
function toggleMenu() {
    document.querySelector("#menu-close").classList.toggle('menu-active')
    document.querySelector("#menu-open").classList.toggle('menu-active')
}

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');

});