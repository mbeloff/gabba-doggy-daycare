<template>
  <div class="section bg-gray-200">
    <div class="container mx-auto  py-20 text-center">
      <Title>
        <template v-slot:small>Your best friend's new favourite place</template>
        <template v-slot:big>Gabba Doggy Day Care</template>
      </Title>

      <div class="flex flex-wrap px-4 justify-center">
        <template>
          <div v-for="(card, i) in cards" :key="i" class="p-3 w-1/1 flex-grow sm:flex-grow-0 sm:w-1/2 md:w-1/3">
          <div class="card bg-white rounded-lg shadow-lg hover:shadow-2xl px-6 h-full py-10">
            <span class="fa-stack fa-3x">
              <i class="fas fa-circle fa-stack-2x text-blue-500"></i>
              <i class="fa-stack-1x fa-inverse" :class="card.icon"></i>
            </span>
            <p class="font-bold my-3">{{card.heading}}</p>
            <p class="text-gray-700">{{card.desc}}</p>
          </div>
            
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cards: [{
            icon: "fas fa-tennis-ball",
            heading: "Play",
            desc: "Hype it up, sit back and watch, or have a snooze. There are toys and friends to play with, or beds if your dog is the quiet type."
          },
          {
            icon: "fas fa-paw",
            heading: "Socialise",
            desc: "Meet new human and fur-friends in a safe and supervised environment. We keep play areas with dogs matched by size and energy level so no-one is out of place."
          },
          {
            icon: "fas fa-dog-leashed",
            heading: "Walks",
            desc: "Take a daily walk through the nearby park, or if you like, doggos can take a group trip to the bay or walk along the river."
          },
          {
            icon: "fas fa-taxi",
            heading: "Pet Taxi",
            desc: "Save yourself a bit of rushing around. Our pet taxi will be available for local pickups and dropoffs."
          },
          {
            icon: "fas fa-user-unlock",
            heading: "After Hours",
            desc: "Working late? We can arrange after hours pickups"
          },
          {
            icon: "fa-custom puppy",
            heading: "Puppy Crèche",
            desc: "Have a new puppy and don't want to leave them home alone to fret? Bring them along to our creche for non-stop tender, loving care."
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
.puppy {
  background-image: url(../assets/img/puppy.svg);  
}

.fa-custom {
background-size: 70% 70%;
  background-repeat: no-repeat;
  background-position: center;
}

.card{
  transition: box-shadow .5s ease;
}
</style>