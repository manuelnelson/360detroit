<template>
  <div class="project">    
    <div class="hero hero-art-house flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          <img src="~/assets/images/logo.png" class="hero__logo mb-4 pr-8" alt="360 logo" />
          Art House
        </h1>
      </div>
    </div>
    <div class="rich-text project-text m-auto mt-10">
      <p>360 Art House is a space that is dedicated to the development and expression of creativity for individuals of all ages.  Located within walking distance of 360 Park amidst the Virginia Park neighborhood, The Art House was created for residents in response to their desire for community, gathering space. It allows expanded activity and its continuation during inclement weather when outdoor activity is not favorable. It reflects 360 Detroit, Inc.’s vision of neighborhood revitalization and quality of life improvement.  360 Art House’s design and décor is a brilliant exhibition of community inspired and produced art as evidenced by the backyard mural.</p>
      <p>With funding from Detroit Regional Chamber General Motors NeighborHUB grant, we have developed a space that will continually promote all forms and expressions of art.  Graphic/Decorative art (i.e. painting, drawing, sculpture, etc.), Traditional/Theatrical art (i.e. poetry, storytelling, drama, music, etc.) and all art forms that showcase ethnic diversity and promote literacy are part of its focus. Programming, funded by Community Foundation of Southeast Michigan and the NeighborHUB grant, also will include a span of culinary and fitness opportunities for all ages.  360 Art House will continually be a space for unlimited creativity and communal collaborations.</p>
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
    const { title } = useMeta({ title: `${routes.arthouse.meta.title}` })

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
    min-height 100vh;
    box-sizing border-box;
    padding px-to-rem(0px) 0 0
    width: 100%;
    color var(--text-color);
    &-text
      max-width 900px
    .hero.hero-art-house
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
