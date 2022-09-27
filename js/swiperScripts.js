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

