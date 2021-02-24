<template>
  <div class="section tile">
    <div class="container py-32  px-2 mx-auto text-center">
      <Title>
        <template v-slot:small>Your best friend's new favourite place</template>
        <template v-slot:big>Gabba Doggy Daycare</template>
      </Title>
      <div class="flex flex-wrap text-left">
        <p class="lg:px-40 mb-10 text-lg">Treat your dog to a fun day of play and socialising with new friends at Gabba Doggy Daycare. Off leash day care with multiple large play areas, a puppy creche and friendly staff to provide all the care and attention your dogs need while you're at work.</p>
        <template>
          <div v-for="(card, i) in cards" :key="i" class="flex-grow p-3 w-1/1 sm:flex-grow-0 sm:w-1/2 md:w-1/3 card-container order-1" :class="{ 'md:order-1 order-last' : card.type}">
            <div v-if="card.type !== 'image'" class="h-full px-4 py-8 bg-white rounded-lg shadow-sm card text-center" >
              <span class="fa-stack fa-2x">
                <i class="text-blue-100 fas fa-circle fa-stack-2x"></i>
                <span class="fa-stack-1x text-blue-500" :class="card.icon"></span>
              </span>
              <p class="my-3 font-bold text-blue-700">{{card.heading}}</p>
              <p class="text-gray-700 text-left">{{card.desc}}</p>
            </div>
            <div v-else class="h-full img-card bg-white rounded-lg shadow-lg card bg-cover bg-top" :style="{backgroundImage: card.img}">
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
            desc: "Everyone plays differently. We have play areas with dogs matched by size and energy level, including a separate relaxed area for the old-timers :)"
          },
          {
            icon: "fas fa-paw",
            heading: "Socialise",
            desc: "Meet new human and fur-friends in a safe and supervised environment. We do our best to make sure everyone gets along at Gabba Doggy Daycare."
          },
          {
            icon: "fas fa-dog-leashed",
            heading: "Exercise",
            desc: "Your pets get plenty of exercise with heaps of room to run around, ramps and obstacles, ball pits and more."
          },
          // {
          //   icon: "fas fa-taxi",
          //   heading: "Pet Taxi",
          //   desc: "Save yourself a bit of rushing around. Our pet taxi is available for local pickups and dropoffs. Get in touch to check availability."
          // },
          // {
          //   icon: "fas fa-user-unlock",
          //   type: 'image',
          //   img: "url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fit,w_500/f_auto,q_auto/v1607553600/gddc/photos/03.jpg)"
          // },
          // {
          //   icon: "fa-custom puppy",
          //   heading: "Puppy Crèche",
          //   desc: "Have a new puppy and don't want to leave them home alone to fret? Bring them along to our creche for non-stop tender, loving care."
          // }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .puppy {
    background-image: url(../assets/img/puppy.svg);
  }

  .fa-custom {
    background-size: 70% 70%;
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