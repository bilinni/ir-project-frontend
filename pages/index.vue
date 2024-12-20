<template>
  <div class="min-h-screen">
    <TopBar class="fixed w-full" hide="true" />
    <div class="hero-wrapper relative">
      <div
        class="w-full h-screen bg-cover bg-center flex items-center justify-center text-white px-36"
        id="hero"
        :style="backgroundStyle">
        <div class="absolute inset-0 bg-purple-950/70"></div>
      </div>

      <div
        class="content-wrapper absolute inset-0 flex items-center justify-center text-white px-36">
        <div class="w-full text-center pb-10">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">
            Discover Your Next Favorite Concert
          </h1>
          <p class="text-lg md:text-xl mb-6">
            Find tickets to the best events in your city.
          </p>
          <div class="mt-12">
            <SearchBar />
          </div>
        </div>

        <div class="mt-8 animate-bounce absolute bottom-4">
          <svg
            class="w-12 h-12 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="mt-12 pb-12 space-y-8">
      <ClusterCard
        title="Locations"
        :items="firstTenLocations"
        image="https://hearthookhome.com/wp-content/uploads/2018/08/How-to-make-a-travel-map-with-pins.jpg"
        filterType="location" />
      <ClusterCard
        title="Venues"
        :items="firstTenVenues"
        image="https://www.fodors.com/wp-content/uploads/2021/04/03_ConcertHalls__SydneyOperaHouse_shutterstock_1446806309.jpg"
        filterType="venue" />
      <ClusterCard
        title="Tags"
        :items="firstTenKeywords"
        image="https://static.vecteezy.com/system/resources/previews/036/053/662/large_2x/ai-generated-a-professional-music-studio-with-a-large-mixing-console-computer-monitors-and-studio-monitors-free-photo.jpeg"
        filterType="tag" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useDataStore } from '~/stores/data';
import TopBar from '~/components/TopBar.vue';
import ClusterCard from '~/components/ClusterCard.vue';
import SearchBar from '~/components/SearchBar.vue';

export default {
  components: { TopBar, ClusterCard, SearchBar },
  setup() {
    const store = useDataStore();

    onMounted(async () => {
      await store.fetchLocations();
      await store.fetchVenues();
      await store.fetchClusterKeywords();
    });

    const locations = computed(() => store.locations);
    const venues = computed(() => store.venues);
    const clusterKeywords = computed(() => store.clusterKeywords);

    const firstTenLocations = computed(() => locations.value.slice(0, 10));
    const firstTenVenues = computed(() => venues.value.slice(0, 10));
    const firstTenKeywords = computed(() => Object.values(clusterKeywords.value).slice(0, 10));

    return {
      firstTenLocations,
      firstTenVenues,
      firstTenKeywords,
    };
  },
  data() {
    return {
      scrollY: 0,
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: "url('/header.png')",
        backgroundPosition: `center ${this.scrollY * 0.5}px`,
        filter: "sepia(1) hue-rotate(270deg) saturate(2) brightness(0.5)",
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>
