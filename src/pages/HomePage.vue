<script setup lang="ts">
const houses = [
  {
    id: 'grandy',
    name: 'Grandy House',
    summary: '3 bed · 2 bath · Walk-in shower · Spacious backyard',
    image: '/images/grandy/grandy-10.png',
    to: '/grandy',
  },
]
</script>

<template>
  <section class="space-y-10 -mt-16 md:-mt-24">
    <div
      class="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] overflow-hidden h-[60vh] sm:h-[70vh] -mt-[120px] sm:-mt-[140px]"
    >
      <img
        src="/images/pagearea/LakePowellImage.jpg"
        alt="Lake Powell"
        class="block h-full w-full object-cover"
        loading="lazy"
      />
    </div>
    <div class="px-6 py-12 sm:px-10">
      <div class="mx-auto flex max-w-4xl flex-col gap-4">
        <h1 class="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Cozy homes for flexible stays
        </h1>
        <p class="max-w-2xl text-base leading-relaxed text-slate-700">
          Thoughtfully maintained properties, available for Airbnb or longer-term rentals. Clean
          design, practical amenities, and easy access to Lake Powell, Antelope Canyon, and
          Horseshoe Bend.
        </p>
        <div
          class="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-accent,#c16545)]"
        >
          Terracotta sunsets • Soft desert blues • Friendly stays
        </div>
      </div>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <RouterLink
        v-for="house in houses"
        :key="house.id"
        :to="house.to"
        class="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
      >
        <div class="relative">
          <img
            :src="house.image"
            :alt="house.name"
            class="h-64 w-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
        </div>
        <div class="space-y-1 px-4 py-4">
          <p class="text-sm font-semibold text-slate-900">{{ house.name }}</p>
          <p class="text-sm text-slate-600">{{ house.summary }}</p>
          <span class="inline-flex items-center gap-1 text-sm font-medium text-accent">
            View details
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
