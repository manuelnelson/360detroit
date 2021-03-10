<template>
  <div class="project whats-happening">    
    <div class="hero hero-1151 flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          We Love Our Community!
        </h1>
        <p class="md:ml-10 relative md:w-2/3 text-white text-2xl">In the spirit of our mission and supporting community, we promote projects and programming that revitalize the neighborhood’s landscape while offering enjoyment and empowerment to residents.  </p>
      </div>
    </div>
    <section-impact></section-impact>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, reactive, toRefs, useMeta} from "@nuxtjs/composition-api";
import SectionImpact from '@/components/SectionImpact.vue'
import { routes } from "~/router";

// import { globalStore } from "../../store/modules/global-store";
export default defineComponent({
  components: {SectionImpact},
  head: {},
  setup(props, context) {
    //life-cycle hooks
    //configure data
    const data = reactive({
    });
    const isLoading = computed(() => {
      // return globalStore.state.isLoading;
    });
    const { title } = useMeta({ title: `${routes.whatshappening.meta.title}` })
    //methods
    return {
        ...toRefs(data), isLoading
    };
  },
}) 
</script>
<style lang="stylus">
  .whats-happening
    .hero-logo
      max-width 180px
    .hero.hero-1151
      height 500px 
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/U Extras 1.jpg');
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
