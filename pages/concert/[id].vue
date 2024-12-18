<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <TopBar class="fixed w-full z-50"/>
    <div class="pt-14">
      <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-purple-950/10">
        <div class="bg-purple-950/5 p-1">
          <ConcertDetails v-for="concert in concerts" :key="concert.id" :concert="concert" />
        </div>
        <div class="border-t border-purple-950/10">
          <div class="bg-gradient-to-r from-purple-950/5 to-transparent p-1">
            <!-- <SimilarConcerts :concerts="similarConcerts" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useDataStore } from '~/stores/data';
import { computed } from 'vue';

export default {

  setup() {
    const store = useDataStore();
    const concerts = computed(() => store.concerts);

    return { concerts };
  }
};
</script>