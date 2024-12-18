<template>
  <div class="flex justify-center items-center bg-white rounded-xl px-4">
    <input
      type="text"
      v-model="store.search.search"
      placeholder="Search for concerts..."
      class="w-full py-4 text-lg text-gray-900 placeholder-gray-500 bg-transparent outline-none"
      @keyup.enter="performSearch"
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
import { ref, onMounted } from 'vue';
import { useDataStore } from '~/stores/data';

export default {
  setup() {
    const store = useDataStore();
    const router = useRouter();

    const performSearch = async () => {
      await store.fetchConcerts();
      router.push('/search');
    };

    return { store, performSearch };
  },
};
</script>

<style scoped>
</style>