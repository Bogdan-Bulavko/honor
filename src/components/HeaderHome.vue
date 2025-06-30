<script setup lang="ts"></script>

<template>
  <header class="bg-white shadow-sm p-4">
    <div class="flex justify-between items-center max-w-[1280px] m-auto">
      <a href="#" class="text-2xl font-bold text-honor-blue whitespace-nowrap">Честь</a>
      <nav class="max-sm:hidden">
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
          class="ml-4 px-3 py-1 rounded-full bg-honor-gray hover:bg-honor-blue/10 transition-colors text-sm"
          >35</a
        >
        <button
          class="flex items-center justify-around ml-4 rounded-md hover:bg-honor-gray h-10 w-10 p-auto transition-colors text-sm"
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
            class="lucide lucide-bell"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
        </button>
        <a href="#" class="ml-4 py-1 px-4 text-white rounded-md bg-honor-btn text-sm">
          <span>Логин</span></a
        >
      </div>
    </div>
  </header>
</template>

<style scoped></style>
