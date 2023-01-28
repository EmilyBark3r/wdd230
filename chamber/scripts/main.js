// Last Modified
let currentDate = document.lastModified;
document.querySelector('#lastModified').textContent = currentDate;

// Year
let date = new Date();
let year = date.getFullYear();
document.querySelector('#year').innerHTML = year;

// Today's Date
const dateField = document.querySelector(".date");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
dateField.innerHTML = fullDate;

// Hamburger Menu
let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');

});
