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
    <!-- <section class="blue p-8 flex relative z-depth-2 z-40 flex-wrap md:flex-no-wrap" v-if="happening.title.toLowerCase() != 'draft'">
      <div class="w-full md:w-3/5 md:p-6 rich-text">
        <h3 class="text-5xl mb-4">{{happening.title}}</h3> 
        <div class="text-xl" v-html="$md.render(happening.content)"></div>
      </div>
    </section> -->
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
  // async asyncData(context) {
  //   const happenings = await context.$content("happening").fetch();
  //   const happening = happenings[0];
  //   return {
  //     happening,
  //   };
  // },

  setup(props, context) {
    const data = reactive({
    });
    const isLoading = computed(() => {
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
