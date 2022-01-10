<template>
  <div
    :id="groupId + '-' + id"
    class="accordion-item"
    :class="{ 'is-active': item.active }"
  >
    <dt class="accordion-item-title">
      <button tabindex="0" role="button" @click="toggle" class="accordion-item-trigger pr-1">
        <div class="flex items-center">
          <h4 class="accordion-item-title-text font-bold py-2 px-2">
            {{ item.title }}
          </h4>
          <span class="fa-stack ml-auto">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i
              class="accordion-icon fas fa-chevron-right fa-stack-1x fa-inverse "
            ></i>
          </span>
        </div>
      </button>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <dd v-if="item.active" class="accordion-item-details text-sm rounded-b-lg">
        <div v-html="item.details" class="accordion-item-details-inner p-6"></div>
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['item', 'multiple', 'groupId', 'id'],
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach(item => {
          if (
            item.$el.id === event.currentTarget.parentElement.parentElement.id
          )
            item.item.active = !item.item.active
          else item.item.active = false
        })
      }
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },

    endTransition(el) {
      el.style.height = ''
    }
  }
}
</script>

<style lang="scss">
.accordion-item:first-of-type {
  button {
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
  }
}

</style>
