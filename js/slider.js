const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
let index = 0;

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateSlider();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateSlider();
});

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}
