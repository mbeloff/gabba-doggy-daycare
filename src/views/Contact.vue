<template>
  <div class="section">
    <div class="container mx-auto py-20">
      <Title class="text-center">
        <template v-slot:small>Get in Touch</template>
        <template v-slot:big>Contact Us</template>
      </Title>
      <div class="px-4 grid grid-cols-1 md:grid-cols-2">
        <div class="bg-contain bg-no-repeat bg-center md:bg-right phone-pup flex-grow">
        </div>
        <div class="my-auto">
          <ul class="list-none list-inside font-bold text-xl">
            <ListItem class="flex flex-col items-center md:items-start text-center md:flex-row md:text-left mb-4">Address: <br> <span>Gabba Doggy Day Care <br> 46 Deshon Street, <br>Woolloongabba 4102</span></ListItem>
            <ListItem class="flex flex-col items-center text-center md:flex-row md:text-left mb-4 md:items-start">Email: <br> <span><Email class="break-all">woof@gabbadoggydaycare.com</Email></span></ListItem>
            <ListItem class="flex flex-col items-center text-center md:flex-row md:text-left mb-4 md:items-start">Follow us on: <br>
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