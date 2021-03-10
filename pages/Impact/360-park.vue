<template>
  <div class="project">    
    <div class="hero hero-360 flex items-center">
      <div>          
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          <img src="~/assets/images/logo.png" class="hero__logo mb-4 pr-8" alt="360 logo" />
          360 Park
        </h1> 
      </div>
    </div>
    <div class="rich-text project-text m-auto mt-10">
      <p>
        360 Park, located at Byron and Virginia Park, is our largest revitalization project which fulfills part of the community’s desire for safe spaces.  360 Park will repurpose several lots to develop an attractive, pocket park for community enjoyment.  It will feature playscapes for children to play and gathering spaces that will provide positive engagement for all community members.
      </p>
      <div class="funders mt-8">
        <h3 class="font-bold">Funders</h3>
        <ul>
          <li>The Kresge Foundation – Kresge Innovative Projects: Detroit - 2018</li>
          <li>LISC – Local Initiatives Support Corporation ESPN RePlay - 2019</li>
          <li>Community Foundation of Southeast Michigan – Ralph C. Wilson, Jr. Legacy Fund - 2019</li>
          <li>Wayne Metropolitan Community Action Agency – 2020</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, reactive, toRefs, useMeta} from "@nuxtjs/composition-api";
import { routes } from "~/router";

// import { globalStore } from "../../store/modules/global-store";
export default defineComponent({
  components: {},
  head: {},

  setup(props, context) {
    //life-cycle hooks
    //configure data
    const data = reactive({
    });
    const { title } = useMeta({ title: `${routes.park360.meta.title}` })

    const isLoading = computed(() => {
      // return globalStore.state.isLoading;
    })
    //methods
    return {
        ...toRefs(data), isLoading
    };
  },
}) 
</script>
<style lang="stylus">
  .project
    .hero__logo
      width 140px
    .hero.hero-360
      max-height 600px 
      height 70vh
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/360park.jpg');
      background-size: cover;
      background-position center;
      background-color var(--primary)
      &:before
        content: ''
        display block
        height 100%
        width 100%
        left 0
        top 0
        position absolute
        background-color rgba(0,0,0,0.15)
</style>
