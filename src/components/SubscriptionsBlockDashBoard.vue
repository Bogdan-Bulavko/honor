<script setup lang="ts"></script>

<template>
  <section>
    <div class="mb-5 flex justify-between max-[375px]:flex-col max-[375px]:items-center">
      <h2 class="text-2xl font-bold max-[375px]:mb-2 dark:text-white">Подписки</h2>
    </div>
    <ul class="overflow-auto h-[600px]">
      <li class="mb-5 p-6 bg-white border border-gray-300 rounded-lg dark:bg-honor-blue">
        <div class="flex items-center">
          <div class="rounded-full p-2 mr-3 bg-blue-100">
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
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="w-full">
            <div class="mb-1">
              <h3 class="font-bold max-sm:mb-2 dark:text-white">Иванов Иван Иванович</h3>
            </div>
            <p class="text-gray-500 dark:text-white">Депутат городской думы</p>
          </div>
        </div>
      </li>
      <li class="mb-5 p-6 bg-white border border-gray-300 rounded-lg dark:bg-honor-blue">
        <div class="flex items-center">
          <div class="rounded-full p-2 mr-3 bg-blue-100">
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
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="w-full">
            <div class="mb-1">
              <h3 class="font-bold max-sm:mb-2 dark:text-white">Иванов Иван Иванович</h3>
            </div>
            <p class="text-gray-500 dark:text-white">Депутат городской думы</p>
          </div>
        </div>
      </li>
      <li class="mb-5 p-6 bg-white border border-gray-300 rounded-lg dark:bg-honor-blue">
        <div class="flex items-center">
          <div class="rounded-full p-2 mr-3 bg-blue-100">
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
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="w-full">
            <div class="mb-1">
              <h3 class="font-bold max-sm:mb-2 dark:text-white">Иванов Иван Иванович</h3>
            </div>
            <p class="text-gray-500 dark:text-white">Депутат городской думы</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="text-center">
      <a
        href="#"
        class="inline-block m-auto text-sm text-white rounded-md bg-honor-btn hover:bg-honor-btn/90 transition-colors"
      >
        <button class="m-auto flex items-center gap-2 justify-center py-2 px-4">
          Найти больше представителей
        </button></a
      >
    </div>
  </section>
</template>

<style scoped></style>
