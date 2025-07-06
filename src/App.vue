<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderHome from './components/HeaderHome.vue'
import FooterPage from './components/FooterPage.vue'
</script>

<template>
  <HeaderHome />
  <main>
    <RouterView />
  </main>
  <FooterPage />
</template>

<style scoped></style>
