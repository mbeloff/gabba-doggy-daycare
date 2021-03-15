<template>
<div class="bg-blue-500 h-full">
   <div class="container m-auto max-w-screen-sm p-2 py-20">
      
      <form name="feedback" id="feedback" data-netlify="true" @submit.prevent="handleSubmit" class="relative px-2 pt-6 pb-6 mb-4 bg-gray-100 bg-right-bottom bg-no-repeat rounded shadow-md" :class="{ 'opacity-50' : isLoading}">
        <transition name="fade">
          <div v-if="hasSubmitted" class="absolute top-0 left-0 grid w-full h-full">
            <p class="px-4 py-2 mx-2 text-2xl text-center text-blue-500 place-self-center">Thanks, we appreciate your feedback.</p>
          </div>
        </transition>

        <div v-if="isLoading" class="absolute top-0 left-0 grid w-full h-full">
          <i class="text-blue-500 fad fa-spinner place-self-center fa-4x animate-spin-slow"></i>
        </div>
        <p class="text-blue-900 mb-3 text-2xl font-bold">Suggestions</p>
        <p class="mb-3">What do you love about GDDC? Is there something we could be doing better? We'd love to know what you think</p>
        <div :class="{ 'opacity-0 avoid-clicks' : hasSubmitted}">
          <div class="mb-4">
            <textarea ref="message" v-model="form.message" rows="4" class="my-input" id="phone" type="text" placeholder="what's on your mind...?"></textarea>
          </div>
          <div class="flex justify-around items-center mx-auto mb-6 gap-4 text-xl max-w-1/2 py-3">
            <span @click="rating(1)" :class="{'r-active' : form.rating == 1}" class="rating opacity-50 hover:opacity-100">😡</span>
            <span @click="rating(2)" :class="{'r-active' : form.rating == 2}" class="rating opacity-50 hover:opacity-100">😞</span>
            <span @click="rating(3)" :class="{'r-active' : form.rating == 3}" class="rating opacity-50 hover:opacity-100">😐</span>
            <span @click="rating(4)" :class="{'r-active' : form.rating == 4}" class="rating opacity-50 hover:opacity-100">🙂</span>
            <span @click="rating(5)" :class="{'r-active' : form.rating == 5}" class="rating opacity-50 hover:opacity-100">😍</span>
          </div>
          <div class="flex items-center justify-between">
            <button  class="btn-blue" :class="{'btn-disabled' : isDisabled}" type="submit">
              Submit
            </button>
          </div>
          
        </div>
      </form>  
    </div>
</div>
 
</template>

<script>
export default {
    metaInfo: {
      title: 'Feedback',
      meta: [{
        name: 'description',
        content: "We'd love to know what you think about GDDC. Let us know what's on your mind.",
        vmid: 'description'
      }]
    },
    computed: {
      isDisabled() {
        return this.form.message == "" && this.form.rating == undefined
      }
    },
    data() {
      return {
        form: {
          message: "",
          location: this.$route.params.region,
          rating: undefined
        },
        hasSubmitted: false,
        isLoading: false,
      }
    },
    watch: {
      '$route.params.region': function () {
        this.form.location = this.getRegion()
      },
    },
    methods: {
      rating(rating) {
        this.form.rating = rating
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
              "form-name": "feedback",
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
      }
    },
    mounted() {
      setTimeout(() => {
        this.$refs.message.focus();
      }, 500);
    }
  }
</script>

<style lang="scss"> 
.btn-disabled {
  pointer-events: none;
  opacity: .3;
}

.rating {
  transition: transform .5s ease-out;
  user-select: none;
}
.r-active {
  transform: scale(1.2);
  opacity: 100;
  
}
</style>