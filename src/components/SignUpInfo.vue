<template>

    <div >
      <p class="mb-3"><span class="font-bold">We can't wait to meet you</span>, but there are a few things to get out of the way first. In order to make sure everyone is safe and has a great time at Gabba Doggy Daycare, we ask that all of our canine guests are:</p>
            <ul class="mb-3 list-disc list-inside">
              <list-item>Up to date with all of their vaccinations (Distemper, Hepatitis, Parvovirus, Parainfluenza and Bordetella)</list-item>
              <list-item>Have adequate protection against fleas, worms and ticks</list-item>
              <list-item>Desexed (if over 6 months)</list-item>
              <list-item>Friendly with people and other dogs</list-item>
            </ul>
            <p class="mb-3">Just <a class="link-pink" :href="`tel:` + phone">give us a call</a> or <open-modal class="link-pink">message us</open-modal> if you have any questions.</p>
    </div>
</template>

<script>
export default {
  computed: {
    phone() {
      return this.$store.state[this.$store.state.global.region].contact.phone.replace(/\s+/g, '')
    }
  }
}
</script>

<style>
</style>