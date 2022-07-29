import './style.scss'


const burger = document.querySelector('.header__burger');
const headerContent = document.querySelector('.header__content')

burger.addEventListener('click', () => {
  console.log('clicked');
  headerContent.classList.toggle('opened-nav')
})

