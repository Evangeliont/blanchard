let btnSearchOpen = document.querySelector('.search-top__btn')
let btnSearchClose = document.querySelector('.search-top__icon-close')
let inputForm = document.querySelector('.header__search-top')

btnSearchOpen.addEventListener('click', function() {
  inputForm.classList.add('header__search-top--active')
})

btnSearchClose.addEventListener('click', function() {
  inputForm.classList.remove('header__search-top--active')
})
