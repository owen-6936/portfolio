import typewriter from "./typewriter.js";

const heading = document.querySelector("#introduction");
const text = "Welcome To My Portfolio: An introduction";

typewriter(heading, text, 50);

const navbarOverlay = document.querySelector("#navbar-overlay");
const navbarList = document.querySelector("#nav-list");
const menuToggle = document.querySelector("#menu-toggle");

function waitForAnimationEnd(element) {
    return new Promise(resolve => {
        const handleAnimationEnd = () => {
            element.removeEventListener('animationend', handleAnimationEnd);
            resolve();
        };
        element.addEventListener('animationend', handleAnimationEnd);
    });
}

async function handleMenuTogle() {
    navbarList.classList.add("swoop-in");
    await waitForAnimationEnd(navbarList);
    navbarOverlay.classList.add("swoop-in");
}

menuToggle.addEventListener("click", handleMenuTogle);