// Define variables

const exceptionType = 'HTML Structure'

// Get DOM elements

const accordionItems = document.querySelectorAll(
  '.value__accordion-item'
) as NodeListOf<HTMLDivElement> | null

// Toggle accordion content display

function toggleItem(item: HTMLDivElement): void {
  const accordionContent = item.querySelector(
    '.value__accordion-content'
  ) as HTMLDivElement | null

  if (!accordionContent)
    throw new Error(
      `[${exceptionType}]: accordion item should contain content element`
    )

  if (item.classList.contains('accordion-open')) {
    accordionContent?.removeAttribute('style')
    item.classList.remove('accordion-open')

    return
  }

  accordionContent.style.height = `${accordionContent.scrollHeight}px`
  item.classList.add('accordion-open')
}

// Add event handlers on accordion items header

function handleAccordion(): void {
  accordionItems?.forEach(item => {
    const accordionHeader = item.querySelector(
      '.value__accordion-header'
    ) as HTMLHeadingElement | null

    if (!accordionHeader)
      throw new Error(
        `[${exceptionType}]: accordion item should contain header element`
      )

    accordionHeader.addEventListener('click', () => {
      try {
        const openItem = document.querySelector(
          '.accordion-open'
        ) as HTMLDivElement | null

        if (openItem && openItem !== item) toggleItem(openItem)

        toggleItem(item)
      } catch (error: Error | any) {
        console.error(error.message)
      }
    })
  })
}

// Export

export default handleAccordion
