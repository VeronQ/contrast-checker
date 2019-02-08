<template>
  <div class="stat">
    <span class="stat-label">{{ label }}</span>
    <div class="stat-value">{{ value }} <span class="stat-max">/ {{ max }}</span></div>
  </div>
</template>


<script>
import './Stat.scss'
import { GET_STAT } from '../../types'

export default ({
  name: 'Stat',
  props: {
    label: String,
    type: String,
    max: Number
  },
  computed: {
    value() {
      return this.$store.getters[GET_STAT](this.type)
    }
  }
})
</script>
