<template>
  <div class="tile">
    <div class="container py-32 px-2 max-w-screen-lg mx-auto text-center">
      <title-block>
        <template #small>Your best friend's new favourite place</template>
        <template #big><h1>Gabba Doggy Daycare</h1></template>
      </title-block>
      <div class="flex flex-wrap text-left justify-around">
        <p class="px-5 mb-10 md:text-lg">Treat your dog to a fun day of play and socialising with new friends at Gabba Doggy Daycare. GDDC is a massive off-leash day care with indoor and outdoor play areas, a puppy creche and friendly staff to provide all the care and attention your dogs need while you're at work.</p>
        <div v-for="(card, i) in cards" :key="i" class="flex-grow py-2 sm:px-2 md:p-3 w-1/1 sm:flex-grow-0 sm:w-1/2 md:w-1/3 card-container order-1" :class="{ 'md:order-1 order-last' : card.type}">
          <div v-if="card.type !== 'image'" class="h-full py-8 bg-white rounded-lg shadow-md card text-center">
            <span class="fa-stack fa-2x">
              <i class="text-blue-100 fas fa-circle fa-stack-2x"></i>
              <span class="fa-stack-1x z-10" :class="card.icon"></span>
            </span>
            <p class="my-3 font-bold text-blue-700 py-2">{{card.heading}}</p>
            <p class="text-gray-700 text-left px-4">{{card.desc}}</p>
          </div>
          <div v-else class="h-full img-card bg-white rounded-lg shadow-lg card bg-cover bg-top" :style="{backgroundImage: card.img}">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cards: [{
            icon: "fa-custom play",
            heading: "Play",
            desc: "Everyone plays differently. We have play areas with dogs matched by size and energy level, including a separate relaxed areas for puppies and old-timers :)"
          },
          {
            icon: "fa-custom friends",
            heading: "Socialise",
            desc: "Make new human and fur-friends in a safe and supervised environment. We love dogs, and we do our best to make sure everyone gets along at Gabba Doggy Daycare."
          },
          {
            icon: "fa-custom exercise",
            heading: "Exercise",
            desc: "Your pets get plenty of exercise with heaps of room to run around in sand and grass, over ramps and obstacles, ball pits and more."
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .puppy {
    background-image: url(../assets/img/puppy.svg);
    width: 100%;
    height: 100%;
  }

  .friends {
    background-image: url(../assets/img/icon-friends.svg);
    width: 90%;
    height: 90%;
  }

  .play {
    background-image: url(../assets/img/icon-play.svg);
    width: 105%;
    height: 105%;
    bottom: 1.5rem;
    transform: rotate(3deg)
  }

  .exercise {
    background-image: url(../assets/img/icon-exercise.svg);
    width: 85%;
    height: 85%;
    bottom: .25rem;
  }


  .fa-custom {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .card {
    min-height: 200px;
  }

  .img-card {
    min-height: 300px;
  }
</style>