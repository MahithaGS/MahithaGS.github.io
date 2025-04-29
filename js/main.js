// Typewriter effect
const tagline = "Aspiring ML Engineer | Tech Enthusiast";
let i = 0;
function typeWriter() {
  if (i < tagline.length) {
    document.getElementById("homeTagline").innerHTML += tagline.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
