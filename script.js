const slides = document.querySelectorAll(".slide");
let index = 0;

// MUSIC AUTOPLAY FIX iOS
const music = document.getElementById("bg-music");
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
  refreshAnimation();
}

document.addEventListener("click", e => {
  if (e.target.dataset.next !== undefined) {
    index = Math.min(index + 1, slides.length - 1);
    showSlide(index);
  }
  if (e.target.dataset.prev !== undefined) {
    index = Math.max(index - 1, 0);
    showSlide(index);
  }
});

// RE-TRIGGER ANIMATION
function refreshAnimation() {
  document.querySelectorAll(".animate").forEach(el => {
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = "";
  });
}

// PHOTO SLIDER
const photos = document.querySelectorAll(".photo");
let p = 0;
setInterval(() => {
  photos[p].classList.remove("active");
  p = (p + 1) % photos.length;
  photos[p].classList.add("active");
}, 2500);
