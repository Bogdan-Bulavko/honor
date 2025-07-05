<script setup lang="ts">
const data = [
  {
    img: 'http://www.w3.org/2000/svg',
    title: 'Карта Округов',
    text: 'Интерактивная карта избирательных округов с информацией о представителях и активных заданиях',
  },
  {
    img: 'http://www.w3.org/2000/svg',
    title: 'Создание заданий',
    text: 'Возможность создавать конкретные задания для представителей власти и отслеживать их выполнение',
  },
  {
    img: 'http://www.w3.org/2000/svg',
    title: 'Система сообщений',
    text: 'Прямое общение между избирателями и представителями власти через встроенный мессенджер',
  },

  {
    img: 'http://www.w3.org/2000/svg',
    title: 'Профили представителей',
    text: 'Подробная информация о представителях власти, их деятельности и результатах работы',
  },
  {
    img: 'http://www.w3.org/2000/svg',
    title: 'Система оценки',
    text: 'Возможность оценивать работу представителей власти и оставлять отзывы о выполненных заданиях',
  },
  {
    img: 'http://www.w3.org/2000/svg',
    title: 'Система рейтинга',
    text: 'Рейтинговая система для представителей власти на основе активности и качества выполнения заданий',
  },
]
</script>

<template>
  <section class="py-16 p-4 bg-gray-50">
    <div class="max-w-[1280px] m-auto">
      <h2 class="mb-12 text-3xl font-bold text-center">Возможности платформы</h2>
      <div class="flex flex-wrap justify-center gap-8">
        <div v-for="card in data">
          <a href="#" class="block transition-transform hover:scale-105">
            <div class="p-6 max-w-[400px] min-h-[240px] bg-white border border-gray-300 rounded-lg">
              <div
                class="bg-honor-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4"
              >
                <svg
                  :xmlns="card.img"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-map-pin text-honor-blue"
                >
                  <path
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                  ></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 class="font-bold text-xl mb-2">{{ card.title }}</h3>
              <p class="text-gray-500">
                {{ card.text }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
