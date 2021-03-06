new p5();

let font_impact = loadFont('assets/info/fonts/impact.ttf');
let font_ubuntu = loadFont('assets/info/fonts/Ubuntu.ttf');

let colors = {
  red: 'rgb(255, 0, 0)',
  orange: 'rgb(255, 128, 0)',
  yellow: 'rgb(255, 255, 0)',
  yellow_green: 'rgb(191, 255, 0)',
  green: 'rgb(64, 255, 0)',
  green_blue: 'rgb(0, 255, 128)',
  aqua: 'rgb(0, 255, 255)',
  blue: 'rgb(0, 64, 255)',
  purple: 'rgb(191, 0, 255)',
  pink: 'rgb(255, 0, 191)',
  black: 'rgb(0, 0, 0)',
  white: 'rgb(255, 255, 255)',
  offblack: 'rgb(33, 33, 33)',
  offwhite: 'rgb(224, 224, 224)'
};

let settings = {
  background_color: colors.offblack,
  text_color: colors.white,
  font_: font_impact,
  text_size: 24
};
