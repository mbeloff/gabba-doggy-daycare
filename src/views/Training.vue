<template>
  <div>
    <div class="tile">
      <div class="container grid grid-cols-1 gap-x-20 px-4 md:py-20 py-10 mx-auto md:grid-cols-2 lg:px-20 xl:px-40">
        <div class="col my-5 md:mt-10">
          <title-block>
            <template #small>Older Puppies and Adults Dogs</template>
            <template #big>Private Training Sessions</template>
          </title-block>
          <p class="mb-3">Private training sessions are available at GDDC or at your home. Get personalised training tailored towards the needs of you and your dog. Using force-free, reward-based training methods, we encourage positive behaviours and help you build a great relationship with your dog.</p>
          <p class="mb-3">Get in touch to discuss your dog's training goals.
          </p>          
        </div>
        <div>
          <div class="rounded-xl col bg-white shadow-xl p-3 my-5 md:mt-10 pattern">
            <div class="bg-white h-full w-full py-6 rounded-lg shadow-md px-2 flex flex-col">
              <p class="mb-3 font-bold pl-2"><i class="far fa-graduation-cap mr-2 fa-2x"></i>Training may include:</p>
              <ul class="list-outside ml-2 list-disc flex flex-col space-y-3 text-sm pl-4">
                <li>
                  Recall training and basic commands
                </li>
                <li>
                  Good manners and polite greetings
                </li>
                <li>
                  Loose leash walking and more
                </li>
              </ul>
              <button class="btn-blue text-sm uppercase mt-4">book a training session</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="bg-white">
      <div class="container grid grid-cols-1 gap-x-20 px-4 md:py-20 py-10 mx-auto md:grid-cols-2 lg:px-20 xl:px-40">
        <div class="col my-5 md:mt-10 md:order-2">
          <title-block>
            <template #small>Problem Behaviours</template>
            <template #big>Behaviour Consults</template>
          </title-block>
          <p class="mb-3">Book a behavioural consult to assess and assist with any disruptive behaviours your dog may exhibit. Using force-free training methods, we will work together with dog and owner to help alleviate behavioural concerns for a more calm and stress-free home.</p>
          <p class="mb-3">Let us know about any concerns you are having with your dogs behaviour.</p>
        </div>
        <div>
          <div class="rounded-xl col bg-white shadow-xl p-3 my-5 md:mt-10 pattern">
            <div class="bg-white h-full w-full py-6 rounded-lg shadow-md px-2 flex flex-col">
              <p class="mb-3 font-bold pl-2"><i class="far fa-graduation-cap mr-2 fa-2x"></i>Behaviour consults can assist with:</p>
              <ul class="list-outside ml-2 list-disc flex flex-col space-y-3 text-sm pl-4">
                <li>
                  Anxious, reactive or fearful dogs
                  </li>
                <li>
                  Excessive jumping
                </li>
                <li>
                  Excessive barking
                </li>
                <li>
                  Aggression towards dogs or people
                </li>
                <li>
                  Other disruptive behaviours
                </li>
              </ul>
              <button class="btn-blue text-sm uppercase mt-4">book behavioural consult</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tile">
      <div class="container grid grid-cols-1 gap-x-20 px-4 md:py-20 py-10 mx-auto md:grid-cols-2 lg:px-20 xl:px-40">
        <div class="col my-5 md:mt-10">
          <title-block>
            <template #small>Training</template>
            <template #big>Puppy School</template>
          </title-block>
          <p class="mb-3">Give your pup a headstart in a fun and engaging environment. They will get acquainted with new people and animals and use this crucial stage of development to learn valuable skills that will benefit both pet and parent for years to come.</p>
          <p class="mb-3">In our well-rounded Puppy School program, your pet will get supervised play and learning with other dogs and puppies, group-training, as well as focused, one-on-one time with a trainer to develop essential skills.</p>
          <p class="mb-3">The cost of puppy school is $500 ($100 per week, for 5 weeks). This price includes the puppy school session as well as daycare for the rest of the day.</p>
        </div>
        <div>
          <div class="rounded-xl col bg-white shadow-xl p-3 my-5 md:mt-10 pattern">
            <div class="bg-white h-full w-full py-6 rounded-lg shadow-md px-2 flex flex-col">
              <p class="mb-3 font-bold pl-2"><i class="far fa-graduation-cap mr-2 fa-2x"></i>Puppy school will help your pup with the following skills and behaviours:</p>
              <ul class="list-outside ml-2 list-disc flex flex-col space-y-3 text-sm pl-4">
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
              <button class="btn-blue text-sm uppercase mt-4">book puppy school</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Dog Training',
      meta: [{
        name: 'description',
        content: "Force-free training for a positive relationship between dog and owner.",
        vmid: 'description'
      }]
    },
    computed: {
      phone() {
        return this.$store.state[this.$store.state.global.region].contact.phone
      }
    },
    data() {
      return {}
    }
  }
</script>

<style>

</style>