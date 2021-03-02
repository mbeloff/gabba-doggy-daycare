<template>
  <div class="p-2">
    <p class="text-white font-bold text-center mb-3">Book {{ this.service }}</p>
    <form name="training-form" id="training-form" data-netlify="true" @submit.prevent="validateForm" class="relative px-3 pt-6 pb-8 mb-4 bg-white bg-right-bottom bg-no-repeat rounded shadow-md" :class="{ 'opacity-50' : isLoading}">
      <transition name="fade">
        <div v-if="hasSubmitted" class="absolute top-0 left-0 grid w-full h-full">
          <p class="px-4 py-2 mx-2 text-2xl text-center text-blue-500 place-self-center">Thanks, we'll get back to you as soon as we can.</p>
        </div>
      </transition>

      <div v-if="isLoading" class="absolute top-0 left-0 grid w-full h-full">
        <i class="text-blue-500 fad fa-spinner place-self-center fa-4x animate-spin-slow"></i>
      </div>
      <div class="flex flex-wrap" :class="{ 'opacity-0 avoid-clicks' : hasSubmitted}">
        <div class="w-full">
          <label class="my-label" for="name">
            name
          </label>
          <input v-model="form.name" ref="name" class="my-input" id="name" type="text" placeholder="" required>
        </div>
        <div class="w-full sm:w-1/2 sm:pr-2">
          <label class="my-label" for="email">
            email
          </label>
          <input v-model="form.email" class="my-input" id="email" type="email" placeholder="" :class="{ 'border-orange-500' : missingContact }">
        </div>
        <div class="w-full sm:w-1/2">
          <label class="my-label" for="phone">
            phone
          </label>
          <input v-model="form.phone" class="my-input" id="phone" type="text" placeholder="" :class="{ 'border-orange-500' : missingContact }">
        </div>

        <div class="w-full">
          <label class="my-label" for="dogname">
            dog's name
          </label>
          <input v-model="form.dogname" class="my-input" id="dogname" type="text" placeholder="">
        </div>
        <div class="w-full sm:w-1/2 sm:pr-2">
          <label class="my-label" for="email">
            age
          </label>
          <input v-model="form.age" class="my-input" id="age" type="text" placeholder="">
        </div>
        <div class="w-full sm:w-1/2">
          <label class="my-label" for="phone">
            breed
          </label>
          <input v-model="form.breed" class="my-input" id="breed" type="text" placeholder="">
        </div>

        <div class="mb-4 w-full">
          <label class="my-label" for="phone">
            {{msgField}}
          </label>
          <textarea v-model="form.message" rows="4" class="my-input" id="message" type="text" placeholder=""></textarea>
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
    <button class="text-gray-100" @click="$emit('close')"><i class="far fa-times-square"></i> close form</button>
  </div>
</template>

<script>
  export default {
    props: {
      service: {
        type: String,
        default: ''
      },
      msgField: {
        type: String,
        default: 'Message'
      }
    },
    metaInfo: {
      title: 'Book Training and Behaviour Consults',
      meta: [{
        name: 'description',
        content: "Force-free, positive reinforcement training methods. Reduce stress and build a great relationship with your dog.",
        vmid: 'description'
      }]
    },
    data() {
      return {
        form: {
          name: "",
          phone: "",
          email: "",
          dogname: "",
          age: "",
          breed: "",
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
              "form-name": this.service,
              ...this.form
            })
          })
          .then(() => {
            this.isLoading = false;
            this.hasSubmitted = true;
          })
      },
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