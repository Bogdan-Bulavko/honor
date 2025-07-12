<script setup lang="ts"></script>

<template>
  <main class="py-16 p-4 bg-gradient-to-r from-honor-blue to-honor-darkBlue text-white">
    <div
      class="flex items-center justify-between max-lg:justify-center gap-12 max-w-[1280px] m-auto"
    >
      <div class="max-w-[600px] max-lg:text-center">
        <h1 class="text-4xl font-bold mb-6">Платформа «Честь»</h1>
        <p class="text-lg mb-8">
          Цифровая платформа для прямого взаимодействия между избирателями и представителями власти
        </p>
        <div class="flex gap-5 max-lg:flex-col">
          <a href="#" class="w-full"
            ><button
              class="min-w-full p-3 rounded-xl bg-white hover:bg-gray-100 transition-colors text-honor-blue"
            >
              Для избирателей
            </button></a
          ><a href="#" class="w-full"
            ><button
              class="min-w-full p-3 rounded-xl text-white bg-honor-blue hover:bg-white/30 transition-colors border border-white"
            >
              Для представителей власти
            </button></a
          >
        </div>
      </div>
      <div class="max-lg:hidden">
        <img src="/placeholder.svg" alt="placeholder" class="max-w-full" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
