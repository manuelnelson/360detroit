<template>
  <header @click.stop="doNothing">
    <nav class="nav show-header z-depth-1"  :class="{'unpinned':!isPinned}"> 
      <div class="nav__items">
        <div class="nav__items-left">
          <router-link class="logo" to="/">
            <img src="~/assets/images/logo.png" />
            <span class="title text-4xl md:text-2xl lg:text-4xl font-bold">360 Detroit, Inc.</span> 
          </router-link>
        </div>
        <div class="nav__items-right "> 
          <button title="menu" class="nav__menu text-color inline-block md:hidden" @click.stop="openMenu"><i class="material-icons">menu</i></button>
          <ul class="nav__links hidden md:flex items-center h-full font-bold text-sm">
            <li><router-link class="h-full fancy" :to="routes.home.path"><i class="material-icons">home</i></router-link></li>
            <li><router-link class="h-full fancy" :to="routes.about.path">Our Story</router-link></li> 
            <li><router-link class="h-full fancy" :to="routes.getInvolved.path">Get Involved</router-link></li> 
            <li><router-link class="h-full fancy" :to="routes.whatshappening.path">What's Happening</router-link></li> 
            <li><router-link class="h-full fancy" :to="routes.contact.path">Contact Us</router-link></li> 
            <li><router-link class="h-full fancy" :to="routes.community.path">In The Community</router-link></li> 
            <li>
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="U47J4WKC343XL" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
    <!-- <menu-component></menu-component> -->
    <!-- <login-component></login-component>  -->
    <section :class="{'open':menuIsOpen}" class="menu fixed h-full top-0 right-0 w-full md:w-1/2 lg:w-1/3 z-depth-4">
      <button title="menu" class="fixed top-0 right-0 p-3 btn-large btn-secondary" @click.stop="closeMenu"><i class="material-icons">close</i></button>
      <div class="menu__links m-10 p-10">
        <ul class=" text-center font-bold flex flex-col no-style text-4xl">  
          <li><router-link class="mb-3 fancy" :to="routes.home.path"><i class="material-icons">home</i></router-link></li>
          <li><router-link class="mb-3 fancy" :to="routes.about.path">Our Story</router-link></li> 
          <li><router-link class="mb-3 fancy" :to="routes.getInvolved.path">Get Involved</router-link></li> 
          <li><router-link class="mb-3 fancy" :to="routes.whatshappening.path">What's Happening</router-link></li> 
          <li><router-link class="mb-3 fancy" :to="routes.contact.path">Contact Us</router-link></li> 
          <li><router-link class="mb-3 fancy" :to="routes.community.path">In The Community</router-link></li> 
          <!-- <li><router-link class="mb-3 fancy" :to="routes.arthouse.path">Art House</router-link></li>  -->
          <!-- <li><router-link class="mb-3 fancy" :to="routes.hollandMaze.path">Holland Maze</router-link></li>  -->
          <!-- <li><router-link class="mb-3 fancy" :to="routes.euclid1151.path">1151 Euclid</router-link></li>  -->
          <!-- <li><router-link class="mb-3 fancy" :to="routes.euclid1167.path">1167 Euclid</router-link></li>  -->
          <!-- <li><router-link class="mb-3 fancy" :to="routes.euclid1189.path">1189 Euclid</router-link></li>  -->
        </ul>
      </div>
    </section>
  </header>
</template> 
<script lang="ts"> 
import {defineComponent, ref, onMounted, reactive, toRefs, onUnmounted, computed} from "@nuxtjs/composition-api";
import { globalStore } from "@/store";
import { routes } from "../router";
export default defineComponent({ 
  components: {},
  setup() {
    const limitPosition = 40;
    let lastPosition = 0;
    //lifecycle
    onMounted(() => {
      window.addEventListener('scroll',handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    })
    //data
    const data = reactive({
      isPinned:true,
    })
    //computed
    const menuIsOpen = computed(() => {
      return globalStore.state.menuIsOpen
    })
    //methods
    //this method prevents the menu from closing when clicked inside.
    const doNothing = () => {

    }
    const openMenu = () => {
      globalStore.state.menuIsOpen = true;
    }
    const closeMenu = () => {
      globalStore.state.menuIsOpen = false;
    }
    const handleScroll = (ev:Event) => {
        // window.scrollY
        if(window.scrollY > lastPosition && window.scrollY > limitPosition){
          data.isPinned = false;
        } else {
          data.isPinned = true;
        }
        lastPosition = window.scrollY;
    }
    return { ...toRefs(data), menuIsOpen, openMenu, closeMenu, routes, doNothing};
  }
}) 
</script>

<style lang="stylus">
@import '~assets/main.styl';
header
  .nav 
    background-color var(--navigation-background)
    position fixed 
    top 0
    left 0; 
    width 100%;
    z-index 80 
    display flex;
    justify-content space-between;
    box-sizing border-box
    will-change: transform;
    transition: transform 200ms linear;
    transform: translateY(0%);
    &.unpinned
      transform: translateY(-100%);
    &__menu 
      outline none;
      border none;        
      color var(--primary);  
      cursor pointer
      i.material-icons 
        font-size px-to-rem(44px)
    .logo 
      cursor pointer
      text-decoration: none;
      display flex;
      align-items center;
      height 100%;
      .title 
        color var(--primary);  
        position relative 
        line-height 1.5
      img 
        height 100%;
        margin-right px-to-rem(8px);
        display inline-block
      &:after 
        display:none;
      &:hover 
        &:after 
          display:none;
    &__items 
      display flex
      align-items center;
      width 100%;
      justify-content space-between
      &-left 
        padding 0 px-to-rem(15px) 0 px-to-rem(30px)
        height 100%;
        box-sizing border-box 
        width 460px;
      &-right 
        padding px-to-rem(3px) px-to-rem(15px) px-to-rem(3px) px-to-rem(15px)
        height 100%;
        box-sizing border-box
        text-align right;
        display flex;
        width calc(100% - 460px);
        align-items center
        justify-content flex-end    
    a
      color var(--text-color);  
      &.nuxt-link-exact-active
        &:after 
          max-width 100%
          z-index -1

  .menu 
    background-color var(--dark-color) 
    z-index 81
    will-change: transform;
    transition: transform 200ms linear;
    transform: translateX(100%);
    a
      font-weight bold
      color var(--text-color) !important
      margin-right px-to-rem(20px);
      display inline-block
      i.materical-icons 
        font-size 24px !important;
      &.router-link-exact-active 
        color var(--text-color);  
    a,button 
      color var(--text-color) !important
    &.open
      transform: translateX(0%);

  +for_breakpoint(xs) 
    .nav 
      &__items 
        justify-content space-between;
        width 100%;
        &-desktop 
          display none !important;
        &-left 
          padding-left 10px;
        &-right 
          padding-right 10px;
          width auto
      &__menu 
        display inline-block;
        background-color transparent;
        outline none;
        border none;        
        color var(--text-color);  
      .btn 
        display none;

</style>
