<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900">
    <Header />
    <main class="mx-auto max-w-5xl px-4 pb-16 pt-0 md:px-6 md:pt-0">
      <RouterView />
    </main>
  </div>
</template>
