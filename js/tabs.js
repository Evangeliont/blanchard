let tabsButtons = document.querySelectorAll('.accordion__btn-person')
let tabsElements = document.querySelectorAll('.catalog__person')

tabsButtons.forEach(element => {
  element.addEventListener('click', el => {
    let path = el.currentTarget.dataset.path

    tabsButtons.forEach(btn => {
      btn.classList.remove('accordion__btn-person--active')
    })

    el.currentTarget.classList.add('accordion__btn-person--active')

    tabsElements.forEach((element) => {
      element.classList.remove('catalog__person--active')
    })

    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__person--active')
  })
})
