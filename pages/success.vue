<template>
  <div class="rebuild wrapper">
    <div class="content flex pt-6">
      <div class="right-content w-4/5 rich-text">
        <div class="flex">
          <div class="w-full pr-8">
            <h3 class="text-6xl">Success!</h3>
            <p class="yellow--text text-4xl">Thanks for contacting 360 Detroit.  We'll be in touch!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  // You need to define an empty head to activate this functionality
  components: {},
  head: {},
  setup() {
    onMounted(() => {
    })
    const data = reactive({
      defaultVals: {},
      contact: {
        name: '',
        email: '',
        phone: ''
      }
    })
    const { title } = useMeta({ title: 'Success | 360 Detroit' })

    const isActive = (field: string) => {
      return field && field.length > 0;
    }
    return {
      ...toRefs(data), isActive
    }
  },
})
</script>

<style>
 /* @screen md { 
   .text-content {
     overflow-y: hidden;
     width: auto !important;
   }
 } */
</style>
<style lang="stylus"> 
.rebuild.wrapper 
  margin: 0 auto;
  min-height: 100vh;
  padding 0 80px;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  font-family: var(--sans-serif)
  .content
    margin-top 120px

</style>
