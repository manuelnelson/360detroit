<template>
  <div class="project">    
    <div class="hero hero-cbp flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          Community Block Party
        </h1>
      </div>
    </div>
    <div class="rich-text project-text m-auto mt-10">
      <p>A free, annual event that provides a wide array resources and opportunity for engagement & community connection.  The event which is designed for all ages seeks to expose its participants to community contributors as well as new experiences.  Since the first community block party, we have provided the more than 1,300 new children’s & teenage books, over 600 gunlocks, more than 500 backpacks with school supplies and approximately 70 boost/car seats.</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, reactive, toRefs, useMeta} from "@nuxtjs/composition-api";
import { routes } from "~/router";
// let img = require('~/assets/images/CB')
// import { globalStore } from "../../store/modules/global-store";
export default defineComponent({
  components: {},
  head: {},
  setup(props, context) {
    //configure data
    const data = reactive({
    });
    const { title } = useMeta({ title: `${routes.blockParty.meta.title}` })

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
    .hero.hero-cbp
      height 600px 
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/CBP1.JPG');
      background-size: cover;
      background-position 50% 40%;
      background-color var(--primary)
      &:before
        content: ''
        display block
        height 100%
        width 100%
        left 0
        top 0
        position absolute
        background-color rgba(0,0,0,0.15);
        
</style>
