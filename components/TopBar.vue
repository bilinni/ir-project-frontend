<template>
    <header :class="headerClass" style="z-index: 9999;">
        <div class="w-full px-6 py-4 flex justify-between items-center">
            <div class="flex items-center">
                <nuxt-link :to="'/#hero'" :class="titleClass" class="text-xl md:text-xl">
                    ConcertHub
                </nuxt-link>
            </div>

            <div>
                <nuxt-link
                    to="/search"
                    class="px-4 py-2 bg-purple-950 text-white text-base font-bold rounded-lg hover:bg-purple-900 transition"
                >
                    Get Tickets
                </nuxt-link>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    hide: {
        type: Boolean,
        default: false,
    }
});

const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const headerClass = computed(() => {
    if (!props.hide) {
        return 'bg-white shadow-lg transition-colors duration-300 opacity-1';
    }
    return isScrolled.value ? 'bg-white shadow-lg transition-colors duration-300 opacity-1' : 'opacity-0 transition-colors duration-300';
});

const titleClass = computed(() => {
    if (!props.hide) {
        return 'text-black transition-colors duration-300 opacity-1';
    }
    return isScrolled.value ? 'text-black transition-colors duration-300 opacity-1' : 'opacity-0 text-white transition-colors duration-300';
});
</script>
