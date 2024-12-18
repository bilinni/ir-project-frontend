<template>
  <div class="w-full py-8 bg-white rounded-lg transition-transform transform">
    <!-- Full-width Image with Parallax Effect -->
    <div
      class="w-full h-96 bg-gray-200 mb-6 relative overflow-hidden"
      ref="parallaxImage"
    >
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{
          backgroundImage: `url(${image || fallbackImage})`,
          backgroundPosition: parallaxPosition,
        }"
      ></div>
      <div class="absolute inset-0 bg-purple-950/70"></div>
      <!-- Cluster Title -->
      <h2 class="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white text-center">
        {{ title }}
      </h2>
    </div>

    <!-- Horizontally Scrollable Items -->
    <div class="overflow-x-auto scrollbar-hide flex items-center px-4">
      <ul class="flex items-center space-x-4">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="w-fit py-4 text-center bg-gray-100 rounded-lg text-gray-600 hover:bg-primary hover:text-purple-950 cursor-pointer transition relative overflow-hidden"
          @click="navigateToItem(item)"
        >
          <span v-if="Array.isArray(item)" class="relative z-10 font-bold text-nowrap w-fit px-6">
            {{ item.join(' - ') }}
          </span>
          <span v-else class="relative z-10 font-bold text-nowrap w-fit px-6">
            {{ item }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDataStore } from '~/stores/data';

export default {
  props: {
    title: String,
    items: Array,
    image: String,
  },
  setup() {
    const store = useDataStore();
    const router = useRouter();
    const fallbackImage = ref('https://via.placeholder.com/150');

    const navigateToItem = (item) => {
      const filterValue = Array.isArray(item) ? item.join(' - ') : item;
      store.setQueryFilter(filterValue);
      router.push('/search');
    };

    const parallaxPosition = computed(() => {
      // Add your parallax logic here if needed
      return 'center';
    });

    return {
      fallbackImage,
      navigateToItem,
      parallaxPosition,
    };
  },
};
</script>

<style scoped>
/* Hide default scrollbar for horizontal scrolling */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Add hover scaling */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Ensure text readability */
li span {
  position: relative;
  z-index: 10;
}
</style>
