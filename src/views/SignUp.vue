<template>
  <div>
    <div class="section">
      <div class="container mx-auto py-20">
        <div class="text-center ">
          <p class="font-bold text-blue-700 mb-10">Are you new here?</p>
          <h2 class="font-bold tracking-tight leading-tight text-5xl mb-10">New Client Registration</h2>
        </div>
        <div class="text-left w-full md:w-3/4 lg:w-2/3 mx-auto p-3 leading-7 text-lg text-gray-700">
          <sign-up-info></sign-up-info>
          
          <div class="text-center mt-10">
            <a href="https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=" target="_blank" rel="noopener" class="inline-block px-5 py-2 rounded text-xl bg-blue-600 text-white rounded-full font-semi-bold hover:border-transparent hover:bg-yellow-500  focus:outline-blue">Create an Account</a>
          </div>
          
        </div>
      </div>
    </div>
    <div class="section bg-gray-200">
      <div class="container mx-auto py-20">
        <div class="text-center">
          <p class="font-bold text-blue-700 mb-10">Already have an account?</p>
          <h2 class="font-bold tracking-tight leading-tight text-5xl mb-10">Sign In Here</h2>
        </div>
        <div class="text-center mt-10">
            <button @click="showLogin()" class="inline-block px-5 py-2 rounded text-xl bg-blue-600 text-white rounded-full font-semi-bold hover:border-transparent hover:bg-yellow-500  focus:outline-blue">Click Me</button>
          </div>
        <!-- <Login class="w-full md:w-3/4 lg:w-2/3 mx-auto"></Login> -->
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