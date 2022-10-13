const html: HTMLElement = document.documentElement;
const Themes: string[] = ['light-theme', 'dark-theme', 'dark-blue-theme']

const useHandleTheme = () => {
  let theme = html.getAttribute('data-theme');
  
  // If theme attribute exists, change to the the next theme
  if (theme) {
    const i: number = Themes.findIndex(t => t===theme) + 1;
    // if is the last theme, the next is the first
    // else, the next is the actual position +1
    theme = (Themes.length === i) ? Themes[0] : Themes[i];
  } else { 
    // Else, check the preferred and use that
    theme = window.matchMedia("(prefers-color-scheme: dark)")
      ? Themes[1]
      : Themes[0];
  }

  html.setAttribute('data-theme', theme)
}

export { useHandleTheme };