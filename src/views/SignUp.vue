<template>
  <div>
    <div class="section">
      <div class="container py-20 mx-auto">
        <div class="text-center ">
          <title-block>
            <template #small> <span class="capitalize">{{ getRegion() }}</span></template>
            <template #big>New Client Registration</template>
          </title-block>
        </div>
        <div class="w-full p-3 mx-auto text-lg leading-7 text-left text-gray-700 md:w-3/4 lg:w-2/3">
          <section-signup></section-signup>
          <choose-location class="mt-10"></choose-location>
          <div class="mt-10 text-center">
            <a :href="link" target="_blank" rel="noopener" class="inline-block text-xl btn-blue">Create an Account</a>
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
          <open-login class="inline-block text-xl btn-blue">Sign In</open-login>
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