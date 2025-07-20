<script setup lang="ts"></script>

<template>
  <section>
    <div class="mb-5 flex justify-between max-[375px]:flex-col max-[375px]:items-center">
      <h2 class="text-2xl font-bold max-[375px]:mb-2 dark:text-white">Уведомления</h2>
    </div>
    <ul class="overflow-auto h-[600px]">
      <li class="mb-5 p-6 bg-white border border-gray-300 rounded-lg dark:bg-honor-blue">
        <div class="flex items-center">
          <div class="rounded-full p-2 mr-3 bg-blue-100">
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
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </div>
          <div class="w-full">
            <div class="mb-1 flex justify-between max-sm:flex-col max-sm:items-start">
              <h3 class="font-bold max-sm:mb-2 dark:text-white">Ремонт дороги на ул. Ленина</h3>
              <div class="text-xs text-gray-500 dark:text-white">04.05.2025</div>
            </div>
            <p class="text-gray-500 dark:text-white">
              Представитель Иванов И.И. ответил на ваше задание
            </p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
