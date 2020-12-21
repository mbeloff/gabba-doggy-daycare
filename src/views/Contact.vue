<template>
  <div class="section">
    <div class="container py-10 mx-auto">
      <Title class="text-center">
        <template v-slot:small>Get in Touch</template>
        <template v-slot:big>Contact Us</template>
      </Title>
      <div class="grid grid-cols-1 px-4 md:grid-cols-2">
        <div class="flex-grow ml-auto mr-auto bg-no-repeat bg-contain md:ml-auto md:mr-0 phone-pup max-w-full" style="height: 350px; width: 350px">
        </div>
        <div class="my-auto">
          <ul class="text-xl font-bold list-none list-inside">
            <ListItem class="flex flex-col items-center mb-4 text-center md:items-start md:flex-row md:text-left">Address: <br> <span>Gabba Doggy Daycare <br> 46 Deshon Street, <br>Woolloongabba 4102</span> <br> </ListItem>
            <li class="flex flex-col items-center mb-4 text-center md:items-start md:flex-row md:text-left "><span class=" bg-blue-100 text-blue-800 font-normal py-1 px-4 text-sm">First entrance to the right as you come in through the main gate</span></li>
            <ListItem class="flex flex-col items-center mb-4 text-center md:flex-row md:text-left md:items-start">Phone: <br> <a class="font-normal link-pink" href="tel:0423487302">0423 487 302</a></ListItem>
            <ListItem class="flex flex-col items-center mb-4 text-center md:flex-row md:text-left md:items-start">Email: <br> <span><Email class="break-all">woof@gabbadoggydaycare.com</Email></span></ListItem>
            <ListItem class="flex flex-col items-center mb-4 text-center md:flex-row md:text-left md:items-start">Message: <br> <span><open-modal class="link-pink">leave a message</open-modal></span>  
            </ListItem>
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
    <div class="bg-blue-100 py-10">
      <div class="container mx-auto">
      <div class="xl:w-3/5 lg:w-1/2 w-full mx-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14157.078780074915!2d153.0441013!3d-27.4919868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cbf7d0ff474ef0e!2sGabba%20Doggy%20Daycare!5e0!3m2!1sen!2sau!4v1608508120256!5m2!1sen!2sau" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" class="lg:rounded-xl ring ring-blue-300"></iframe>
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
          "Got a question about Gabba Doggy Daycare? Get in touch today. Find our location and contact info here.",
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