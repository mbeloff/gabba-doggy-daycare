<template>
  <div>
    <div class="section">
      <div class="container py-20 mx-auto max-w-screen-lg px-2">
        <div class="text-center">
          <title-block>
            <template #small> <span class="capitalize">GDDC {{ getRegion() }}</span></template>
            <template #big>Register Now</template>
          </title-block>
        </div>
        <div class="grid grid-cols-1 gap-x-20 md:grid-cols-2">
          <div class="text-left md:col-span-1 flex flex-col justify-between">
            <section-signup ></section-signup>
            <div class="flex items-center px-2 rounded-md" @click="agree = !agree" :class="{ 'ring-1 ring-yellow-500':alert}" >
              <input type="checkbox" name="agree" v-model="agree" class="hidden" >
              <div class="grid items-center justify-center min-h-6 min-w-6 rounded-md border border-blue-500 transition-colors" :class="{'bg-blue-500' : agree}"><i class="fas fa-check text-white"></i></div>
              <label class="ml-4 italic" for="agree" ref="agree">I acknowledge the above and assert that my dog has not bitten, or shown aggression to another animal or person</label>
            </div>            
              <choose-location class="mt-10"></choose-location>
              <transition name="grow">
                 <p class="text-pink-500 pt-5" v-if="getRegion() == 'adelaide'"><span class="font-bold">Please note:</span> 
                 <!-- our Adelaide facility is not yet in operation. New account sign-ups are temporarily disabled. <span class="italic">We thank you for your patience.</span></p> -->
                 our Adelaide facility is not yet in operation. You're welcome to create an account and we'll inform you when we have an opening date. <span class="italic">We thank you for your patience.</span></p>
              </transition>
             
                <!-- <div v-if="getRegion() == 'brisbane'" class="text-center my-10 col" @click="checkAgree()"><router-link to="/newowner" class="inline-block btn-blue" :class="{'btn-disabled': !agree}">Create an Account</router-link></div> -->
                <div class="text-center my-10 col" @click="checkAgree()"><router-link to="/newowner" class="inline-block btn-blue" :class="{'btn-disabled': !agree}">Create an Account</router-link></div>
          </div>
          <div class="bg-cover md:col-span-1  rounded-xl shadow-xl h-96 min-h-full bg-center register-img">
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="tile section">
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
    </div> -->
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
      },      
    },
    methods: {
      checkAgree() {
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

<style lang="scss">
.register-img {
  background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_crop,h_614,w_656/c_scale,w_450/q_auto,f_auto/v1631854044/gddc/promo/gddc_14.jpg);
}

@media only screen and (min-width: 768px) {
  .register-img { 
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_crop,h_614,w_656/c_scale,h_750/q_auto,f_auto/v1631854044/gddc/promo/gddc_14.jpg);
  }
}
</style>