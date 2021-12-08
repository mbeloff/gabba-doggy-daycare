<template>
  <div class="section">
    <div class="container px-3 py-20 mx-auto">
      <div class="w-full mx-auto">
        <title-block>
          <template #small>Vaccinations</template>
          <template #big>What do I need to know?</template>
        </title-block>
        <div class="content">
          <p class="mb-4">Vaccinations are important to protect your dog and stop the spread of contagious illnesses and diseases. This is especially important in a doggy daycare and other spaces where many dogs are interacting. As we love to see all our guests happy, safe and healthy, we require everyone to be up to date with their vaccinations before they can book in for daycare.</p>
          <p class="mb-4">We require all dogs to be protected against the following:</p>
          <ul class="mb-4 ml-4 font-bold text-left list-none list-inside">
            <li class="flex gap-2 mb-2">
              <i class="mt-1 text-sm text-blue-500 fas fa-paw"></i>
              <p class="leading-tight">Distemper</p>
            </li>
            <li class="flex gap-2 mb-2">
              <i class="mt-1 text-sm text-blue-500 fas fa-paw"></i>
              <p class="leading-tight">Hepatitus</p>
            </li>
            <li class="flex gap-2 mb-2">
              <i class="mt-1 text-sm text-blue-500 fas fa-paw"></i>
              <p class="leading-tight">Parvovirus</p>
            </li>
            <li class="flex gap-2 mb-2">
              <i class="mt-1 text-sm text-blue-500 fas fa-paw"></i>
              <p class="leading-tight">Bordetella and Parainfluenza (Kennel/Canine Cough)</p>
            </li>
          </ul>
          <p class="mb-4">All these are usually covered by a <strong>C5 Vaccine, or a combination of C3 and KC vaccine</strong> . We recommend speaking with your vet if you're unsure about your dogs' vaccination status, as we'll need to know before you can schedule daycare with us (and again as your dog requires his/her yearly booster to stay protected).</p>
          <div class="py-5 section">
            <h2 class="text-2xl font-bold text-blue-900">Typical Puppy Vaccination Schedule*</h2>
          <p class="mb-3 font-bold text-blue-500">*may vary depending on vaccine brands used</p>
          <p>In order to be fully protected it's important that puppies complete their full course of vaccinations. We are unable to accept puppies until at least 7 days have past since receiving their final puppy vaccination - the timing of this can vary but is usually at about 14-16 weeks old.</p>
          <table class="w-full pl-2 my-5">
            <tbody class="space-y-5 text-sm">
              <tr class="bg-gray-100">
                <td class="w-1/5 py-3 pl-1">6-8 weeks</td>
                <td class="w-1/5 py-3"><strong>First vaccination</strong></td>
                <td class="w-3/5 py-3">Distemper, hepatitis, and parvovirus</td>
              </tr>
              <tr>
                <td class="w-1/5 py-3 pl-1">10-12 weeks</td>
                <td class="w-1/5 py-3"><strong>Booster vaccination</strong></td>
                <td class="w-3/5 py-3">Distemper, hepatitis, parvovirus, parainfluenza, and bordetella.</td>
              </tr>
              <tr class="bg-gray-100">
                <td class="w-1/5 py-3 pl-1">14-16 weeks</td>
                <td class="w-1/5 py-3"><strong>Final puppy vaccination</strong></td>
                <td class="w-3/5 py-3">Distemper, hepatitis, parvovirus, parainfluenza, and bordetella. Depending on the brand used, puppies may not require parainfluenza and bordetella at this age</td>
              </tr>
              <tr>
                <td class="w-1/5 py-3 pl-1">Every year after</td>
                <td class="w-1/5 py-3"><strong>Annual boosters</strong></td>
                <td class="w-3/5 py-3">Your adult dog will require yearly vaccination boosters for the rest of their life to remain immune from these diseases</td>
              </tr>
            </tbody>
          </table>
          </div>
          

          
          <p >If you have any questions about our vaccination policy, just send a quick email to <link-email class="break-all link-pink">{{email}}</link-email> and we'll get back to you.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      email() {
        return this.$store.state[this.$store.state.region].contact.email
      }
    },
    metaInfo: {
    title: 'Vaccinations',
    meta: [
      {
        name: 'description',
        content:
          "Keeping everyone happy and safe is our #1 priority. Keeping your dogs' vaccinations up-to-date is important to ensuring they stay healthy while making new friends at day care.",
        vmid: 'description'
      }
    ]
  },
  }
</script>

<style>

</style>