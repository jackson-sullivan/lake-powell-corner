<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <header
    :class="
      isHome
        ? 'absolute inset-x-0 top-0 z-30 bg-transparent text-white border-0'
        : 'border-b border-slate-200 backdrop-blur bg-white/70 text-[var(--color-accent-ink,#1f2937)]'
    "
  >
    <div
      :class="
        isHome
          ? 'flex items-center justify-start px-4 py-3 md:px-6 w-full'
          : 'flex items-center justify-start px-4 py-3 md:px-6 mx-auto max-w-5xl'
      "
    >
      <RouterLink
        to="/"
        :class="
          isHome
            ? 'px-2 text-sm font-semibold transition hover:-translate-y-0.5 md:text-base text-white hover:text-white/85'
            : 'px-2 text-sm font-semibold transition hover:-translate-y-0.5 md:text-base text-[var(--color-accent,#c16545)] hover:text-[var(--color-accent,#a14f34)]'
        "
        style="font-family: 'Helvetica', 'Arial', sans-serif"
      >
        Lake Powell Corner
      </RouterLink>
    </div>
  </header>
</template>
