const swiperFade = new Swiper('.hero__swiper', {
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

  pagination: {
    el: ".gallery__slider--pagination",
    type: "fraction"
  },

  navigation: {
    nextEl: ".gallery__slider-btn--next",
    prevEl: ".gallery__slider-btn--prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});

const eventsGallery = new Swiper('.events__slider', {
  slidesPerView: 3,
  slidesPerGroup: 2,
  loop: false,
  spaceBetween: 50,
  pagination: {
    el: '.events__pagination',
  },

  navigation: {
    nextEl: '.events__btn--next',
    prevEl: '.events__btn--perv',
  },
})
