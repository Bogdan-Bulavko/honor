import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

export const useSwitchThemeStore = defineStore('switchTheme', () => {
  const switchThemeBoolean: Ref<boolean> = ref(false)

  const onSwitchTheme = () => {
    const html = document.getElementsByTagName('html')[0]
    switchThemeBoolean.value = !switchThemeBoolean.value

    if (switchThemeBoolean.value) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  return { switchThemeBoolean, onSwitchTheme }
})
