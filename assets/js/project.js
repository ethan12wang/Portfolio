document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  
  let index = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    updateCarousel();
  });
});
