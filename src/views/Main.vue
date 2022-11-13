<template lang="pug">
LayoutMain
  div.text-5xl.sm_text-8xl.font-bold.text-slate-600.mb-20 {{ ctrlVLabel }}
</template>

<style lang="stylus" scoped>
</style>

<script setup>
  import LayoutMain from '@/layouts/LayoutMain.vue'
  import { usePasteStore } from '@/stores/paste'
  import { useRouter } from 'vue-router'
  import Bowser from 'bowser'

  const router = useRouter()
  const browser = Bowser.getParser(window.navigator.userAgent);
  const ctrlVLabel = (browser.parsedResult.os.name == 'macOS') ? '⌘ + V' : 'Ctrl + V'
  const pasteStore = usePasteStore()

  document.addEventListener("paste", function (e) {
    let clipboardData = e.clipboardData || window.clipboardData
    let clipboardText = clipboardData.getData('text')
    pasteStore.setPastedText(clipboardText)

    router.push({ name: 'preview' })
  });
</script>