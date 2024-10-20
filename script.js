function scrollToContact() {
    const contact = document.querySelector(".contact");
    contact.scrollIntoView({behavior: "smooth"});
}

function toggleMenu() {
    const mobileMenu = document.querySelector(".mobile-nav");
    mobileMenu.classList.toggle("toggle-m");
}

const menu = document.querySelector("#ham-menu");
menu.addEventListener("click", toggleMenu);

const times = document.querySelector("#times");
times.addEventListener("click", toggleMenu);

const anchorLists = [...document.querySelector(".mobile-nav").children[1].children];
anchorLists.forEach((item) => {
    item.addEventListener("click", toggleMenu);    
})