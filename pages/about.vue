<template>
  <article class="project">
    <div class="hero about">
      <vueper-slides fade :touchable="false">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :content="slide.content"          
          > 
            <!-- <template v-slot:content>
                 <img src="~/assets/images/logo.png" class="hero__logo mb-4 pl-8" alt="360 logo" />             
            </template> -->
          </vueper-slide>
      </vueper-slides>
    </div>
    <section class="white relative z-depth-2 z-40 pt-12 mt-8 pb-12 center">
      <h3 v-scrollinto="" class="text-5xl mb-4 align-center text--secondary">WE ARE STRONGER TOGETHER!</h3>
      <div v-scrollinto="" class="flex flex-wrap w-full md:w-2/3 rich-text m-auto justify-center">
        <p>360 Detroit, Inc. began with an image of a connected community with neighborhoods that reflected the vitality of the past Virginia Park neighborhood.  Although the work began with a single man’s image and the support of a few, it has grown into a community effort with benefits realized for all that are involved.  From projects infused with volunteer-fueled solutions to community engagement events, 360 Detroit, Inc. has worked with the community residents to revitalize our neighborhoods to one project at a time.  We remain committed to connecting community members, building trust and sustaining engagement for the benefit of the community.</p>
      </div>
    </section>
    <section class="blue relative z-depth-2 z-40 pt-12 pb-12 center">
      <!-- <h3 v-scrollinto="" class="text-5xl mb-4 align-center text--secondary">360 Detroit, Inc. strives to…</h3> -->
      <div v-scrollinto="" class="flex flex-wrap w-full md:w-full m-auto justify-center">
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 white">
          <h4 class="text-3xl mb-3">Our Challenge</h4>
          <p>The challenge was to find within our own neighborhood the solution to create safe, vibrant neighborhoods driven by a strong sense of community inclusion, connectedness and hope.</p>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 white">
          <h4 class="text-3xl mb-3">Our Foundation</h4>
          <p>360 Detroit, Inc. provides services that empower and improve the quality of life for individuals and families. The organization is dedicated to assisting people in becoming self-sufficient, anchored, stabilized and well-rounded members of society.</p>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 m-4 p-8 z-depth-2 white">
          <h4 class="text-3xl mb-3">Our Growth</h4>
          <p>From the simplistic start of engaging and organizing residents for clean-ups and social gatherings, 360 Detroit, Inc. has worked diligently to be a “Conduit for Change”. While creating an environment for revitalization and hope, we continue to grow at an accelerated pace.</p>
        </div>
      </div>
  </section>
  <section class="relative z-depth-2 z-40 center ">
      <!-- <h3 v-scrollinto="" class="text-5xl mb-4 align-center text--secondary">360 Detroit, Inc. strives to…</h3> -->
      <div v-scrollinto="" class="flex flex-wrap justify-center items-center w-full quote">
        <!-- <img src="" class="background-image" alt="Fence Mural" /> -->
        <blockquote class="text-white w-full">“Alone we can do so little; together we can do so much.”</blockquote>
        <div class="w-3/5">
          <figcaption class="w-full text-white text-4xl text-right">~ Helen Keller</figcaption>
        </div>
      </div>
    </section>
    <section class="about flex flex-wrap md:flex-no-wrap">
      <div class="rich-text about__text w-full">
        <accordion>
          <template v-slot:header>Our History</template>
          <template v-slot:body>
            <p>
              In the Spring of 2014, 360 Detroit, Inc. began with an idea that the community needs to look and be better. We began by boarding up vacant properties and cutting grass in the Virginia Park Community. This community, which is located in District 5 in the city of Detroit, was established over 120 years ago and was once an upper middle-class enclave. After years of economic distress of the community, the resulting decline and disrepair became evident through long-abandoned homes which strained the hope of long-time residents and those who love the Virginia Park Community.  It was this realization that catalyzed the birth of 360 Detroit, Inc.
            </p>
            <p>Committed to revitalizing, 360 Detroit, Inc. began by engaging the residents and organizing hope infused neighborhood clean-ups and social gatherings.  The now annual community block party was one of the first community engagement gatherings that introduced the residents to enjoyment and new life within their seemingly dying community.  With all things free and available to all participants, it breathed life into a depressed community.  With the help of a host of volunteers and donors, we expanded to tree plantings, vacant lot development/repurposing into useful green gathering spaces and a diverse response to the community’s needs and desires.  We’ve made a tremendous amount of progress and are continuing to work to make our enclave a “little slice of heaven” while enhancing the natural beauty and increasing market values.</p>
          </template>
        </accordion>
        <accordion>
          <template v-slot:header>Our Purpose</template>
          <template v-slot:body>
            <p>
              The purpose of 360 Detroit, Inc. is to provide services that empower and improve the quality of life for individuals and families.  The organization is dedicated to assisting people in becoming self-sufficient, anchored, stabilized and well-rounded members of society.  Services include but are not limited to life skills development, career planning, job development, positive leisure time activities and community development activities.  360 Detroit, Inc. also creates a conduit for revitalization of targeted Detroit neighborhoods through the creation and maintenance of viable communities.
            </p>
          </template>
        </accordion>

      </div>
    </section>
    <section class="board mb-10">
      <h2 class="mb-6 text-3xl font-bold">President and Founder</h2>
      <div class="flex flex-wrap">
        <div class="person-item z-depth-2 p-8 w-full sm:w-1/3">
          <h3>George Adams, Jr.</h3>
          <span class="block font-bold">President and Founder</span>
          <div class="mt-4 rich-text">
            <p>George is a man of vision and spirituality. His deep sense of compassion and love for God motivates his love for people. He is an entrepreneur, realtor and real estate investor. George believes there is no greater sense of fulfillment than to be clear about your purpose in life. Then to master those gifts and abilities so that you not only live on purpose with fulfillment; but you also make an impact on the lives of others.</p>
            <p>George is a native Detroiter who believes in and loves the city. Growing up in a city that has seen better times, he always asked himself "What can I do to make things better?" Which is why he believes that 360 Detroit Inc. Is his purpose. George currently serves as President of the W Euclid/W Philadelphia Neighborhood Association and Chaplain for the Wayne County Sheriff Department.</p>
            <p>George enjoys spending time with his family and friends, sightseeing, listening to music and playing the piano.</p>
          </div>
        </div>
      </div>
      <h2 class="mb-6 mt-10 text-3xl font-bold">Board of Directors</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3">
        <div class="person-item z-depth-2 p-8 m-3">
          <h3>Michael Haggerty</h3>
          <span class="block font-bold">Chair</span>
          <div class="mt-4 rich-text">
            <p>Michael Haggerty is Vice President – Branch Manager (Detroit) DFCU Financial. Michael joined DFCU Financial in 2004, working primarily in the Midtown Detroit Branch, where he evaluates members personal and business financial position with the objective to help build a plan to achieve their goals. Michael has said “many people know they need to plan, few make the time to develop a plan to meet their goals.” That is one of the main reasons he is so enthusiastic about presenting financial literacy programs to young people; believing in the importance of sharing this life skill at an early age.</p>
            <p>Michael holds a Bachelor of Science degree in Business Administration from Lawrence Technological University with concentrations in Finance and Marketing Management. He also holds an Associates degree in Liberal Arts from Schoolcraft College. He currently serves as a parish council member at his church, St Vincent Pallotti in Wyandotte and parish council at All Saints Church, Detroit. He was a Pack Leader for Cub Scouts in Wyandotte and was the Treasurer of Northville’s Playscape Committee. Michael has also served as a Board member for Northville Chamber of Commerce, Rotary Club of Northville and Hemophilia Foundation of Michigan.</p>
            <p>In his free time Michael enjoys spending time with his wife, daughter and two sons as well as cycling, CrossFit, kayaking, and playing golf.</p>
          </div>
        </div>
        <div class="person-item z-depth-2 p-8 m-3">
          <h3>N’Jeri Laird</h3>
          <span class="block font-bold">Vice Chair & Treasurer</span>
          <div class="mt-4 rich-text">
            <p>N’Jeri Laird is a graduate of the University of Michigan with a Bachelor’s of Science in Chemical Engineering. She currently serves as the Quality Manager for an international testing company’s Troy, Warren and Westland locations. N’Jeri has been an active member in the educational community holding several positions on Charter School Boards and parent associations in the Metropolitan Detroit Area for the last twenty years. She has also continuously served in various capacities to provide strategic planning, organization and support services to non-profit and evangelical organizations.</p>
            <p>N’Jeri enjoys helping others’ dreams become a reality. She enjoys spending time with loved ones, dancing, traveling, reading, exercising and exploring new exciting experiences.</p>
          </div>
        </div>
        <div class="person-item z-depth-2 p-8 m-3">
          <h3>Elyse Wolf</h3>
          <span class="block font-bold">Secretary</span>
          <div class="mt-4 rich-text">
            <p>Stay Tuned</p>
          </div>
        </div>
        <div class="person-item z-depth-2 p-8 m-3">
          <h3>Anjelica King</h3>
          <span class="block font-bold">Member at Large</span>
          <div class="mt-4 rich-text">
            <p>Stay Tuned</p>
          </div>
        </div>
        <div class="person-item z-depth-2 p-8 m-3">
          <h3>Ingrid Macon</h3>
          <span class="block font-bold">Member at Large</span>
          <div class="mt-4 rich-text">
            <p>Stay Tuned</p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'
import Accordion from '@/components/Accordion.vue'
import { routes } from '~/router'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css';

export default defineComponent({
  components: {Accordion, VueperSlides, VueperSlide},
  head: {},  
  setup () {
    const { title } = useMeta({ title: `${routes.about.meta.title}` })
        const data = reactive({
      slides: [
        {
          image: require('~/assets/images/Vision 1.jpg'),
          content: `<h3 class="text-white relative text-5xl">Vision</h3><p class="text-white rich-text relative font-bold">360 Detroit, Inc. will be a catalyst for safe, vibrant neighborhoods driven by a strong sense of community inclusion, connectedness and hope.</p>`
        },
        {
          image: require('~/assets/images/DSC_1047.jpg'),
          content: `<h3 class="text-white relative text-5xl">Mission</h3><p class="text-white rich-text relative font-bold">360 Detroit, Inc. strives to revitalize Detroit by catalyzing change, empowering people and improving life’s quality.</p>`
        },
        {
          image: require('~/assets/images/Core Values.jpg'),
          content: `<h3 class="text-white relative text-5xl">Core Values</h3>
          <div class="text-white rich-text wide relative font-bold">
            <ul class="text-white relative font-bold">
            <li>Fights for & maintains the dignity of the community we serve </li>
            <li>Celebrates diversity by supporting a culture of inclusion</li>
            <li>Creates positive impacts in the neighborhood</li>
            <li>Works with integrity</li>
            <li>Is forever optimistic about the future of our community</li>
            <li>Is resourceful and works to teach resourcefulness</li>
            <li>Is a stable support in the community</li></ul></div>`
        }
      ]
    });

    return {...toRefs(data)}
  }
})
</script>

<style lang="stylus">
  .project
    .hero.about
      height 600px 
      width 100%
      // position relative 
      // padding-left 40px
      .vueperslide
        background-position center center;
        background-size cover;
        background-repeat no-repeat;
        .rich-text
          font-weight bold
          max-width 40ch
          font-size 28px
          &.wide
            max-width 100ch
            width 100%;
            text-align left;
        &:before
          content: ''
          display block
          height 100%
          width 100%
          left 0
          top 0
          position absolute
          background-color rgba(0,0,0,0.3)
      // &:before
      //   content: ''
      //   display block
      //   height 100%
      //   width 100%
      //   left 0
      //   top 0
      //   position absolute
      //   background-color rgba(0,0,0,0.15)
  .quote
    max-height 500px;
    background-image: url('~/assets/images/Bb.jpg')
    background-size: cover;
    background-position center;
    padding:50px 0;
    blockquote
      border-left: none;
      max-width: 30ch;
      font-size: 5rem;
      line-height: 1.1;
      padding: .7rem;
    // figcaption

  .board
    .rich-text
      font-size: px-to-rem(18px);
  .about
    &__image
      max-width 600px;

</style>