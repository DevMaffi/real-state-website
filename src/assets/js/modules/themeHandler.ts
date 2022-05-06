// Define variables

const exceptionType = 'HTML Structure'

const themeButton = document.querySelector(
  '#theme-button'
) as HTMLElement | null

const darkTheme: string = 'dark-theme'
const iconTheme: string = 'bx-sun'

// Previously selected topic (if user selected)

const selectedTheme: string | null = localStorage.getItem('selectedTheme')
const selectedIcon: string | null = localStorage.getItem('selectedIcon')

// Validate if the user previously chose a topic

if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )

  themeButton?.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](
    iconTheme
  )
}

// Obtain the current theme that the interface has by validating the dark-theme class

type themeType = 'dark' | 'light'

const getCurrentTheme = (): themeType =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'

type iconType = 'bx bx-moon' | 'bx bx-sun'

const getCurrentIcon = (): iconType =>
  themeButton?.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Theme handler

function handleTheme(): void {
  // Activate / deactivate the theme manually with the button

  if (!themeButton)
    throw new Error(
      `[${exceptionType}]: page should contain theme change button`
    )

  themeButton.addEventListener('click', () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // save the theme and the current icon that the user chose
    localStorage.setItem('selectedTheme', getCurrentTheme())
    localStorage.setItem('selectedIcon', getCurrentIcon())
  })
}

// Exports

export default handleTheme
