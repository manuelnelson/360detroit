<template>
  <div class="project">    
    <div class="hero hero-1189 flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          <img src="~/assets/images/logo.png" class="hero__logo mb-4 pr-8" alt="360 logo" />
          1189 W Euclid
        </h1>
      </div>
    </div>
    <div class="rich-text project-text m-auto mt-10">
      <p>Repurposed in 2020, 1189 W. Euclid is one of our redevelopment collaborations.  A resident’s lot was revitalized with the planting of trees, rose bushes and perennials.  Picnic tables, artistically decorated by community residents, were added to create an inviting space for community exchange.</p>
      <div class="funders mt-8">
        <h3 class="font-bold">Funders</h3>
        <ul>
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
    //configure data
    const data = reactive({
    });
    const isLoading = computed(() => {
      // return globalStore.state.isLoading;
    })
    const { title } = useMeta({ title: `${routes.euclid1189.meta.title}` })
    //methods
    return {
        ...toRefs(data), isLoading
    };
  },
}) 
</script>
<style lang="stylus">
  .project
    .hero.hero-1189
      height 600px 
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/beauttwo.jpg');
      background-size: cover;
      background-position 50% 70%;
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
