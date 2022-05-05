// Define variables

const exceptionType = 'HTML Structure'

// Change background header

function scrollHeader(): void {
  const header: HTMLDivElement = document.querySelector('#header')!

  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header element
  if (window.scrollY >= 50) return header?.classList.add('scroll-header')

  return header?.classList.remove('scroll-header')
}

// Handle scroll-up module representation

function showScrollUp() {
  const scrollUp: HTMLAnchorElement | null =
    document.querySelector('#scroll-up')

  // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (window.scrollY >= 350) return scrollUp?.classList.add('show-scroll')

  scrollUp?.classList.remove('show-scroll')
}

// Handle window location

function handleLocation(hash: string): void {
  if (window.location.hash === hash) return

  if (history.pushState) return history.pushState(null, '', hash)

  window.location.hash = hash
}

// Handle scroll sections active link

const anchors: { [id: string]: HTMLAnchorElement | null } = {}

function handleActiveLink(section: HTMLElement, scrollY: number): void {
  const sectionHeight: number = section.offsetHeight
  const sectionTop: number = section.offsetTop - 58
  const sectionId: string = section.getAttribute('id')!
  let sectionLink: HTMLAnchorElement | null

  if (anchors[sectionId]) sectionLink = anchors[sectionId]
  else
    anchors[sectionId] = sectionLink = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`
    )

  if (!sectionLink)
    throw new Error(
      `[${exceptionType}]: nav menu should contain anchor with #${sectionId} href`
    )

  // when the scroll is within the section, add the active-link class to the corresponding nav link in the nav menu and handle location, otherwise, remove it
  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    handleLocation(`#${sectionId}`)
    return sectionLink.classList.add('active-link')
  }

  sectionLink.classList.remove('active-link')
}

// Apply handler for each nav menu link

const sections: NodeListOf<HTMLElement> | null =
  document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY: number = window.pageYOffset

  sections?.forEach(section => {
    try {
      handleActiveLink(section, scrollY)
    } catch (error: any) {
      console.error(error.message)
    }
  })
}

// Add event handlers on window

function handleScroll(): void {
  window.addEventListener('scroll', scrollHeader)
  window.addEventListener('scroll', showScrollUp)
  window.addEventListener('scroll', scrollActive)
}

// Exports

export default handleScroll
