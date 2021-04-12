<template>
  <section class="yellow p-6 flex flex-wrap sm:flex-no-wrap justify-center w-2/3 m-auto">
    <div class="w-full sm:w-1/3 p-2 text-center">
      <a href="https://facebook.com/360Detroit" class="flex justify-start sm:justify-center items-center text-primary text-2xl" target="_blank">
        <i class="lni lni-facebook-oval text-primary text-5xl mr-3"></i> Join us on Facebook</a>
    </div>
    <div class="w-full sm:w-1/3 p-2">
      <a href="https://twitter.com/360Detroit" class="flex justify-start sm:justify-center items-center text-primary text-2xl" target="_blank">
        <i class="lni lni-twitter-original text-primary text-5xl mr-3"></i> Follow on Twitter</a>
    </div>
    <div class="w-full sm:w-1/3 p-2">
      <a href="https://instagram.com/360Detroit" class="flex justify-start sm:justify-center items-center text-primary text-2xl" target="_blank">
        <i class="lni lni-instagram-filled text-primary text-5xl mr-3"></i> Join us on Instagram</a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style lang="stylus" scoped>
  .text-primary
    color var(--primary) !important
  .lni
    transition color 0.2s ease-in-out
  a
    &:hover
      color var(--secondary) !important
      .lni
        color var(--secondary) !important

  // .yellow
  //   // background-color var(--primary)
  //   // color white
  //   p
  //     line-height 1.4
</style>>