<template>
  <div class="container mx-auto max-w-screen-lg py-20 px-2">
    <title-block>
      <template #small>New to Doggy Daycare?</template>
      <template #big>Here's what to Expect</template>
    </title-block>
    <div class="text-sm mb-3">
      <h2 class="font-bold text-xl mb-3 text-purple-600">Before Daycare</h2>
      <ul class="list-inside list-none flex flex-col gap-3">
        <li>
          <span class="font-bold">Book Online -</span> You can schedule daycare quickly and easily. As long as we have availability your booking will be instantly confirmed :)
        </li>
        <li>
          <span class="font-bold">Buy a Package -</span> To make pickup and dropoff quick and easy for everyone, we ask that daycare is pre-paid online. You can packages for individual days, weekly packs (2 - 5 days), or 10-day packs. If you forget to pay beforehand, we can also accept credit card payments in-store.
        </li>
        <li>
          <span class="font-bold">Food -</span> If your pup usually eats lunch and you would like us to feed them, we charge a $5 feeding fee. Please provide your dog's usual food, labelled with their name on it. You can pre-pay for this online.
        </li>
        <li>
          <span class="font-bold">Medication / Allergies -</span> If your dog requires any medication, please ensure you provide instructions of how and when it should be administered. Also, let us know if your pup has any food allergies as we may give treats during enrichment time - although we keep this minimal.
        </li>
        <li>
          <span class="font-bold">Extra Care -</span> If your dog is recovering from an injury or otherwise might need a bit of extra care and attention, don't hesitate to let us know; our daycare team will be happy to accommodate whenever possible.
        </li>
      </ul>

    </div>
    <div class="text-sm mb-3">
      <h2 class="font-bold text-xl mb-3">During Daycare</h2>
      <ul class="list-inside list-none flex flex-col gap-3">
        <li>
          <span class="font-bold">Socialisation -</span> Your dog will have a great chance to socialise, mingle and play with new dogs and humans! We separate dogs based on their size and temperament and do our best to ensure dogs are with others that they will have the most extensive opportunity to socialise.
        </li>
        <li>
          <span class="font-bold">Exercise -</span> Daycare gives your dog the best opportunity to expend energy! At GDDC our guests have plenty of space to run around, play, and enjoy being a dog! If you live in an apartment, have a highly energetic pooch, or cannot give your pup adequate exercise then daycare is a terrific option for you and your dog.
        </li>
        <li>
          <span class="font-bold">Feeding Time -</span> If you've opted to bring your dog's lunch for the day ($5 fee incurred), we will give them their own space and supervision while they eat. If they don't eat any of their food, we'll let you know at pickup (and return their food where possible), so that you can modify their feeding at home if needed.
        </li>
        <li>
          <span class="font-bold">Photos/Videos -</span> We do our best to post photos and videos each day! Our main focus, however, is on giving your pups the best possible experience at daycare. For daily updates, please keep an eye on our <a target="_blank" rel="noopener" href="https://www.instagram.com/gabbadoggydaycare/" aria-label="Find us on Instagram" title="Find us on Instagram" class="link-pink">Instagram</a>.
        </li>
      </ul>
    </div>
    <div class="text-sm mb-3">
      <h2 class="font-bold text-xl mb-3">After Daycare</h2>
      <ul class="list-inside list-none flex flex-col gap-3">
        <li>
          <span class="font-bold">Picking Up -</span> Please note that we close at  {{ this.closeTime }}. We kindly ask that you aim to pick up by 6 pm to account for any delays (e.g. traffic) and prevent a rush at closing time. If you are running late, please let us know straight away.
        </li>
        <li>
          <span class="font-bold">Boo-boos/scratches -</span> We do our absolute best to monitor all dogs throughout the day and make sure everyone gets along, but dogs can be unpredictable and may occasionally nip, bite, or scratch each other during play. We treat any small injuries on-site where possible and will inform you at pickup, or straight away if necessary. However, while we do provide the utmost care and attention to our doggy guests, sometimes small scrapes or scratches can go unnoticed.
        </li>
        <li>
          <span class="font-bold">Extra Food and Rest -</span> As your dog is likely to be much more active at daycare than at home, you may find that they need a bit more food than usual. Though we do have nap time during the day, not all dogs will rest during this time. You may wish to let your dog take it easy and have a big snooze after their exciting daycare adventure.
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