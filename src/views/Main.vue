<template lang="pug">
LayoutMain.bg-slate-100
  div.text-5xl.font-regular.text-slate-400 {{ ctrlVLabel }}
</template>

<style lang="stylus" scoped>
</style>

<script setup>
  import LayoutMain from '@/layouts/LayoutMain.vue'
  import { usePasteStore } from '@/stores/paste'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const ctrlVLabel = (navigator.userAgentData.platform == 'macOS') ? '⌘ + V' : 'ctrl + V'
  const pasteStore = usePasteStore()

  document.addEventListener("paste", function (e) {
    let clipboardData = e.clipboardData || window.clipboardData
    let clipboardText = clipboardData.getData('text')
    pasteStore.setPastedText(clipboardText)

    router.push({ name: 'preview' })
  });
</script>