<template>
  <div class="h-full">
    <div v-if="hasTraining">
      <div class="tile">
        <div class="container grid grid-cols-1 gap-x-20 px-2 md:py-20 py-10 mx-auto md:grid-cols-2 lg:px-20 xl:px-40">
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
            <pattern-border class="my-5 md:mt-10">
              <div class="px-2 py-6 flex flex-col">
              <p class="mb-3 font-bold pl-2"><i class="far fa-graduation-cap mr-2 fa-2x"></i>Training could include:</p>
              <ul class="list-outside ml-2 list-disc flex flex-col space-y-3 text-sm pl-4">
                <li>
                  Recall training
                </li>
                <li>
                  Good manners and polite greetings
                </li>
                <li>
                  Loose leash walking and more
                </li>
              </ul>
              <button class="btn-blue rounded-md text-sm uppercase mt-4 " @click="openForm('Training Session')"><i class="fas fa-hand-pointer transform rotate-90"></i> training sessions</button>
              </div>
            </pattern-border>
          </div>
        </div>
      </div>
      <transition name="grow2">
        <div class="bg-blue-500" v-show="showForm == 'Training Session'">
          <div class="container lg:px-20 xl:px-40 mx-auto">
            <form-training :service="'Training Session'" :msgField="'What are your training goals?'" @close="showForm = null"></form-training>
          </div>
        </div>
      </transition>
      <div class="bg-white">
        <div class="container grid grid-cols-1 gap-x-20 px-2 md:py-20 py-10 mx-auto md:grid-cols-2 lg:px-20 xl:px-40">
          <div class="col my-5 md:mt-10 md:order-2">
            <title-block>
              <template #small>Problem Behaviours</template>
              <template #big>Dog Behaviour Consults</template>
            </title-block>
            <p class="mb-3">Book a behaviour consult to assess and assist with any disruptive behaviours your dog may exhibit. Using force-free training methods, we will work together with dog and owner to help alleviate behavioural concerns for a more calm and stress-free home. We will also give you the knowledge to better understand and manage your dog's behaviour in the long term.</p>
            <p class="mb-3">Let us know about any concerns you are having with your dogs behaviour.</p>
          </div>
          <div>
            <pattern-border class="my-5 md:mt-10">
              <div class="px-2 py-6 flex flex-col">
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
              <button class="btn-blue rounded-md text-sm uppercase mt-4" @click="openForm('Behaviour Consult')"><i class="fas fa-hand-pointer transform rotate-90"></i> behaviour consults</button>
              </div>
            </pattern-border>
          </div>
        </div>
      </div>
      <transition name="grow2">
        <div class="bg-blue-500" v-show="showForm == 'Behaviour Consult'">
          <div class="container lg:px-20 xl:px-40 mx-auto">
            <form-training :service="'Behaviour Consult'" :msgField="'Which behaviours would you like to address?'" @close="showForm = null"></form-training>
          </div>
        </div>
      </transition>
      <div class="tile">
        <div class="container grid grid-cols-1 gap-x-20 px-2 md:py-20 py-10 mx-auto md:grid-cols-2 lg:px-20 xl:px-40">
          <div class="col my-5 md:mt-10">
            <title-block>
              <template #small>Little Ones</template>
              <template #big>Puppy School</template>
            </title-block>
            <p class="mb-3">Give your pup a headstart in a fun and engaging environment. They will get acquainted with new people and animals and learn valuable skills that will benefit both pet and parent for years to come.</p>
            <p class="mb-3">Your pet will get supervised play and learning with other dogs and puppies, group-training, as well as focused, one-on-one time with a trainer to develop essential skills.</p>
            <p class="mb-3">The cost of puppy school is $500. This includes 5 puppy school sessions (one per week) as well as daycare for the rest of each day.</p>
          </div>
          <div>
            <pattern-border class="my-5 md:mt-10">
              <div class="px-2 py-6 flex flex-col">
                <p class="mb-3 font-bold pl-2"><i class="far fa-graduation-cap mr-2 fa-2x"></i>Puppy school will help your pup with the following skills and behaviours:</p>
              <ul class="list-outside ml-2 list-disc flex flex-col space-y-3 text-sm pl-4">
                <li>
                  Getting habituated with unfamiliar people and animals
                </li>
                <li>
                  Begin to learn basic cues such as sit or stay
                </li>
                <li>
                  Cooperative care (getting used to grooming / vet visits)
                </li>
                <li>
                  Settling for rest time
                </li>
                <li>
                  Learning good manners
                </li>
              </ul>
              <button class="btn-blue rounded-md text-sm uppercase mt-4" @click="openForm('Puppy School')"><i class="fas fa-hand-pointer transform rotate-90"></i> puppy school</button>
              </div>              
            </pattern-border>
          </div>
        </div>
      </div>
      <transition name="grow2">
        <div class="bg-blue-500" v-show="showForm == 'Puppy School'">
          <div class="container lg:px-20 xl:px-40 mx-auto">
            <form-training :service="'Puppy School'" @close="showForm = null"></form-training>
          </div>
        </div>
      </transition>
    </div>
    <div v-else class="bg-blue-500 h-full">
      <div class="container px-4 py-20 mx-auto lg:px-20 xl:px-40 text-white">
        <p>sorry, training is not available at this location ({{ this.$route.params.region }}) yet.
        </p>
        <p class="text-sm ">If you're looking for a different location, use the menu at the top of the screen</p>
      </div>
    </div>
  </div>
</template>

<script>
  import FormTraining from '@/components/FormTraining.vue'
  export default {
    methods: {
      openForm(form) {
        if (form !== this.showForm) {
          this.showForm = form;
        } else {
          this.showForm = null
        }
      },
    },
    components: {
      FormTraining
    },
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
        return this.$store.state[this.$store.state.region].contact.phone
      },
      hasTraining() {
        return this.$store.state[this.$route.params.region].hasTraining
      }
    },
    data() {
      return {
        showForm: null
      }
    }
  }
</script>

<style lang="scss">
  .grow2-enter-active,
  .grow2-leave-active {
    transition: max-height 0.5s, opacity 0.5s;
    max-height: 756px;
  }

  .grow2-enter,
  .grow2-leave-to {
    opacity: 0;
    max-height: 0px;
  }
</style>