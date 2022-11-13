<template lang="pug">
LayoutMain
  .h-full.flex.flex-col.justify-center
    .container
      input(:placeholder='`Start typing or ${ctrlVLabel}`' @input='titleChanged').outline-none.focus_outline-none.text-4xl.text-center.w-full.bg-slate-100.focus_bg-white.transition-all.rounded-lg.py-4.px-8.mb-8
      Transition(name='bounce')
        EditorMenu(v-if='isEditorMenuVisible')
  .container 
    EntriesList
</template>

<script setup>
  import { ref } from 'vue';

  import LayoutMain from '@/layouts/LayoutMain.vue'
  import EditorMenu from '@/components/EditorMenu.vue'
  import EntriesList from '@/components/EntriesList.vue'

  import { usePasteStore } from '@/stores/paste'
  import { useRouter } from 'vue-router'
  import Bowser from 'bowser'

  const router = useRouter()
  const browser = Bowser.getParser(window.navigator.userAgent)
  const ctrlVLabel = (browser.parsedResult.os.name == 'macOS') ? '⌘ + V' : 'Ctrl + V'
  const pasteStore = usePasteStore()
  let isEditorMenuVisible = ref(false);

  const titleChanged = (e) => {
    isEditorMenuVisible.value = !!e.target.value.length
  }

  document.addEventListener("paste", function (e) {
    let clipboardData = e.clipboardData || window.clipboardData
    let clipboardText = clipboardData.getData('text')
    pasteStore.setPastedText(clipboardText)
  });
</script>