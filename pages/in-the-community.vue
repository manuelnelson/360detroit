<template>
  <div class="project">    
    <div class="hero hero-community flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          In the Community
        </h1>
      </div>
    </div>
    <div class="rich-text project-text m-auto mt-10">
      <h2 class="text-4xl font-bold">Our Supporters</h2>
      <ul>
        <li>Central Detroit Christian</li>
        <li>Community Foundation for Southeast Michigan</li>
        <li>Detroit Future City</li>
        <li>Detroit Regional Chamber/GM</li>
        <li>Detroit Residents First Fund</li>
        <li>DTE Energy Foundation</li>
        <li>Henry Ford Health System |LISC Detroit </li>
        <li>Kresge Foundation</li>
        <li>Life Remodel</li>
        <li>NeighborHUB</li>
        <li>United Way</li>
        <li>Wayne County</li>
        <li>Wayne Metropolitan Community Action Agency (Wayne Metro)</li>
      </ul>
      <h2 class="text-4xl font-bold">In-Kind Donors</h2>
      <ul>
        <li>Blue Kazoo Marketing & Event Planning</li>
        <li>Carrier Global</li>
        <li>Detroit Collaborative Design Center</li>
        <li>Dykema</li>
        <li>Featherstone Moments Photography</li>
        <li>Efrem Garfield</li>
        <li>Sarah Haggerty</li>
        <li>Leslie Hartig</li>
        <li>Knello Printing</li>
        <li>Motor City Grounds Crew</li>
        <li>Emmanuel Nelson, LLC</li>
        <li>Organized Excellence, LLC</li>
        <li>Melvin Stewart</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, reactive, toRefs, useMeta} from "@nuxtjs/composition-api";
import { routes } from "~/router";

export default defineComponent({
  components: {},
  head: {},
  setup(props, context) {
    //life-cycle hooks
    //configure data
    const data = reactive({
      defaultVals: {},     
    })
    const { title } = useMeta({ title: `${routes.community.meta.title}` })
    //methods
    return {
      ...toRefs(data)
    }
  },
}) 
</script>
<style lang="stylus">
  .project
    .hero.hero-community
      height 500px 
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/volOpp.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position center 30%;
      background-color var(--primary)
      &:before
        content: ''
        display block
        height 100%
        width 100%
        left 0
        top 0
        position absolute
        background-color rgba(0,0,0,0.25)    

</style>
