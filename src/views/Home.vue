<template>
  <div>
    <Hero></Hero>
    <!-- <Hero></Hero> -->
    <Cards></Cards>
    <div class="section py-20">
       <Title class="text-center"><template v-slot:small>Brisbane Dogs Love it Here</template>
          <template v-slot:big>More than just a day care</template>
          </Title>
      <div class="container grid grid-cols-1 gap-10 lg:gap-20 px-4 mx-auto lg:grid-cols-2 lg:px-10 lg:gap-y-0">
       
        <div class="col order-2 lg:order-1">
          <ul class="text-left list-none list-inside">   
            <li class="grid w-full mb-5 shadow-xl" v-for="(item, i) in features" :key="i">
              <div class="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-400 text-white rounded-t-lg px-4 py-1 font-bold">
                <p class="flex justify-items-between"><span>{{item.title}}</span><i class="fas fa-paw ml-auto opacity-50 place-self-center"></i></p>
              </div>
              <div class="flex-grow rounded-b-lg text-base px-4 py-1 font-medium text-gray-500">
                <p>{{item.desc}}</p>
              </div>
            </li>         
          </ul>
          <div class="mt-10 text-center">
            <router-link :to="{ name: 'Daycare' }" class="inline-block btn-blue">Pricing & More Info <i class="fal fa-arrow-right"></i></router-link>
          </div>
        </div>
        <div class="bg-cover rounded-lg h-full col champ-pup order-1 lg:order-2 my-auto">
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
  import Hero from "@/components/Hero.vue"
  import Cards from "@/components/Cards.vue"
  export default {
    components: {
      Hero,
      Cards,
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
  data() {
    return {
      features: [
        {
          title: "Easy Online Bookings",
          desc: "Signup online to conveniently manage your own bookings, update your information or purchase daycare packages"
        },
        {
          title: "Yound and Old",
          desc: "With dedicated areas for both older dogs and puppies, we make sure everyone is comfortable."
        },
        {
          title: "Large Facility",
          desc: "Spacious play areas with balls, toys and access to grass."
        },
        {
          title: "Daily Walks",
          desc: "Fresh air and exercise with a little group walks through nearby parks"
        },
        {
          title: "Grooming",
          desc: "Have your dog fresh and clean when you pick them up. Hydrobath and grooming services coming in 2021"
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
    background-image: url(../assets/img/champ.jpg);
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/f_auto,q_auto/v1607553601/gddc/photos/03.jpg);
    min-height: 300px;
    height: 100%;
    // max-height: 500px;
    @media only screen and (max-width: 1023px) {
      min-height: 500px;
    }
    @media only screen and (max-width: 450px) {
      min-height: 300px;
    }
  }

  .sad-pup {
    background-image: url(../assets/img/sadpup.jpg);
    min-height: 300px;
    background-position: 50% 80%;
  }

  .flower-pup {
    background-image: url(../assets/img/flower-pup.jpg);
    min-height: 300px;
    background-position: 50% 30%;
  }
</style>