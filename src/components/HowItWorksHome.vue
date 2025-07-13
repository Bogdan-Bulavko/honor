<script setup lang="ts">
import { onMounted, useTemplateRef, type Ref, ref } from 'vue'

const activeClass: Ref<boolean> = ref(true)

const section = useTemplateRef('how-it-work')

onMounted(() => {
  window.addEventListener('scroll', () => {
    const rect = section.value?.getBoundingClientRect() as DOMRect

    const heightWindow = document.documentElement.clientHeight

    if (rect.top - heightWindow < -100) {
      activeClass.value = false
    }
  })
})
</script>

<template>
  <section
    class="py-16 p-4 bg-gray-50 dark:bg-blue-950 dark:text-white overflow-hidden duration-3000"
    :class="{ 'opacity-0': activeClass }"
    ref="how-it-work"
  >
    <div class="max-w-[1280px] m-auto">
      <h2 class="mb-12 text-3xl font-bold text-center">Как это работает</h2>
      <p class="mb-12 text-gray-500 text-center dark:text-white">
        Простой процесс взаимодействия избирателей и представителей власти
      </p>
      <div class="flex gap-5 max-md:flex-col mb-12">
        <div class="flex flex-col items-center text-center">
          <div class="bg-gray-100 rounded-full p-6 w-32 h-32 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user text-honor-blue"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h3 class="font-bold text-xl mb-2">Шаг 1</h3>
          <p class="text-gray-500 dark:text-white">
            Зарегистрируйтесь на платформе как избиратель или представитель власти
          </p>
        </div>
        <div class="flex flex-col items-center text-center">
          <div class="bg-gray-100 rounded-full p-6 w-32 h-32 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-map-pin text-honor-blue"
            >
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
              ></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h3 class="font-bold text-xl mb-2">Шаг 2</h3>
          <p class="text-gray-500 dark:text-white">
            Найдите свой избирательный округ на интерактивной карте
          </p>
        </div>
        <div class="flex flex-col items-center text-center">
          <div class="bg-gray-100 rounded-full p-6 w-32 h-32 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-message-square text-honor-blue"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h3 class="font-bold text-xl mb-2">Шаг 3</h3>
          <p class="text-gray-500 dark:text-white">
            Создавайте задания, общайтесь с представителями и отслеживайте результаты
          </p>
        </div>
      </div>
      <a href="#" class="block">
        <button
          class="block m-auto py-2 px-8 text-lg text-white font-bold rounded-md bg-honor-btn hover:bg-honor-btn/90 transition-colors dark:bg-honor-blue dark:hover:bg-blue-500"
        >
          Начать пользоваться платформой
        </button>
      </a>
    </div>
  </section>
</template>

<style scoped></style>
