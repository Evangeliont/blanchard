let btnSearchOpen = document.querySelector('.search-top__btn')
let btnSearchClose = document.querySelector('.search-top__icon-close')
let inputForm = document.querySelector('.search-top__wrapper')

btnSearchOpen.addEventListener('click', function() {
  inputForm.classList.add('search-top__wrapper--active')
})

btnSearchClose.addEventListener('click', function() {
  inputForm.classList.remove('search-top__wrapper--active')
})
