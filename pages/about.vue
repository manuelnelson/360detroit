<template>
  <article class="pt-10">
    <div class="text-center">
      <h1 class="mb-8 m-auto text-6xl">About Us</h1> 
    </div>
    <section class="about flex flex-wrap   md:flex-no-wrap">
      <div class="about__image mx-auto w-full md:w-2/5 mt-8 pr-6">
        <img class="rounded-lg" src="~/assets/images/About.jpg" alt="360 Detroit"/>
      </div> 
      <div class="rich-text about__text w-full md:w-3/5">
        <accordion :startOpen="true">
          <template v-slot:header>Our Mission</template>
          <template v-slot:body>
            <p>
              <b>360 Detroit, Inc.</b> strives to revitalize Detroit by catalyzing change, empowering people and improving life’s quality.  
            </p>
          </template>
        </accordion>
        <accordion>
          <template v-slot:header>Our Vision</template>
          <template v-slot:body>
            <p>
              <b>360 Detroit, Inc.</b> will be a catalyst for safe, vibrant neighborhoods driven by a strong sense of community inclusion, connectedness and hope.
            </p>
          </template>
        </accordion>
        <accordion>
          <template v-slot:header>Our Purpose</template>
          <template v-slot:body>
            <p>
              The purpose of <b>360 Detroit, Inc.</b> is to provide services that empower and improve the quality of life for individuals and families. The organization is dedicated to assisting people in becoming self-sufficient, anchored, stabilized and well-rounded members of society.
            </p>
          </template>
        </accordion>
        <accordion>
          <template v-slot:header>Our History</template>
          <template v-slot:body>
            <p>
              360 Detroit, Inc. was founded in 2014 when Founder/President George Adams, Jr. looked around his blighted Virginia Park neighborhood and remembered how pristinely the stately homes were maintained with meticulously, manicured lawns only a generation ago.  Witnessing the toll that the foreclosure crisis had taken on the neighborhood as well as its inhabitants, George vowed to work to make the neighborhood beautiful again while providing assistance and restoring hope to its residents.  His vision simply explained, “I envision at some point, standing in the middle of the street and seeing beauty in all directions when turning 360 degrees.”, is the fuel for filling the Virginia Park Neighborhood that was perceived as half empty.  At that time, residents were not engaged, grass was overgrown and vacant houses were open and dangerous.  
            </p>
            <p>360 Detroit Inc. is an award-winning , community-based 501(c)3 nonprofit committed to working with residents in the Virginia Park community to help build a sense of safety, community and quality of life.  While the organization provides resources without exclusion, its focus area is bordered by the Lodge Freeway, West Grand Boulevard, Rosa Parks Boulevard and Clairmount.  Since its inception, 360 Detroit, Inc. has worked diligently with area business leaders, faith-based organizations and community members to spark both a revitalization and renewed interest in this neighborhood.</p>
            <p>In its six years of service, 360 Detroit, Inc. has been able to transform the community’s appearance with the partnering work of over one thousand volunteers, both residents and non-residents.  The organization has catalyzed change through community & alley cleanups, the boarding up of vacant homes, grass cutting and tree planting to transform the community’s appearance. While physically working in the community, 360 Detroit, Inc. has cultivated residential and business relationships to promote and sustain lasting change.  The recipient of more than 5 grants and 2 community choice awards and numerous recognitions, 360 Detroit, Inc. has proven that the work of a few can make a big impact.   In line with its mission to “revitalize Detroit by catalyzing change, empowering people and improving life’s quality”, 360 Detroit, Inc. continues to restore hope while encouraging and motivating community members.  As a result, hope is being infused in the community as its perception has improved from half empty to half full and continues to progress while neighborhood revitalization is evident through its positive changes.</p>
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
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import Accordion from '@/components/Accordion.vue'
import { routes } from '~/router'
export default defineComponent({
  components: {Accordion},
  head: {},  
  setup () {
    const { title } = useMeta({ title: `${routes.about.meta.title}` })
    return {}
  }
})
</script>

<style lang="stylus">
  .board
    .rich-text
      font-size: px-to-rem(18px);
  .about
    &__image
      max-width 600px;

</style>