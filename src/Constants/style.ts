export const COLOR = {
  LIGHT_BLUE: '#73CAF9',
  PRIMARY_BLUE: '#1695fa',
  SECONDARY_BLUE: '#1085F7',
  THIRD_BLUE: '#16C2F5',
  FOURTH_BLUE: '#1265F2',
  SHADOW_BLUE: '#074CAC',
  BORDER_BLUE: '#14C3F5',
  BACKGROUND_BLUE: '#031B3C',
  WHITE: '#FFF',
  GREY: '#F5F5F5',
  GREY_09: 'rgba(0, 0, 0, 0.09)',
  GREY_26: 'rgba(0, 0, 0, 0.26)',
  DISABLED_GREY: '#54657A',
  GREY_TEXT: '#687E98',
};

export const SIZE = (size: number): string => `calc(100vw * ${size} / 375)`;

export const MOBILE_BREAKPOINT = 426;
