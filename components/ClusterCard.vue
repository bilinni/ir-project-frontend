<template>
  <div class="w-full py-8 bg-white rounded-lg transition-transform transform">
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
      <h2 class="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white text-center">
        {{ title }}
      </h2>
    </div>

    <div class="overflow-x-auto scrollbar-hide flex items-center px-4">
      <ul class="flex items-center space-x-4">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="w-fit py-4 text-center bg-gray-100 rounded-lg text-gray-600 hover:bg-primary hover:text-purple-950 cursor-pointer transition relative overflow-hidden"
          @click="navigateToItem(item)"
        >
            <span v-if="Array.isArray(item)" class="relative z-10 font-bold text-nowrap w-fit px-6 capitalize">
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
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useDataStore } from '~/stores/data';

export default {
  props: {
    title: String,
    items: Array,
    image: String,
    filterType: String,
  },
  setup(props) {
    const store = useDataStore();
    const router = useRouter();
    const fallbackImage = ref('https://via.placeholder.com/150');
    const scrollY = ref(0);

    const navigateToItem = (item) => {
      const filterValue = item;
      if (props.filterType === 'location') {
        store.setSelectedLocation(filterValue);
      } else if (props.filterType === 'venue') {
        store.setSelectedVenue(filterValue);
      } else {
        store.setQueryFilter(filterValue);
        console.log('Query Filter:', filterValue);
      }
      router.push('/search');
    };

    const parallaxPosition = computed(() => {
      return `center ${scrollY.value * 0.5}px`;
    });

    const handleScroll = () => {
      scrollY.value = window.scrollY;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
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
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>