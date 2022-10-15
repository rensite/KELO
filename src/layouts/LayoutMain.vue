<template lang='pug'>
.h-screen
  header
  .container.h-full.grid.place-items-center
    slot
  footer.absolute.inset-x-0.bottom-0.h-10
    .grid.place-items-center.h-full.text-slate-300.font-light.text-sm &copy; 2022 Renat Galin / RenatGalin.pro
</template>