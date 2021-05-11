<template>
  <div class="project">    
    <div class="rich-text project-text m-auto mt-10">
      <h3 class="text-4xl">Questions?</h3>
      <p class="mt-4">If you have questions about 360 Detroit, Inc. or any of our programs and events, please do not hesitate to contact us. </p>
      <form class="form-wrapper mt-8 mb-8" id="contactForm" method="POST" data-netlify="true" action="/success/" name="contact" lazy-validation>
          <div class="flex flex-wrap">
            <div class="input-field w-full md:w-1/2" >
              <i class="material-icons prefix">account_circle</i>
              <input type="text" ref="focusElementRef" v-model="contact.name" name="name" required />
              <label :class="{'active': isActive(contact.name)}" for="name">Name</label>
            </div>
            <div class="input-field w-full md:w-1/2" >
              <i class="material-icons prefix">email</i>
              <input type="email"  v-model="contact.email" name="email" required />
              <label :class="{'active': isActive(contact.email)}" for="email">E-mail</label>
            </div>
            <div class="input-field w-full md:w-1/2" >
              <i class="material-icons prefix">phone</i>
              <input type="text" v-model="contact.phone" name="phone" />
              <label :class="{'active': isActive(contact.phone)}" for="phone">Phone</label>
            </div>
            <div class="input-field w-full md:w-1/2" >
              <i class="material-icons prefix">business</i>
              <input type="text" v-model="contact.company" name="company" />
              <label :class="{'active': isActive(contact.company)}" for="company">Company</label>
            </div>
            <div class="input-field textarea" >
              <i class="material-icons prefix">chat</i>
              <textarea type="text" class="materialize-textarea" v-model="contact.message" name="message" required />
              <label :class="{'active': isActive(contact.message)}" for="message">Message</label>
            </div>
          </div>
          <input class="btn btn-default w-full justify-center items-center" @click.prevent="submitContact" type="submit" value="Send">
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, reactive, toRefs, useMeta, useRouter} from "@nuxtjs/composition-api";
import { routes } from "~/router";

// import { globalStore } from "../../store/modules/global-store";
export default defineComponent({
  components: {},
  head: {},
  setup(props, context) {
    //life-cycle hooks
    const router = useRouter();

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
    const submitContact = async () => {
      let myForm = document.getElementById('contactForm') as HTMLFormElement;
      let formData = new FormData(myForm);
      
      await fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as any).toString()
      })
      router.push(routes.success.path);
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
      ...toRefs(data), submitContact, isActive
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
