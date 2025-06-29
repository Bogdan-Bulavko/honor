<script setup lang="ts">
const items = 8
</script>

<template>
  <div class="bg-white py-10 px-5 flex justify-between">
    <h2 v-for="item in items" class="text-3xl">Title</h2>
  </div>
</template>

<style scoped></style>
