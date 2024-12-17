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
          // filter: 'sepia(1) hue-rotate(270deg) saturate(2) blur(3px) brightness(0.7)'
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
        <li
          :key="'see-all'"
          class="w-40 py-4 text-center bg-gray-100 rounded-lg text-gray-600 hover:bg-primary hover: text-purple-950 cursor-pointer transition relative overflow-hidden"
          @click="navigateToCluster"
        >
          <span class="relative z-10 font-bold">See all</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue"
import { useRouter } from "vue-router"

// Define props
const props = defineProps({
  title: String, // Title of the cluster (e.g., Genre, Location)
  items: Array, // List of items to display
  image: String, // Optional image for the cluster card
})

// Fallback image for when no cluster image is provided
const fallbackImage =
  "https://via.placeholder.com/800x400?text=No+Image+Available"

// Router for navigation
const router = useRouter()

// Parallax Effect
const parallaxPosition = ref("center 50%")
const parallaxImage = ref(null)

function handleScroll() {
  if (parallaxImage.value) {
    const rect = parallaxImage.value.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Check if the image is within the viewport
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      // Calculate the visible percentage of the element
      const visiblePercentage = (windowHeight - rect.top) / (windowHeight + rect.height)
      const newPosition = Math.min(Math.max((visiblePercentage - 0.5) * 100, -50), 50) // Scale effect
      parallaxPosition.value = `center ${50 + newPosition}%`
    }
  }
}

// Add event listener for scroll on mount
onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

// Remove event listener when component is destroyed
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

// Navigate to item-specific search
function navigateToItem(item) {
  router.push(`/search?item=${encodeURIComponent(item)}`)
}

// Navigate to full cluster page
function navigateToCluster() {
  router.push(`/search?cluster=${encodeURIComponent(props.title)}`)
}
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
