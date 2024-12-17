export default defineNuxtConfig({
  ssr: false,

  css: [
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  runtimeConfig: {
    mongoUri: process.env.MONGO_URI, 
    mongoDb: process.env.MONGO_DB,
    public: {
      password: process.env.NUXT_CSV_DOWNLOAD_PASSWORD,
    },
  },

  

  compatibilityDate: "2024-11-30",
  modules: ['@pinia/nuxt', "@nuxtjs/tailwindcss"],
});
