// Этот код преподавателя
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.dropdown__btn').forEach(item => {
    item.addEventListener('click', function () {
      let btn = this
      let dropdown = this.parentElement.querySelector('.dropdown__content')

      document.querySelectorAll('.dropdown__btn').forEach(el => {
        if (el != btn) {
          el.classList.remove('dropdown__btn--active')
        }
      })

      document.querySelectorAll('.dropdown__content').forEach(el => {
        if (el != dropdown) {
          el.classList.remove('dropdown__content--active')
        }
      })

      dropdown.classList.toggle('dropdown__content--active')
      btn.classList.toggle('dropdown__btn--active')
    })
  })

  document.addEventListener('click', function (e) {
    let target = e.target
    if (!target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown__content').forEach(el => {
        el.classList.remove('dropdown__content--active')
      })
      document.querySelectorAll('.dropdown__btn').forEach(el => {
        el.classList.remove('dropdown__btn--active')
      })
    }
  })
})

