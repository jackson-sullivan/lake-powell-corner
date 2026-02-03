<script setup lang="ts">
import HouseInfo from '../components/HouseInfo.vue'

const house = {
  name: 'Grandy House',
  location: 'Page, AZ',
  description:
    'Welcome to Grandy! This 3-bedroom, 2-bathroom home with a walk-in shower and double vanity in the primary, plus a bathtub in the second bath, offers 1200 sq ft, a large backyard, and two driveways. Month-to-month, great for construction teams, nurses, or remote stays.',
  image: '/images/grandy/grandy-01.png',
  stats: [
    { label: 'Bedrooms', value: '3' },
    { label: 'Bathrooms', value: '2' },
    { label: 'Square Feet', value: '1200 sq ft' },
    { label: 'Parking', value: '3 Cars' },
    { label: 'Price', value: '$2500/mo' },
    { label: 'Availability', value: 'Month-to-month or Extended' },
  ],
  images: [
    '/images/grandy/grandy-01.png',
    '/images/grandy/grandy-02.png',
    '/images/grandy/grandy-03.png',
    '/images/grandy/grandy-04.png',
    '/images/grandy/grandy-05.png',
    '/images/grandy/grandy-06.png',
    '/images/grandy/grandy-07.png',
    '/images/grandy/grandy-08.png',
    '/images/grandy/grandy-09.png',
    '/images/grandy/grandy-10.png',
    '/images/grandy/grandy-11.png',
    '/images/grandy/grandy-12.png',
    '/images/grandy/grandy-13.png',
    '/images/grandy/grandy-14.png',
    '/images/grandy/grandy-15.png',
    '/images/grandy/grandy-16.png',
    '/images/grandy/grandy-17.png',
  ],
  features: [
    'Washer & dryer',
    'Microwave + oven + stove',
    'Walk-in pantry',
    'Primary bathroom: walk-in shower + double vanity',
    'Second bathroom: bathtub',
    'Large backyard',
    'Partially furnished',
  ],
}
</script>

<template>
  <article class="space-y-8 mt-4">
    <HouseInfo
      :name="house.name"
      :location="house.location"
      :description="house.description"
      :image="house.image"
      :images="house.images"
      :stats="house.stats"
      :features="house.features"
    />

    <section class="px-1 sm:px-0">
      <p class="text-lg font-semibold text-slate-900 sm:text-xl">
        Whether you’re here for work, adventure, or a quiet stretch by Lake Powell, we want you to
        feel at home. We look forward to your stay!
      </p>
    </section>
  </article>
</template>
