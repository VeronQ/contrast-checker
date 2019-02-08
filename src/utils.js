import Color from 'color'

export const getWidth = () => {
  let e = window;
  let a = 'inner';

  if ( !('innerWidth' in window) ) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return e[ a+'Width' ];
};

export const getContrast = (fgHEX, bgHEX) => {
  return Color(bgHEX).contrast(Color(fgHEX));
};

export const getDifference = (fgRGB, bgRGB) => {
  return (Math.max(fgRGB.red(), bgRGB.red()) - Math.min(fgRGB.red(), bgRGB.red()))
       + (Math.max(fgRGB.green(), bgRGB.green()) - Math.min(fgRGB.green(), bgRGB.green()))
       + (Math.max(fgRGB.blue(), bgRGB.blue()) - Math.min(fgRGB.blue(), bgRGB.blue()));
};

export const getBrightness = (bgRGB, fgRGB) => {
  const arr = [];

  [bgRGB, fgRGB].forEach(function (el) {
    arr.push(((el.red() * 299) + (el.green() * 587) + (el.blue() * 114)) / 1000)
  });
  return arr;
};

export const getScore = (contrast) => {
  let score = 'Fail';

  if (contrast >= 4.5 && contrast < 7) {
    score = 'AA';
  } else if (contrast >= 7) {
    score = 'AAA'
  }
  return score;
};

export const getLarge = (contrast) => {
  let large = null;

  if (contrast >= 3 && contrast < 4.5) {
    large = 'AA'
  } else if (contrast >= 4.5 && contrast < 7) {
    large = 'AAA'
  }
  return large;
};
