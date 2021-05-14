<template>
  <div>
    <section-hero></section-hero>
    <section-cards></section-cards>
    <div class="bg-gray-900 relative">
        <section-slider class="transition-opacity duration-1000" :class="{ 'opacity-0' : this.disabled}" :key="this.rand"></section-slider>
        <div v-show="this.disabled" class="absolute top-0 left-0 w-full h-full grid place-items-center">
          <i class="fal fa-spinner-third fa-spin fa-3x text-white"></i> 
        </div>        
    </div>    
    <div class="bg-gray-100 grid">
      <button id="get-images" title="show more photos" class="text-center justify-self-center link-pink py-1 m-1" @click="refreshSlider()"><i class="fal fa-redo-alt mr-2"></i>show me more dogs</button>
    </div>
    
    <div class="section py-32 tile bg-gray-100 bg-opacity-30">
       <title-block class="text-center">
          <template #small>Dogs Love it Here</template>
          <template #big>More than just Daycare</template>
        </title-block>
      <div class="container grid grid-cols-1 lg:gap-10 px-2 mx-auto md:grid-cols-2 max-w-screen-lg gap-y-10 gap-x-2">
        <div class="col order-2 md:order-1 flex flex-col justify-between">
          <ul class="text-left list-disc list-outside">   
            <li class="grid w-full mb-2" v-for="(item, i) in features" :key="i">
              <template v-if="item.limit == getRegion() || item.limit == null">
                <div class="grid grid-flow-col auto-cols-max gap-3">
                <icon-stack :icon="item.icon"></icon-stack>           
                <p class="font-bold text-blue-700 self-center">{{item.title}} <span class="text-blue-400 font-normal capitalize" v-if="item.limit">- {{item.limit}} only</span>  </p>
                </div>
              <p class="ml-11 text-sm">{{item.desc}} <router-link v-if="item.title == 'Grooming'" class="link-pink" :to="{name: item.title, params: {region: item.limit}}">find out more</router-link></p>
              </template>              
            </li>         
          </ul>
          
        </div>
          <div class="order-1 md:order-2 rounded-sm photo1 bg-cover shadow-xl rounded-lg aspect-w-6 aspect-h-7"></div>             
      </div>
      <div class="mt-10 max-w-screen-lg mx-auto px-2 text-center flex flex-col sm:flex-row sm:flex-wrap  gap-x-2 gap-y-5">
            <router-link :to="{ name: 'Daycare', params: {region: getRegion()} }" class="flex-grow btn-blue text-sm">More about Daycare</router-link>
            <router-link v-show="getRegion() == 'brisbane'" :to="{ name: 'Explore', params: {region: getRegion()} }" class="flex-grow btn-blue text-sm">Take a Tour</router-link>
            <router-link :to="{ name: 'Sign-up', params: {region: getRegion()} }" class="flex-grow btn-blue text-sm">Create Account</router-link>
          </div>
    </div> 
    
      <section-reviews></section-reviews>
    
  </div>
</template>

<script>
  import SectionHero from "@/components/SectionHero.vue"
  import SectionCards from "@/components/SectionCards.vue"
  import SectionSlider from "@/components/SectionSlider.vue"
  import SectionReviews from "@/components/SectionReviews.vue"
  export default {
    components: {
      SectionHero,
      SectionCards,
      SectionSlider,
      SectionReviews
    },
    metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content:
          "Your best friends' new favourite place. A fun place for your dog to play and meet new friends.",
        vmid: 'description'
      }
    ],
    jsonld: {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      "name": "Gabba Doggy Daycare",
      "image": "https://res.cloudinary.com/dg5ybbkbh/image/upload/v1607553601/gddc/photos/03.jpg",
      "logo": "https://www.gabbadoggydaycare.com/img/gddc-logo.02c7187e.svg",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "5"
      },
      "review": [{
          "@type": "Review",
          "author": "Meika Ruby",
          "datePublished": "2020-12-15",
          "description": "My doggy had a great time. I loved the photos they sent and could tell he was entertained all day. The staff were lovely and I could tell Billy was comfortable with them 💙",
          "name": "Facebook Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": "Jennie S",
          "datePublished": "2020-12-12",
          "description": `I took advantage of the new business promotion on the 3 free days to see whether the doggy daycare would be a fit for my 2 small dogs.
          They had to much fun on the days they were there and we will definitely be booking in again.
          The ladies there were very professional and were very quick to answer any questions that i had.`,
          "name": "Google Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": "Hannah Roberts",
          "datePublished": "2021-02-11",
          "description": `Wonderful place! Our lab and golden retriever have been coming weekly and always have the best time. The staff are lovely and it's a fun environment. Couldn't recommend more`,
          "name": "Google Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
        }
      ],
      "telephone": "0423 487 302",
      "email": "woof@gabbadoggydaycare.com",
      "url": "https://www.gabbadoggydaycare.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "46 Deshon st",
        "addressLocality": "Woolloongabba",
        "addressRegion": "QLD",
        "postalCode": "4102"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": {
          "@type": "DayOfWeek",
          "name": "Mo-Fr 06:30-18:30"
        }
      }
    }
  },
  methods: {
    ranNum() {
      let x = Math.random() * (30) - 15
      return x
    },
    refreshSlider() {
      this.disabled = true
      this.rand = Math.floor(Math.random() * Math.floor(100))
      setTimeout( () => {
        this.disabled = false
      }, 750)         
      }
  },  
  computed: {
      data() {
        return this.$store.state[this.$store.state.region].contact         
      }
    },
  data() {
    return {
      disabled: false,
      rand: 0,
      features: [
        {
          title: "Easy Online Bookings",
          icon: 'calendar-day',
          desc: "Signup online to conveniently manage your own bookings, update your information or purchase daycare packages."
        },
        {
          title: "Yound, Old and In Between",
          icon: 'paw',
          desc: "With dedicated areas for both older dogs and puppies, we make sure everyone is comfortable, relaxed and safe."
        },
        {
          title: "Stimulating Environment",
          icon: 'star-shooting',
          desc: "Spacious play areas with balls, toys, ramps, obstacles, grass and more."
        },
        {
          title: "Pet Taxi",
          icon: 'taxi',
          desc: "Save yourself some running around - our pet taxi is available for local pickup and dropoff. Call us to check availability.",
          limit: 'brisbane'
        },
        {
          title: "Grooming",
          icon: 'shower',
          desc: "Professional grooming services on location so you can have you pup coming home fresh and clean.",
          limit: 'brisbane'
        },        
      ]
    }
  },
  mounted() {
    if (this.$route.name === "Question") {
      this.$modal.show("contact-modal");
    }
  }
}
</script>

<style lang="scss">
  
  .photo1 {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_600,h_700/q_auto,f_auto/v1/gddc/gddc-viv-b.jpg);
    background-position: 50% 30%
  }
</style>