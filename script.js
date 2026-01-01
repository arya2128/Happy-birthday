/* ===============================
   GLOBAL VARIABLE
================================ */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

/* ===============================
   INIT
================================ */
showSlide(currentSlide);
initButtons();
initMusic();

/* ===============================
   SHOW SLIDE
================================ */
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.display = "none";

    if (i === index) {
      slide.style.display = "block";
      setTimeout(() => {
        slide.classList.add("active");
        animateContent(slide);
      }, 50);
    }
  });
}

/* ===============================
   ANIMATE CONTENT (MASUK)
================================ */
function animateContent(slide) {
  const items = slide.querySelectorAll(".content, img, h1, h2, p");

  items.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";

    setTimeout(() => {
      el.style.transition = "all 0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, i * 120);
  });

  // KHUSUS SLIDE 4 (GALERI)
  if (slide.querySelector(".final-gallery")) {
    animateGallery(slide.querySelector(".final-gallery"));
  }
}

/* ===============================
   FINAL GALLERY (SLIDE 4)
   FOTO MUNCUL SATU-SATU
================================ */
function animateGallery(gallery) {
  const photos = gallery.querySelectorAll("img");

  photos.forEach((img, i) => {
    img.style.opacity = "0";
    img.style.transform = "translateY(60px)";

    setTimeout(() => {
      img.style.transition = "all 0.7s ease";
      img.style.opacity = "1";
      img.style.transform = "translateY(0)";
    }, i * 250);
  });
}

/* ===============================
   BUTTON NEXT & PREV
================================ */
function initButtons() {
  document.querySelectorAll("[data-next]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
      }
    });
  });

  document.querySelectorAll("[data-prev]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
      }
    });
  });
}

/* ===============================
   BACK BUTTON BROWSER FIX
================================ */
history.replaceState({ slide: 0 }, "");

window.addEventListener("popstate", () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

/* ===============================
   BACKGROUND MUSIC (AMAN HP)
================================ */
function initMusic() {
  const music = document.getElementById("bg-music");
  if (!music) return;

  document.addEventListener(
    "click",
    () => {
      if (music.paused) {
        music.muted = false;
        music.play().catch(() => {});
      }
    },
    { once: true }
  );
}
