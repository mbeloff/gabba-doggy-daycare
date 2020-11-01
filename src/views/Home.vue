<template>
  <div>
    <Hero></Hero>
    <Cards></Cards>

    <div class="section bg-gray-200">
      <div class="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-20 lg:px-20">
        <div class="col y-5 md:my-20">
          <p class="font-bold text-blue-600 mb-10">Brisbane Dogs Love it Here</p>
          <h2 class="font-bold tracking-tight leading-tight text-5xl mb-10">More than just a day care</h2>
          <p class="mb-10">Gabba Doggy Day Care offers a range of additional services to make each day a little better. For you AND your furry pal.</p>
          <ul class="list-none list-inside font-bold">
            <li class="flex mb-2">
              <i class="fas fa-paw text-blue-600 mr-3 mt-1"></i>
              <p class="">Pet Taxi Service - <span class="font-normal">pickup and dropoff within 5km</span></p>
            </li>
            <li class="flex mb-2">
              <i class="fas fa-paw text-blue-600 mr-3 mt-1"></i>
              <p class="">After Hours Kennels</p>
            </li>
            <li class="flex mb-2">
              <i class="fas fa-paw text-blue-600 mr-3 mt-1"></i>
              <p class="">Daily Walks</p>
            </li>
            <li class="flex mb-2">
              <i class="fas fa-paw text-blue-600 mr-3 mt-1"></i>
              <p class="">Trip to the bay, or along the river</p>
            </li>
            <li class="flex mb-2">
              <i class="fas fa-paw text-blue-600 mr-3 mt-1"></i>
              <p class="">Grooming</p>
            </li>
            <li class="flex mb-2">
              <i class="fas fa-paw text-blue-600 mr-3 mt-1"></i>
              <p class="">Dog Wash</p>
            </li>
          </ul>
        </div>
        <div class="col champ-pup bg-cover bg-bottom rounded-sm">
        </div>
      </div>
    </div>

    <div class="section bg-blue-700 text-blue-100">
      <div class="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-20 lg:px-20">
        <div class="col sad-pup bg-cover bg-bottom rounded-sm">
        </div>
        <div class="col y-5 md:my-20">
          <h2 class="font-bold leading-tight tracking-tight text-5xl mb-10 ">Bored at home?</h2>
          <p class="mb-10 font-light">Does your dog get into mischief while you're at work? Give them a day out to play and meet new friends instead of getting restless at home.</p>
          <div class="grid place-items-center w-full"><i class="fas fa-bone"></i></div>         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Hero from "@/components/Hero.vue"
  import Cards from "@/components/Cards.vue"
  export default {
    components: {
      Hero,
      Cards
    }
  }
</script>

<style>
  .champ-pup {
    background-image: url(../assets/img/champ.jpg);
    min-height: 300px;
    background-position: 50% 80%;
  }

  .sad-pup {
    background-image: url(../assets/img/sadpup.jpg);
    min-height: 300px;
    background-position: 50% 80%;
  }
</style>