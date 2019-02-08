import Color from 'color'
import * as types from '../types'

export default {
  [types.GET_BACKGROUND]: state => state.background,
  [types.GET_FOREGROUND]: state => state.foreground,
  [types.GET_CONTRAST]: state => state.contrast,
  [types.GET_BRIGHTNESS]: state => state.brightness,
  [types.GET_DIFFERENCE]: state => state.difference,
  [types.GET_SCORE]: state => state.score,
  [types.GET_LARGE]: state => state.large,
  [types.GET_BACKGROUND_HEX]: (state, getters) => {
    return Color.hsl(
      [
        getters[types.GET_BACKGROUND].hue,
        getters[types.GET_BACKGROUND].saturation,
        getters[types.GET_BACKGROUND].lightness
      ]
    ).hex()
  },
  [types.GET_FOREGROUND_HEX]: (state, getters) => {
    return Color.hsl(
      [
        getters[types.GET_FOREGROUND].hue,
        getters[types.GET_FOREGROUND].saturation,
        getters[types.GET_FOREGROUND].lightness
      ]
    ).hex()
  },
  [types.GET_STAT]: state => type => state[type],
  [types.GET_COLOR]: (state, getters) => category => {
    return category === types.CATEGORY_FOREGROUND
      ? getters[types.GET_FOREGROUND_HEX]
      : getters[types.GET_BACKGROUND_HEX]
  },
  [types.GET_VALUE]: state => (category, label) => {
    return state[category][label];
  }
}
