<template>
  <div>
    <TopBar class="fixed w-full" />
    <div class="flex min-h-screen bg-gray-100 pt-16 w-full">
      <div class="flex">
        <div class="w-[calc(100vw-256px)] flex-1 p-6">
          <SearchBar />

          <div v-if="loading" class="flex justify-center items-center mt-6">
            <p>Loading...</p>
          </div>
          <div v-else class="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ConcertCard
              v-for="concert in paginatedConcerts"
              :key="concert.id"
              :concert="concert" />
          </div>

          <div v-if="!loading" class="flex justify-center mt-6">
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="py-2 px-4 bg-purple-950 text-white rounded mx-2"
            >
              Previous
            </button>
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="py-2 px-4 bg-purple-950 text-white rounded mx-2"
            >
              Next
            </button>
          </div>
        </div>

        <div class="w-64">
          <div class="fixed h-full">
            <SidebarFilters :genres="genres" :locations="locations" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, ref, watch } from 'vue';
import { useDataStore } from '~/stores/data';

export default {
  setup() {
    const store = useDataStore();
    const currentPage = ref(1);
    const itemsPerPage = 15;
    const loading = ref(true);
    const error = ref(null);

    const fetchConcerts = async () => {
      try {
        loading.value = true;
        await store.fetchConcerts();
      } catch (err) {
        error.value = 'Failed to load concerts';
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchConcerts();
    });

    const concerts = computed(() => store.concerts);
    const totalPages = computed(() => Math.ceil(concerts.value.length / itemsPerPage));

    const paginatedConcerts = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return concerts.value.slice(start, end);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    watch(totalPages, (newTotalPages) => {
      if (currentPage.value > newTotalPages) {
        currentPage.value = newTotalPages;
      }
    });

    watch(concerts, () => {
      if (currentPage.value > totalPages.value) {
        currentPage.value = totalPages.value;
      }
    });

    return {
      concerts,
      paginatedConcerts,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      loading,
      error,
    };
  }
};
</script>

<style scoped>
</style>
