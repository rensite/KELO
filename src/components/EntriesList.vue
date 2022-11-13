<template lang='pug'>
div.grid.grid-flow-row.bg-white.rounded-t-2xl.pt-4.pb-6.px-4.mx-4
  div.row Simply dummy text of the printing and typesetting industry.
  div.row 
    div Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    div &times;
  div.row Contrary to popular belief, Lorem Ipsum is not simply random text.
  div.row Lorem Ipsum
  div.row Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".
</template>

<style scoped>
  @tailwind components;

  @layer components {
    .row {
      @apply flex justify-between text-xl px-6 py-4 rounded-lg hover_bg-slate-100;
    }
  }
</style>