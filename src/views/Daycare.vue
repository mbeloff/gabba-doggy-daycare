<template>
  <div class="bg-white">
    <div class="bg-gray-100 section" id="about">
      <div class="container grid grid-cols-1 gap-20 px-4 py-20 mx-auto md:grid-cols-2 lg:px-20">
        <div class="col y-5 md:my-20">
          <Title>
            <template v-slot:small>Check out what's available</template>
            <template v-slot:big>Play, Relax, Socialise</template>
          </Title>
          <p class="mb-4">Gabba Doggy Day Care offers special care for your dog while you're not able to - whether that's for a couple of hours or a whole day. We take care to place each of our guests with others of a similar size and/or temperament, and we have a puppy creche so the little ones get the extra care and attention that they need. Everyone has a place at Gabba Doggy Day Care.</p>
          <p>See below for more information about our day care prices, and additional services to make your pup's day a little bit special.</p>
        </div>
        <div class="bg-cover rounded-sm col toy-pup">
        </div>
      </div>
    </div>
    <div class="section">

    </div>
    <Prices></Prices>
    <div class="bg-gray-100 section"  id="enrol">
      <div class="container py-20 mx-auto">
        <div class="text-center">
          <Title>
            <template v-slot:small>Ready to join us?</template>
            <template v-slot:big>Before You Enrol</template>
          </Title>
        </div>
        <div class="grid grid-cols-1 gap-20 px-4 md:grid-cols-3 lg:px-20">
          <div class="text-left md:col-span-2">
            <sign-up-info></sign-up-info>
          </div>
          <div class="bg-cover md:col-span-1 flower-pup">
          </div>
        </div>
        <div class="grid grid-cols-1 gap-5 my-10 divide-pink-500 sm:grid-cols-2 sm:divide-x">
          <div class="text-center sm:text-right col"><a target="_blank" rel="noopener" href="https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=" class="inline-block btn-blue">Create an Account</a></div>
          <div class="flex items-center text-left col"><button @click="showLogin" class="mx-auto text-center text-pink-500 align-center sm:text-left hover:underline sm:ml-5">I already have an account</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SignUpInfo from '@/components/SignUpInfo.vue'
  import Prices from '@/components/Prices.vue'
  export default {
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
      SignUpInfo, Prices
    },
    methods: {
      showLogin() {
        this.$modal.show('login-modal')
      }
    },
    
  }
</script>

<style lang="scss">
  .toy-pup {
    background-image: url(../assets/img/toypup.jpg);
    min-height: 300px;
    background-position: 45% 50%;
  }
</style>