<template lang='pug'>
.h-screen
  Header
  slot
  Footer
</template>

<script setup>
  import Footer from '@/components/Footer.vue'
  import Header from '@/components/Header.vue'
</script>