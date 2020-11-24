<template>
  <div class="section">
    <div class="container px-3 py-20 mx-auto">
      <div class="w-full mx-auto">
        <Title>
          <template v-slot:small>Vaccinations</template>
          <template v-slot:big>What do I need to know?</template>
        </Title>
        <div class="content">
          <p class="mb-4">Vaccinations are important to protect your dog and stop the spread of contagious illnesses and diseases. This is especially important in a doggy daycare and other spaces where many dogs are interacting.</p>
          <p class="mb-4">As we love to see all our guests happy, safe and healthy, we require everyone to be up to date with their vaccinations before they can book in for daycare.</p>
          <p class="mb-4">We ask that dogs are protected against the following:</p>
          <ul class="mb-4 ml-4 font-bold text-left list-none list-inside">
            <ListItem>Distemper</ListItem>
            <ListItem>Hepatitus</ListItem>
            <ListItem>Parvovirus</ListItem>
            <ListItem>Bordetella and Parainfluenza (Kennel/Canine Cough)</ListItem>
          </ul>
          <p class="mb-4">All these are covered by a <em>C5</em> Vaccination, or a combination of <em>C3</em> and <em>KC</em> vaccination. We recommend speaking with your regular vet if you're unsure whether your dog's vaccinations are up-to-date, as we'll need to know before you can schedule daycare with us (and again as your dog requires his/her yearly booster to stay protected).</p>
          <div class="py-5 section">
            <h2 class="text-2xl font-bold text-blue-900">Typical Puppy Vaccination Schedule*</h2>
          <p class="mb-3 font-bold text-blue-500">*may vary depending on vaccine brands used</p>
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
          

          
          <p >If you have any questions about our vaccination policy, just send a quick email to <Email class="break-all">woof@gabbadoggydaycare.com</Email> and we'll get back to you.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
metaInfo: {
    title: 'Vaccination Policy',
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