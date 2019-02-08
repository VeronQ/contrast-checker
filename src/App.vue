<template>
  <div id="app" v-if="currentWidth >= minWidth">
    <v-content :style="{ color, background }"></v-content>
    <div id="sidebar">
      <v-control category="background"></v-control>
      <v-control category="foreground"></v-control>
      <span class="color-swap" title="Swap colors" @click="onSwap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M30.3 32.7V16.3h-4.7v16.3h-7L28 42l9.3-9.3h-7zM14 0L4.7 9.3h7v16.3h4.7V9.3h7L14 0z"></path></svg>
      </span>
    </div>
  </div>
  <v-responsive v-else></v-responsive>
</template>


<script>
import './style/app.scss'
import Responsive from './components/Responsive/Responsive'
import Content from './components/Content/Content'
import Control from './components/Control/Control'
import * as types from './types'
import { mapGetters } from 'vuex'
import { getWidth } from './utils'

export default {
  name: 'app',
  data() {
    return {
      currentWidth: getWidth(),
      minWidth: types.MIN_WIDTH
    }
  },
  components: {
    'v-responsive': Responsive,
    'v-content': Content,
    'v-control': Control
  },
  computed: {
    ...mapGetters({
      color: types.GET_FOREGROUND_HEX,
      background: types.GET_BACKGROUND_HEX
    })
  },
  methods: {
    handleWindowResize() {
      this.currentWidth = getWidth()
    },
    onSwap() {
      const storedValue = {
        bg: this.background,
        fg: this.color
      };
      this.$store.dispatch(types.HANDLE_HEX, {
        category: types.CATEGORY_BACKGROUND,
        value: storedValue.fg
      });
      this.$store.dispatch(types.HANDLE_HEX, {
        category: types.CATEGORY_FOREGROUND,
        value: storedValue.bg
      });
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize)
  }
}
</script>
