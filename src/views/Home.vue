<template>
  <div>
    <HelloWorld msg="A little holiday for your pupper"></HelloWorld>
    <div class="section">
      <div class="container mx-auto  py-20 text-center">
        <h1 class="font-bold text-blue-600 mb-10">Your best friend's new favourite place</h1>
        <h2 class="font-bold text-5xl mb-20">Gabba Doggy Daycare</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
          <div class="p-6 bg-white rounded-lg shadow-xl">
            <span class="fa-stack fa-3x">
              <i class="fas fa-circle fa-stack-2x text-blue-600"></i>
              <i class="fas fa-tennis-ball fa-stack-1x fa-inverse"></i>
            </span>
            <p class="font-bold my-3">Play</p>
            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis hic quia odio autem accusamus repellat?</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-xl">
            <span class="fa-stack fa-3x">
              <i class="fas fa-circle fa-stack-2x text-blue-600"></i>
              <i class="fas fa-paw fa-stack-1x fa-inverse"></i>
            </span>
            <p class="font-bold my-3">Socialise</p>
            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis hic quia odio autem accusamus repellat?</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-xl">
            <span class="fa-stack fa-3x">
              <i class="fas fa-circle fa-stack-2x text-blue-600"></i>
              <i class="fas fa-dog-leashed fa-stack-1x fa-inverse"></i>
            </span>
            <p class="font-bold my-3">Walks</p>
            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis hic quia odio autem accusamus repellat?</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section bg-gray-200">
      <div class="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div class="col y-5 md:my-20">
          <h2 class="font-bold leading-tight text-5xl mb-10">Something, something</h2>
        <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In inventore, aperiam quo enim, non delectus architecto soluta modi facere praesentium debitis? Veniam asperiores est quod.</p>
        <ul class="list-none list-inside font-bold text-sm">
          <li class="flex mb-2"><div class="grid place-items-center"><i class="fas fa-paw text-blue-600 mr-3"></i></div>  <p class="">Sit amet consectetur adipisicing elit. Provident.</p></li>
          <li class="flex mb-2"><div class="grid place-items-center"><i class="fas fa-paw text-blue-600 mr-3"></i></div>  <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, quos! Provident.</p></li>
          <li class="flex mb-2"><div class="grid place-items-center"><i class="fas fa-paw text-blue-600 mr-3"></i></div>  <p class="">Labore ullam sunt tempora porro perspiciatis beatae corporis odit, consequuntur non. Neque?</p></li>
          <li class="flex mb-2"><div class="grid place-items-center"><i class="fas fa-paw text-blue-600 mr-3"></i></div>  <p class="">Amet, consectetur adipisicing elit. Optio, explicabo..</p></li>
        </ul>
        </div>
        <div class="col sad-pup bg-cover bg-bottom">
          
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue"
  export default {
    components: {
      HelloWorld
    }
  }
</script>

<style>
.sad-pup {
  background-image: url(../assets/img/sadpup.jpg);
  min-height: 300px;
  background-position: 50% 80%;
}
</style>