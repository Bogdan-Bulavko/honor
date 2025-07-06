<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-white shadow-sm p-4">
    <div class="flex justify-between items-center max-w-[1280px] m-auto">
      <RouterLink to="/" class="text-2xl font-bold text-honor-blue whitespace-nowrap"
        >Честь</RouterLink
      >
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
          class="flex items-center ml-4 px-3 py-1 rounded-full bg-honor-gray hover:bg-honor-blue/10 transition-colors text-sm"
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
            class="lucide lucide-ticket text-honor-blue mr-1"
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
          class="flex items-center justify-around ml-4 rounded-md hover:bg-honor-gray h-10 w-10 transition-colors text-sm"
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
        <RouterLink
          to="/verification"
          class="ml-4 text-white rounded-md bg-honor-btn text-sm hover:bg-honor-btn/90 transition-colors"
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
      </div>
    </div>
  </header>
</template>

<style scoped></style>
