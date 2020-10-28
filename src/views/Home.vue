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

</style>