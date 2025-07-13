<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { useSwitchThemeStore } from '@/stores/darkThemeStore'
import { computed } from 'vue'

const storeDarktheme = useSwitchThemeStore()

const themeBoolean = computed(() => storeDarktheme.switchThemeBoolean)

const { onSwitchTheme } = storeDarktheme
</script>

<template>
  <header class="bg-white dark:bg-blue-950 shadow-sm p-4">
    <div class="flex justify-between items-center max-sm:flex-col max-w-[1280px] m-auto">
      <RouterLink
        to="/honor/"
        class="max-md:mb-3 text-2xl font-bold text-honor-blue dark:text-white dark:hover:text-honor-blue dark:transition-colors"
        >Мониториум</RouterLink
      >
      <div class="flex items-center">
        <nav class="max-md:hidden dark:text-white">
          <ul class="flex">
            <li>
              <a
                href="#"
                class="flex items-center space-x-1 text-honor-text hover:text-honor-blue transition-colors"
                >Создать здание</a
              >
            </li>
            <li class="ml-6">
              <a
                href="#"
                class="flex items-center space-x-1 text-honor-text hover:text-honor-blue transition-colors"
                >Карта округов</a
              >
            </li>
            <li class="ml-6">
              <a
                href="#"
                class="flex items-center space-x-1 text-honor-text hover:text-honor-blue transition-colors"
                >Представители</a
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center">
          <a
            href="#"
            class="flex items-center ml-4 px-3 py-1 rounded-full bg-honor-gray hover:bg-honor-blue/10 transition-colors text-sm dark:text-white dark:bg-honor-blue dark:hover:bg-blue-500"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide text-honor-blue dark:text-white mr-1"
            >
              <path
                d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
              ></path>
              <path d="M13 5v2"></path>
              <path d="M13 17v2"></path>
              <path d="M13 11v2"></path>
            </svg>
            35</a
          >
          <button
            class="flex items-center justify-around ml-4 rounded-md hover:bg-honor-gray h-10 w-10 transition-colors text-sm dark:text-white dark:bg-honor-blue dark:hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </button>
          <RouterLink
            to="/honor/verification"
            class="ml-4 text-white rounded-md bg-honor-btn text-sm hover:bg-honor-btn/90 transition-colors dark:bg-honor-blue dark:hover:bg-blue-500"
          >
            <button class="flex items-center gap-2 py-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-log-in"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" x2="3" y1="12" y2="12"></line>
              </svg>
              <span>Логин</span>
            </button>
          </RouterLink>
          <div @click="onSwitchTheme" class="ml-2 overflow-hidden">
            <Transition
              enter-active-class="duration-1000 -translate-y-[50px]"
              enter-to-class="duration-1000 translate-y-[-10px]"
              leave-active-class="duration-1000 translate-y-[-10px]"
              leave-to-class="duration-1000 translate-y-[50px]"
            >
              <svg
                v-if="!themeBoolean"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5 text-honor-blue"
              >
                <path
                  d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"
                ></path>
                <path
                  d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"
                ></path>
                <path
                  d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"
                ></path>
                <path
                  d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"
                ></path>
                <path
                  d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"
                ></path>
                <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path>
                <path
                  d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                  d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"
                ></path>
                <path
                  d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"
                ></path>
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5 text-white"
              >
                <path
                  d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"
                ></path>
              </svg>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
