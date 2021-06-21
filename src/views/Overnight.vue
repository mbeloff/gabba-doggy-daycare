<template>
  <div class="h-full">
    <div class="tile" id="about">
      <div class="container grid grid-cols-1 gap-x-20 gap-y-10 px-2 py-20 mx-auto md:grid-cols-2 max-w-screen-lg">
        <div class="col y-5">
          <title-block>
            <template #small>Boarding Information</template>
            <template #big>Overnight Stays</template>
          </title-block>
          <p class="mb-4">Subject to availability, overnight stays may be available to Gabba Doggy Daycare guests. To enquire about overnight care for your dog, please <link-email class="link-pink">email us</link-email>.
          </p>
          <p class="mb-4">All overnight stays are charged $70/night in addition to the regular cost of daycare for each day (casual rate or daycare packages may be used).</p>
          <p class="font-bold mb-2">Overnight Stay Pricing</p>
          <div class="grid grid-cols-1 gap-x-10 gap-y-1 text-sm">
            <div class="flex bg-white rounded-lg relative ring-pink-200">
              <div class="flex-grow px-2"></div>
              <div class="px-2 relative"><span class="text-pink-500">$70/night</span>
              </div>
            </div>
          </div>
          <p class="mb-4 mt-3 text-left">plus daycare cost</p>
          <div class="grid grid-cols-1 gap-x-10 gap-y-1 text-sm">

            <div class="flex bg-white rounded-lg relative ring-pink-200">
              <div class="flex-grow px-2">Casual Rate</div>
              <div class="px-2 relative"><span class="text-pink-500">$50/day</span>
              </div>
            </div>
            <div class="flex bg-white rounded-lg relative ring-pink-200">
              <div class="flex-grow px-2">10 day pack - <span class="text-pink-500">valid for 3 months</span></div>
              <div class="px-2 relative"><span class="text-pink-500">$400</span>
              </div>
            </div>
            <div class="flex bg-white rounded-lg relative ring-pink-200">
              <div class="flex-grow px-2">Unlimited - <span class="text-pink-500">(up to 5 days per week)</span></div>
              <div class="px-2 relative"><span class="text-pink-500">$150/week</span>
              </div>
            </div>

        </div>
        </div>
        <div class="bg-cover rounded-xl col overnight-bg shadow-xl aspect-w-4 aspect-h-5">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.overnight-bg {
    background-position: 50% 30%;
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_550,h_575/q_auto,f_auto/v1/gddc/sleepypup.jpg);

    @media only screen and (max-width: 767px) {
      background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400,h_700/q_auto,f_auto/v1/gddc/sleepypup.jpg);
    }
  }
</style>

https://res.cloudinary.com/dg5ybbkbh/image/upload/v1609809733/gddc/sleepypup.jpg