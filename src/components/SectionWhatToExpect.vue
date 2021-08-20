<template>
  <div class="container mx-auto max-w-screen-lg py-20 px-2">
    <title-block>
      <template #small>New to Doggy Daycare?</template>
      <template #big>Here's what to Expect</template>
    </title-block>
    <div class="text-sm mb-3">
      <h2 class="font-bold text-xl mb-3 text-purple-600">Before Daycare</h2>
      <ul class="list-outside ml-4 list-disc">
        <li>
          GDDC requires all pawrents to create a PetExec account with us. This will allow you to make bookings and more online. <router-link class="link-pink" :to="{name: 'Sign-up', params: {region: getRegion()}}">Click here to make an account.</router-link>
        </li>
        <li>
          Before your pup starts with us, we require a valid vaccination certificate. Please upload this to your PetExec account.
        </li>
        <li v-if="getRegion() == 'brisbane'">
          We have a Pet Taxi service available for local pickup and drop-off. Please confirm availability and book in advance via 'Scheduled Services' in your account.
        </li>
        <li>
          If your pup usually eats lunch and you would like us to feed them, we charge a $5 feeding fee. Please provide your dog's usual food, labeled with their name on it and pay at drop off.
        </li>
        <li>
          Let us know at drop off if your pup is allergic to any foods as we may give treats during enrichment time.
        </li>
        <li>
          If you have any special requests for the day please let us know and our staff will do our best to accommodate.
        </li>
        <li>
          If your dog is sick, please refrain from booking them into daycare until they're in good health and have vet clearance to attend.
        </li>
      </ul>

    </div>
    <div class="text-sm mb-3">
      <h2 class="font-bold text-xl mb-3">During Daycare</h2>
      <ul class="list-inside list-none">
        <li>
          <span class="font-bold">Socialisation -</span> Your dog will have a great chance to socialise, mingle and play with other dogs! We separate dogs based on their size and temperament and do our best to ensure dogs are with others that they will have the most extensive opportunity to socialise with.
        </li>
        <li>
          <span class="font-bold">Confidence -</span> During the day at daycare, your pup will have the chance to play on our agility course, enjoy different sensory experiences such as licking ice, playing in our sand pits, running on grass. We provide an array of different activities for our dog visitors on different days to keep them entertained, and to help build their confidence. Surrounding themselves with other dogs also ensures that they learn certain cues that humans are incapable of teaching dogs.
        </li>
        <li>
          <span class="font-bold">Exercise -</span> Daycare gives your dog the best opportunity to expend energy! At GDDC our guests have plenty of space to run around, play, and enjoy being a dog! If you live in an apartment, have a highly energetic pooch, or lack the ability to give your pup adequate exercise then daycare is a terrific option for you and your dog.
        </li>
        <li>
          <span class="font-bold">Feeding Time -</span> If you've opted to bring your dog's lunch for the day ($5 fee incurred), we will give them their own space and supervision while they eat. If they don't eat any of their food, we'll let you know at pickup (and return their food where possible), so that you can modify their feeding at home if needed.
        </li>
        <li>
          <span class="font-bold">Photos/Videos -</span> We do our best to keep you updated through the day! Our main focus however, is on giving our pups the best possible experience. To keep updated through the day, head to our <a target="_blank" rel="noopener" href="https://www.instagram.com/gabbadoggydaycare/" aria-label="Find us on Instagram" title="Find us on Instagram" class="link-pink">Instagram</a>, where we post all the fun we have throughout the day.
        </li>


      </ul>

    </div>
    <div class="text-sm mb-3">
      <h2 class="font-bold text-xl mb-3">After Daycare</h2>
      <ul class="list-inside list-none">
        <li>
          <span class="font-bold">Boo boos/scratches -</span> We do our absolute best to monitor all dogs throughout the day however as dogs are animals, things can happen quickly. If we notice any bite, cut or scratch on your dog we will inform you at pickup or straight away if necessary, however, while we do provide the utmost care and attention to our doggy guests, accidents will sometimes happen and not everything can be identified.
        </li>        
        <li>
          <span class="font-bold">Hungry or Tired -</span> As your dog is likely to be much more active at daycare than at home, you may find that they need a bit more food than usual. Though we do have nap time during the day, not all dogs will rest. You may wish to let your dog take it easy and have a big snooze after their day of fun.
        </li>
        <li>
          <span class="font-bold">Illness and Injury -</span> We have extremely strict hygiene standards and do our utmost to ensure all dogs remain healthy and happy,
          and we will isolate dogs and inform pawrents immediately if any pup shows any sign of illness. If however, your pup returns ill from
          daycare, please let us know ASAP. If your dog has a serious injury or shows signs of illness during their time at GDDC we may, at our discretion, take them to a
          vet, however GDDC does not accept responsibility for any vet bills and as per our daycare agreement you will be liable for any costs involved.
        </li>
        <li>
          <span class="font-bold">Picking Up -</span> Please note that we close at {{ this.closeTime }}. We kindly ask that you aim to arrive a bit earlier than this if possible, to account for 
any delays (e.g. traffic) and prevent a rush at closing time. If you are running late, please let us know straight away.
        </li>
      </ul>
    </div>
    <router-link class="btn-blue inline-block my-5" :to="{ name: 'Sign-up', params: {region: getRegion()} }">Sign me up!</router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      closeTime() {
        return this.$store.state[this.getRegion()].contact.closeTime
      }
    }
  }
</script>

<style>

</style>