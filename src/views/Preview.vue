<template lang="pug">
LayoutMain.bg-slate-100
  div.text-5xl.font-regular.text-slate-400 {{ pastedText }}
</template>

<script setup>
  import LayoutMain from '@/layouts/LayoutMain.vue'
  import { usePasteStore } from '@/stores/paste'
  
  const pasteStore = usePasteStore()
  const pastedText = pasteStore.pastedTextValue
</script>