<template>
  <div>
    <div class="container py-20 px-2 mx-auto">
      <title-block class="text-center">
        <template #small>Get in Touch</template>
        <template #big>Contact Us</template>
      </title-block>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex-grow ml-auto mr-auto bg-no-repeat bg-contain md:ml-auto md:mr-0 phone-pup max-w-full" style="height: 350px; width: 350px">
        </div>
        <div class="mb-auto">
          <ul class="list-none list-inside text-center md:text-left">
            <li class="flex flex-col mb-3">
              <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
                <icon-stack :icon="'search-location'"></icon-stack>
                <p class="font-bold">Address:</p>
              </div>
              <span class="md:pl-11">{{contact.name}} <br> {{contact.street}}, {{contact.suburb}} <br>{{contact.postcode}}</span>
            </li>
            <li class="flex flex-col mb-3">
              <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
                <icon-stack :icon="'phone-rotary'"></icon-stack>
                <a class="btn-blue" :href="`tel:` + removeSpaces(contact.phone)">Call Now</a>
              </div>
            </li>
            <li class="flex flex-col mb-3">
              <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
                <icon-stack :icon="'paper-plane'"></icon-stack>
                <a :href="`mailto:` + contact.email" class="btn-blue">Email Us</a>
              </div>
            </li>
            <li class="flex flex-col mb-3">
              <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
                <icon-stack :icon="'comment-alt-smile'"></icon-stack>
                <open-modal class="btn-blue">Leave a Message</open-modal>
              </div>
            </li>
            <li class="flex flex-col mb-3">
              <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
                <icon-stack :icon="'heart'"></icon-stack>
                <p class="font-bold">Follow Us:</p>
              </div>
              <div class="flex flex-col mx-auto md:mx-0 gap-2 md:pl-11">
                <div class="mt-2">
                  <social-icon site="facebook">facebook</social-icon>
                </div>
                <div class="mt-2">
                  <social-icon site="instagram">instagram</social-icon>
                </div>
              </div>
              <p v-if="getRegion() == 'brisbane'" class="my-5 italic">Our preferred vet: <a class="link-pink" href="https://www.highgatehillvet.com.au/">Highgate Hill Vet Surgery</a></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full mx-auto py-1 bg-blue-500">
      <iframe :src="contact.map" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      contact() {
        return this.$store.state[this.getRegion()].contact
      }
    },
    metaInfo: {
      title: 'Contact Us',
      meta: [{
        name: 'description',
        content: "Got a question about Gabba Doggy Daycare? Get in touch today. Find our location and contact info here.",
        vmid: 'description'
      }]
    }
  }
</script>

<style lang="scss">
  .phone-pup {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_450/q_auto,f_auto/v1609809728/gddc/phone-pup.jpg);
    min-height: 300px;
    // background-position: 45% 50%;
  }

  .ellipses {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>