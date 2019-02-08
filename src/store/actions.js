import Color from 'color'
import * as types from '../types'
import * as utils from "../utils";

export default {
  [types.HANDLE_HSL] ({ getters, commit }, data) {
    commit(types.SET_HSL, data);

    const bgHEX = getters[types.GET_BACKGROUND_HEX];
    const fgHEX = getters[types.GET_FOREGROUND_HEX];

    const bgRGB = Color(bgHEX).rgb();
    const fgRGB = Color(fgHEX).rgb();

    const contrast = utils.getContrast(fgHEX, bgHEX);
    const brightness = utils.getBrightness(bgRGB, fgRGB);
    const difference = utils.getDifference(fgRGB, bgRGB);
    const score = utils.getScore(contrast);
    const large = utils.getLarge(contrast);

    commit(types.SET_CONTRAST, contrast);
    commit(types.SET_SCORE, score);
    commit(types.SET_LARGE, large);
    commit(types.SET_BRIGHTNESS, brightness);
    commit(types.SET_DIFFERENCE, difference);
  },
  [types.HANDLE_HEX] ({ dispatch } , data) {
    const { category, value } = data;
    const hsl = Color(value).hsl();
    [
      'hue',
      'saturation',
      'lightness'
    ].forEach((type, i) => {
      dispatch(types.HANDLE_HSL, {
        category,
        type,
        value: hsl.color[i]
      })
    });
  }
}
