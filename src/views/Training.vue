<template>
  <div>
    <div class="tile">
      <div class="container grid grid-cols-1 gap-x-20 px-4 md:py-20 py-10 mx-auto md:grid-cols-2 lg:px-20 xl:px-40">
        <div class="col my-5 md:mt-10">
          <Title>
            <template v-slot:small>Training</template>
            <template v-slot:big>Puppy School</template>          
          </Title>
          <p class="mb-3">Give your pup a headstart in a fun and engaging environment. They will get acquainted with new people and animals and use this crucial stage of development to learn valuable skills that will benefit both pet and parent for years to come.</p>
          <p class="mb-3">In our well-rounded Puppy School program, your pet will get supervised play and learning with other dogs and puppies, group-training, as well as focused, one-on-one time with a trainer to develop essential skills.</p>
          <p class="mb-3">The cost of puppy school is $500 ($100 per week, for 5 weeks). This will give your pup one full day each week of combined daycare and puppy school training.</p>
        </div>
        <div class="bg-cover rounded-xl col bg-blue-100 shadow-lg p-4 my-5 md:mt-10 py-10">
          <p class="mb-4 font-bold">Puppy school will help your pup with the following skills and behaviours:</p>
          <ul class="list-outside  ml-2 list-disc flex flex-col space-y-3 text-sm">
            <li>
              Getting habituated with unfamiliar people and animals
            </li>
            <li>
              Handling issues (getting used to touch)
            </li>
            <li>
              Begin to learn basic cues such as sit or stay
            </li>
            <li>
              Getting used to grooming (nail clipping, towel drying, etc)
            </li>            
            <li>
              Puzzles and games to stimulate and improve coordination
            </li>
            <li>
              Settling for rest time
            </li>
            <li>
              Learning good manners (e.g. prevent excessive jumping/biting)
            </li>
          </ul>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Training',
      meta: [{
        name: 'description',
        content: "Puppy school. ",
        vmid: 'description'
      }]
    },
  }
</script>

<style>

</style>