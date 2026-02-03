<script setup lang="ts">
import { computed } from 'vue'

type Stat = {
  label: string
  value: string
}

type Props = {
  name: string
  location?: string
  description: string
  image: string
  images?: string[]
  stats: Stat[]
  features?: string[]
}

const props = defineProps<Props>()

const gallery = computed(() => (props.images?.length ? props.images : [props.image]))

const heroIndex = computed(() => gallery.value.findIndex((img) => img.includes('grandy-10')))
const currentImage = computed(() => {
  const idx = heroIndex.value >= 0 ? heroIndex.value : 0
  return gallery.value[idx] ?? gallery.value[0]
})

const remainingImages = computed(() => gallery.value.filter((img) => img !== currentImage.value))
</script>

<template>
  <section class="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
    <div class="inline-block rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <img
        class="w-full rounded-2xl object-contain"
        :src="currentImage"
        :alt="props.name"
        loading="lazy"
      />
    </div>

    <div class="space-y-6">
      <div class="space-y-3">
        <h1 class="text-3xl font-semibold text-slate-900">"Grandy"</h1>
        <p v-if="props.location" class="text-sm text-slate-600">{{ props.location }}</p>

        <p class="text-lg font-semibold text-slate-900">
          {{ props.stats[0]?.value }} bed · {{ props.stats[1]?.value }} bath ·
          {{ props.stats[2]?.value }} ·
          {{ props.stats[4]?.value }}
        </p>

        <div class="space-y-1 text-sm">
          <div class="font-semibold text-slate-900">Month-to-Month or Extended</div>
          <div class="font-semibold text-slate-900">3 Car Parking</div>
        </div>
      </div>

      <div v-if="props.features?.length" class="space-y-3">
        <p class="text-xs uppercase tracking-[0.15em] text-slate-500">Highlights</p>
        <div class="grid gap-2 sm:grid-cols-2">
          <div
            v-for="feature in props.features"
            :key="feature"
            class="rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-slate-200"
          >
            {{ feature }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <div v-if="remainingImages.length" class="mt-8 space-y-4">
    <div class="mx-auto max-w-4xl space-y-6">
      <!-- Living Room Section -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-slate-900">Living Room</h2>
        <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1 pb-3">
          <li>Spacious open-concept living area</li>
          <li>Comfortable seating and natural light</li>
          <li>Smart TV and high-speed Wi‑Fi included</li>
        </ul>
        <div class="grid gap-4 sm:grid-cols-2">
          <img
            src="/images/grandy/grandy-02.png"
            alt="Living Room 1"
            class="w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
            loading="lazy"
          />
          <img
            src="/images/grandy/grandy-01.png"
            alt="Living Room 2"
            class="w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
            loading="lazy"
          />
        </div>
      </section>

      <!-- Kitchen and Dining Section -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-slate-900">Kitchen and Dining</h2>
        <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1 pb-3">
          <li>Fully equipped kitchen with modern appliances</li>
          <li>Dining area with seating for four</li>
          <li>Microwave, oven, and walk-in pantry included</li>
        </ul>
        <div class="grid gap-4 sm:grid-cols-2">
          <img
            src="/images/grandy/grandy-03.png"
            alt="Kitchen and Dining 1"
            class="w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
            loading="lazy"
          />
          <img
            src="/images/grandy/grandy-04.png"
            alt="Kitchen and Dining 2"
            class="w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
            loading="lazy"
          />
        </div>
      </section>

      <!-- Bedrooms Section -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-slate-900">Bedrooms</h2>
        <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1 pb-3">
          <li>Three comfortable bedrooms with ample storage</li>
          <li>Primary bedroom features a walk-in shower and double vanity</li>
          <li>Beds included</li>
        </ul>
        <div class="grid gap-4 sm:grid-cols-2">
          <img
            src="/images/grandy/grandy-12.png"
            alt="Bedroom 1"
            class="w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
            loading="lazy"
          />
          <img
            src="/images/grandy/grandy-11.png"
            alt="Bedroom 2"
            class="w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
            loading="lazy"
          />
          <img
            src="/images/grandy/grandy-16.png"
            alt="Bedroom 3"
            class="w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
            loading="lazy"
          />
          <div class="aspect-[4/3] overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200">
            <img
              src="/images/grandy/grandy-05.png"
              alt="Bedroom 4"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <!-- Bathrooms Section -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-slate-900">Bathrooms</h2>
        <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>Primary bathroom with walk-in shower and double vanity</li>
          <li>Second bathroom includes a bathtub</li>
          <li>Modern fixtures and clean finishes</li>
        </ul>
        <div class="space-y-4">
          <div class="rounded-xl shadow-sm ring-1 ring-slate-200">
            <img
              src="/images/grandy/grandy-17.png"
              alt="Bathroom 1"
              class="w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <img
              src="/images/grandy/grandy-15.png"
              alt="Bathroom 2"
              class="w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
              loading="lazy"
            />
            <img
              src="/images/grandy/grandy-14.png"
              alt="Bathroom 3"
              class="w-full rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
              loading="lazy"
            />
          </div>
          <div class="flex justify-center">
            <img
              src="/images/grandy/grandy-06.png"
              alt="Bathroom 4"
              class="w-full max-w-md rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <!-- Remaining Photos -->
      <section class="space-y-4">
        <div class="flex flex-col gap-4">
          <img
            v-for="img in remainingImages.filter(
              (i) =>
                ![
                  '/images/grandy/grandy-01.png',
                  '/images/grandy/grandy-02.png',
                  '/images/grandy/grandy-03.png',
                  '/images/grandy/grandy-04.png',
                  '/images/grandy/grandy-05.png',
                  '/images/grandy/grandy-09.png',
                  '/images/grandy/grandy-11.png',
                  '/images/grandy/grandy-12.png',
                  '/images/grandy/grandy-13.png',
                  '/images/grandy/grandy-14.png',
                  '/images/grandy/grandy-15.png',
                  '/images/grandy/grandy-17.png',
                  '/images/grandy/grandy-06.png',
                  '/images/grandy/grandy-07.png',
                  '/images/grandy/grandy-08.png',
                  '/images/grandy/grandy-16.png',
                ].includes(i)
            )"
            :key="img"
            :src="img"
            :alt="`${props.name} photo`"
            class="w-full rounded-2xl object-cover shadow-sm ring-1 ring-slate-200"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  </div>
</template>
