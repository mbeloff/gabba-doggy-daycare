<template>
  <div class="section">
    <div class="container py-20 mx-auto">
      <Title class="text-center">
        <template v-slot:small>Get in Touch</template>
        <template v-slot:big>Contact Us</template>
      </Title>
      <div class="grid grid-cols-1 px-4 md:grid-cols-2">
        <div class="flex-grow bg-center bg-no-repeat bg-contain md:bg-right phone-pup">
        </div>
        <div class="my-auto">
          <ul class="text-xl font-bold list-none list-inside">
            <ListItem class="flex flex-col items-center mb-4 text-center md:items-start md:flex-row md:text-left">Address: <br> <span>Gabba Doggy Day Care <br> 46 Deshon Street, <br>Woolloongabba 4102</span></ListItem>
            <ListItem class="flex flex-col items-center mb-4 text-center md:flex-row md:text-left md:items-start">Email: <br> <span><Email class="break-all">woof@gabbadoggydaycare.com</Email></span></ListItem>
            <ListItem class="flex flex-col items-center mb-4 text-center md:flex-row md:text-left md:items-start">Follow us on: <br>
              <div class="flex flex-wrap">
                <div class="">
                  <SocialIcon site="facebook">facebook</SocialIcon>
                </div>
                <div class="flex">
                  <SocialIcon site="instagram">instagram</SocialIcon>
                </div>
                
              </div></ListItem>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
metaInfo: {
    title: 'Contact Us',
    meta: [
      {
        name: 'description',
        content:
          "Got a question about Gabba Doggy Day Care? Get in touch today.",
        vmid: 'description'
      }
    ]
  }
  }
</script>

<style lang="scss">
  .phone-pup {
    background-image: url(../assets/img/phone-pup.jpg);
    min-height: 300px;
    // background-position: 45% 50%;
  }

  .ellipses {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>