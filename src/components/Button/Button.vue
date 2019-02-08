<template>
  <component :is="tag" :class="buttonType" ref="button" class="btn">
    <slot></slot>
  </component>
</template>

<script>
import './Button.scss'

export default ({
  name: 'Button',
  props: {
    primary: Boolean,
    tag: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    buttonType() {
      return this.primary ? "btn-primary" : null
    }
  },
  mounted() {
    if (this.$refs.button.target === '_blank') {
      this.$refs.button.rel = 'noopener noreferrer'
    }
  }
})
</script>
