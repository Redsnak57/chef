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

const tabs = [...document.querySelectorAll(".tab")]

tabs.forEach(tab => tab.addEventListener("click", tabsAnimation))

function tabsAnimation(e){
    const tabContents = [...document.querySelectorAll(".tab-content")]

    const indexRemove = tabs.findIndex(tab => tab.classList.contains("active-tab"))

    tabs[indexRemove].classList.remove("active-tab");
    tabContents[indexRemove].classList.remove("active-tab-content");

    const indexToShow = tabs.indexOf(e.target)

    tabs[indexToShow].classList.add("active-tab");
    tabContents[indexToShow].classList.add("active-tab-content");
}