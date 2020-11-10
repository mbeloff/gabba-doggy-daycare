<template>
  <div id="app">
    
    <div class="nav-wrapper fixed w-full" style="z-index: 100">
      <Nav />
    </div>
    <div class="content-wrapper pt-19" style="margin-top: 68px">
      <router-view />
      <modal
      name="contact-modal"
      height="auto"
      :classes="['h-auto', 'bg-transparent']"
      :scrollable="true"
      :adaptive="true"
      :clickToClose="false"
      :focusTrap="true"
    >
      <modal-inner>
        <template v-slot:title>Register Your Interest</template>
        <template v-slot:body><RegisterInterest></RegisterInterest></template>        
      </modal-inner>
    </modal>
    <modal name="login-modal"
      height="auto"
      :classes="['h-auto', 'bg-transparent']"
      :scrollable="true"
      :adaptive="true"
      :clickToClose="false"
      :focusTrap="true">
      <modal-inner>
        <template v-slot:title>Login</template>
        <template v-slot:body><Login></Login></template>
      </modal-inner>
    </modal>
    </div>
    <div class="footer-wrapper">
      <Footer></Footer>
    </div>
    
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import ModalInner from './components/ModalInner.vue'
import RegisterInterest from '@/components/RegisterInterest.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'App',
  components: {
    Nav, Footer, ModalInner, RegisterInterest, Login
  },
  metaInfo: {
    title: 'Gabba Doggy Day Care',
    titleTemplate: 'Gabba Doggy Day Care | %s',
    meta: [
      {
        name: 'description',
        content:
          "Your best friends' new favourite place. Don't leave your dogs home alone, bring them to Gabba Doggy Day Care for a great day out.",
        vmid: 'description'
      }
    ]
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  color: #353640;
  scroll-behavior: smooth;
}

#app {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: calc(100vh - 78px);
}

.vm--modal {
  height: auto!important;
  background-color: transparent!important
}
</style>