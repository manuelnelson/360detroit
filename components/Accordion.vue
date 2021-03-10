<template>
  <div class="accordion">
    <h3 @click="show=!show" class="accordion-header text-3xl mt-8 mb-8 pb-4 cursor-pointer border-b-2">
      <i v-if="!show"  class="material-icons relative text-3xl bottom-0 mr-3">expand_more</i> 
      <i v-if="show"  class="material-icons relative text-3xl bottom-0 mr-3">expand_less</i> 
      <slot name="header"></slot>
    </h3>
    <transition name="accordion"
      v-on:before-enter="beforeEnter" v-on:enter="enter"
      v-on:before-leave="beforeLeave" v-on:leave="leave">
        <div class="accordion-body" v-show="show">
          <slot name="body"></slot>
        </div>
      </transition>
  </div>
</template>
<script lang="ts">
import {defineComponent, toRefs, reactive, onBeforeMount} from "@nuxtjs/composition-api";

interface AccordionProps {
  startOpen?: boolean
}
export default defineComponent({
  setup(props:AccordionProps) {
    onBeforeMount(() => {
      data.show = props.startOpen ?? false
    })
    const data = reactive({
      show: false
    })
    const beforeEnter = (el:HTMLElement) => {
      el.style.height = '0';
    }
    const enter = async (el:HTMLElement) => {
      el.style.height = el.scrollHeight + 'px';
      // setTimeout(() => {
      //   window.scrollTo({top: el.offsetTop,behavior:'smooth'})
      // }, 400);
    }
    const beforeLeave = (el:HTMLElement) => {
      el.style.height = el.scrollHeight + 'px';
    }
    const leave = (el:HTMLElement) => {
      el.style.height = '0';
    }
    return {...toRefs(data), beforeEnter, enter, beforeLeave, leave};
  },
  props: {
    startOpen: Boolean
  }
})
</script>
<style lang="stylus">
  .accordion
    h3 i
      top 4px
  .accordion-body
    overflow hidden;
    transition 200ms ease-out;

</style>