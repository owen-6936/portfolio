const navbarOverlay = document.querySelector("#navbar-overlay");
const navbarList = document.querySelector("#nav-list");
const menuToggle = document.querySelector("#menu-toggle");
const closeMenuBtn = document.querySelector("#menu-close-btn");

function handleMenuTogle() {
  if (navbarList.classList.contains("swoop-out"))
    navbarList.classList.remove("swoop-out");
  navbarList.classList.add("swoop-in");
  navbarOverlay.classList.add("is-open");
  navbarOverlay.style.display = "block";
}

function handleCloseSidebar() {
  if (navbarList.classList.contains("swoop-in"))
    navbarList.classList.remove("swoop-in");
  navbarList.classList.add("swoop-out");
  navbarOverlay.classList.remove("is-open");
  navbarOverlay.style.display = "none";
}

menuToggle.addEventListener("click", handleMenuTogle);

navbarOverlay.addEventListener("click", handleCloseSidebar);

closeMenuBtn.addEventListener("click", handleCloseSidebar);
