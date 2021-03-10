<template>
  <div class="project">    
    <div class="hero hero-community flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          Get Involved
        </h1>
      </div>
    </div>
    <section class="white relative p-10 z-depth-2 z-40 center">
          <h3  class="text-5xl mb-4 align-center text--secondary">3 Ways to Support Our Vision</h3>
          <div  class="flex justify-center m-auto flex-wrap">
            <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 blue">              
              <i class="material-icons text-secondary text-6xl">attach_money</i>
              <p class="mt-4 mb-8 text-xl">Become a sustainer & join our community with a monthly donation.
              Ask about your employer about matching funds campaigns & double your donation.
              Click link below to donate to 360 Detroit, Inc.
              </p>
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="U47J4WKC343XL" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
            <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 blue">
              <i class="material-icons text-secondary text-6xl">extension</i>
              <h4 class="text-3xl mb-3">Purchase a 360 Park Brick Paver </h4>
              <p class="mt-8 text-xl">Be part of our upcoming park’s history. 
                <a href="https://brickmarkersusa.com/donors/360.html" target="_blank">Click here for more information and to purchase a brick paver!</a>
              </p>
            </div>
            <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 blue">
              <i class="material-icons text-secondary text-6xl">shopping_cart</i>
              <h4 class="text-3xl mb-3">Shop Amazon</h4>
              <p class="mt-8 text-xl">Support us on your next Amazon order by using 
                <a href="https://smile.amazon.com/ch/47-1423553">Amazon Smile.</a></p>
            </div>

          </div>
      </section>
      <section class="blue p-8 flex relative z-depth-2 z-40 flex-wrap md:flex-no-wrap">
        <div class="w-full md:w-3/5 p-6 rich-text">
          <h3 class="text-5xl mb-4">Calling All Volunteers – We Need YOU!</h3>
          <p>Volunteers make 360 Detroit, Inc. go and grow.  Please consider assisting us.  Whether you have one hour or many more, there are a variety of ways that you can help.  What do you love to do?  Maybe that skill or talent can assist 360 Detroit, Inc.    Check out the volunteer opportunities below.  Think you have something that would be of benefit to us, contact us. 
          </p>
          <p>We look forward to working with you soon!</p>
        </div>
      </section>
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
    const { title } = useMeta({ title: `${routes.getInvolved.meta.title}` })
    const isLoading = computed(() => {
      // return globalStore.state.isLoading;
    })
    //methods
    return {
      ...toRefs(data),
    }
  },
}) 
</script>
<style lang="stylus">
  .project
    .hero.hero-community
      height 600px 
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/Community Meeting.jpg');
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
        background-color rgba(0,0,0,0.15)
    form
      .input-field
        width 50%
        padding-right 20px
        &.textarea
          width 100%
          max-width 100%
      .btn
        display inline-flex;

</style>
