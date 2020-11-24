<template>
  <div class="p-3">
    <p class="text-blue-900">If you already have an account with us, you can login to PetExec here to manage your account. <span v-if="!isSignUp()">If you don't have an account yet, you can create one <a href="javascript:void(0)" @click="close" class="text-pink-500 cursor-pointer focus:text-yellow-400 focus:outline-none">here.</a></span> </p>
    <br />
    <form action="https://secure.petexec.net/remoteLogin.php" method="POST" class="flex flex-col px-3 pb-3 bg-white bg-right-bottom bg-no-repeat rounded shadow-md" id="petExecLogin">
      <div class="grid grid-cols-1 grid-rows-2 gap-0 sm:grid-cols-2 sm:grid-rows-1 sm:gap-4">
        <div class="mb-2">
          <label class="block mt-3 mb-2 text-sm font-bold text-blue-500 uppercase" for="username">
            username
          </label>
          <input v-model="form.username" ref="name" class="w-full px-4 py-2 text-xl text-gray-700 bg-white bg-opacity-50 border rounded shadow appearance-none focus:outline-none focus:ring focus:bg-opacity-75" name="username" id="username" type="text" placeholder="">
        </div>
        <div class="mb-2">
          <label class="block mt-3 mb-2 text-sm font-bold text-blue-500 uppercase" for="password">
            password
          </label>
          <input v-model="form.password" class="w-full px-4 py-2 text-xl text-gray-700 bg-white bg-opacity-50 border rounded shadow appearance-none focus:outline-none focus:ring focus:bg-opacity-75" name="password" id="password" type="password" placeholder="">
        </div>
      </div>

      <div class="flex flex-row-reverse items-center col-span-2">
        <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-blue" type="submit">
          Login
        </button>
        <a target="_blank" rel="noopener" href="https://
secure.petexec.net/lostPassword.php" class="mr-3 text-sm text-pink-500 focus:outline-none focus:text-yellow-400" tabindex="0">forgot password?</a>
      </div>

    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: "",
          password: ""
        }
      }
    },
    metaInfo: {
      title: 'Login',
      meta: [{
        name: 'description',
        content: "Login to your Gabba Doggy Day Care account to schedule day care appointments, or manage your account.",
        vmid: 'description'
      }]
    },
    mounted() {
      setTimeout(() => {
        this.$refs.name.focus();
      }, 500);
    },
    methods: {
      isSignUp() {
        if (this.$route.path == "/sign-up") {
          return true
        }
      },
      close() {
          this.$router.push({
          name: 'Sign-up'
        })
        this.$modal.hide('login-modal')
      }
    }
  }
</script>

<style>

</style>