import typewriter from "./typewriter.js";

const heading = document.querySelector("#introduction");
const text = "Welcome To My Portfolio: An introduction";
const heroImage = document.querySelector(".hero-image").children[0];

typewriter(heading, text, 50);

const navbarOverlay = document.querySelector("#navbar-overlay");
const navbarList = document.querySelector("#nav-list");
const menuToggle = document.querySelector("#menu-toggle");

function handleMenuTogle() {
    if (navbarList.classList.contains("swoop-out")) navbarList.classList.remove("swoop-out");
    navbarList.classList.add("swoop-in");
    navbarOverlay.style.display = "block";
}

function handleCloseSidebar() {
    if (navbarList.classList.contains("swoop-in")) navbarList.classList.remove("swoop-in");
    navbarList.classList.add("swoop-out");
    navbarOverlay.style.display = "none";
}

menuToggle.addEventListener("click", handleMenuTogle); navbarOverlay.addEventListener("click", handleCloseSidebar);

if (!heroImage.complete) {
    heroImage.addEventListener("load", (e) => {
        e.target.classList.add("loaded");
    });
}
else {
    heroImage.classList.add("loaded");
    console.log("your image highly probably loaded from your browser cache");
}
