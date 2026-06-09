<script setup lang="ts">
import tramTrain from '~/assets/svg/modes/tram_train.svg'
</script>

<template>
  <span class="picto">
    <img :src="tramTrain" alt="tram-train">
  </span>
</template>

<style scoped lang="scss">
.picto {
  position: relative;
  display: block;
  min-width: 1em;
  min-height: 1em;
  width: 1em;
  height: 1em;
  overflow: hidden;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
