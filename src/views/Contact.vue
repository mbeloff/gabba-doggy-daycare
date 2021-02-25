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
          <ul class="text font-bold list-none list-inside">
            <ListItem class="flex flex-col items-center mb-4 text-center md:items-start md:flex-row md:text-left">Address: <br> <span>{{data.name}} <br> {{data.street}}, <br>{{data.suburb}} <br>{{data.postcode}}</span> <br> </ListItem>
            <ListItem v-if="data.phone" class="flex flex-col items-center mb-4 text-center md:flex-row md:text-left md:items-start">Phone: <br> <a class="font-normal link-pink" :href="`tel:` + data.phone.replace(/\s+/g, '')">{{data.phone}}</a></ListItem>
            <ListItem class="flex flex-col items-center mb-4 text-center md:flex-row md:text-left md:items-start">Email: <br> <span>
                <Email class="break-all">{{data.email}}</Email>
              </span></ListItem>
            <ListItem class="flex flex-col items-center mb-4 text-center md:flex-row md:text-left md:items-start">Message: <br> <span>
                <open-modal class="link-pink">leave a message</open-modal>
              </span>
            </ListItem>
            <ListItem class="flex flex-col items-center mb-4 text-center md:flex-row md:text-left md:items-start">Follow us on: <br>
              <div class="flex flex-wrap flex-col">
                <div class="mt-2">
                  <SocialIcon site="facebook">facebook</SocialIcon>
                </div>
                <div class="mt-2">
                  <SocialIcon site="instagram">instagram</SocialIcon>
                </div>
              </div>
            </ListItem>
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