// Modules

// modules
import Swiper, { Navigation } from 'swiper'

import {
  handleTheme,
  handleScroll,
  handleAccordion,
  applyReveal,
  // @ts-ignore
} from '@modules'

// styles
import 'swiper/css'
import 'swiper/css/navigation'
import '@sass/styles.sass'

// Setup handlers

try {
  handleTheme()
} catch (error: any) {
  console.error(error.message)
}

handleScroll()

try {
  handleAccordion()
} catch (error: any) {
  console.error(error.message)
}

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

// Scroll reveal

applyReveal()
