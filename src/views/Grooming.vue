<template>
  <div class="">
    <div class="tile section" id="about">
      <div class="container grid grid-cols-1 gap-20 px-4 py-20 mx-auto md:grid-cols-2 lg:px-20">
        <div class="col y-5 md:my-20">
          <Title>
            <template v-slot:big>So Fresh and So Clean</template>
            <template v-slot:small>Grooming Services</template>
          </Title>
          <p class="mb-3">Gabba Doggy Daycare is now offering grooming as a standalone service, or to be combined with your daycare booking. Check our services and prices below.</p>
          <p class="mb-3">Grooming services can be requested online without an account. <OpenGrooming class="mt-3 block mx-auto btn-blue">Request Grooming</OpenGrooming></p>
          <p>To get discounted grooming, <router-link class="link-pink" :to="{ name: 'Sign-up' }">Create a Daycare Account</router-link> and purchase a daycare package.</p>
        </div>
        <div class="bg-cover rounded-xl col bath-pup">
        </div>
      </div>
    </div>
    <PricesGrooming></PricesGrooming>
    <div class="section tile" id="enrol">
      <div class="container py-20 mx-auto">
        <div class="text-center">
          <Title>
            <template v-slot:small>Ready for Pampering?</template>
            <template v-slot:big>Book Here</template>
          </Title>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import PricesGrooming from '@/components/PricesGrooming.vue'
  export default {
    metaInfo: {
      title: 'About Grooming',
      meta: [{
        name: 'description',
        content: "Get your pup looking so fresh and so clean. Straight forward groomings services with special discount for daycare customers.",
        vmid: 'description'
      }]
    },
    components: {
      PricesGrooming
    },
  }
</script>

<style lang="scss">
.bath-pup {
    min-height: 400px;
    background-position: 45% 50%;
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_450,h_600/q_auto,f_auto/v1609809738/gddc/bath-pup.jpg);
    @media only screen and (max-width: 767px) {
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400,h_600/q_auto,f_auto/v1609809738/gddc/bath-pup.jpg);
    }
  }
</style>