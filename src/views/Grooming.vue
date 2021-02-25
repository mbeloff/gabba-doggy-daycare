<template>
  <div class="">
      <div class="tile section" id="about">
        <div class="container grid grid-cols-1 gap-20 px-4 py-20 mx-auto md:grid-cols-2 lg:px-20 xl:px-40">
          <div class="col y-5 md:my-10">
            <Title>
              <template #big>So Fresh and So Clean</template>
              <template #small>Grooming Services</template>
            </Title>
            <p class="mb-3">Gabba Doggy Daycare is now offering grooming as a standalone service, or to be combined with your daycare booking. Check our services and prices below.</p>
            <p class="mb-3">Grooming services can be requested online without an account. Just complete the form below.</p>
          </div>
          <div class="bg-cover rounded-xl col bath-pup shadow-lg">
          </div>
        </div>
      </div>
      <div v-if="hasGrooming">
        <PricesGrooming></PricesGrooming>
      <div class="section tile" id="book">
        <div class="container py-20 mx-auto">
          <div class="text-center">
            <Title>
              <template #small>Ready for Pampering?</template>
              <template #big>Book Here</template>
            </Title>
          </div>
          <!-- <div class="form-wrapper mx-auto"> -->
          <GroomingForm></GroomingForm>
          <!-- </div>         -->
        </div>
      </div>
      </div>
      <div v-else class="bg-blue-500">
        <div  class="container px-4 py-20 mx-auto lg:px-20 xl:px-40 text-white"><p>sorry, grooming is not available at this location ({{ this.$route.params.region }}) yet. 
          </p>
          <p class="text-sm ">If you're looking for a different location, use the menu at the top of the screen</p></div>
      </div>    
  </div>
</template>

<script>
  import PricesGrooming from '@/components/PricesGrooming.vue'
  import GroomingForm from '@/components/GroomingForm.vue'
  export default {
    computed: {
      hasGrooming() {
        return this.$store.state[this.$route.params.region].hasGrooming
      }
    },
    metaInfo: {
      title: 'About Grooming',
      meta: [{
        name: 'description',
        content: "Get your pup looking so fresh and so clean. Straight forward groomings services with special discount for daycare customers.",
        vmid: 'description'
      }]
    },
    components: {
      PricesGrooming,
      GroomingForm
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

  .form-wrapper {
    max-width: 600px
  }
</style>