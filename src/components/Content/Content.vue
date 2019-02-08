<template>
  <main id="content">
    <div class="l-constrained">
      <v-button primary tag="a" target="_blank" href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">WCAG 2.0</v-button>
      <h1 class="page-title">{{ score }} <span v-if="large">(or <b>{{ large }}</b> for large text)</span></h1>
      <h2 class="about-title">Contrast</h2>
      <p class="about-desc">It is the difference in luminance or colour that makes an object (or its representation in an image or display) distinguishable. In visual perception of the real world, contrast is determined by the difference in the color and brightness of the object and other objects within the same field of view <a href="https://en.wikipedia.org/wiki/Contrast_(vision)" target="_blank" rel="noopener noreferrer">[source]</a>.</p>
      <div class="stats">
        <v-stat type="brightness" label="Brightness difference" :max="255"></v-stat>
        <v-stat type="difference" label="Color difference" :max="765"></v-stat>
        <v-stat type="contrast" label="Contrast ratio" :max="21"></v-stat>
      </div>
    </div>
  </main>
</template>


<script>
import './Content.scss'
import Button from '../Button/Button'
import Stat from '../Stat/Stat'
import * as types from '../../types'
import { mapGetters } from 'vuex'

export default ({
  name: 'Main',
  components: {
    'v-button': Button,
    'v-stat': Stat
  },
  computed: {
    ...mapGetters({
      score: types.GET_SCORE,
      large: types.GET_LARGE
    })
  }
})
</script>
