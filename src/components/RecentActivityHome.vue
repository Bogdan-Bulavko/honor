<script setup lang="ts">
import { onMounted, useTemplateRef, type Ref, ref } from 'vue'

const activeClass: Ref<boolean> = ref(true)

const section = useTemplateRef('recent-activity')

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
    class="py-16 p-4 bg-gray-50 dark:bg-blue-950 dark:text-white duration-2500"
    :class="{ 'opacity-0': activeClass }"
    ref="recent-activity"
  >
    <div class="max-w-[1280px] m-auto">
      <h2 class="mb-12 text-3xl font-bold text-center">Недавняя активность</h2>
      <div class="flex max-md:flex-col justify-between gap-8">
        <div class="w-full p-3 border border-gray-300 rounded-lg bg-white dark:bg-honor-blue">
          <h3 class="font-bold text-xl mb-4">Последние задачи</h3>
          <ul>
            <li class="flex items-center justify-between p-3 mb-4 bg-honor-gray rounded-lg">
              <div class="flex items-center">
                <span class="w-2 h-2 mr-3 rounded-full bg-green-600"></span>
                <div>
                  <h4 class="font-medium dark:text-honor-blue">Благоустройство парка</h4>
                  <p class="text-sm text-gray-500">Округ №1</p>
                </div>
              </div>
              <span class="text-xs text-gray-500">2 часа назад</span>
            </li>
            <li class="flex items-center justify-between p-3 mb-4 bg-honor-gray rounded-lg">
              <div class="flex items-center">
                <span class="w-2 h-2 mr-3 rounded-full bg-green-600"></span>
                <div>
                  <h4 class="font-medium dark:text-honor-blue">Благоустройство парка</h4>
                  <p class="text-sm text-gray-500">Округ №2</p>
                </div>
              </div>
              <span class="text-xs text-gray-500">2 часа назад</span>
            </li>
            <li class="flex items-center justify-between p-3 mb-4 bg-honor-gray rounded-lg">
              <div class="flex items-center">
                <span class="w-2 h-2 mr-3 rounded-full bg-green-600"></span>
                <div>
                  <h4 class="font-medium dark:text-honor-blue">Благоустройство парка</h4>
                  <p class="text-sm text-gray-500">Округ №3</p>
                </div>
              </div>
              <span class="text-xs text-gray-500">2 часа назад</span>
            </li>
          </ul>
          <a href="#" class="block text-center text-honor-blue hover:underline dark:text-white"
            >Смотреть все задачи</a
          >
        </div>
        <div class="w-full p-3 border border-gray-300 rounded-lg bg-white dark:bg-honor-blue">
          <h3 class="font-bold text-xl mb-4">Обсуждаемые темы</h3>
          <ul>
            <li class="flex items-center justify-between p-3 mb-4 bg-honor-gray rounded-lg">
              <div class="flex items-center">
                <span class="bg-honor-blue/10 rounded-full p-2 mr-3"
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
                    class="lucide lucide-message-square text-honor-blue"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </span>
                <div>
                  <h4 class="font-medium dark:text-honor-blue">
                    Развитие транспортной инфраструктуры
                  </h4>
                  <div class="flex gap-8">
                    <p class="text-sm text-gray-500">12 коментариев</p>
                    <p class="flex items-center gap-2 text-sm text-gray-500">
                      <span><img src="/thumbs-up.png" alt="like" class="w-3" /></span>24
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="flex items-center justify-between p-3 mb-4 bg-honor-gray rounded-lg">
              <div class="flex items-center">
                <span class="bg-honor-blue/10 rounded-full p-2 mr-3"
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
                    class="lucide lucide-message-square text-honor-blue"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </span>
                <div>
                  <h4 class="font-medium dark:text-honor-blue">
                    Развитие транспортной инфраструктуры
                  </h4>
                  <div class="flex gap-8">
                    <p class="text-sm text-gray-500">12 коментариев</p>
                    <p class="flex items-center gap-2 text-sm text-gray-500">
                      <span><img src="/thumbs-up.png" alt="like" class="w-3" /></span>24
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="flex items-center justify-between p-3 mb-4 bg-honor-gray rounded-lg">
              <div class="flex items-center">
                <span class="bg-honor-blue/10 rounded-full p-2 mr-3"
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
                    class="lucide lucide-message-square text-honor-blue"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </span>
                <div>
                  <h4 class="font-medium dark:text-honor-blue">
                    Развитие транспортной инфраструктуры
                  </h4>
                  <div class="flex gap-8">
                    <p class="text-sm text-gray-500">12 коментариев</p>
                    <p class="flex items-center gap-2 text-sm text-gray-500">
                      <span><img src="/thumbs-up.png" alt="like" class="w-3" /></span>24
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <a href="#" class="block text-center text-honor-blue hover:underline dark:text-white"
            >Перейти к обсуждениям</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
