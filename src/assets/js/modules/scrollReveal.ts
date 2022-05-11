// Modules

import ScrollReveal from 'scrollreveal'

// Init scroll reveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
}) as scrollReveal.ScrollRevealObject

// Apply scroll reveal animation on DOM

function applyReveal(): void {
  // home section
  sr.reveal('.home__title')
  sr.reveal('.home__description', { delay: 500 })
  sr.reveal('.home__search', { delay: 600 })
  sr.reveal('.home__value', { delay: 700 })
  sr.reveal('.home__images', { delay: 800, origin: 'bottom' })

  // logos
  sr.reveal('.logos__img', { interval: 100 })

  // popular
  sr.reveal('.popular__container')

  // value
  sr.reveal('.value__images', { origin: 'left' })
  sr.reveal('.value__content', { origin: 'right' })

  // contact
  sr.reveal('.contact__content', { origin: 'left' })
  sr.reveal('.contact__images', { origin: 'right' })

  // subscribe
  sr.reveal('.subscribe__container')

  // footer
  sr.reveal('.footer__container')
  sr.reveal('.footer__info', { delay: 500 })
}

// Exports

export default applyReveal
