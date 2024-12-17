<template>
  <div class="mt-8">
    <h2 class="text-2xl font-semibold mb-6 text-purple-800">Similar Concerts</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="concert in concerts"
        :key="concert.id"
        class="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105"
      >
        <h3 class="font-semibold text-lg text-purple-900">{{ concert.name }}</h3>
        <p class="text-gray-500 mt-2">{{ concert.date }}</p>
        <p class="text-gray-500">{{ concert.venue }}</p>
        <nuxt-link
          :to="`/concert/${concert.id}`"
          class="text-purple-600 hover:text-purple-800 mt-4 block"
        >
          View Details
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    concerts: Array,
  },
}
</script>

<style scoped>
h2 {
  font-family: 'Inter', sans-serif;
}

h3 {
  font-family: 'Inter', sans-serif;
}

p {
  font-family: 'Inter', sans-serif;
}
</style>