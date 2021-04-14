<template>
  <div class="p-3">
    <p class="text-blue-900 text-sm">Login to PetExec here to manage your GDDC account, schedule daycare or buy packages. <span v-if="!isSignUp()">If you don't have an account yet, you can create one <a href="javascript:void(0)" @click="close" class="link-pink" title="new account page">here.</a></span> </p>
    <br />
    <form action="https://secure.petexec.net/remoteLogin.php" method="POST" class="flex flex-col p-3 pt-2 bg-white bg-right-bottom bg-no-repeat rounded shadow-md" id="petExecLogin">
      <div class="grid grid-cols-1 grid-rows-2 gap-0 sm:grid-cols-2 sm:grid-rows-1 sm:gap-4">
        <div>
          <label class="my-label" for="username">
            username
          </label>
          <input v-model="form.username" ref="name" class="my-input" name="username" id="username" type="text" placeholder="">
        </div>
        <div>
          <label class="my-label" for="password">
            password
          </label>
          <input v-model="form.password" class="my-input" name="password" id="password" type="password" placeholder="">
        </div>
      </div>

      <div class="flex flex-row-reverse items-center col-span-2 mt-2">
        <button class="btn-blue" type="submit">
          Login
        </button>
        <a target="_blank" rel="noopener" href="https://
secure.petexec.net/lostPassword.php" class="mr-3 text-sm link-pink" tabindex="0">forgot password?</a>
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
        content: "Login to your Gabba Doggy Daycare account to schedule day care appointments, or manage your account.",
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
          return (this.$route.path == "/sign-up")        
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