const menuBtn = document.querySelector("#nav-icon");
const menu = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});