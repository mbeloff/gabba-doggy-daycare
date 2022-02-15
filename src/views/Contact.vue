<template>
  <div>
    <div class="bg-gray-100" style="height: 400px;">
      <section-map></section-map>
    </div>
    
    <div class="container py-20 px-2 mx-auto">
      <title-block class="text-center">
        <template #small>Get in Touch</template>
        <template #big>Contact Us</template>
      </title-block>

<div class="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-10 border-gray-200">
  <div class="flex flex-col items-center gap-3">
    <icon-stack :icon="'phone-rotary'"></icon-stack>
     <a class="btn-blue" :href="'tel:' + contact.phone.replaceAll(' ','')">Call Us</a>
    <p class="text-center text-sm">You can give us a buzz between the hours of 6:30am and 6:30pm.</p>
  </div>
  <div class="flex flex-col items-center gap-3">
    <icon-stack :icon="'paper-plane'"></icon-stack>
    <a :href="`mailto:` + contact.email" class="btn-blue">Email</a>
    <p class="text-center text-sm">Send an email and we'll get back to you. You can also send your vaccination certificates this way.</p>
  </div>
  <div class="flex flex-col items-center gap-3">
    <icon-stack :icon="'comment-alt-smile'"></icon-stack>
    <open-modal class="btn-blue">Message</open-modal>
    <p class="text-center text-sm">Leave your details and send a quick message online. We'll get back to as soon as we can.</p>
  </div>
</div>

      <div class="grid grid-cols-1 mt-10">
          <ul class="list-none list-inside text-center">
            <li class="flex flex-col mb-3">
              <div class="flex flex-col gap-0 md:gap-3 items-center">
                <icon-stack :icon="'heart'"></icon-stack>
                <p class="font-bold">Follow Us:</p>
              </div>
              <div class="flex flex-row mx-auto gap-2">
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
    <div class="container py-20 md:px-2 mx-auto">
      <title-block>
      <template #big>Frequently Asked Questions</template>
      <template #small>Need Answers?</template>
    </title-block>
    <p class="mb-10">If you don't find the answer to your questions here, please don't hesitate to get in touch. <a class="link-pink" href="tel:0423487302">Give us a call</a> during business hours, or  <open-modal class="link-pink">send us a message</open-modal> any time and we'll get back to you as soon as we can.</p>
      <section-faq></section-faq>
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