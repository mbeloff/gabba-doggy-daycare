<script>
export default {
  name: `TransitionExpand`,
  functional: true,
  render(createElement, context) {
    const data = {
      props: {
        name: `expand`,
      },
      on: {
        afterEnter(element) {
          // eslint-disable-next-line no-param-reassign
          element.style.height = `auto`;
        },
        enter(element) {
          const { width } = getComputedStyle(element);
          /* eslint-disable no-param-reassign */
          element.style.width = width;
          element.style.position = `absolute`;
          element.style.visibility = `hidden`;
          element.style.height = `auto`;
          /* eslint-enable */
          const { height } = getComputedStyle(element);
          /* eslint-disable no-param-reassign */
          element.style.width = null;
          element.style.position = null;
          element.style.visibility = null;
          element.style.height = 0;
          /* eslint-enable */
          // Force repaint to make sure the
          // animation is triggered correctly.
          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height;
          requestAnimationFrame(() => {
            // eslint-disable-next-line no-param-reassign
            element.style.height = height;
          });
        },
        leave(element) {
          const { height } = getComputedStyle(element);
          // eslint-disable-next-line no-param-reassign
          element.style.height = height;
          // Force repaint to make sure the
          // animation is triggered correctly.
          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height;
          requestAnimationFrame(() => {
            // eslint-disable-next-line no-param-reassign
            element.style.height = 0;
          });
        },
      },
    };
    return createElement(`transition`, data, context.children);
  },
};
</script>

<style scoped lang="scss">
* {
  will-change: height;
  left: 50%;
  transform: translateZ(0) translateX(0) translateY(0rem);
  backface-visibility: hidden;
  perspective: 1000px;
  @media only screen and (min-width: 1024px) {
    transform: translateZ(0) translateX(-50%) translateY(0rem)
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: height 1s ease-in-out, opacity 1s, transform 1s;
  overflow: hidden;
  @media only screen and (min-width: 1024px) {
    transition: height 0.2s ease-in-out, opacity 0.25s, transform 0.25s ease-out;

  }
}

.expand-enter,
.expand-leave-to {
  height: 0;
  @media only screen and (min-width: 1024px) {
     transform: translateZ(0) translateX(-50%) translateY(-1rem)
  }
}
</style>