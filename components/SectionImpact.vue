<template>
  <section class="yellow p-8 relative z-depth-3 z-20">
    <h3 class="text-5xl font- mt-10 mb-6">Impact</h3>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4" v-scrollinto="">
      <router-link :to="routes.park360.path" class="relative link-image w-full block z-depth-2">
        <img src="~/assets/images/360park.jpg" class="w-full h-full" alt="360 park" />
        <span class="absolute bottom-0 pb-4 pl-4 text-3xl font-bold text-white">360 Park</span>
      </router-link>
      <router-link :to="routes.arthouse.path" class="relative link-image w-full block z-depth-2">
        <img src="~/assets/images/arthouse1.jpg" class="w-full h-full" alt="art house" />
        <span class="absolute bottom-0 pb-4 pl-4 text-3xl font-bold text-white">Art House</span>
      </router-link>
      <router-link :to="routes.hollandMaze.path" class="relative link-image w-full block z-depth-2">
        <img src="~/assets/images/holland1.jpg" class="w-full h-full" alt="holland maze" />
        <span class="absolute bottom-0 pb-4 pl-4 text-3xl font-bold text-white">Holland Maze</span>
      </router-link>
      <router-link :to="routes.euclid1151.path" class="relative link-image w-full block z-depth-2">
        <img src="~/assets/images/1151.jpg" class="w-full h-full" alt="1151 Euclid" />
        <span class="absolute bottom-0 pb-4 pl-4 text-3xl font-bold text-white">1151 Euclid</span>
      </router-link>
      <router-link :to="routes.euclid1167.path" class="relative link-image w-full block z-depth-2">
        <img src="~/assets/images/beautification.jpg" class="w-full h-full 1167" alt="1167 Euclid" />
        <span class="absolute bottom-0 pb-4 pl-4 text-3xl font-bold text-white">1167 Euclid</span>
      </router-link>
      <router-link :to="routes.euclid1189.path" class="relative link-image w-full block z-depth-2">
        <img src="~/assets/images/beauttwo.jpg" class="w-full h-full 1189" alt="1189 Euclid" />
        <span class="absolute bottom-0 pb-4 pl-4 text-3xl font-bold text-white">1189 Euclid</span>
      </router-link>
      <router-link :to="routes.blockParty.path" class="relative link-image w-full block z-depth-2">
        <img src="~/assets/images/CBP1.jpg" class="w-full h-full 1189" alt="Community Block Party" />
        <span class="absolute bottom-0 pb-4 pl-4 text-3xl font-bold text-white">Community Block Party</span>
      </router-link>
      <router-link :to="routes.cleanUp.path" class="relative link-image w-full block z-depth-2">
        <img src="~/assets/images/Cleanup.jpg" class="w-full h-full 1189" alt="Community Cleanups" />
        <span class="absolute bottom-0 pb-4 pl-4 text-3xl font-bold text-white">Community Cleanups</span>
      </router-link>
      <router-link :to="routes.engagementMeetings.path" class="relative link-image w-full block z-depth-2">
        <img src="~/assets/images/Community Meeting 1.jpg" class="w-full h-full 1189" alt="Community Engagement Meetings" />
        <span class="absolute bottom-0 pb-4 pl-4 text-3xl font-bold text-white">Community Engagement Meetings</span>
      </router-link>

    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '../router'

export default defineComponent({
  setup () {
    return {routes}
  }
})
</script>

<style lang="stylus" scoped>
  .yellow
    background-color var(--secondary-dark)
    color var(--primary)
    .link-image
      height 200px;
      overflow hidden
      background-color var(--primary)
      &:hover
        img
          transform scale(1.2)
        span
          color var(--secondary)
      img
        object-fit cover
        object-position: center;
        display block
        transform scale(1.0)
        transition transform 0.2s ease-in-out
      
      span
        z-index 100
    a
      color var(--secondary-dark)
    .park-image
      max-height 500px
</style>>