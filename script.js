const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("hamburger");

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("active");
    navbar.classList.toggle("active");
})