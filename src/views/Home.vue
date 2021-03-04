<template>
  <div>
    <section-hero></section-hero>
    <section-cards></section-cards>
    <section-slider></section-slider> 
    <div class="section py-32 tile bg-gray-100 bg-opacity-30">
       <title-block class="text-center">
          <template #small>{{ data.city }} Dogs Love it Here</template>
          <template #big>More than just a day care</template>
        </title-block>
      <div class="container grid grid-cols-1 gap-x-10 lg:gap-20 px-4 mx-auto lg:grid-cols-2 lg:px-10 lg:gap-y-0">
        <div class="col order-2 lg:order-1">
          <ul class="text-left list-disc list-outside py-10">   
            <li class="grid w-full mb-5"  v-for="(item, i) in features" :key="i">
              <template v-if="item.limit == getRegion() || item.limit == null">
                <div class="flex gap-3 items-center">
                <icon-stack :icon="item.icon"></icon-stack>           
                <p class="font-bold text-blue-700">{{item.title}} <span class="text-blue-400 font-normal capitalize" v-if="item.limit">- {{item.limit}} only</span>  </p>
                </div>
              <p class="ml-11">{{item.desc}}</p>
              </template>
              
            </li>         
          </ul>
          <div class="mt-10 text-center">
            <router-link :to="{ name: 'Daycare' }" class="inline-block btn-blue">Pricing & More Info <i class="fal fa-arrow-right"></i></router-link>
          </div>
        </div>
        <pattern-border class="order-1 lg:order-2">
          <iframe :src="data.map" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" class="rounded-sm map" title="Doggy daycare location map"></iframe>
        </pattern-border>
      
      </div>
    </div> 
    
  </div>
</template>

<script>
  import SectionHero from "@/components/SectionHero.vue"
  import SectionCards from "@/components/SectionCards.vue"
  import SectionSlider from "@/components/SectionSlider.vue"
  export default {
    components: {
      SectionHero,
      SectionCards,
      SectionSlider
    },
    metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content:
          "Your best friends' new favourite place. Don't leave your dogs home alone, bring them to Gabba Doggy Daycare for a great day out.",
        vmid: 'description'
      }
    ]
  },
  methods: {
    ranNum() {
      let x = Math.random() * (30) - 15
      return x
    }
  },
  computed: {
      data() {
        return this.$store.state[this.$store.state.region].contact         
      }
    },
  data() {
    return {
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
          desc: "Spacious play areas with balls, toys, ramps, obstacles, lawn and more."
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
          desc: "Have your dog fresh and clean when you pick them up. Hydrobath and grooming services now available, with discounts for daycare guests.",
          limit: 'brisbane'
        },        
      ]
    }
  },
  mounted() {
    if (this.$route.name === "Register") {
      this.$modal.show("contact-modal");
    }
  }
  }
</script>

<style lang="scss">
  .tile, .tile-alt {
    position: relative;
    &:before, &:after {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: "";
      position:absolute;
    }
    &:before {
      z-index: -2;
      background: url(../assets/img/gddc_tile.svg);
      background-color: rgb(243, 244, 246);
      background-size: 300px;
    }
    &:after {      
      z-index: -1;
      background-image: linear-gradient(to bottom, rgb(243, 244, 246),rgb(243, 244, 246), rgba(243, 244, 246, .5))
    }
  }
  
</style>