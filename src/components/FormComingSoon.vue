<template>
<div v-if="checkCookie() == 'no' || checkCookie() == ''">
   <div class="bg-gray-700 text-gray-100  grid place-items-center text-left text-sm p-2">
    <div v-if="!hasSubmitted" class="max-w-md pb-2">
      <p class="py-1 mb-4"><span class="font-bold text-lg text-blue-400">Coming to GDDC!</span> Dedicated facilities and services for high-energy dogs and puppies. Leave your email to register your interest.</p>
      <form class="flex w-full text-left gap-2 flex-wrap" name="high-energy-and-puppy" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
        <input type="hidden" name="form-name" value="high-energy-and-puppy" />
        <div class="flex w-full gap-2">
          <input type="email" id="email" class="my-input bg-gray-200 h-full placeholder-gray-400 text-sm" placeholder="your email" v-model="form.email">
          <button :class="{'btn-disabled' : !emailIsValid(form.email)}" class="btn-blue text-white self-center py-1 px-1 w-24" type="submit"><i class="far fa-check-circle"></i></button>
        </div>
      </form>
      <p @click="setCookie('hasReg', 'yes', 365); hasSubmitted = true" class="mt-2 link-pink cursor-pointer">not interested</p>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        hasSubmitted: false,
        err: "",
        form: {
          email: ""
        }
      }
    },
    mounted() {  
       console.log(this.checkCookie())
      //  this.setCookie('hasReg', '', 365)
    },
    methods: {
      emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      },
      encode(data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      },
      handleSubmit() {
        fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: this.encode({
              "form-name": "high-energy-and-puppy",
              ...this.form
            })
          })
          .then(() => {
            this.hasSubmitted = true;
            this.setCookie("hasReg", 'yes', 365);
          })
      },
      setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      },
      getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      },
      checkCookie() {
        return this.getCookie("hasReg");       
      }
    }
  }
</script>

<style>

</style>