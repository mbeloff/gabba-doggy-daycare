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
            <li class="grid w-full mb-5 shadow floatup"  v-for="(item, i) in features" :key="i">
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
        <div class="bg-cover rounded-lg h-full col champ-pup order-1 lg:order-2 my-auto shadow">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14157.078780074915!2d153.0441013!3d-27.4919868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cbf7d0ff474ef0e!2sGabba%20Doggy%20Daycare!5e0!3m2!1sen!2sau!4v1608508120256!5m2!1sen!2sau" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" class="lg:rounded-xl map"></iframe>
        </div>
      </div>
    </div> 
    <Slider></Slider>   
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
  data() {
    return {
      features: [
        {
          title: "Easy Online Bookings",
          desc: "Signup online to conveniently manage your own bookings, update your information or purchase daycare packages"
        },
        {
          title: "Yound and Old",
          desc: "With dedicated areas for both older dogs and puppies, we make sure everyone is comfortable, relaxed and safe."
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
    min-height: 300px;
    height: 100%;
  }

  .flower-pup {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_350,h_600/q_auto,f_auto/v1609809724/gddc/flower-pup.jpg);
    min-height: 300px;
    background-position: 50% 30%;
    @media only screen and (max-width: 1024px) {
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_250,h_400/q_auto,f_auto/v1609809724/gddc/flower-pup.jpg);
    }
    @media only screen and (max-width: 767px) {
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_400,h_600/q_auto,f_auto/v1609809724/gddc/flower-pup.jpg);
    }
  }
</style>