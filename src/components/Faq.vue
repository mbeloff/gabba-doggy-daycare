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
          title: 'How do I make a booking for Daycare?',
          details: `
            <p class="mb-2">First log into your PetExec account. Click 'request a daycare' and select your date and time. Keep an eye on your email as, once we have checked availability for the day, we will get back to you to confirm your booking.</p>
            <p>Please ensure you have completely filled all required information in your PetExec account and uploaded a copy of you vaccination certificates before requested a booking.</p>
           `
        },
        {
          id: 2,
          active: false,
          title:
            'How do I use my free trial?',
          details: `
            <p>As long as your dog is over 6 months, desexed and vaccinated, you will be eligible for the free trial. Just login and request a booking, we will add the trial package to your account when you arrive. After this you can use your remaining trial day any time in the next 7 days.</p>        
          `
        },
        {
          id: 3,
          active: false,
          title: 'How do I pay for Daycare?',
          details: `
            <p class="mb-2">In order to make the drop-off process quick and easy in the morning, we ask that everyone pre-pay their daycare session online by logging into your account and clicking 'Purchase a Package'. Here, you can pay for individual half- or full-days or buy multi-day packages.</p>
            <p class="mb-2">If you would like to attend daycare regularly, get in touch to set up a recurring weekly payment at a discounted rate.
            </p>
            <p>A list of our prices and payment option are available on <a class="link-pink" href="https://www.gabbadoggydaycare.com/daycare">our Daycare page</a></p>
          `
        },
        {
          id: 4,
          active: false,
          title: 'I can\'t find my dogs\' vaccination certificate(s)',
          details: `
            <p>Vaccination certificates can usually be obtained via email from your vet on request. Once received, upload it to your account, or forward it on to us at <a href="mailto:woof@gabbadoggydaycare.com" class="link-pink">woof@gabbadoggydaycare.com</a></p>
          `
        },
        {
          id: 5,
          active: false,
          title: 'Are there any specials or discounts?',
          details: `
            <p class="mb-2">Discounted packages are available to be purchased online through your GDDC PetExec account. If you plan on coming every week, we also have recurring weekly payments for 1 or more days per week.</p>
            <p>Recurring payments are flexible and can be changed, paused or cancelled at any time.</p>

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
$red: #cc4b37;

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
  font-weight: bold;
  max-width: calc(100% - 40px);
}

.accordion-item-trigger,
.accordion-item-details-inner {
  padding: 0.75rem 1rem;
}

.accordion-item-title {
  position: relative;

  h4 {
    font-size: 1.1rem;
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
