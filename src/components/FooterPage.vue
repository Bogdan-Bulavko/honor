<script setup lang="ts"></script>

<template>
  <footer class="py-16 p-4 bg-gray-100">
    <div class="max-w-[1280px] m-auto">
      <div class="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <h3 class="mb-4 text-lg font-bold">Платформа «Мониториум»</h3>
          <p class="text-gray-500 mb-2">
            Цифровая платформа взаимодействия между гражданами и представителями власти
          </p>
        </div>
        <div>
          <h3 class="mb-4 text-lg font-bold">Для избирателей</h3>
          <ul class="text-gray-500">
            <li class="mb-2">
              <RouterLink
                to="/honor/dashboard/"
                class="text-honor-text hover:text-honor-blue transition-colors"
                >Личный кабинет</RouterLink
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-honor-text hover:text-honor-blue transition-colors"
                >Регистрация</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-honor-text hover:text-honor-blue transition-colors"
                >Карта округов</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-honor-text hover:text-honor-blue transition-colors"
                >Создать здание</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-honor-text hover:text-honor-blue transition-colors"
                >Новости округов</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 text-lg font-bold">Для представителей</h3>
          <ul class="text-gray-500">
            <li class="mb-2">
              <a href="#" class="text-honor-text hover:text-honor-blue transition-colors"
                >Регистрация</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-honor-text hover:text-honor-blue transition-colors"
                >Личный кабинет</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-honor-text hover:text-honor-blue transition-colors"
                >Управление задачами</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-honor-text hover:text-honor-blue transition-colors"
                >Статистика и отчеты</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 text-lg font-bold">Контакты</h3>
          <div class="mb-2 text-gray-500">
            <p>support@chest.ru</p>
            <p class="mb-2">+7 (800) 123-45-67</p>
          </div>

          <a href="#" class="block mb-2 text-honor-blue hover:underline">Центр Сообщений</a>
          <a href="#" class="block text-honor-blue hover:underline">Помощь и поддержка</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
