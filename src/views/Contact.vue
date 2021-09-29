<template>
  <div>
    <section-map></section-map>
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
            <li class="flex flex-col mb-3" v-if="getRegion() == 'brisbane'">
              <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
                <icon-stack :icon="'phone-rotary'"></icon-stack>
                <a class="btn-blue" :href="`tel:` + removeSpaces(contact.phone)">Call Us</a>
                <p class="text-sm my-1">6:30am - 6:30pm</p>
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
              <div class="flex flex-row mx-auto md:mx-0 gap-2 md:pl-11">
                <div class="mt-2">
                  <social-icon site="facebook"></social-icon>
                </div>
                <div class="mt-2">
                  <social-icon site="instagram"></social-icon>
                </div>
                <div class="mt-2">
                  <social-icon site="tiktok"></social-icon>
                </div>
              </div>
              <p v-if="getRegion() == 'brisbane'" class="my-5 italic">Our preferred vet: <a class="link-pink" target="_blank" href="https://www.highgatehillvet.com.au/">Highgate Hill Vet Surgery</a></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container py-20 md:px-2 mx-auto">
    <section-faq :faqhead="'Need Help?'"></section-faq>
    </div>
    
  </div>
</template>

<script>
import SectionMap from '@/components/SectionMap.vue'
import SectionFaq from '@/components/SectionFaq.vue'
  export default {
    components: {
      SectionFaq,
      SectionMap
    },
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
  }

  .ellipses {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>