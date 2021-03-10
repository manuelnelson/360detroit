<template>
  <footer class="black p-6">
    <div class="flex flex-wrap md:flex-no-wrap w-full md:w-4/5 m-auto">
      <div class="w-full md:w-1/3 p-8 text-center">
        <h3 class="text-center font-bold mb-4">360 Detroit, Inc.</h3>
        <address>
            P.O. Box 02283 <br>
            Detroit, MI 48202 <br>
          <span class="flex justify-center items-center">
              <i class="material-icons mr-3">phone</i><a href="tel:(313) 466-4360">(313) 466-4360</a><br>
          </span>
          <span class="flex items-center justify-center">
              <i class="material-icons mr-3">email</i> <a href="mailto:info@360DetroitInc.org">info@360DetroitInc.org</a><br>
          </span>
        </address>
      </div>
      <div class="w-full md:w-1/3 p-8 text-center">
        <div class="mb-6">
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="U47J4WKC343XL" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
        <p>360 Detroit, Inc. is a 501c(3) organization. All donations are tax deductible. </p>
      </div>
      <div class="w-full md:w-1/3 p-8 text-center">
        <h3 class="text-center font-bold mb-4">More</h3>
        <ul class="no-style">
          <li><nuxt-link :to="routes.contact.path">Contact</nuxt-link></li>
          <li><nuxt-link :to="routes.getInvolved.path">Get Involved</nuxt-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/router'

export default defineComponent({
  setup () {
    
    return {routes}
  }
})
</script>

<style lang="stylus">
  .black
    background-color #2e2c3b
    color white
    p, address
      line-height 1.4
      font-size 20px !important

</style>>