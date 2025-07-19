<script setup lang="ts">
import { onMounted, useTemplateRef, type Ref, ref } from 'vue'

const activeClass: Ref<boolean> = ref(true)

const section = useTemplateRef('project-statistic')

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
    class="py-16 p-4 bg-honor-blue/5 dark:bg-blue-950/90 duration-2500"
    :class="{ 'opacity-0': activeClass }"
    ref="project-statistic"
  >
    <div class="max-w-[1280px] m-auto">
      <h2 class="mb-12 text-3xl font-bold text-center dark:text-white">Статистика платформы</h2>
      <p class="mb-12 text-gray-500 text-center dark:text-white">
        Актуальные данные о работе платформы «Честь»
      </p>
      <div class="flex gap-5 flex-wrap justify-center text-center">
        <div
          class="flex flex-col items-center p-4 w-[230px] border border-gray-300 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-honor-blue dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-8 w-8 mx-auto mb-2 text-honor-blue dark:bg-white dark:rounded-full dark:h-11 dark:w-11 dark:p-2"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <p class="text-gray-500 dark:text-white">Активных пользователей</p>
          <p class="text-2xl font-bold">12 547</p>
        </div>
        <div
          class="flex flex-col items-center p-4 w-[230px] border border-gray-300 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-honor-blue dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-8 w-8 mx-auto mb-2 text-green-600 dark:bg-white dark:rounded-full dark:h-11 dark:w-11 dark:p-2"
          >
            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
          <p class="text-gray-500 dark:text-white">Выполнено задач</p>
          <p class="text-2xl font-bold">3 876</p>
        </div>
        <div
          class="flex flex-col items-center p-4 w-[230px] border border-gray-300 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-honor-blue dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-8 w-8 mx-auto mb-2 text-honor-blue dark:bg-white dark:rounded-full dark:h-11 dark:w-11 dark:p-2"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <p class="text-gray-500 dark:text-white">Представителей власти</p>
          <p class="text-2xl font-bold">342</p>
        </div>
        <div
          class="flex flex-col items-center p-4 w-[230px] border border-gray-300 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-honor-blue dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-8 w-8 mx-auto mb-2 text-yellow-500 dark:bg-white dark:rounded-full dark:h-11 dark:w-11 dark:p-2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <p class="text-gray-500 dark:text-white">Среднее время ответа</p>
          <p class="text-2xl font-bold">8 часов</p>
        </div>
        <div
          class="flex flex-col items-center p-4 w-[230px] border border-gray-300 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-honor-blue dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-8 w-8 mx-auto mb-2 text-blue-500 dark:bg-white dark:rounded-full dark:h-11 dark:w-11 dark:p-2"
          >
            <path d="M7 10v12"></path>
            <path
              d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
            ></path>
          </svg>
          <p class="text-gray-500 dark:text-white">Уровень удовлетворенности</p>
          <p class="text-2xl font-bold">87 %</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
