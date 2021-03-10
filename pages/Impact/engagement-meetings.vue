<template>
  <div class="project">    
    <div class="hero hero-engagement flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          Community Engagement Meetings
        </h1>
      </div>
    </div>
    <div class="rich-text project-text m-auto mt-10">
      <p>Meetings designed to engage residents in community activities for advocacy and enjoyment as well as  facilitate plans for future development including programming that meets community’s needs and desires. Community Engagement Meetings are held monthly.  See schedule for next meeting. </p>
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
      const { title } = useMeta({ title: `${routes.engagementMeetings.meta.title}` })

    //methods
    return {
        ...toRefs(data), isLoading
    };
  },
}) 
</script>
<style lang="stylus">
  .project
    .hero.hero-engagement
      height 600px 
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/Community Meeting 1.jpg');
      background-size: cover;
      background-position 50% 30%;
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
