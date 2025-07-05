import typewriter from "./typewriter.js";

const heading = document.querySelector("#introduction");
const text = "Welcome To My Portfolio: An introduction";
const heroImage = document.querySelector(".hero-image").children[0];

typewriter(heading, text, 50);

if (!heroImage.complete) {
  heroImage.addEventListener("load", (e) => {
    e.target.classList.add("loaded");
  });
} else {
  heroImage.classList.add("loaded");
  console.log("your image highly probably loaded from your browser cache");
}
