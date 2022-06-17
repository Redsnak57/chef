// Menu hamburger
const menuHamburger = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuHamburger.addEventListener("click",() => {
    navbar.classList.toggle("active-menu")
})

// Quitte le menu si scroll 
window.onscroll =() => {
    navbar.classList.remove("active-menu");
}