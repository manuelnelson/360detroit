<template>
  <div class="project">    
    <div class="hero hero-1151 flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          <img src="~/assets/images/logo.png" class="hero__logo mb-4 pr-8" alt="360 logo" />
          1151 W Euclid
        </h1>
      </div>
    </div>
    <div class="rich-text project-text m-auto mt-10">
      <p>Our first beautification project was the repurposing of 1151 W. Euclid in 2016.  The space was vacant for decades before this project’s construction.  Designed to be functional and environmentally friendly, the lot features a permeable parking pad amidst trees and perennials that improves the appearance of the neighborhood.  Rose bushes, flowering trees and a variety of plants provide three season color.</p>
      <div class="funders mt-8">
        <h3 class="font-bold">Funders</h3>
        <ul>
          <li>Detroit Future City - 2016</li>
          <li>Wayne Metropolitan Community Action Agency - 2020</li>
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
    const isLoading = computed(() => {
      // return globalStore.state.isLoading;
    })
    const { title } = useMeta({ title: `${routes.euclid1151.meta.title}` })
    //methods
    return {
        ...toRefs(data), isLoading
    };
  },
}) 
</script>
<style lang="stylus">
  .project
    .hero.hero-1151
      height 600px 
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/1151.jpg');
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
        background-color rgba(0,0,0,0.35)
</style>
