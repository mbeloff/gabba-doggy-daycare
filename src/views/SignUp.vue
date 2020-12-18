<template>
  <div>
    <div class="section">
      <div class="container py-20 mx-auto">
        <div class="text-center ">
          <Title>
        <template v-slot:small>Are you new here?</template>
        <template v-slot:big>New Client Registration</template>
      </Title>
        </div>
        <div class="w-full p-3 mx-auto text-lg leading-7 text-left text-gray-700 md:w-3/4 lg:w-2/3">
          <sign-up-info></sign-up-info>
          
          <div class="mt-10 text-center">
            <a href="https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=" target="_blank" rel="noopener" class="inline-block text-xl btn-blue">Create an Account</a>
          </div>
          
        </div>
      </div>
    </div>
    <div class="bg-gray-100 section">
      <div class="container py-20 mx-auto">
        <div class="text-center">
          <Title>
        <template v-slot:small>Already have an account?</template>
        <template v-slot:big>Sign In Here</template>
      </Title>
        </div>
        <div class="mt-10 text-center">
            <button @click="showLogin()" class="inline-block text-xl btn-blue">Click Me</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpInfo from '@/components/SignUpInfo.vue'
  export default {
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
      SignUpInfo
    },
    methods: {
      showLogin() {
        this.$modal.show('login-modal')
      },
    }
    
  }
</script>

<style>

</style>