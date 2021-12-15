<template>
  <div>
    <!-- <form-coming-soon v-if="getRegion() == 'brisbane'"></form-coming-soon> -->
    <section-hero></section-hero>
    
    <section-cards></section-cards>
    <div class="bg-gray-900 relative">
      <section-slider class="transition-opacity gallery duration-1000" :class="{ 'opacity-0' : this.disabled}" :key="this.rand"></section-slider>
    </div>
    

    <div class="section py-32 tile bg-gray-100 bg-opacity-30">
      <title-block class="text-center">
        <template #small>A home away from home</template>
        <template #big>Dogs Love it Here</template>
      </title-block>
      <div class="container grid grid-cols-1 lg:gap-10 px-2 mx-auto md:grid-cols-2 max-w-screen-lg gap-y-10 gap-x-2">
        <div class="col order-2 md:order-1 flex flex-col justify-between">
          <ul class="text-left list-disc list-outside">
            <li class="grid w-full mb-2" v-for="(item, i) in features" :key="i">
              <template v-if="item.limit == getRegion() || item.limit == null">
                <div class="flex flex-col items-center gap-3">
                  <icon-stack :icon="item.icon"></icon-stack>
                  <p class="font-bold text-blue-700 self-center">{{item.title}} <span class="text-blue-400 font-normal capitalize" v-if="item.limit">- {{item.limit}} only</span> </p>
                </div>
                <p class="text-sm text-center">{{item.desc}} 
                  <router-link v-if="item.title == 'Grooming'" class="link-pink" :to="{name: item.title, params: {region: item.limit}}">find out more</router-link>
                  <button v-if="item.title == 'Pet Taxi'" class="link-pink" @click="showTaxi">find out more</button>
                  </p>
              </template>
            </li>
          </ul>

        </div>
        <div class="order-1 md:order-2 rounded-sm photo1 bg-cover shadow-xl rounded-lg aspect-w-6 aspect-h-6"></div>
      </div>
      <div class="mt-10 max-w-screen-lg mx-auto px-2 text-center flex flex-col sm:flex-row sm:flex-wrap  gap-x-2 gap-y-5">
        <router-link :to="{ name: 'Daycare', params: {region: getRegion()} }" class="flex-grow btn-blue text-sm">Daycare Prices</router-link>
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
  // import FormComingSoon from "@/components/FormComingSoon.vue"
  export default {
    components: {
      SectionHero,
      SectionCards,
      SectionSlider,
      SectionReviews,
      // FormComingSoon
    },
    metaInfo: {
      title: 'Home',
      meta: [{
        name: 'description',
        content: "Your best friends' new favourite place. A fun place for your dog to play and meet new friends.",
        vmid: 'description'
      }],
      jsonld: {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "Gabba Doggy Daycare",
        "image": "https://res.cloudinary.com/dg5ybbkbh/image/upload/v1607553601/gddc/photos/03.jpg",
        "logo": "https://www.gabbadoggydaycare.com/img/gddc-logo.02c7187e.svg",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "6"
        },
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
      showTaxi() {
        this.$modal.show('taxi-modal');
      },
      ranNum() {
        let x = Math.random() * (30) - 15
        return x
      },
      refreshSlider() {
        this.disabled = true
        this.rand = Math.floor(Math.random() * Math.floor(100))
        setTimeout(() => {
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
        features: [{
            title: "Easy Online Bookings",
            icon: 'calendar-day',
            desc: "Sign up online to conveniently manage your bookings, update your information or purchase our discount daycare packages."
          },
          {
            title: "Dogs of all Shapes and Sizes",
            icon: 'paw',
            desc: "With dedicated areas for both older dogs and puppies, and play areas separated by size and temperament. There's a place for everyone at GDDC."
          },
          {
            title: "Sunshine and Grass",
            icon: 'sunglasses',
            desc: "Stimulating environment with spacious indoor areas, and huge outdoor play areas with grass, pools and sand pits."
          },
          {
            title: "Pet Taxi",
            icon: 'taxi',
            desc: "Save yourself some running around - our pet taxi is available for local pickup and dropoff.",
          },
          {
            title: "Grooming",
            icon: 'bath',
            desc: "Basic washes, nail clips and ear cleans available through the week, so you can have you pup coming home fresh and clean.",
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
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_700/v1635388818/gddc/photos/10_21/18.jpg);
    background-position: bottom
  }

  @media (min-width: 640px) {
    .gallery { min-height: 850px }
  }

  @media (min-width: 1024px) {
    .gallery { min-height: 340px }
  }

  @media (min-width: 1280px) {
    .gallery { min-height: 340px }
  }
  
</style>