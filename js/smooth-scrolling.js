const menuLinks = document.querySelectorAll('.header__link[data-goto]')

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target

    //проверка есть ли такой атрибут
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      })
      e.preventDefault()
    }
  }
}
