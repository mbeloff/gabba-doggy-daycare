<template>
  <div>
    <div class="section">
      <div class="container py-20 mx-auto max-w-screen-lg px-2">
        <div class="text-center ">
          <title-block>
            <template #small> <span class="capitalize">{{ getRegion() }}</span></template>
            <template #big>New Client Registration</template>
          </title-block>
        </div>
        <div class="grid grid-cols-1 gap-x-20 md:grid-cols-2">
          <div class="text-left md:col-span-1 flex flex-col justify-between">
            <section-signup ></section-signup>
            <section-signup ></section-signup>
            <div class="flex items-center px-2 rounded-md" @click="agree = !agree" :class="{ 'ring-1 ring-yellow-500':alert}" >
              <input type="checkbox" name="agree" v-model="agree" class="hidden" >
              <div class="grid items-center justify-center min-h-6 min-w-6 rounded-md border border-blue-500 transition-colors" :class="{'bg-blue-500' : agree}"><i class="fas fa-check text-white"></i></div>
              <label class="ml-4 italic" for="agree" ref="agree">I acknowledge the above and assert that my dog is not a fence jumper and has not bitten, or shown aggression to another animal or person</label>
            </div>            
              <choose-location class="mt-10"></choose-location>
              <transition name="grow">
                 <p class="text-pink-500 pt-5" v-if="getRegion() == 'adelaide'"><span class="font-bold">Please note:</span> our Adelaide facility is not yet in operation. However, you're very welcome to create an account, and we will send out a notification when we open. <span class="italic">We thank you for your patience.</span></p>
              </transition>
             
                <div class="text-center my-10 col" @click="create()"><a target="_blank" rel="noopener" :href="link" class="inline-block btn-blue" :class="{'btn-disabled': !agree}">Create an Account</a></div>
          </div>
          <div class="bg-cover md:col-span-1  rounded-xl shadow-xl h-96 min-h-full bg-center" style="background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,h_600/f_auto,q_auto/v1/gddc/photos/716.jpg)">
          </div>
        </div>
      </div>
    </div>
    <div class="tile section">
      <div class="container py-20 mx-auto">
        <div class="text-center">
          <title-block>
            <template #small>Already have an account?</template>
            <template #big>Sign In Here</template>
          </title-block>
        </div>
        <div class="mt-10 text-center">
          <open-login class="inline-block btn-blue">Sign In</open-login>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionSignup from '@/components/SectionSignup.vue'
  export default {
    data() {
      return {
        agree: false,
        alert: false,
      }
    },
    computed: {
      link() {
        return this.$store.state[this.getRegion()].newAccountLink
      }
    },
    methods: {
      create() {
        if (!this.agree) {
          this.alert = true
          this.$refs.agree.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
        }
      }
    },
    watch: {
      'agree': function() {
        this.alert = false
      }
    },
    metaInfo: {
    title: 'Create an Account',
    meta: [
      {
        name: 'description',
        content:
          "Create and account with Gabba Doggy Daycare to easily schedule day care appointments, manage payments and keep your info up to date.",
        vmid: 'description'
      }
    ]
  },
    components: {
      SectionSignup
    },
    
  }
</script>

<style>

</style>