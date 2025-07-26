<script setup lang="ts"></script>

<template>
  <section>
    <div class="mb-5 flex justify-between max-[375px]:flex-col max-[375px]:items-center">
      <h2 class="text-2xl font-bold max-[375px]:mb-2 dark:text-white">Лента новостей</h2>
    </div>
    <ul class="overflow-auto h-[600px]">
      <li
        class="mb-5 p-6 bg-white border border-gray-300 rounded-lg shadow-sm dark:bg-honor-blue dark:text-white"
      >
        <div class="mb-4 flex justify-between max-sm:flex-col max-sm:items-start">
          <h3 class="text-xl font-bold dark:text-white">
            Установка новых детских площадок в микрорайоне Северный
          </h3>
        </div>

        <div class="mb-4 dark:text-white">
          <p>
            По итогам встречи с жителями микрорайона Северный, управление благоустройства утвердило
            установку трёх новых детских игровых комплексов на территориях домов 15, 19 и 23. Работы
            завершены 10 июня 2025 года.
          </p>
        </div>

        <div class="mb-5 flex flex-wrap gap-4 text-gray-400 dark:text-white text-sm">
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
              class="mr-1.5"
            >
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
              />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>мкр. Северный, д. 15–23</span>
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
              class="mr-1.5"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 2v4" />
              <path d="M16 2v4" />
            </svg>
            <span>Завершено: 10.06.2025</span>
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
              class="mr-1.5"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 11.08V7a4 4 0 0 0-3.474-3.951" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>Ответственный: Департамент ЖКХ</span>
          </div>
        </div>

        <div class="mb-5">
          <img
            src="../../public/krasocnaa-detskaa-plosadka-na-otkrytom-vozduhe.jpg"
            alt="Фото новой детской площадки"
            class="w-full rounded-md"
          />
        </div>

        <div
          class="flex justify-between pt-2 border-t border-gray-300 text-gray-400 dark:text-white text-sm"
        >
          <div class="flex gap-4">
            <div
              class="flex items-center gap-1 hover:text-red-500 dark:hover:text-red-400 transition cursor-pointer"
            >
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
                <path d="M7 10v12" />
                <path
                  d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
                />
              </svg>
              <span>84</span>
            </div>
            <div
              class="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer"
            >
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>6</span>
            </div>
          </div>

          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="inline mr-1"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>12.06.2025</span>
          </div>
        </div>
      </li>
      <li
        class="mb-5 p-6 bg-white border border-gray-300 rounded-lg shadow-sm dark:bg-honor-blue dark:text-white"
      >
        <div class="mb-4 flex justify-between max-sm:flex-col max-sm:items-start">
          <h3 class="text-xl font-bold dark:text-white">
            Ремонт уличного освещения на проспекте Мира
          </h3>
        </div>

        <div class="mb-4 dark:text-white">
          <p>
            В рамках программы «Безопасный город» специалисты заменили 42 устаревших фонаря на
            энергоэффективные светодиодные на участке от ул. Лесная до ул. Школьная. Уличное
            освещение теперь работает стабильно, что повысило безопасность пешеходов и водителей в
            вечернее время.
          </p>
        </div>

        <div class="mb-5 flex flex-wrap gap-4 text-gray-400 dark:text-white text-sm">
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
              class="mr-1.5"
            >
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
              />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>просп. Мира, от ул. Лесная до ул. Школьная</span>
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
              class="mr-1.5"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 2v4" />
              <path d="M16 2v4" />
            </svg>
            <span>Завершено: 05.07.2025</span>
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
              class="mr-1.5"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 11.08V7a4 4 0 0 0-3.474-3.951" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>Ответственный: Горсвет</span>
          </div>
        </div>

        <div class="mb-5">
          <img
            src="../../public/remont-sveta.jpg"
            alt="Освещённая улица в вечернее время"
            class="w-full rounded-md"
          />
        </div>

        <div
          class="flex justify-between pt-2 border-t border-gray-300 text-gray-400 dark:text-white text-sm"
        >
          <div class="flex gap-4">
            <div
              class="flex items-center gap-1 hover:text-red-500 dark:hover:text-red-400 transition cursor-pointer"
            >
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
                <path d="M7 10v12" />
                <path
                  d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
                />
              </svg>
              <span>127</span>
            </div>
            <div
              class="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer"
            >
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>9</span>
            </div>
          </div>

          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="inline mr-1"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>06.07.2025</span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
