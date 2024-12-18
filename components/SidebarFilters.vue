<template>
  <div class="sidebar w-64 p-4 relative">
    <h2 class="text-xl font-bold mb-4 text-black">Filters</h2>
    <div class="mb-6">
      <h3 class="font-bold mb-2 text-black">Price</h3>
      <input
        type="range"
        v-model="price"
        min="0"
        max="500"
        class="w-full"
        style="accent-color: rgb(59 7 100 / var(--tw-bg-opacity, 1));"
      />
      <p class="text-sm text-gray-500">Up to ${{ price }}</p>
    </div>
    <div class="mb-6">
      <h3 class="font-bold mb-2 text-black">Date</h3>
      <input
        type="date"
        v-model="date"
        class="w-full border border-gray-300 p-2 rounded-lg uppercase"
      />
    </div>
    <div>
      <h3 class="font-bold mb-2 text-black">Genre</h3>
      <input
        type="text"
        v-model="genreSearch"
        placeholder="Search genres"
        class="w-full border border-gray-300 p-2 rounded-lg mb-2"
      />
      <ul>
        <li
          v-for="genre in filteredGenres"
          :key="genre"
          class="mb-1 text-dark-purple hover:underline cursor-pointer"
          @click="toggleGenre(genre)"
        >
          <span :class="{ 'font-bold': selectedGenres.includes(genre) }">
            {{ genre }}
          </span>
        </li>
      </ul>
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
export default {
  props: {
    genres: Array,
  },
  data() {
    return {
      price: 100,
      date: '',
      selectedGenres: [],
      genreSearch: '',
    }
  },
  computed: {

  },
  methods: {
    toggleGenre(genre) {
      if (this.selectedGenres.includes(genre)) {
        this.selectedGenres = this.selectedGenres.filter((g) => g !== genre)
      } else {
        this.selectedGenres.push(genre)
      }
    },
    applyFilters() {
      this.$emit('apply-filters', {
        price: this.price,
        date: this.date,
        genres: this.selectedGenres,
      })
    },
  },
}
</script>

<style scoped>
.sidebar {
  height: 100%;
  overflow-y: auto;
}

</style>