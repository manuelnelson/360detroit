<template>
  <div class="home">    
    <div class="home__hero">
      <vueper-slides fade :touchable="false">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"          
          > 
            <!-- <template v-slot:content>
                 <img src="~/assets/images/logo.png" class="hero__logo mb-4 pl-8" alt="360 logo" />             
            </template> -->
          </vueper-slide>
      </vueper-slides>

    </div>
    <section-component :slides="slides" :spotlight="spotlight"></section-component>
    <!-- <section-services></section-services> -->
    <!-- <section class="blue p-8">
      <h3 class="text-5xl font- mt-10 mb-6">Latest</h3>
      <div class="video-test">
        <div class="video-container" v-scrollinto="">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-O4w9-5fT-4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  </section> -->

  </div>
</template>

<script lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css';

import {defineComponent, computed, reactive, onMounted, toRefs, onBeforeMount, useMeta} from "@nuxtjs/composition-api";
import SectionComponent from '@/components/Section.vue'
import SectionServices from '@/components/SectionServices.vue'
import { routes } from '~/router';
export default defineComponent({
  components: {SectionComponent, SectionServices,VueperSlides, VueperSlide },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData(context) {
    const spotlights = await context.$content("spotlight").fetch();
    const spotlight = spotlights[0];
    let testimonials = await context.$content("testimonials").fetch();
    testimonials.sort((a,b) => a.order > b.order ? 1 : -1);
    const slides = testimonials.map(x => {
      return {
        content: `<figure><blockquote>${x.quote}</blockquote><figcaption>${x.caption}</figcaption></figure>`
      }
    });
    return {
      spotlight, slides
    };
  },
  setup() {
    //life-cycle hooks
    onBeforeMount(() => {
      // alertStore.clearAlerts();
      // globalStore.state.isLoading = true;
    })
    onMounted(async () => {
      //come back to
      // globalStore.state.isLoading = true;
      // globalStore.state.isLoading = false;
    })
    const { title } = useMeta({ title: `${routes.home.meta.title}` })
    //configure data
    const data = reactive({
      slides: [
        {
          image: require('~/assets/images/Aa.jpg'),
        },
        {
          image: require('~/assets/images/F.jpg'),
        },
        {
          image: require('~/assets/images/H.jpg'),
        },
        {
          image: require('~/assets/images/U Extras.jpg'),
        },
        {
          image: require('~/assets/images/Ab.jpg'),
        },
      ]
    });
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
  .home 
    min-height 100vh;
    box-sizing border-box;
    padding px-to-rem(0px) 0 0
    width: 100%;
    color var(--text-color);
    .video-test
      max-width 900px;
      max-height 500px
      margin  0 auto
      iframe
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding-bottom px-to-rem(30px);
    &__hero
      .vueperslide
        background-position center 20%;
        background-size contain;
        background-repeat no-repeat;
        &:before
          content: ''
          display block
          height 100%
          width 100%
          left 0
          top 0
          position absolute
          background-color rgba(0,0,0,0.05)
    .hero
      &__logo
        max-width 180px 
        position absolute;
        z-index 3;
        left 30px;
        bottom 30px;
      

</style>
