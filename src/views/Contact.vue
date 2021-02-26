<template>
  <div class="section">
    <div class="container py-20 mx-auto">
      <Title class="text-center">
        <template #small>Get in Touch</template>
        <template #big>Contact Us</template>
      </Title>
      <div class="grid grid-cols-1 px-4 md:grid-cols-2">
        <div class="flex-grow ml-auto mr-auto bg-no-repeat bg-contain md:ml-auto md:mr-0 phone-pup max-w-full" style="height: 350px; width: 350px">
        </div>
        <div class="mb-auto">
          <ul class="list-none list-inside text-center md:text-left">
            <li class="flex flex-col mb-3">
              <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
                <IconStack :icon="'search-location'"></IconStack>
                <p class="font-bold">Address:</p>
              </div>
              <span class="md:pl-11">{{data.name}} <br> {{data.street}}, {{data.suburb}} <br>{{data.postcode}}</span>
            </li>
            <li class="flex flex-col mb-3">
              <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
                <IconStack :icon="'phone-rotary'"></IconStack>
                <a class="btn-blue" :href="`tel:` + data.phone.replace(/\s+/g, '')">Call Now</a>
              </div>
            </li>
            <li class="flex flex-col mb-3">
              <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
                <IconStack :icon="'paper-plane'"></IconStack>
                <a :href="`mailto:` + data.email" class="btn-blue">Email Us</a>
              </div>
            </li>
            <li class="flex flex-col mb-3">
              <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
                <IconStack :icon="'comment-alt-smile'"></IconStack>
                <open-modal class="btn-blue">Leave a Message</open-modal>
              </div>
            </li>
            <li class="flex flex-col mb-3">
              <div class="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
                <IconStack :icon="'heart'"></IconStack>
                <p class="font-bold">Follow Us:</p>
              </div>
              <div class="flex flex-col mx-auto md:mx-0 gap-2 md:pl-11">
                <div class="mt-2">
                  <SocialIcon site="facebook">facebook</SocialIcon>
                </div>
                <div class="mt-2">
                  <SocialIcon site="instagram">instagram</SocialIcon>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="w-full mx-auto py-1 bg-blue-500">
      <iframe :src="data.map" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>

  </div>
</template>

<script>
  export default {
    computed: {
      data() {
        return this.$store.state[this.$store.state.global.region].contact
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
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_350/q_auto,f_auto/v1609809728/gddc/phone-pup.jpg);
    min-height: 300px;
    // background-position: 45% 50%;
  }

  .ellipses {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>