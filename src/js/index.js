const menuButton = document.querySelector('[data-menu-button]')
const menu = document.querySelector('[data-menu]')
const body = document.querySelector('body')

menuButton.addEventListener('click', toggleMenu)

function toggleMenu(){
  menu.classList.toggle('active')
  body.classList.toggle('overflow-hidden')
}