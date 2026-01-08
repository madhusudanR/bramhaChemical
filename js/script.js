document.addEventListener("DOMContentLoaded", function () {

  let slideIndex = 0;
  const slides = document.querySelectorAll(".slides");

  if (!slides.length) return; // safety check

  slides[0].classList.add("active");

  setInterval(() => {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }, 4000);

});


document.addEventListener("DOMContentLoaded", function () {

  // FACILITY CARD CAROUSELS
  document.querySelectorAll(".facility-carousel").forEach(carousel => {

    let slides = carousel.querySelectorAll(".facility-slide");
    let index = 0;

    if (!slides.length) return;

    slides[0].classList.add("active");

    setInterval(() => {
      slides.forEach(slide => slide.classList.remove("active"));
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 3000);

  });

});