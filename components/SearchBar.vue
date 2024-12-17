<template>
  <div class="flex justify-center items-center bg-white rounded-xl px-4">
    <input
      type="text"
      v-model="query"
      placeholder="Search for concerts..."
      class="w-full py-4 text-lg text-gray-900 placeholder-gray-500 bg-transparent outline-none"
    />
    <button
      @click="performSearch"
      class="py-4 text-gray-80 font-bold"
    >
      <i class="fas fa-search text-black"></i>
    </button>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const query = ref('')

    onMounted(() => {
      query.value = route.query.query || ''
    })

    const performSearch = () => {
      if (query.value.trim() !== '') {
        router.push(`/search?query=${encodeURIComponent(query.value)}`)
      }
    }

    return { router, route, query, performSearch }
  },
}
</script>

<style scoped>
</style>