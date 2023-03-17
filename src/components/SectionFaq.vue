<template>
  <div class="mx-auto shadow rounded-lg bg-white border">
    <dl
      class="accordion box"
      role="presentation"
    >
      <Faqitem
        v-for="(item, i) in set1"
        :multiple="multiple"
        :item="item"
        :id="i"
        :groupId="groupId"
        :key="i"
      >
      </Faqitem>
    </dl>
  </div>
</template>

<script>
import Faqitem from '@/components/Faqitem.vue'
export default {
  components: {
    Faqitem,
  },
  props: {
    content: {
      type: String,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    faqhead: {
      type: String,
    },
  },
  methods: {
    changeContent(set) {
      this.selectedCategory = set
    },
  },
  data() {
    return {
      groupId: 'main',
      selectedCategory: this.content,
      set1: [
        {
          active: true,
          title: 'How do I make a day care booking?',
          details: `
            <p class="mb-2">Simply log in to your account and click 'schedule daycare' and select your date and time. You can view 'My Calendar' from your account dashboard to see all your existing bookings.</p>
            
           `,
        },
        {
          active: false,
          title: 'Which vaccinations are required by GDDC?',
          details: `
            <p>We require that all dogs are vaccinated against Distemper, Hepatitis, Parvovirus, Bordetella and Parainfluenza. For more information about vaccination policy, please check out our <a href="/vaccinations" class="link-pink">vaccination page.</a></p>
           `,
        },
        {
          active: false,
          title: 'Help. When I log in it says my vaccinations need updating',
          details: `
            <p>Please note that you will be unable to schedule a day care appointment until your dog's vaccination certificate has been uploaded and approved by us. These need to be checked by us manually - we thank you for your patience if uploading on the weekend, or outside of office hours. Feel free to <a href="mailto:woof@gabbadoggydaycare.com" class="link-pink">email</a> or <a class="link-pink" href="tel:0450927302">call us</a> if you've provided your vaccination certificate and we have not yet updated it.</p>
           `,
        },
        {
          active: false,
          title: 'Is any food provided at daycare?',
          details: `
            <p>Due to varying dietary preferences, restrictions and/or allergies, GDDC does not provide any meals for our guests. If you'd like your dog to have lunch during the day, please provide their usual food, in a sealed and labelled bag or container. We require a $5 feeding fee to provide your dog with their own space and supervision while they eat. You can pre-pay this fee online via a package, or in-store at drop off.</p>
           `,
        },
        {
          active: false,
          title: 'How do I use my free trial?',
          details: `
            <p>As long as your dog is fully vaccinated, you will be eligible for the free trial. As soon as we've verified your vaccination certificate, a trial package will be added to your account. There's nothing more you have to do, just log in and schedule day care.</p>       
          `,
        },
        {
          active: false,
          title: 'How do I pay for Daycare?',
          details: `
            <p class="mb-2">In order to make pickup/dropoff quick and easy, we ask that all daycare is paid online by logging in and clicking 'Purchase a Package'. Here, you can pre-pay for individual half- or full-days or discounted multi-day packages. If you've forgotten, or didn't have time to pay online, we accept credit card payments in-store, or you can log in and click 'Make a Payment' to fix up any outstanding balances online.</p>
            <p class="mb-2">If you would like to attend daycare regularly without needing to worry about buying packages, please send us an <a class="link-pink" href="mailto:woof@gabbadoggydaycare.com">email</a> to set up automatic recurring weekly payments.
            </p>
            <p>A list of our packages and prices are available on <a class="link-pink" href="/daycare">our Daycare page</a></p>
          `,
        },
        {
          active: false,
          title: 'I have a new puppy, when can I bring them to day care?',
          details: `
            <p>We can only accept puppies that are fully vaccinated. Puppies generally get 3 lots of vaccinations, with the final one typically occurring at 14-16 weeks. Please keep in mind that it can take another 7-14 days for vaccinations to become fully effective. If in doubt about your puppy's vaccinations, we recommend speaking to your vet.</p>
          `,
        },
        {
          active: false,
          title: 'Can my dog come to daycare if she is in heat/oestrus?',
          details: `
            <p>No. Please refrain from bringing your dog to daycare if she is in heat. If your dog comes into heat while at daycare, you may be asked to arrange immediate pickup.</p>
          `,
        },
        {
          active: false,
          title: "I can't find my dogs' vaccination certificate(s)",
          details: `
            <p>Vaccination certificates can usually be obtained via email from your vet. Once received, you can upload it to your account, or simply forward it on to us via <a href="mailto:woof@gabbadoggydaycare.com" class="link-pink">email.</a></p>
          `,
        },
        {
          active: false,
          title: 'Are there any specials or discounts?',
          details: `
            <p class="mb-2">Yes. We offer a free trial for new dogs. And if you refer a friend, you'll get another free day. And of course, we offer discounted packages to save on your regular day care visits:</p>
            <p class="mb-2">We have packages for 2 - 5 sessions per week (or more if you have multiple dogs). These can be purchased via your account, in-store, or as an automatic weekly payment. We also have 10-day packages that can be used over 3 months.</p>
            <p class="mb-2">See <a class="link-pink" href="/daycare">our daycare page</a> for a full price list.</p>
          `,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
$browser-context: 16;

@function em($pixels, $context: $browser-context) {
  @return #{$pixels/$context}em;
}

.accordion {
  padding: 0;

  button:not(:last-child) {
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  }

  button:last-child .accordion-item-details {
    border-radius: 5px;
  }

  dd {
    margin-left: 0;
  }
}

.accordion-item-title-text {
  max-width: calc(100% - 40px);
}

.accordion-item-trigger {
  width: 100%;
  text-align: left;
  border: none;
}

.accordion-item-title-text {
  padding-right: 1rem;
}

.accordion-icon {
  transition: transform 0.5s ease;
  transform: rotate(0deg);
  transform-origin: center;
  .is-active & {
    transform: rotate(90deg);
  }
}

.is-active {
  .accordion-item-trigger {
    background: #0ea5e9;
    color: white;
  }
  .fa-stack-1x {
    color: #0ea5e9;
  }
}

.accordion-item-details {
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  margin: 0;
}

.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.5s ease;
}
.accordion-item-enter,
.accordion-item-leave-to {
  height: 0 !important;
}
</style>
