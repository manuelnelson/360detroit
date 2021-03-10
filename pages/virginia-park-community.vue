<template>
  <div class="project">    
    <div class="hero hero-virginia-park flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          <!-- <img src="~/assets/images/logo.png" class="hero__logo mb-4 pr-8" alt="360 logo" /> -->
          Virginia Park Community
        </h1>
      </div>
    </div>
    <div class="rich-text project-text m-auto mt-10">
      <p>The Virginia Park Community is located near the New Center in the heart of the city of Detroit. The boundaries are West Grand Blvd, Atkinson, Lodge Fwy and Linwood. The Virginia Park Community has several different neighborhoods and was designed in the late 19th and early 20th centuries as an upper-middle class neighborhood featuring unique architecture of large homes and duplexes. </p>
      <p>The Virginia Park Community’s history includes the uprisings in 1967 and the development of the community owned Virginia Park Community Plaza.</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, reactive, toRefs, useMeta} from "@nuxtjs/composition-api";
import { routes } from "~/router";

// import { globalStore } from "../store/modules/global-store";
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
    const { title } = useMeta({ title: `${routes.virginiaPark.meta.title}` })
    //methods
    return {
        ...toRefs(data), isLoading
    };
  },
}) 
</script>
<style lang="stylus">
  .project
    min-height 100vh;
    box-sizing border-box;
    padding px-to-rem(0px) 0 0
    width: 100%;
    color var(--text-color);
    &-text
      max-width 900px
    .hero.hero-virginia-park
      height 500px 
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/arthouse.jpg')
      background-size cover;
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
