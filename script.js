const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const phrases = ["AI & technology", "intelligent systems", "web experiences", "real-world problems"];
const rotatingText = document.getElementById("rotatingText");
let phraseIndex = 0;
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    rotatingText.style.opacity = "0";
    setTimeout(() => {
      rotatingText.textContent = phrases[phraseIndex];
      rotatingText.style.opacity = "1";
    }, 180);
  }, 2600);
}
rotatingText.style.transition = "opacity .18s ease";
