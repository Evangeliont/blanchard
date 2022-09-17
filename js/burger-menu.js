let btn = document.querySelector('.burger__btn')
let menu = document.querySelector('.header__nav')

btn.addEventListener('click', function() {
  btn.classList.toggle('burger__btn--active')
  menu.classList.toggle('header__nav--open')
  document.body.classList.toggle('stop-scroll')
})
