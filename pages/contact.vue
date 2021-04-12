<template>
  <div class="project">    
    <!-- <div class="hero hero-contact flex items-center">
      <div>
        <h1 class="md:ml-10 text-6xl text-white relative flex items-center">
          Contact Us
        </h1>
      </div>
    </div> -->
    <div class="rich-text project-text m-auto mt-10">
      <form class="form-wrapper mt-8 mb-8" @submit.prevent="saveContact" lazy-validation>
          <h3 class="text-4xl">Questions?</h3>
          <p class="mt-4">If you have questions about 360 Detroit, Inc. or any of our programs and events, please do not hesitate to contact us. </p>
          <div class="flex flex-wrap">
            <div class="input-field w-full md:w-1/2" >
              <i class="material-icons prefix">account_circle</i>
              <input type="text" ref="focusElementRef" v-model="contact.name" :name="contact.name" required />
              <label :class="{'active': isActive(contact.name)}" :for="contact.name">Name</label>
            </div>
            <div class="input-field w-full md:w-1/2" >
              <i class="material-icons prefix">email</i>
              <input type="email"  v-model="contact.email" :name="contact.email" required />
              <label :class="{'active': isActive(contact.email)}" :for="contact.email">E-mail</label>
            </div>
            <div class="input-field w-full md:w-1/2" >
              <i class="material-icons prefix">phone</i>
              <input type="text" v-model="contact.phone" :name="contact.phone" required />
              <label :class="{'active': isActive(contact.phone)}" :for="contact.phone">Phone</label>
            </div>
            <div class="input-field w-full md:w-1/2" >
              <i class="material-icons prefix">business</i>
              <input type="text" v-model="contact.company" :name="contact.company" required />
              <label :class="{'active': isActive(contact.company)}" :for="contact.company">Company</label>
            </div>
            <div class="input-field textarea" >
              <i class="material-icons prefix">chat</i>
              <textarea type="text" class="materialize-textarea" v-model="contact.message" :name="contact.message" required />
              <label :class="{'active': isActive(contact.message)}" :for="contact.message">Message</label>
            </div>
          </div>
          <button class="btn btn-default w-full justify-center items-center" type="submit"><span class="inline-block">Send</span> <i class="ml-3 material-icons">send</i></button>
      </form>
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
      defaultVals: {},
      contact: {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      }
    })
    const saveContact = () => {
      console.log('save');
    }
    const isActive = (field: string) => {
      return field && field.length > 0;
    }
    const { title } = useMeta({ title: `${routes.contact.meta.title}` })
    const isLoading = computed(() => {
      // return globalStore.state.isLoading;
    })
    //methods
    return {
      ...toRefs(data), saveContact, isActive
    }
  },
}) 
</script>
<style lang="stylus">
  .project
    .hero.hero-contact
      height 400px 
      width 100%
      position relative 
      padding-left 40px
      background-image: url('~assets/images/ContactUsExample.jpg');
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
        padding-right 20px
        &.textarea
          width 100%
          max-width 100%
      .btn
        display inline-flex;


</style>
