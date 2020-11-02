<template>
  <div class="shadow-xl bg-gray-200 rounded-lg">
    <div class="flex justify-between p-3 bg-blue-600 rounded-t-lg">

      <h1 class="text-3xl tracking-tight font-bold text-blue-100"><i class="fal fa-paw"></i>
        Register your interest
      </h1>
      <button class="float-right focus:outline-blue" @click="hide()"><i class="fa fa-times fa-2x text-blue-200 mx-3 hover:text-blue-600"></i>
      </button>
    </div>
    <div class="p-3">
      <p class="text-blue-800">Thanks for checking out Gabba Doggy Day Care. Leave your info with us and we'll let you know when we're opening.</p>
      <br />
      <form name="register-interest" id="register-interest" data-netlify="true" @submit.prevent="validateForm" class="bg-white shadow-md rounded px-3 pt-6 pb-8 mb-4 bg-pug bg-no-repeat bg-right-bottom relative" :class="{ 'opacity-50' : isLoading}">
        <transition name="fade">
          <div v-if="hasSubmitted" class="grid absolute h-full w-full top-0 left-0">
            <p class="text-2xl text-center text-white place-self-center rounded-full px-4 py-2 shadow-xl mx-2 bg-blue-800">Thanks, we'll keep you posted</p>
          </div>
        </transition>

        <div v-if="isLoading" class="absolute h-full w-full left-0 top-0 grid">
          <i class="fad fa-spinner place-self-center fa-4x animate-spin-slow animate-pulse text-blue-500"></i>
        </div>
        <div :class="{ 'opacity-0' : hasSubmitted}">
          <div class="mb-2">
            <label class="uppercase block text-blue-500 text-sm font-bold mb-2 mt-3" for="name">
              name
            </label>
            <input v-model="form.name" ref="name" class="text-xl shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50 focus:bg-opacity-75" id="name" type="text" placeholder="">
          </div>
          <div class="mb-2">
            <label class="uppercase block text-blue-500 text-sm font-bold mb-2 mt-3" for="email">
              email
            </label>
            <input v-model="form.email" class="text-xl shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50 focus:bg-opacity-75" id="email" type="email" placeholder="" :class="{ 'border-orange-500' : missingContact }">
          </div>
          <div class="mb-4">
            <label class="uppercase block text-blue-500 text-sm font-bold mb-2 mt-3" for="phone">
              phone
            </label>
            <input v-model="form.phone" class="text-xl shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50 focus:bg-opacity-75" id="phone" type="text" placeholder="" :class="{ 'border-orange-500' : missingContact }">
          </div>
          <div class="mb-4">
            <label class="uppercase block text-blue-500 text-sm font-bold mb-2 mt-3" for="phone">
              message
            </label>
            <textarea v-model="form.message" rows="4" class="text-xl shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50 focus:bg-opacity-75" id="phone" type="text" placeholder="Hi, I was wondering about..."></textarea>
          </div>
          <transition name="grow">
            <div v-if="this.missingContact">
              <p class="rounded-lg bg-blue-300 bg-opacity-75 p-3 mb-4"><strong>Whoops!</strong> Please provide a phone number or email address so that we can get back to you.</p>
            </div>
          </transition>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </div>


      </form>
      <p class="leading-snug tracking-tight text-gray-500 text-sm">We respect your privacy. We will only ever use your info to contact you about Gabba Doggy Day Care. We will never sell your info, or use it for any other purpose.</p>
    </div>
  </div>
</template>
<script>
  export default {
    metaInfo: {
      title: 'Register',
      meta: [{
        name: 'description',
        content: "Opening Soon! Register your interest",
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
      hide() {
        this.$modal.hide('contact-modal')
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
      }
    },
    mounted() {
      setTimeout(() => {
        this.$refs.name.focus();
      }, 500);
    }
  }
</script>

<style lang="scss">
  .bg-pug {
    background-image: url(../assets/img/pug-sm.webp);
    background-size: 60% auto;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }

  .grow-enter-active,
  .grow-leave-active {
    transition: max-height 0.5s, opacity 0.5s;
    max-height: 100px;
  }

  .grow-enter,
  .grow-leave-to {
    opacity: 0;
    max-height: 0px;
  }
</style>