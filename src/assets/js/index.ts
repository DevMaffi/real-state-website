// Modules

// modules
import Swiper, { Navigation } from 'swiper'

// @ts-ignore
import { handleScroll } from '@modules'

// styles
// styles
import 'swiper/css'
import 'swiper/css/navigation'
import '@sass/styles.sass'

// Setup handlers

handleScroll()

// Define swiper

new Swiper('.popular__container', {
  modules: [Navigation],
  loop: true,
  spaceBetween: 32,
  slidesPerView: 'auto',
  grabCursor: true,
  centeredSlides: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
})
