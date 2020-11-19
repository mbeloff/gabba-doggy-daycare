<template>
  <div>
    <div class="section">
      <div class="container py-20 mx-auto">
        <div class="text-center ">
          <p class="mb-10 font-bold text-blue-700">Are you new here?</p>
          <h2 class="mb-10 text-5xl font-bold leading-tight tracking-tight">New Client Registration</h2>
        </div>
        <div class="w-full p-3 mx-auto text-lg leading-7 text-left text-gray-700 md:w-3/4 lg:w-2/3">
          <sign-up-info></sign-up-info>
          
          <div class="mt-10 text-center">
            <a href="https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=" target="_blank" rel="noopener" class="inline-block px-5 py-2 text-xl text-white bg-blue-600 rounded-full font-semi-bold hover:border-transparent hover:bg-yellow-500 focus:outline-blue">Create an Account</a>
          </div>
          
        </div>
      </div>
    </div>
    <div class="bg-gray-100 section">
      <div class="container py-20 mx-auto">
        <div class="text-center">
          <p class="mb-10 font-bold text-blue-700">Already have an account?</p>
          <h2 class="mb-10 text-5xl font-bold leading-tight tracking-tight">Sign In Here</h2>
        </div>
        <div class="mt-10 text-center">
            <button @click="showLogin()" class="inline-block px-5 py-2 text-xl text-white bg-blue-600 rounded-full font-semi-bold hover:border-transparent hover:bg-yellow-500 focus:outline-blue">Click Me</button>
          </div>
        <!-- <Login class="w-full mx-auto md:w-3/4 lg:w-2/3"></Login> -->
      </div>
    </div>
  </div>
</template>

<script>
import SignUpInfo from '@/components/SignUpInfo.vue'
  // import Login from "@/components/Login.vue"
  export default {
    components: {
      // Login
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