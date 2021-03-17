<template>
  <div class="h-full">
    <div v-if="hasGrooming">
      <div class="tile" id="about">
        <div class="container grid grid-cols-1 gap-20 px-2 py-20 mx-auto md:grid-cols-2 max-w-screen-lg">
          <div class="col y-5 md:my-10">
            <title-block>
              <template #big>So Fresh and So Clean</template>
              <template #small>Grooming Services</template>
            </title-block>
            <p class="mb-3">Gabba Doggy Daycare is now offering grooming as a standalone service, or to be combined with your daycare booking. Check our services and prices below.</p>
            <p class="mb-3">Grooming services can be booked through your account. If you don't have an account, use the form below.</p>
          </div>
          <div class="bg-cover rounded-xl col bath-pup shadow-lg">
          </div>
        </div>
      </div>
      <div>
        <section-prices-grooming></section-prices-grooming>
        <div class="tile" id="book">
          <div class="container py-20 mx-auto">
            <div class="text-center">
              <title-block>
                <template #small>Ready for Pampering?</template>
                <template #big>Book Here</template>
              </title-block>
            </div>
            <!-- <div class="form-wrapper mx-auto"> -->
            <form-grooming></form-grooming>
            <!-- </div>         -->
          </div>
        </div>
      </div>
    </div>
    <not-available v-else></not-available>
  </div>
</template>

<script>
  import SectionPricesGrooming from '@/components/SectionPricesGrooming.vue'
  import FormGrooming from '@/components/FormGrooming.vue'
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
        content: "Get your pup looking fresh and clean. Hydrobath and grooming services with special discounts for daycare customers.",
        vmid: 'description'
      }]
    },
    components: {
      SectionPricesGrooming,
      FormGrooming
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