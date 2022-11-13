<template lang='pug'>
header.fixed.top-0.h-16.w-full
  .flex.items-center.justify-between.h-full.px-6
    .text-slate-400.text-sm.sm_text-lg.text-right
      strong.text-slate-600.font-bold Keloapp 
      | / paste, save, publish
    a(href='https://github.com/rensite/Keloapp' target='_blank').w-5.h-5
      IconGithub.text-slate-600.w-full.h-full
</template>

<script setup>
  import IconGithub from '@/components/icons/Github.vue'
</script>