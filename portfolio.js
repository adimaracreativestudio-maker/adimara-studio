document.querySelectorAll(".portfolio-slider").forEach(slider => {
  const slides = slider.querySelectorAll("img");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
});
function activatePortfolioVideo(frame) {
  frame.src = frame.dataset.src;
}
