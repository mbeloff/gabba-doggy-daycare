<template>
  <div class="p-3">
      <p class="text-blue-900">Thanks for checking out Gabba Doggy Day Care. Leave your info with us and we'll let you know when we're opening.</p>
      <br />
      <form name="register-interest" id="register-interest" data-netlify="true" @submit.prevent="validateForm" class="relative px-3 pt-6 pb-8 mb-4 bg-white bg-right-bottom bg-no-repeat rounded shadow-md bg-pug" :class="{ 'opacity-50' : isLoading}">
        <transition name="fade">
          <div v-if="hasSubmitted" class="absolute top-0 left-0 grid w-full h-full">
            <p class="px-4 py-2 mx-2 text-2xl text-center text-white bg-blue-500 rounded-full shadow-xl place-self-center">Thanks, we'll keep you posted</p>
          </div>
        </transition>

        <div v-if="isLoading" class="absolute top-0 left-0 grid w-full h-full">
          <i class="text-blue-500 fad fa-spinner place-self-center fa-4x animate-spin-slow"></i>
        </div>
        <div :class="{ 'opacity-0' : hasSubmitted}">
          <div class="mb-2">
            <label class="block mt-3 mb-2 text-sm font-bold text-blue-500 uppercase" for="name">
              name
            </label>
            <input v-model="form.name" ref="name" class="w-full px-4 py-2 text-xl text-gray-700 bg-white bg-opacity-50 border rounded shadow appearance-none focus:outline-none focus:ring focus:bg-opacity-75" id="name" type="text" placeholder="">
          </div>
          <div class="mb-2">
            <label class="block mt-3 mb-2 text-sm font-bold text-blue-500 uppercase" for="email">
              email
            </label>
            <input v-model="form.email" class="w-full px-4 py-2 text-xl text-gray-700 bg-white bg-opacity-50 border rounded shadow appearance-none focus:outline-none focus:ring focus:bg-opacity-75" id="email" type="email" placeholder="" :class="{ 'border-orange-500' : missingContact }">
          </div>
          <div class="mb-4">
            <label class="block mt-3 mb-2 text-sm font-bold text-blue-500 uppercase" for="phone">
              phone
            </label>
            <input v-model="form.phone" class="w-full px-4 py-2 text-xl text-gray-700 bg-white bg-opacity-50 border rounded shadow appearance-none focus:outline-none focus:ring focus:bg-opacity-75" id="phone" type="text" placeholder="" :class="{ 'border-orange-500' : missingContact }">
          </div>
          <div class="mb-4">
            <label class="block mt-3 mb-2 text-sm font-bold text-blue-500 uppercase" for="phone">
              message
            </label>
            <textarea v-model="form.message" rows="4" class="w-full px-4 py-2 text-xl text-gray-700 bg-white bg-opacity-50 border rounded shadow appearance-none focus:outline-none focus:ring focus:bg-opacity-75" id="phone" type="text" placeholder="Hi, I was wondering about..."></textarea>
          </div>
          <transition name="grow">
            <div v-if="this.missingContact">
              <p class="p-3 mb-4 bg-blue-300 bg-opacity-75 rounded-lg"><strong>Whoops!</strong> Please provide a phone number or email address so that we can get back to you.</p>
            </div>
          </transition>
          <div class="flex items-center justify-between">
            <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring" type="submit">
              Submit
            </button>
          </div>
        </div>


      </form>
      <p class="text-sm leading-snug tracking-tight text-gray-500">We respect your privacy. We will only ever use your info to contact you about Gabba Doggy Day Care. We will never sell your info, or use it for any other purpose. Read our privacy policy <a @click="close()" class="text-pink-300 cursor-pointer">here.</a></p>
    </div>
</template>

<script>
export default {
    metaInfo: {
      title: 'Register',
      meta: [{
        name: 'description',
        content: "Opening Soon! Register your interest and we'll keep you posted.",
        vmid: 'description'
      }]
    },
    data() {
      return {
        form: {
          name: "",
          phone: "",
          email: "",
          message: "",
        },
        hasSubmitted: false,
        isLoading: false,
        missingContact: false
      }
    },
    watch: {
      'form.number': function () {
        this.missingContact = false
      },
      'form.email': function () {
        this.missingContact = false
      }
    },
    methods: {
      emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

      },      
      validateForm() {
        if (!this.form.phone && !this.form.email) {
          this.missingContact = true
          return
        }
        if (this.form.email) {
          this.emailIsValid(this.form.email)
        }
        this.handleSubmit()
      },
      encode(data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      },
      handleSubmit() {
        this.isLoading = true
        fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: this.encode({
              "form-name": "Register",
              ...this.form
            })
          })
          .then(() => {
            this.isLoading = false;
            this.hasSubmitted = true;
          })
      },
      close() {
          this.$router.push({
          name: 'Privacy'
        })
        this.$modal.hide('contact-modal')
      }
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