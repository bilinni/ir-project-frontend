<template>
  <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
    <!-- Price Badge -->
    <div class="absolute top-4 right-4 bg-purple-950 text-white px-4 py-2 rounded-full shadow-md z-10">
      {{ concert.Price || "On request" }}
    </div>

    <!-- Image Section with Gradient Overlay -->
    <div class="relative">
      <img
        :src="concert['Image Link'] || fallbackImage"
        alt="Concert Image"
        class="w-full h-48 object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
    </div>

    <!-- Content Section -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-black mb-3">{{ concert["Event Name"] }}</h3>
      
      <div class="space-y-2">
        <div class="flex items-center text-gray-900">
          <i class="fas fa-map-marker-alt w-5"></i>
          <span class="ml-2">{{ concert.Venue }}</span>
        </div>
        <div class="flex items-center text-gray-900">
          <i class="fas fa-calendar-alt w-5"></i>
          <span class="ml-2">{{ concert.Date }}</span>
        </div>
        
      </div>

      <!-- Tags/Genre -->
      <!-- <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="(tag, index) in (concert.tags)" 
              :key="index"
              class="px-3 py-1 bg-purple-950 text-gray-100 rounded-full text-xs">
          {{ tag }}
        </span>
      </div> -->

      <!-- Action Button -->
      <nuxt-link
        :to="`/concert/${concert.id}`"
        class="mt-6 w-full block text-center bg-purple-950 hover:bg-purple-900 text-white py-2 rounded-lg transition-colors duration-300"
      >
        View Details
      </nuxt-link>
    </div>
  </div>
</template>


<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  concert: {
    type: Object,
    required: true,
  },
})

const fallbackImage = "https://via.placeholder.com/400x300?text=No+Image"

</script>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
