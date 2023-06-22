<template>
  <div class="">
    <div
      class="tile"
      id="about"
    >
      <div class="container grid max-w-screen-lg grid-cols-1 px-2 py-20 mx-auto gap-x-20 gap-y-10 md:grid-cols-2">
        <div class="col y-5">
          <title-block>
            <template #small>Daycare</template>
            <template #big>Play, Relax, Socialise</template>
          </title-block>
          <p class="mb-4">Gabba Doggy Daycare offers special care for your dog while you're not able to - while at daycare, they get all the love, care and socialisation they require throughout the day - not to mention heaps of room to run around and play, with access to sunshine, grass, sand and pools to cool down.
          </p>
          <p class="mb-4"> We take care to place each of our guests with others of a similar size and/or temperament, and we have a puppy creche so the little ones get the extra care and attention that they need. Gabba Doggy Daycare is your pup's home away from home.</p>
          <p>We have flexible payment options and discounted packages, check out our price list, and make an account for easy online bookings.</p>
        </div>
        <div class="bg-cover shadow-xl rounded-xl col grass-boys aspect-w-4 aspect-h-5">
        </div>
      </div>
    </div>
    <section-prices></section-prices>
    <div class="tile">
      <section-expect></section-expect>
    </div>
  </div>
</template>

<script>
import SectionExpect from '@/components/SectionWhatToExpect.vue'
import SectionPrices from '@/components/SectionPrices.vue'
export default {
  computed: {
    link() {
      return this.$store.state[this.getRegion()].newAccountLink
    },
    contact() {
      return this.$store.state[this.getRegion()].contact
    },
  },
  metaInfo: {
    title: 'Daycare',
    meta: [
      {
        name: 'description',
        content:
          "Gabba Doggy Daycare is a fun and exciting place for your dog to play and make new friends while you're at work.",
        vmid: 'description',
      },
    ],
  },
  components: {
    SectionPrices,
    SectionExpect,
  },
}
</script>

<style lang="scss">
.grass-boys {
  background-position: 50% 30%;
  background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_scale,w_500,q_auto,f_auto/v1/gddc/photos/01_22/25.jpg);

  @media only screen and (max-width: 767px) {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400/q_auto,f_auto/v1/gddc/photos/01_22/25.jpg);
  }
}
</style>