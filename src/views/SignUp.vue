<template>
  <div>
    <div class="section">
      <div class="container max-w-screen-lg px-2 py-20 mx-auto">
        <div class="text-center">
          <title-block>
            <template #small>
              <span class="capitalize">GDDC {{ getRegion() }}</span></template
            >
            <template #big>Register Now</template>
          </title-block>
        </div>
        <div class="grid grid-cols-1 gap-x-20 md:grid-cols-2">
          <div class="flex flex-col justify-between text-left md:col-span-1">
            <section-signup></section-signup>
            <div
              class="flex items-center px-2 rounded-md"
              @click="agree = !agree"
              :class="{ 'ring-1 ring-yellow-500': alert }"
            >
              <div
                class="grid items-center justify-center transition-colors border border-blue-500 rounded-md min-h-6 min-w-6"
                :class="{ 'bg-blue-500': agree }"
              >
                <i class="text-white fas fa-check"></i>
              </div>
              <label
                tabindex="0"
                @keypress.space.prevent="agree = !agree"
                class="ml-4 italic"
                for="agree"
                ref="agree"
                ><input
                  type="checkbox"
                  name="agree"
                  v-model="agree"
                  class="hidden"
                />I acknowledge the above and assert that my dog has not bitten,
                or shown aggression to another animal or person</label
              >
            </div>

            <div class="my-10 text-center col" @click="checkAgree()">
              <a
                href="https://book.collar.pet/au/brands/gabba-doggy-daycare/book
"
                class="inline-block btn-blue"
                :tabindex="this.agree ? 0 : -1"
                :class="{ 'btn-disabled': !agree }"
                >Proceed to Booking</a
              >
            </div>
          </div>
          <div
            class="min-h-full bg-center bg-cover shadow-xl md:col-span-1 rounded-xl h-96 register-img"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionSignup from '@/components/SectionSignup.vue'
export default {
  data() {
    return {
      agree: false,
      alert: false,
    }
  },

  computed: {
    link() {
      return this.$store.state[this.getRegion()].newAccountLink
    },
  },
  methods: {
    checkAgree() {
      if (!this.agree) {
        this.alert = true
        this.$refs.agree.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        })
      }
    },
  },
  watch: {
    agree: function () {
      this.alert = false
    },
  },
  metaInfo: {
    title: 'Create an Account',
    meta: [
      {
        name: 'description',
        content:
          'Create and account with Gabba Doggy Daycare to easily schedule day care appointments, manage payments and keep your info up to date.',
        vmid: 'description',
      },
    ],
  },
  components: {
    SectionSignup,
  },
}
</script>

<style lang="scss">
.register-img {
  background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_crop,h_614,w_656/c_scale,w_450/q_auto,f_auto/v1631854044/gddc/promo/gddc_14.jpg);
}

@media only screen and (min-width: 768px) {
  .register-img {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_crop,h_614,w_656/c_scale,h_750/q_auto,f_auto/v1631854044/gddc/promo/gddc_14.jpg);
  }
}
</style>
