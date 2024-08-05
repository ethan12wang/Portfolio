document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const imagesContainer = carousel.querySelector('.carousel-images');
    const images = imagesContainer.querySelectorAll('img');
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');

    let index = 0;

    function updateCarousel() {
      imagesContainer.style.transform = `translateX(-${index * 100}%)`;
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
});
