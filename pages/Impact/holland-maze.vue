<template>
  <div class="project">    
    <div class="hero hero-holland flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          <img src="~/assets/images/logo.png" class="hero__logo mb-4 pr-8" alt="360 logo" />
          Holland Maze
        </h1>        
      </div> 
    </div>
    <div class="rich-text project-text m-auto mt-10">
      <p>Adopting the island located at the Lodge Freeway and Virginia Park for neighborhood beautification,  The Holland Maze will be a playful adaptation of the tulip fields found in the Netherlands.  Characterized by its bright colors, the maze will consist of mounds of tulips, lavender, geraniums, and other perennials.  The maze portion, comprised of narrow grass paths, will allow up close enjoyment of the colorful plantings.  Check it out Sprint 2021!</p>
      <div class="funders mt-8">
        <h3 class="font-bold">Funders</h3>
        <ul>
          <li>Wayne Metropolitan Community Action Agency - 2020</li>
          <li>Detroit Future City - 2020</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, reactive, toRefs, useMeta, } from "@nuxtjs/composition-api";
import { routes } from "~/router";

// import { globalStore } from "../../store/modules/global-store";
export default defineComponent({
  components: {},
  head: {},  
  setup(props, context) {
    //configure data
    const data = reactive({
    });
    const isLoading = computed(() => {
      // return globalStore.state.isLoading;
    })
      const { title } = useMeta({ title: `${routes.hollandMaze.meta.title}` })
    //methods
    return {
        ...toRefs(data), isLoading
    };
  },
}) 
</script>
<style lang="stylus">
  .project
    .hero.hero-holland
      height 600px 
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/holland1.jpg'); 
      background-size: cover;
      background-position 80%;
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
