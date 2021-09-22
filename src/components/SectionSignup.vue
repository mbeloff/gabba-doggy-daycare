<template>

  <div>
    <p class="mb-3"><span class="font-bold">We can't wait to meet you at GDDC</span>, but there are a few things to get out of the way first. In order to make sure everyone is safe and has a great time at Gabba Doggy Daycare, we ask that all of our canine guests are:</p>
    <ul class="mb-3 list-disc list-inside max-w-screen-sm md:pl-4 py-4 text-sm">
      <li class="flex gap-4 mb-2">
        <icon-stack :icon="'viruses'"></icon-stack><p>Up to date with all of their vaccinations (Distemper, Hepatitis, Parvovirus, Parainfluenza and Bordetella) <router-link class="link-pink" :to="{name: 'Vaccinations'}">more info</router-link></p>
      </li>
      <li class="flex gap-4 mb-2">
        <icon-stack :icon="'debug'"></icon-stack><p>Adequately protected against fleas, worms and ticks</p>
      </li>
      <li class="flex gap-4 mb-2">
        <icon-stack :icon="'venus-mars'"></icon-stack>Desexed if over 6 months - not required but desexed dogs may have priority booking
      </li>
      <li class="flex gap-4 mb-2">
        <icon-stack :icon="'smile-plus'"></icon-stack>Friendly with people and other dogs
      </li>
    </ul>
    <!-- <p class="mb-3">Just <a class="link-pink" :href="`tel:` + removeSpaces(phone)">give us a call</a> or <open-modal class="link-pink">message us</open-modal> if you have any questions.</p> -->
  </div>
</template>

<script>
  export default {
    computed: {
      phone() {
        return this.$store.state[this.$store.state.region].contact.phone
      }
    }
  }
</script>

<style lang="scss">

</style>