<script setup lang="ts"></script>

<template>
  <section class="py-12 p-4 bg-gray-50 dark:bg-blue-950/90 dark:text-white">
    <div class="max-w-[1280px] m-auto">
      <div class="max-w-[450px] m-auto">
        <h2 class="mb-8 text-3xl font-bold text-center">Вход в систему</h2>
        <div class="flex flex-col gap-3 mb-6 m-auto text-white text-sm">
          <button class="block py-2 rounded-md bg-honor-blue">
            <div class="flex items-center justify-center">
              <img src="/gosuslugi.svg" alt="gosuslugi" class="w-6 mr-2" />
              <span>Войти через Госуслуги</span>
            </div>
          </button>
          <button class="block py-2 rounded-md bg-honor-green">
            <div class="flex items-center justify-center">
              <svg
                class="h-6 w-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="white"></rect>
                <path
                  d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
                  fill="#21A038"
                ></path>
                <path
                  d="M12 7.5V16.5M7.5 12H16.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Войти через Сбер ID</span>
            </div>
          </button>
          <button class="block py-2 rounded-md bg-honor-yellow text-black">
            <div class="flex items-center justify-center">
              <svg
                class="h-6 w-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="black"></rect>
                <path d="M6 9H18V15H6V9Z" fill="#FFDD2D"></path>
              </svg>
              <span>Войти через Тинькофф ID</span>
            </div>
          </button>
        </div>
        <div class="flex items-center mb-6">
          <div class="border-b border-gray-300 h-1 w-full"></div>
          <span class="px-4 t items-centerext-sm text-gray-500 dark:text-white">или</span>
          <div class="border-b border-gray-300 h-1 w-full"></div>
        </div>
        <form class="w-full mb-8 p-6 bg-white border border-gray-300 rounded-md dark:bg-honor-blue">
          <label class="block text-sm font-medium mb-2">Электронная почта или телефон</label>
          <div class="relative mb-6">
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
              class="absolute left-3 top-1/2 transform -translate-y-1/2 dark:text-honor-blue"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <input
              type="mail"
              placeholder="example@mail.ru"
              class="w-full py-2 pl-10 px-3 border border-gray-300 rounded-md focus:border-honor-btn focus:border-2 focus:outline-none bg-white text-black"
            />
          </div>
          <div class="flex justify-between">
            <label class="block text-sm font-medium mb-2">Пароль</label>

            <a class="text-sm text-honor-blue hover:underline dark:text-white" href="#"
              >Забыли пароль?</a
            >
          </div>
          <div class="relative mb-6">
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
              class="absolute left-3 top-1/2 transform -translate-y-1/2 dark:text-honor-blue"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input
              type="password"
              placeholder="••••••••"
              class="w-full py-2 pl-10 px-3 border border-gray-300 rounded-md focus:border-honor-btn focus:border-2 focus:outline-none bg-white text-black"
            />
          </div>
          <button
            class="w-full py-2 rounded-md text-white bg-honor-btn transition-colors dark:hover:bg-blue-500"
          >
            Войти
          </button>
        </form>
        <div class="flex flex-col gap-3 mb-6 m-auto text-white text-sm">
          <div class="mb-6 text-center">
            <p class="text-gray-500 dark:text-white">
              Еще не зарегистрированы?
              <a class="text-honor-blue hover:underline dark:text-white" href="#">Регистрация</a>
            </p>
          </div>
          <button class="block py-2 rounded-md bg-honor-blue">
            <div class="flex items-center justify-center">
              <img src="/gosuslugi.svg" alt="gosuslugi" class="w-6 mr-2" />
              <span>Войти как предаставитель власти</span>
            </div>
          </button>
          <button class="block py-2 rounded-md bg-honor-green">
            <div class="flex items-center justify-center">
              <svg
                class="h-6 w-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="white"></rect>
                <path
                  d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
                  fill="#21A038"
                ></path>
                <path
                  d="M12 7.5V16.5M7.5 12H16.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span>Войти через Сбер ID как предаставитель</span>
            </div>
          </button>
          <button class="block py-2 rounded-md bg-honor-yellow text-black">
            <div class="flex items-center justify-center">
              <svg
                class="h-6 w-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="black"></rect>
                <path d="M6 9H18V15H6V9Z" fill="#FFDD2D"></path>
              </svg>
              <span>Войти через Тинькофф ID как предаставитель</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
