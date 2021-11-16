<template>
  <div class="h-full">
    <div v-if="hasGrooming">
      <div class="tile" id="about">
        <div class="container grid grid-cols-1 gap-20 px-2 py-20 mx-auto md:grid-cols-2 max-w-screen-lg">
          <div class="col y-5 md:my-10">
            <title-block>
              <template #big>So Fresh and So Clean</template>
              <template #small>Hydrobath & Grooming Services</template>
            </title-block> 
            <alert-block>
              <template #left>note</template>
              <template #right>All washes and grooming services are only be available to dogs already booked into daycare for the day.</template>
              </alert-block>           
            <p class="mb-3">Get a wash with your daycare booking. We have basic services like washing and nail clipping available any day of the week. Washes can be requested when you drop off, but we recommend booking online to secure you spot.</p>
          </div>
          <div class="bg-cover rounded-xl col bath-pup shadow-lg aspect-w-3 aspect-h-4">
          </div>
        </div>
      </div>
      <div>
        <section-prices-grooming></section-prices-grooming>
        <!-- <div class="tile" id="book">
          <div class="container py-20 mx-auto">
            <div class="text-center">
              <title-block>
                <template #small>Ready for Pampering?</template>
                <template #big>Book Here</template>
              </title-block>
            </div>

            <form-grooming></form-grooming>

          </div>
        </div> -->
      </div>
    </div>
    <not-available v-else></not-available>
  </div>
</template>

<script>
  import SectionPricesGrooming from '@/components/SectionPricesGrooming.vue'
  // import FormGrooming from '@/components/FormGrooming.vue'
  export default {
    computed: {
      hasGrooming() {
        return this.$store.state[this.$route.params.region].hasGrooming
      }
    },
    metaInfo: {
      title: 'Grooming',
      meta: [{
        name: 'description',
        content: "Get your pup looking fresh and clean. Hydrobath and grooming services for daycare customers.",
        vmid: 'description'
      }]
    },
    components: {
      SectionPricesGrooming,
      // FormGrooming
    },
  }
</script>

<style lang="scss">
  .bath-pup {
    // min-height: 350px;
    background-position: 45% 50%;
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400,h_600/q_auto,f_auto/v1609809738/gddc/bath-pup.jpg);

    @media only screen and (max-width: 767px) {
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400,h_600/q_auto,f_auto/v1609809738/gddc/bath-pup.jpg);
    }
  }

  .form-wrapper {
    max-width: 600px
  }
</style>