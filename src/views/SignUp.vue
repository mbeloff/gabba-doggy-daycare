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
            <section-signup></section-signup>
              <choose-location class="mt-10"></choose-location>
              <!-- <div class=" grid grid-cols-1 gap-5 mt-10 mb-10 md:mb-0 divide-pink-500 sm:grid-cols-2 sm:divide-x"> -->
                <div class="text-center my-10 col"><a target="_blank" rel="noopener" :href="link" class="inline-block btn-blue">Create an Account</a></div>
                <!-- <div class="flex items-center text-left col">
                  <open-login class="mx-auto text-center text-pink-400 align-center sm:text-left hover:underline sm:ml-5">already have an account?</open-login>
                </div> -->
              <!-- </div>             -->
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
    computed: {
      link() {
        return this.$store.state[this.getRegion()].newAccountLink
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