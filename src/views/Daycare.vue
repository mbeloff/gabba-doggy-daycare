<template>
  <div class="">
    <div class="tile section" id="about">
      <div class="container grid grid-cols-1 gap-x-20 lg:gap-x-40 gap-y-10 px-2 py-20 mx-auto md:grid-cols-2 lg:px-20">
        <div class="col y-5">
          <title-block>
            <template #small>Daycare</template>
            <template #big>Play, Relax, Socialise</template>
          </title-block>
          <p class="mb-4">Gabba Doggy Daycare offers special care for your dog while you're not able to - while at daycare, they get all the love, care and socialisation they require throughout the day - not to mention heaps of room to run around, ball pits, toys, ramps and obstacles.
          </p><p class="mb-4"> We take care to place each of our guests with others of a similar size and/or temperament, and we have a puppy creche so the little ones get the extra care and attention that they need. Gabba Doggy Daycare is your pup's home away from home.</p>
          <p>Check out our daycare packages below, and make an account for easy online bookings and payments.</p>
        </div>
        <div class="bg-cover rounded-xl col grass-boys shadow-xl">
        </div>
      </div>
    </div>
    <section-prices class="lg:px-20"></section-prices>
    <div class="section tile"  id="enrol">
      <div class="container py-20 mx-auto">
        <div class="text-center">
          <title-block>
            <template #small>Ready to sign up?</template>
            <template #big>Before You Join</template>
          </title-block>
        </div>
        <div class="grid grid-cols-1 gap-x-10 px-2 md:grid-cols-3 lg:px-20">
          <div class="text-left md:col-span-2">
            <section-signup></section-signup>
            <choose-location class="mt-10"></choose-location>
            <div class=" grid grid-cols-1 gap-5 my-10 divide-pink-500 sm:grid-cols-2 sm:divide-x">
          <div class="text-center sm:text-right col"><a target="_blank" rel="noopener" :href="link" class="inline-block btn-blue">Create an Account</a></div>
          <div class="flex items-center text-left col"><open-login class="mx-auto text-center text-pink-400 align-center sm:text-left hover:underline sm:ml-5">already have an account?</open-login></div>
        </div>
          </div>
          <div class="bg-cover md:col-span-1 grass-pup rounded-xl shadow-xl">
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
  import SectionSignup from '@/components/SectionSignup.vue'
  import SectionPrices from '@/components/SectionPrices.vue'
  export default {
    computed: {
      link() {
        return this.$store.state[this.getRegion()].newAccountLink
      }
    },
    metaInfo: {
    title: 'About Day Care',
    meta: [
      {
        name: 'description',
        content:
          "All you need to know about our day care, including prices and how to sign up.",
        vmid: 'description'
      }
    ]
  },
    components: {
      SectionSignup, SectionPrices
    },
  }
</script>

<style lang="scss">
  .grass-boys {
    min-height: 500px;
    background-position: 50% 30%;
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_550,h_575/q_auto,f_auto/v1/gddc/photos/2021_March/6b.jpg);
    @media only screen and (max-width: 767px) {
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400,h_700/q_auto,f_auto/v1/gddc/photos/2021_March/6b.jpg);
    }
  }

    .grass-pup {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_350,h_600/q_auto,f_auto/v1/gddc/photos/712.jpg);
    min-height: 400px;
    background-position: 50% 30%;
    @media only screen and (max-width: 1024px) {
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_250,h_400/q_auto,f_auto/v1/gddc/photos/712.jpg);
      background-position: 0% 20%;
    }
    @media only screen and (max-width: 767px) {
      min-height: 600px;
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_400,h_600/q_auto,f_auto/v1/gddc/photos/712.jpg);
      background-position: 0% 20%;
    }
  }

</style>