<template>
<div class="main-section-component">
<section class="white p-8 flex relative z-depth-2 z-40 flex-wrap md:flex-no-wrap">
    <div class="w-full md:w-2/5 p-6">
      <img class="mt-6 z-depth-3" src="~/assets/images/whoweare.jpg" alt="Jump">
    </div>
    <div class="w-full md:w-3/5 p-6 rich-text">
      <h3 class="text-5xl mb-4">360 Spotlight</h3>
      <p>360 Detroit, Inc. provides services that empower and improve the quality of life for individuals and families. We are dedicated to assisting people in becoming self-sufficient, anchored, stabilized and well-rounded community members. 
      </p>
      <p>
        As a conduit for change and revitalization, we strive to create and maintain viable, safe communities within Detroit. 
      </p>
    </div>
  </section>
  <section class="blue relative z-depth-2 z-40 center">
      <h3 v-scrollinto="" class="text-5xl mb-4 align-center text--secondary">360 Detroit, Inc. strives to…</h3>
      <div v-scrollinto="" class="flex flex-wrap w-full md:w-2/3 m-auto justify-center">
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 white">
          <h4 class="text-3xl mb-3">REVITALIZE <span class="block italic">Neighborhoods</span></h4>
          <p>Introducing new life and vitality, including green space development, that improve the landscape of the neighborhood while making additions and improvements that increase property values.</p>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 white">
          <h4 class="text-3xl mb-3">EMPOWER <span class="italic block">People</span></h4>
          <p>Providing resources and support designed to strengthen community members and promote confidence and authority in their skills and abilities.</p>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 white">
          <h4 class="text-3xl mb-3">IMPROVE <span class="italic block">Life’s Quality</span></h4>
          <p>Encouraging community engagement, support and cohesion that produces shared benefit and increased enjoyment of the community transformation.</p>
        </div>
      </div>
  </section>
  <section class="white relative z-depth-2 z-40 center">
      <h3 v-scrollinto="" class="text-5xl mb-4 align-center text--secondary">What We’ve Accomplished</h3>
      <div v-scrollinto="" class="flex justify-center m-auto flex-wrap">
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 blue">
          <i class="material-icons text-secondary text-6xl">house</i>
          <h4 class="text-3xl">8,000+ Square feet</h4>
          <p>of blighted land developed/repurposed into useable green space</p>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 blue">
          <i class="material-icons text-secondary text-6xl">lock</i>
          <h4 class="text-3xl mb-3">750+ Gun Locks Distributed</h4>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 blue">
          <i class="material-icons text-secondary text-6xl">supervisor_account</i>
          <h4 class="text-3xl mb-3">2,500 People Served</h4>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 blue">
          <i class="material-icons text-secondary text-6xl">school</i>
          <h4 class="text-3xl mb-3">500+ Backpacks & School Supplies</h4>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 blue">
          <i class="material-icons text-secondary text-6xl">menu_book</i>
          <h4 class="text-3xl mb-3">1500+ Books Distributed</h4>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 blue">
          <i class="material-icons text-secondary text-6xl">volunteer_activism</i>
          <h4 class="text-3xl mb-3">1,000+ Volunteers Engaged</h4>
        </div>
      </div>
  </section>
  <section class="blue p-10 relative z-depth-2 z-40 rich-text text-center">
    <div v-scrollinto="" class="md:w-2/3 m-auto">
      <h3 class="text-5xl mb-4 text--secondary">Help 360 Detroit, Inc. Make an Impact</h3>
      <p>Impact the lives of our community individuals and families by assisting us as we make our community more viable. The power of your support is in the unity that it creates as you support us with your donation.</p>
      <p>Your generosity is dynamic in improving our community.</p>
      <p>Shop <a target="_blank" href="https://smile.amazon.com/ch/47-1423553">Amazon Smiles</a> and 360 Detroit, Inc. receives donation</p>
    </div>
  </section>
  <section class="white relative z-depth-2 z-40 rich-text text-center">
    <div class="md:w-2/3 m-auto">
      <h3 class="text-5xl mb-4 text--secondary">Community Voices on 360 Detroit, Inc.’s Impact</h3>
      <vueper-slides fixed-height="700px">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :content="slide.content"          
          > 
          </vueper-slide>
      </vueper-slides>
    </div>
  </section>
</div>
  
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css';

export default defineComponent({
  components: {VueperSlides, VueperSlide},
  setup () {
    const data = reactive({
      slides: [
        {
          content: `
          <figure>
            <blockquote>360 Detroit, Inc. is an organization I am proud to have in my community. They take a holistic approach to community development by sharing relevant updates and City programs, offering volunteer activities within the neighborhood, helping residents to find funding for their projects, providing wellness and self-care activities and coordinating fresh food distribution during times of need. 360 Detroit, Inc. is also very organized, which makes it easy to stay connected and informed of their work. Thank you to 360 Detroit, Inc. for all that you do!</blockquote>
            <figcaption>Monique Becker, Partner of Mona Lisa Development</figcaption>
          </figure> 
             `
        },
        {
          content: `
          <figure>
            <blockquote>360 Detroit, Inc. has been working diligently to improve the quality of life for the residents in the Virginia Park Community.  The organization is paramount to the community and its continued revitalization.</blockquote>
            <figcaption>Chris Lambert, CEO of Life Remodeled </figcaption>
          </figure> 
        `
        },
        {
          content: `
          <figure>
            <blockquote>360 Detroit, Inc. is an organization with a heart for people in its neighborhood. It has vision and integrity and great plans for uplifting all who live in the Virginia Park Area.</blockquote>
            <figcaption>David Brown, Volunteer & Retired Pastor</figcaption>
          </figure> 
        `
        },
        {
          content: `
          <figure>
            <blockquote>360 Detroit was established at a time when city departments, investors and residents were indifferent and reluctant to ‘get involved’…. has consistently worked at a grass roots level to arrange, direct and complete several projects to remove blight and improve the quality of life for those most neglected in Detroit’s resurgence.</blockquote>
            <figcaption>Dr. Althea Armstrong, Resident</figcaption>
          </figure> 
        `
        },
        {
          content: `
          <figure>
            <blockquote>Thank you for inviting us to the 360 Detroit Inc Block Party! We had a great time and were really impressed by the work you have done in the community. What an awesome neighborhood. I wanted to pass this along to you because I thought that you were a really dynamic and well-organized agency and I think you should share your success!”   </blockquote>
            <figcaption>Theresa Tejada, Program Coordinator II National Kidney Foundation of Michigan</figcaption>
          </figure> 
        `
        },
      ]
    });

    return {
      ...toRefs(data)
    }
  }
})
</script>
<style>
 @screen md { 
  .main-section-component section {
      padding: 80px 20px;
  }
 }
 @screen sm { 
  .main-section-component section {
      padding: 60px 10px;
  }
 }
</style>
<style lang="stylus">

  .blue
    background-color var(--primary)
    color white
    p
      line-height 1.4
  .main-section-component
    .vueperslide
      background-color var(--primary)
      color white
      height: 600px;
    figure
      max-width 700px;
      blockquote
        font-size 24px
        font-weight bold

</style>>