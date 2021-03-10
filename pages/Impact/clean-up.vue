<template>
  <div class="project">    
    <div class="hero hero-cleanup flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          Community Cleanups
        </h1>
      </div>
    </div>
    <div class="rich-text project-text m-auto mt-10">
      <p>A tier of our neighborhood beautification projects, at least annually, volunteers are engaged to clean and provide maintenance of vacant properties, alleys and surrounding areas.  Collaboration with other organizations make the work lighter and increase the impact. To date, over 1,000 volunteers have been engaged to maintain alley ways and vacant properties.  </p>
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
    const { title } = useMeta({ title: `${routes.cleanUp.meta.title}` })

    //methods
    return {
        ...toRefs(data), isLoading
    };
  },
}) 
</script>
<style lang="stylus">
  .project
    .hero.hero-cleanup
      height 600px 
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/Cleanup.jpg');
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
