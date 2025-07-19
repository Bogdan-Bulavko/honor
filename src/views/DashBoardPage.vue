<script setup lang="ts"></script>

<template>
  <main class="bg-honor-blue/5 dark:bg-blue-950/90 duration-2500">
    <div class="max-w-[1280px] m-auto py-12 px-4 flex gap-10 max-md:flex-col max-md:items-center">
      <aside
        class="max-[375px]:w-full min-[375px]:min-w-[350px] p-6 bg-white rounded-lg border border-gray-300 dark:bg-honor-blue"
      >
        <div class="text-center mb-5">
          <div class="flex m-auto mb-4 w-15 h-15 rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="m-auto"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h1 class="text-2xl font-bold dark:text-white">Иван Петров</h1>
          <p class="mb-2 text-gray-500 dark:text-white">Избиратель</p>
          <div class="mb-2 flex items-center justify-center">
            <span class="bg-white rounded-full p-1 mr-1"
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
                class="text-honor-blue"
              >
                <path
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                ></path>
                <circle cx="12" cy="10" r="3"></circle></svg></span
            ><span class="dark:text-white">Округ №1</span>
          </div>
          <div
            class="inline-block px-3 bg-honor-darkBlue text-white rounded-full dark:text-honor-blue dark:bg-white"
          >
            10 баллов активности
          </div>
        </div>
        <div class="mb-5 p-4 border border-y-gray-300 border-x-0 dark:bg-white dark:rounded-full">
          <ul class="flex justify-around">
            <li class="text-center">
              <p class="text-2xl font-bold text-honor-blue">5</p>
              <p class="text-xs text-gray-500">Заданий</p>
            </li>
            <li class="text-center">
              <p class="text-2xl font-bold text-honor-blue">12</p>
              <p class="text-xs text-gray-500">Реакций</p>
            </li>
            <li class="text-center">
              <p class="text-2xl font-bold text-honor-blue">35</p>
              <p class="text-xs text-gray-500">Билетов</p>
            </li>
          </ul>
        </div>
        <div class="mb-5">
          <h3 class="mb-4 text-lg font-semibold dark:text-white">Мой представитель</h3>
          <a
            href="#"
            class="block mb-5 p-4 border border-gray-300 rounded-xl dark:bg-white transition-colors hover:bg-gray-200"
          >
            <div class="flex max-[350px]:flex-col max-[350px]:items-center max-[350px]:text-center">
              <div class="rounded-full p-2 mr-3 bg-honor-gray">
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
                  class="text-honor-blue"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <p class="font-medium">Иванов Иван Иванович</p>
                <p class="text-sm text-gray-500">Депутат городской думы</p>
              </div>
            </div>
          </a>
        </div>
        <div class="mb-5">
          <h3 class="mb-4 text-lg font-semibold dark:text-white">Быстрые действия</h3>
          <div>
            <a
              href="#"
              class="block mb-2 text-sm text-white rounded-md bg-honor-btn hover:bg-honor-btn/90 transition-colors"
            >
              <button class="m-auto flex items-center gap-2 justify-center py-2 px-4">
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
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span>Создать задание</span>
              </button></a
            >
            <a
              href="#"
              class="block mb-2 text-sm text-white rounded-md bg-honor-btn hover:bg-honor-btn/90 transition-colors"
            >
              <button class="m-auto flex items-center gap-2 justify-center py-2 px-4">
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
                  <path
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                  ></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Создать задание</span>
              </button></a
            >
            <a
              href="#"
              class="block text-sm text-gray-500 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <button class="m-auto flex items-center gap-2 justify-center py-2 px-4">
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
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span>Пополнить баланс</span>
              </button></a
            >
          </div>
        </div>
      </aside>
      <div class="w-full">
        <div class="flex max-md:justify-center">
          <ul class="flex mb-10 p-1 bg-gray-200 rounded-md dark:text-white dark:bg-blue-950">
            <li class="py-1 px-3 bg-white rounded-md dark:bg-honor-blue">
              <button class="cursor-pointer">Мои задания</button>
            </li>
            <li class="py-1 px-3"><button class="cursor-pointer">Уведомления</button></li>
            <li class="py-1 px-3"><button class="cursor-pointer">Подписки</button></li>
          </ul>
        </div>

        <section>
          <div class="mb-5 flex justify-between max-[375px]:flex-col max-[375px]:items-center">
            <h2 class="text-2xl font-bold max-[375px]:mb-2 dark:text-white">Мои задания</h2>
            <a
              href="#"
              class="inline-block mb-2 text-sm text-white rounded-md bg-honor-btn hover:bg-honor-btn/90 transition-colors"
            >
              <button class="m-auto flex items-center gap-2 justify-center py-2 px-4">
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
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span>Создать задание</span>
              </button></a
            >
          </div>
          <ul class="overflow-auto h-[600px]">
            <li class="mb-5 p-6 bg-white border border-gray-300 rounded-lg dark:bg-honor-blue">
              <div class="mb-4 flex justify-between max-sm:flex-col max-sm:items-start">
                <h3 class="text-xl font-bold max-sm:mb-2 dark:text-white">
                  Ремонт дороги на ул. Ленина
                </h3>
                <div
                  class="min-w-[80px] px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                >
                  В процессе
                </div>
              </div>
              <div class="mb-4 flex gap-2 text-gray-500 max-[375px]:flex-col dark:text-white">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p>ул. Ленина, 10-20</p>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p>До 15.08.2025</p>
                </div>
              </div>
              <div
                class="flex justify-between pt-3 border-t border-gray-300 text-gray-500 max-sm:flex-col-reverse dark:text-white"
              >
                <div class="flex gap-2">
                  <div class="flex items-center gap-1">
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
                      <path d="M7 10v12"></path>
                      <path
                        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
                      ></path>
                    </svg>
                    <span>56</span>
                  </div>
                  <div class="flex items-center gap-1">
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
                      class="lucide lucide-message-square"
                    >
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                      ></path>
                    </svg>
                    <span>12</span>
                  </div>
                </div>
                <div class="mb-2 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-clock inline mr-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Создано 01.05.2025</span>
                </div>
              </div>
            </li>
            <li class="mb-5 p-6 bg-white border border-gray-300 rounded-lg dark:bg-honor-blue">
              <div class="mb-4 flex justify-between max-sm:flex-col max-sm:items-start">
                <h3 class="text-xl font-bold max-sm:mb-2 dark:text-white">
                  Ремонт дороги на ул. Ленина
                </h3>
                <div
                  class="min-w-[80px] px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                >
                  В процессе
                </div>
              </div>
              <div class="mb-4 flex gap-2 text-gray-500 max-[375px]:flex-col dark:text-white">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p>ул. Ленина, 10-20</p>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p>До 15.08.2025</p>
                </div>
              </div>
              <div
                class="flex justify-between pt-3 border-t border-gray-300 text-gray-500 max-sm:flex-col-reverse dark:text-white"
              >
                <div class="flex gap-2">
                  <div class="flex items-center gap-1">
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
                      <path d="M7 10v12"></path>
                      <path
                        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
                      ></path>
                    </svg>
                    <span>56</span>
                  </div>
                  <div class="flex items-center gap-1">
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
                      class="lucide lucide-message-square"
                    >
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                      ></path>
                    </svg>
                    <span>12</span>
                  </div>
                </div>
                <div class="mb-2 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-clock inline mr-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Создано 01.05.2025</span>
                </div>
              </div>
            </li>
            <li class="mb-5 p-6 bg-white border border-gray-300 rounded-lg dark:bg-honor-blue">
              <div class="mb-4 flex justify-between max-sm:flex-col max-sm:items-start">
                <h3 class="text-xl font-bold max-sm:mb-2 dark:text-white">
                  Ремонт дороги на ул. Ленина
                </h3>
                <div
                  class="min-w-[80px] px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                >
                  В процессе
                </div>
              </div>
              <div class="mb-4 flex gap-2 text-gray-500 max-[375px]:flex-col dark:text-white">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p>ул. Ленина, 10-20</p>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p>До 15.08.2025</p>
                </div>
              </div>
              <div
                class="flex justify-between pt-3 border-t border-gray-300 text-gray-500 max-sm:flex-col-reverse dark:text-white"
              >
                <div class="flex gap-2">
                  <div class="flex items-center gap-1">
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
                      <path d="M7 10v12"></path>
                      <path
                        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
                      ></path>
                    </svg>
                    <span>56</span>
                  </div>
                  <div class="flex items-center gap-1">
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
                      class="lucide lucide-message-square"
                    >
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                      ></path>
                    </svg>
                    <span>12</span>
                  </div>
                </div>
                <div class="mb-2 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-clock inline mr-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Создано 01.05.2025</span>
                </div>
              </div>
            </li>
            <li class="mb-5 p-6 bg-white border border-gray-300 rounded-lg dark:bg-honor-blue">
              <div class="mb-4 flex justify-between max-sm:flex-col max-sm:items-start">
                <h3 class="text-xl font-bold max-sm:mb-2 dark:text-white">
                  Ремонт дороги на ул. Ленина
                </h3>
                <div
                  class="min-w-[80px] px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                >
                  В процессе
                </div>
              </div>
              <div class="mb-4 flex gap-2 text-gray-500 max-[375px]:flex-col dark:text-white">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p>ул. Ленина, 10-20</p>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p>До 15.08.2025</p>
                </div>
              </div>
              <div
                class="flex justify-between pt-3 border-t border-gray-300 text-gray-500 max-sm:flex-col-reverse dark:text-white"
              >
                <div class="flex gap-2">
                  <div class="flex items-center gap-1">
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
                      <path d="M7 10v12"></path>
                      <path
                        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
                      ></path>
                    </svg>
                    <span>56</span>
                  </div>
                  <div class="flex items-center gap-1">
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
                      class="lucide lucide-message-square"
                    >
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                      ></path>
                    </svg>
                    <span>12</span>
                  </div>
                </div>
                <div class="mb-2 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-clock inline mr-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Создано 01.05.2025</span>
                </div>
              </div>
            </li>
            <li class="mb-5 p-6 bg-white border border-gray-300 rounded-lg dark:bg-honor-blue">
              <div class="mb-4 flex justify-between max-sm:flex-col max-sm:items-start">
                <h3 class="text-xl font-bold max-sm:mb-2 dark:text-white">
                  Ремонт дороги на ул. Ленина
                </h3>
                <div
                  class="min-w-[80px] px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                >
                  В процессе
                </div>
              </div>
              <div class="mb-4 flex gap-2 text-gray-500 max-[375px]:flex-col dark:text-white">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p>ул. Ленина, 10-20</p>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p>До 15.08.2025</p>
                </div>
              </div>
              <div
                class="flex justify-between pt-3 border-t border-gray-300 text-gray-500 max-sm:flex-col-reverse dark:text-white"
              >
                <div class="flex gap-2">
                  <div class="flex items-center gap-1">
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
                      <path d="M7 10v12"></path>
                      <path
                        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
                      ></path>
                    </svg>
                    <span>56</span>
                  </div>
                  <div class="flex items-center gap-1">
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
                      class="lucide lucide-message-square"
                    >
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                      ></path>
                    </svg>
                    <span>12</span>
                  </div>
                </div>
                <div class="mb-2 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-clock inline mr-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Создано 01.05.2025</span>
                </div>
              </div>
            </li>
            <li class="mb-5 p-6 bg-white border border-gray-300 rounded-lg dark:bg-honor-blue">
              <div class="mb-4 flex justify-between max-sm:flex-col max-sm:items-start">
                <h3 class="text-xl font-bold max-sm:mb-2 dark:text-white">
                  Ремонт дороги на ул. Ленина
                </h3>
                <div
                  class="min-w-[80px] px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                >
                  В процессе
                </div>
              </div>
              <div class="mb-4 flex gap-2 text-gray-500 max-[375px]:flex-col dark:text-white">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p>ул. Ленина, 10-20</p>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p>До 15.08.2025</p>
                </div>
              </div>
              <div
                class="flex justify-between pt-3 border-t border-gray-300 text-gray-500 max-sm:flex-col-reverse dark:text-white"
              >
                <div class="flex gap-2">
                  <div class="flex items-center gap-1">
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
                      <path d="M7 10v12"></path>
                      <path
                        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
                      ></path>
                    </svg>
                    <span>56</span>
                  </div>
                  <div class="flex items-center gap-1">
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
                      class="lucide lucide-message-square"
                    >
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                      ></path>
                    </svg>
                    <span>12</span>
                  </div>
                </div>
                <div class="mb-2 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-clock inline mr-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Создано 01.05.2025</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
