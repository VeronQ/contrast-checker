<template>
  <aside class="control">
    <div class="box">
      <label :for="category" class="box-title">{{ category }}</label>
      <input
        :id="category"
        :value="colorHex"
        @keyup.enter="onChg"
        class="box-hex"
        maxlength="7"
        spellcheck="false"
        type="text"
      />
      <v-range label="hue" :max="360"></v-range>
      <v-range label="saturation" :max="100"></v-range>
      <v-range label="lightness" :max="100"></v-range>
    </div>
  </aside>
</template>


<script>
import './Control.scss'
import Range from '../Range/Range'
import * as types from '../../types'

export default ({
  name: 'Control',
  components: {
    'v-range': Range
  },
  props: {
    category: String
  },
  computed: {
    colorHex() {
      return this.$store.getters[types.GET_COLOR](this.category)
    }
  },
  methods: {
    onChg(e) {
      this.$store.dispatch(types.HANDLE_HEX, {
        category: this.category,
        value: e.target.value
      })
    }
  }
})
</script>
