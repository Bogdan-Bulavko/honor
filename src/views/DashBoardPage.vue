<script setup lang="ts">
import NotificationsBlockDashBoard from '@/components/NotificationsBlockDashBoard.vue'
import RibbonTitleDashBoard from '@/components/RibbonTitleDashBoard.vue'
import SubscriptionsBlockDashBoard from '@/components/SubscriptionsBlockDashBoard.vue'
import TasksBlockDashBoard from '@/components/TasksBlockDashBoard.vue'
import type { Ref } from 'vue'
import { ref } from 'vue'

const activeBlock: Ref<string> = ref('tasks')

const onActiveBlock = (value: string): void => {
  activeBlock.value = value
}
</script>

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
                <span>Открыть карту округов</span>
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
            <li
              class="py-1 px-3 rounded-md"
              :class="{
                'bg-white': activeBlock === 'tasks',
                'dark:bg-honor-blue': activeBlock === 'tasks',
              }"
            >
              <button
                class="cursor-pointer flex items-center gap-1"
                @click="() => onActiveBlock('tasks')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-5 text-honor-blue dark:text-white"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <polyline points="16 14 18 16 22 12"></polyline>
                  <line x1="6" y1="12" x2="10" y2="12"></line>
                  <line x1="6" y1="16" x2="14" y2="16"></line>
                </svg>
                <span class="max-md:hidden">Мои задания</span>
              </button>
            </li>
            <li
              class="py-1 px-3 rounded-md"
              :class="{
                'bg-white': activeBlock === 'notifications',
                'dark:bg-honor-blue': activeBlock === 'notifications',
              }"
            >
              <button
                class="cursor-pointer flex items-center gap-1"
                @click="() => onActiveBlock('notifications')"
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
                  data-v-inspector="src/components/Header.vue:83:13"
                  class="w-5 text-honor-blue dark:text-white"
                >
                  <path
                    d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
                    data-v-inspector="src/components/Header.vue:94:15"
                  ></path>
                  <path
                    d="M10.3 21a1.94 1.94 0 0 0 3.4 0"
                    data-v-inspector="src/components/Header.vue:95:15"
                  ></path>
                </svg>
                <span class="max-md:hidden">Уведомления</span>
              </button>
            </li>
            <li
              class="py-1 px-3 rounded-md"
              :class="{
                'bg-white': activeBlock === 'subscriptions',
                'dark:bg-honor-blue': activeBlock === 'subscriptions',
              }"
            >
              <button
                class="cursor-pointer flex items-center gap-1"
                @click="() => onActiveBlock('subscriptions')"
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
                  class="w-8 text-honor-blue dark:text-white"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>

                  <line x1="19" y1="7" x2="24" y2="7" stroke-width="2.2" />
                  <line x1="21.5" y1="4.5" x2="21.5" y2="9.5" stroke-width="2.2" />
                </svg>
                <span class="max-md:hidden"> Подписки </span>
              </button>
            </li>
            <li
              class="py-1 px-3 rounded-md"
              :class="{
                'bg-white': activeBlock === 'ribbon-title',
                'dark:bg-honor-blue': activeBlock === 'ribbon-title',
              }"
            >
              <button
                class="cursor-pointer flex items-center gap-1"
                @click="() => onActiveBlock('ribbon-title')"
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
                  class="w-6 text-honor-blue dark:text-white"
                >
                  <!-- Лист бумаги (тело ленты) -->
                  <rect width="18" height="14" x="3" y="4" rx="2" />
                  <!-- Верхняя полоса — шапка газеты -->
                  <line x1="7" y1="8" x2="17" y2="8" />
                  <!-- Колонки текста -->
                  <line x1="7" y1="12" x2="12" y2="12" />
                  <line x1="7" y1="16" x2="16" y2="16" />
                  <!-- Маленькая "статья" справа (как в ленте) -->
                  <rect x="16" y="12" width="4" height="3" rx="1" />
                </svg>
                <span class="max-md:hidden"> Лента новостей </span>
              </button>
            </li>
          </ul>
        </div>
        <TasksBlockDashBoard v-if="activeBlock === 'tasks'"></TasksBlockDashBoard>
        <NotificationsBlockDashBoard
          v-if="activeBlock === 'notifications'"
        ></NotificationsBlockDashBoard>
        <SubscriptionsBlockDashBoard
          v-if="activeBlock === 'subscriptions'"
        ></SubscriptionsBlockDashBoard>
        <RibbonTitleDashBoard v-if="activeBlock === 'ribbon-title'"></RibbonTitleDashBoard>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
