<template>
  <div class="min-h-screen bg-gray-50">
    <TopBar class="fixed w-full z-50"/>
    <div class="pt-14">
      <!-- Hero Section -->
      <div
        class="relative w-full h-[500px] bg-cover bg-center text-white flex items-center justify-center"
        :style="{ backgroundImage: `url(${imageLink})` }"
      >
        <div class="absolute inset-0 bg-purple-950/70"></div>
        <div class="relative text-center z-10 space-y-4">
          <h1 class="text-6xl font-bold bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent animate-fade-in">
            {{ eventName }}
          </h1>
          <p class="text-xl text-purple-100 animate-fade-in">{{ concert?.Date }}</p>
          <p class="text-2xl font-semibold text-white animate-fade-in">{{ concert?.Venue }}</p>
        </div>
      </div>

      <!-- Concert Details Section -->
      <div class="container mx-auto px-4">
        <div class="mx-auto w-full p-8 bg-white shadow-xl rounded-2xl -mt-20 relative z-20 border border-purple-100">
          <h2 class="text-3xl font-bold mb-8 text-purple-950">Event Details</h2>
          <div class="grid grid-cols-1 gap-12">
            <div class="space-y-6">
              <div class="flex items-center space-x-4 text-gray-700">
                <span class="font-bold text-lg text-purple-950">Date:</span>
                <span class="text-xl">{{ concert?.Date }}</span>
              </div>
              <div class="flex items-center space-x-4 text-gray-700">
                <span class="font-bold text-lg text-purple-950">Venue:</span>
                <span class="text-xl">{{ concert?.Venue }}</span>
              </div>
              <div class="flex items-center space-x-4 text-gray-700">
                <span class="font-bold text-lg text-purple-950">Location:</span>
                <span class="text-xl">{{ concert?.Location }}</span>
              </div>
              <div class="flex items-center space-x-4 text-gray-700">
                <span class="font-bold text-lg text-purple-950">Price:</span>
                <span class="text-xl text-green-600">{{ concert?.Price || 'On request' }}</span>
              </div>
            </div>
            <div v-if="concert?.Description">
              <h3 class="text-xl font-bold mb-4 text-purple-950">Description</h3>
              <p class="text-gray-600 leading-relaxed whitespace-pre-line w-full">{{ concert?.Description }}</p>
            </div>
            <div class="text-center mt-8">
              <a
                :href="concert?.Link"
                target="_blank"
                class="inline-block px-6 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition duration-300"
              >
                Buy Tickets
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const concert = ref(null);
const fallbackImage = ref('path/to/fallback/image.jpg');
const route = useRoute();
const eventName = ref('');
const imageLink = ref('');

onMounted(async () => {
  const concertId = parseInt(route.params.id, 10);
  console.log('Concert ID:', concertId);
  if (!isNaN(concertId)) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/event/${concertId}`);
      if (response.ok) {
        const data = await response.json();
        concert.value = data.event;

        eventName.value = data.event?.["Event Name"] || 'Event Name Not Available';
        imageLink.value = data.event?.["Image Link"] || fallbackImage;
      } else {
        console.error('Failed to fetch concert details:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching concert details:', error);
    }
  } else {
    console.error('Invalid concert ID:', route.params.id);
  }
});
</script>

<style scoped>
.container {
  max-width: 1280px;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}
</style>