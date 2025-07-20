import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

export const useSwitchThemeStore = defineStore('switchTheme', () => {
  const localvalue: boolean | null = JSON.parse(localStorage.getItem('darkTheme') as string)

  const switchThemeBoolean: Ref<boolean> = ref(Boolean(localvalue))

  const html: HTMLHtmlElement = document.getElementsByTagName('html')[0]

  if (switchThemeBoolean.value) {
    html.classList.add('dark')
    localStorage.setItem('darkTheme', 'true')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('darkTheme', 'false')
  }

  const onSwitchTheme = () => {
    switchThemeBoolean.value = !switchThemeBoolean.value

    if (switchThemeBoolean.value) {
      html.classList.add('dark')
      localStorage.setItem('darkTheme', 'true')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('darkTheme', 'false')
    }
  }

  return { switchThemeBoolean, onSwitchTheme }
})
