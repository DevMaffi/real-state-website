// Change background header

function scrollHeader(): void {
  const header: HTMLDivElement = document.querySelector('#header')!

  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header element
  if (window.scrollY >= 50) return header?.classList.add('scroll-header')

  return header?.classList.remove('scroll-header')
}

// Add event handlers on window

function handleScroll(): void {
  window.addEventListener('scroll', scrollHeader)
}

// Exports

export default handleScroll
