<template>
  <div @click="closeAll" class="app-main-area light-mode">
    <!-- <alert-component></alert-component> -->
    <nav-component></nav-component>     
    <div class="page-layout" :class="{'no-sides': isFullSize}"> 
      <div class="page-container">
        <Nuxt />
      </div>
    </div>
    <social></social>
    <footer-component></footer-component>
  </div>
</template>
<script lang="ts">
import {defineComponent, computed, reactive, onMounted, toRefs, onBeforeMount, watch, useContext} from "@nuxtjs/composition-api";
import FooterComponent from '@/components/Footer.vue'
// import { globalStore } from "@/store/modules/global-store";
import NavComponent from '@/components/Nav.vue'
import Social from '@/components/Social.vue'
import { globalStore } from "~/store";
import { routes } from "~/router";
// import alertStore from "@/store/modules/alert-store";
export default defineComponent({
  components: {Social, NavComponent, FooterComponent},
  setup() {
    //configure data
    const data = reactive({
      isFullSize: true
    });
    const closeAll = () => {
      globalStore.state.menuIsOpen = false;
    }
    const isFullSize = computed(() => {
      return useContext().route.value.path.indexOf('about') == -1
    })


    const isLoading = computed(() => {
      // return globalStore.state.isLoading;
    })
    //methods
    return {
        ...toRefs(data), isLoading, closeAll, isFullSize
    };
  },
})</script>
<style lang="stylus">
.fade-enter-active, .fade-leave-active 
  transition: opacity .5s;

.fade-enter, 
.fade-leave-to 
  opacity: 0

#app
  font-family $font-sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.app-main-area
  color var(--text-color);       
  background-color var(--background-color);


</style>
