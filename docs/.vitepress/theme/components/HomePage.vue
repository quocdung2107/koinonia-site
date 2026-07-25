<template>
  <main>

    <Hero />

    <Features />

    <Screenshots />

    <DownloadCard />

    <Footer />

  </main>
</template>

<script setup lang="ts">
import Hero from './Hero.vue'
import Features from './Features.vue'
import Screenshots from './Screenshots.vue'
import DownloadCard from './DownloadCard.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
main{
    max-width:1200px;
    margin:auto;
    padding:40px 24px 80px;
}
</style>