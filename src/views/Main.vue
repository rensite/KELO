<template lang="pug">
LayoutMain.bg-slate-100
  div.text-5xl.font-regular.text-slate-400 {{ ctrlVLabel }}
</template>

<style lang="stylus" scoped>
</style>

<script setup>
  import LayoutMain from '@/layouts/LayoutMain.vue';

  const ctrlVLabel = (navigator.userAgentData.platform == 'macOS') ? '⌘ + V' : 'ctrl + V';
</script>