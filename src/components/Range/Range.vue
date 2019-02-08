<template>
  <div class="range">
    <label :for="label" class="range-label">{{ label }}</label>
    <span class="range-value">{{ value + unit }}</span>
    <input
      :id="label"
      :max="max"
      :style="{ 'background-size': width + ' 100%' }"
      :value="value"
      @input="onChg"
      type="range"
    />
  </div>
</template>


<script>
import './Range.scss'
import * as types from '../../types'
import { mapGetters } from 'vuex'

export default ({
  name: 'Range',
  data() {
    return {
      unit: this.max === 100 ? '%' : '°'
    }
  },
  props: {
    label: String,
    max: Number
  },
  computed: {
    ...mapGetters({
      getValue: types.GET_VALUE
    }),
    value() {
      return this.getValue(this.$parent.category, this.label);
    },
    width() {
      return this.value * 100 / this.max + '%'
    }
  },
  methods: {
    onChg(e) {
      this.$store.dispatch(types.HANDLE_HSL, {
        category: this.$parent.category,
        type: this.label,
        value: e.target.value
      })
    }
  }
})
</script>
