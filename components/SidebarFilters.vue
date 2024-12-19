<template>
  <div class="sidebar w-64 p-4 relative">
    <h2 class="text-xl font-bold mb-4 text-black">Filters</h2>
    <div class="mb-6">
      <h3 class="font-bold mb-2 text-black">Location</h3>
      <select v-model="selectedLocation" class="w-full border border-gray-300 p-2 rounded-lg">
        <option value="">All Locations</option>
        <option v-for="location in locations" :key="location" :value="location">
          {{ location }}
        </option>
      </select>
    </div>
    <div class="mb-6">
      <h3 class="font-bold mb-2 text-black">Venue</h3>
      <select v-model="selectedVenue" class="w-full border border-gray-300 p-2 rounded-lg">
        <option value="">All Venues</option>
        <option v-for="venue in filteredVenues" :key="venue" :value="venue">
          {{ venue }}
        </option>
      </select>
    </div>
    <div class="mb-6">
      <h3 class="font-bold mb-2 text-black">Tags</h3>
      <select v-model="selectedKeyword" class="w-full border border-gray-300 p-2 rounded-lg">
        <option value="">All Tags</option>
        <option v-for="keyword in keywords" :key="keyword" :value="keyword">
          {{ keyword.join(' - ') }}
        </option>
      </select>
    </div>
    <button
      @click="applyFilters"
      class="mt-6 w-56 bottom-3 fixed bg-purple-950 text-white py-2 rounded-lg hover:bg-purple-900"
    >
      Apply Filters
    </button>
  </div>
</template>

<script>
import { computed, ref, watch, onMounted } from 'vue';
import { useDataStore } from '~/stores/data';

export default {
  setup() {
    const store = useDataStore();
    const selectedLocation = ref(store.getSelectedLocation());
    const selectedVenue = ref(store.getSelectedVenue());
    const selectedKeyword = ref(store.getKeywords());

    const locations = computed(() => store.locations);
    const venues = computed(() => store.venues);
    const keywords = computed(() => Object.values(store.clusterKeywords));

    // Always return all venues
    const filteredVenues = computed(() => venues.value);

    // Watch for changes in the store's data and update local state
    watch(() => store.locations, (newLocations) => {
      selectedLocation.value = store.getSelectedLocation();
    });

    watch(() => store.venues, (newVenues) => {
      selectedVenue.value = store.getSelectedVenue();
    });

    const applyFilters = () => {
      store.setSelectedLocation(selectedLocation.value);
      store.setSelectedVenue(selectedVenue.value);
      store.setQueryFilter(selectedKeyword.value ? selectedKeyword.value : []);
      store.fetchConcerts();
    };

    // Fetch locations, venues, and keywords when the component is mounted
    onMounted(() => {
      store.fetchLocations();
      store.fetchVenues();
      store.fetchClusterKeywords();
    });

    return {
      selectedLocation,
      selectedVenue,
      selectedKeyword,
      locations,
      filteredVenues,
      keywords,
      applyFilters
    };
  }
};
</script>

<style scoped>
.sidebar {
  height: 100%;
  overflow-y: auto;
}
</style>
