<template lang='pug'>
.h-screen
  Header
  .container.h-full.flex.flex-col.justify-center
    slot
  Footer
</template>

<script setup>
  import Footer from '@/components/Footer.vue'
  import Header from '@/components/Header.vue'
</script>