import typewriter from "./typewriter.js";

const heading = document.querySelector("#introduction");
const text = "Welcome To My Portfolio: An introduction";

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