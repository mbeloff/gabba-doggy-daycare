<template>
  <div>
    <Hero></Hero>
    <Cards></Cards>
    <Slider></Slider> 
    <Gallery></Gallery>
    <div class="section py-32 tile bg-gray-100 bg-opacity-30">
       <Title class="text-center"><template v-slot:small>{{ data.city }} Dogs Love it Here</template>
          <template v-slot:big>More than just a day care</template>
          </Title>
      <div class="container grid grid-cols-1 gap-10 lg:gap-20 px-4 mx-auto lg:grid-cols-2 lg:px-10 lg:gap-y-0">
       
        <div class="col order-2 lg:order-1">
          <ul class="text-left list-none list-inside">   
            <li class="grid w-full mb-5 shadow rounded-lg"  v-for="(item, i) in features" :key="i">
              <div class="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-400 text-white rounded-t-lg px-4 py-1 font-bold">
                <p class="flex justify-items-between"><span>{{item.title}}</span><i class="fas fa-paw ml-auto opacity-50 place-self-center"></i></p>
              </div>
              <div class="flex-grow rounded-b-lg text-base px-4 py-1 font-medium text-gray-500 bg-white">
                <p>{{item.desc}}</p>
              </div>
            </li>         
          </ul>
            
          <div class="mt-10 text-center">
            <router-link :to="{ name: 'Daycare' }" class="inline-block btn-blue">Pricing & More Info <i class="fal fa-arrow-right"></i></router-link>
          </div>
        </div>
        <div class="bg-cover rounded-lg h-full col champ-pup order-1 lg:order-2 my-auto shadow">
          <iframe :src="data.map" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" class="lg:rounded-xl map" title="Doggy daycare location map"></iframe>
        </div>
      </div>
    </div> 
    
  </div>
</template>

<script>
  import Hero from "@/components/Hero.vue"
  import Cards from "@/components/Cards.vue"
  import Slider from "@/components/Slider.vue"
  export default {
    components: {
      Hero,
      Cards,
      Slider
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
  computed: {
      data() {
        return this.$store.state[this.$store.state.global.region].contact         
      }
    },
  data() {
    return {
      features: [
        {
          title: "Easy Online Bookings",
          desc: "Signup online to conveniently manage your own bookings, update your information or purchase daycare packages."
        },
        {
          title: "Yound, Old and In Between",
          desc: "With dedicated areas for both older dogs and puppies, we make sure everyone is comfortable, relaxed and safe."
        },
        {
          title: "Stimulating Environment",
          desc: "Spacious play areas with balls, toys, ramps and obstacles."
        },
        {
          title: "Flexible Options",
          desc: "We offer half day and full day daycare pricing, as well as discounted packages."
        },
        {
          title: "Grooming",
          desc: "Have your dog fresh and clean when you pick them up. Hydrobath and grooming services now available, with discounts for daycare guests. (Brisbane only)"
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
  .champ-pup {
    min-height: 300px;
    height: 100%;
  }

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