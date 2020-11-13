<template>
  <div>
    <div class="section">
      <div class="container mx-auto py-20">
        <div class="text-center ">
          <p class="font-bold text-blue-700 mb-10">Are you new here?</p>
          <h2 class="font-bold tracking-tight leading-tight text-5xl mb-10">New Client Registration</h2>
        </div>
        <div class="text-left w-full md:w-3/4 lg:w-2/3 mx-auto p-3 leading-8 text-lg text-gray-700">
          <p class="mb-3">We're excited to welcome you to Gabba Doggy Day Care. If you're dog is:</p>
          <ul class="list-inside list-disc mb-3 ml-4">
            <ListItem>Up to date with all of their vaccinations (Distemper, Hepatitis, Leptospirosis, Parvovirus and Parainfluenza) and Canine Cough (Bordetella)</ListItem>
            <ListItem>Have adequate protection against fleas, worms and ticks</ListItem>
            <ListItem>Desexed (if over than 6 months)</ListItem>
            <ListItem>Friendly with people and other dogs</ListItem>
          </ul>
          <p class="mb-3">Then you're ready to <a target="_blank" rel="noopener" href="https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=" class="text-pink-500">create an account.</a> Once you've done that, you'll be able to add your pets' information and also read/sign our day care agreement (which will need to be done before your first day care session).</p>
          <!-- <p class="mb-3">Don't worry, after you sign up, we'll also send you an email explaining everything you'll need to know going forward.</p> -->
          <p class="mb-3"><span class="font-bold">Please note:</span> you will need to bring your pup in for a temperament test before you'll be able to book your first day care appointment with us. This is to ensure that your your dog will fit in ok, and also gives you an opportunity to check the place out. Send us an email at <a class="text-blue-500" href="mailto:woof@gabbadoggydaycare.com">woof@gabbadoggydaycare.com</a> to arrange a suitable time for a meetup.</p>
          
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
  // import Login from "@/components/Login.vue"
  export default {
    components: {
      // Login
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