const swiperHero = document.querySelector('.hero')
const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: 'fade',
  allowTouchMove: false,
})


const gallerySlider = new Swiper(".gallery__slider", {
  slidesPerView: 3,
  slidesPerGroup: 3,
    keyboard: {
    enabled: true,
    onlyInViewport: true,
     pageUpDown: true,
  },

  spaceBetween: 50,
  navigation: {
    nextEl: ".gallery__slider-btn--next",
    prevEl: ".gallery__slider-btn--prev",
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});


