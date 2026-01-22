document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".product-slider");

  sliders.forEach(slider => {
    const slides = slider.querySelectorAll("img");
    let current = 0;

    slides[current].classList.add("active");

    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 3500);
  });
});

document.querySelectorAll('[data-slider]').forEach(slider => {
  const images = slider.querySelectorAll('img');
  let index = 0;

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3500);
});


const header = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
  if (window.scrollY > 120) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});
