<template>
  <div class="p-3">
    <p class="text-blue-800">Login to your existing account with us. If you don't have an account yet, you can create one <a href="https://secure.petexec.net/newOwner.php?x=zFuFWakd7Aw=" class="text-pink-500">here.</a></p>
    <br />
    <form action="https://secure.petexec.net/remoteLogin.php" method="POST" class="bg-white shadow-md rounded px-3 pb-3 bg-no-repeat bg-right-bottom flex flex-col" id="petExecLogin">
    <div class="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-0 sm:gap-4">
      <div class="mb-2">
          <label class="uppercase block text-blue-500 text-sm font-bold mb-2 mt-3" for="name">
            username
          </label>
          <input v-model="form.username" ref="name" class="text-xl shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50 focus:bg-opacity-75" name="username" id="username" type="text" placeholder="">
        </div>
        <div class="mb-2">
          <label class="uppercase block text-blue-500 text-sm font-bold mb-2 mt-3" for="email">
            password
          </label>
          <input v-model="form.password" class="text-xl shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50 focus:bg-opacity-75" name="password" id="password" type="password" placeholder="">
        </div>
    </div>
        
      <div class="flex flex-row-reverse col-span-2 items-center justify-items-end">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Login
        </button>
        <a href="https://
secure.petexec.net/lostPassword.php" class="text-pink-500 text-sm mr-3">forgot password?</a>
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
        content: "Login to your Gabba Doggy Day Care account",
        vmid: 'description'
      }]
    },
    mounted() {
      setTimeout(() => {
        this.$refs.name.focus();
      }, 500);
    }
  }
</script>

<style>

</style>