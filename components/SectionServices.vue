<template>
  <section class="white z-depth-2 relative z-30 p-8 flex flex-wrap md:flex-no-wrap">
    <div v-scrollinto="" class="w-full md:w-1/2 p-6">
      <h3 class="text-5xl mt-10 flex items-center mb-6">Upcoming Events</h3>
      <ul class="collection">
        <li class="collection-item flex items-center"><i class="text-3xl mr-2 material-icons">event</i>Community Meeting - 10.14.2020 (Monthly every second Wednesday)</li>
        <li class="collection-item flex items-center"><i class="text-3xl mr-2 material-icons">event</i>Art House Reveal  - 10.20.2020</li>
        <li class="collection-item flex items-center"><i class="text-3xl mr-2 material-icons">event</i>Art House Reveal  - 10.20.2020</li>
      </ul>
      <p>
        <a target="_blank" class="text-2xl flex items-center" href="https://calendar.google.com/calendar/u/1?cid=MjRsZ2FzajNsN2dtY2xjN25wdmE1b2dkdDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">View all upcoming events here <i class="material-icons ml-2 .hover:ml-4">forward</i></a>
      </p>
    </div>
    <div class="w-full md:w-1/2 p-6 pr-0">
      <p class="font-bold text-2xl text-center">360 Park opening Spring 2021</p>
      <a target="_blank"  aria-label="Brochure" href="/Brochure Rendering.pdf">
        <img v-scrollinto="" class="park-image z-depth-3 m-auto" src="../assets/images/park.png" alt="360 Park">
      </a>
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

<style lang="stylus">
  .white
    background-color white
    color var(--primary)
    a
      color var(--secondary)
      &:hover
        color var(--secondary-dark) !important

    .park-image
      max-height 500px
</style>>