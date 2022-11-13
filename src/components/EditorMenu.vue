<template lang='pug'>
div.grid.grid-flow-col.gap-2.max-w-min.mx-auto
  button.button Text
  button.button Image
  button.button Sound
  button.button File
  button.button Spacer
</template>

<style scoped>
  @tailwind components;

  @layer components {
    .button {
      @apply border-solid ring-2 ring-blue-500 px-3 py-1 rounded-md hover_bg-blue-500 hover_text-white transition-all;
    }
  }
</style>