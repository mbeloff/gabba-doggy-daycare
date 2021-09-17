<template>
  <div class="mx-auto shadow rounded-lg bg-white border">
    <h2 class="font-bold text-blue-800 text-2xl ml-3 my-4">
      {{ faqhead }}
    </h2>
    <dl class="accordion box" role="presentation">
      <Faqitem
        v-for="item in set1"
        :multiple="multiple"
        :item="item"
        :groupId="groupId"
        :key="item.id"
      >
      </Faqitem>
    </dl>
  </div>
</template>

<script>
import Faqitem from '@/components/Faqitem.vue'
export default {
  components: {
    Faqitem
  },
  props: {
    content: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    },
    faqhead: {
      type: String
    }
  },
  methods: {
    changeContent(set) {
      this.selectedCategory = set
    },
  },
  data() {
    return {
      groupId: null,
      selectedCategory: this.content,
      set1: [
        {
          id: 1,
          active: true,
          title: 'How do I make a day care booking?',
          details: `
            <p class="mb-2">Simply login to your account and click 'schedule daycare' and select your date and time. You can view 'My Calendar' from the dashboard to see all your existing bookings.</p>
            <p>Please note that you will be unable to schedule a daycare until your dog's vaccination certificate has been uploaded and approved by GDDC. We try to do this as promptly as possible, please let us know if you've uploaded and are still unable to make a booking.</p>
           `
        },
        {
          id: 2,
          active: false,
          title:
            'How do I use my free trial?',
          details: `
            <p>As long as your dog is over 6 months, desexed and vaccinated, you will be eligible for the free trial. As soon as we've verified your account and vaccinations, a trial package will be added to your account. There's nothing more you have to do, just login and schedule day care.</p>       
          `
        },
        {
          id: 3,
          active: false,
          title: 'How do I pay for Daycare?',
          details: `
            <p class="mb-2">In order to make pickup/dropoff quick and easy, we ask that everyone pre-pay online by logging in and clicking 'Purchase a Package'. Here, you can pay for individual half- or full-days or buy multi-day packages. If you've forgotten to pay online, we accept credit card payments in store, or you can login and click 'Make a Payment' to fix up any outstanding balances.</p>
            <p class="mb-2">If you would like to attend daycare regularly, shoot us an email to set up easy recurring weekly payments for discounted rates on day care.
            </p>
            <p>A list of our prices and payment option are available on <a class="link-pink" href="/daycare">our Daycare page</a></p>
          `
        },
        {
          id: 4,
          active: false,
          title: 'I can\'t find my dogs\' vaccination certificate(s)',
          details: `
            <p>Vaccination certificates can usually be obtained via email from your vet on request. Once received, upload it to your account, or forward it on to us via email.
          `
        },
        {
          id: 5,
          active: false,
          title: 'Are there any specials or discounts?',
          details: `
            <p class="mb-2">Absolutely. Apart from our 2 day free trial, we also offer others ways to save money on day care:</p>
            <p class="mb-2">Save 20% with our 10-day packages, available to be purchased online through your GDDC account.</p>
            <p class="mb-2">Save up to 40% by setting up a recurring weekly payment. We have billing options for 1 - 5 days per week.</p>
            <p class="mb-2">See <a class="link-pink" href="/daycare">our daycare page</a> for a full price list and payment options.</p>
          `
        }
      ]
    }
  },
  mounted() {
    this.groupId = this.$el.id
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

  div:not(:last-child) {
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  }

  div:last-child .accordion-item-details {
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
  padding: 0.75rem .5rem;
}

.accordion-item-details-inner
{
  padding: 2rem 1rem;
}

.accordion-item-title {
  position: relative;

  h4 {
    margin-bottom: 0;
  }
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
    background: #0EA5E9;
    color: white;
  }
  .fa-stack-1x {
    color: #0EA5E9;
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
