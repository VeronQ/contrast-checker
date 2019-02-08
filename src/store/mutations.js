import * as types from '../types'

export default {
  [types.SET_HSL] (state, {category, type, value}) {
    state[category][type] = parseInt(value)
  },
  [types.SET_CONTRAST] (state, number) {
    state.contrast = Number(Math.floor(number + 'e1') + 'e-1')
  },
  [types.SET_BRIGHTNESS] (state, [bY, fY]) {
    state.brightness = Math.abs(Math.floor(bY - fY))
  },
  [types.SET_DIFFERENCE] (state, number) {
    state.difference = Math.floor(number)
  },
  [types.SET_SCORE] (state, string) {
    state.score = string
  },
  [types.SET_LARGE] (state, bool) {
    state.large = bool
  }
}
