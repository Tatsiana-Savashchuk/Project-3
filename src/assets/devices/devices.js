const SIZE = {
  MIN: {
    MOBILE: 320,
    TABLET: 481,
    LAPTOP: 769,
    DESCTOP: 1025,
    DESCTOP_L: 1201,
  },
  MAX: {
    MOBILE: 480,
    TABLET: 768,
    LAPTOP: 1024,
    DESCTOP: 1200,
  },
};

const getMedia = (size, min) => `@media screen and (${min ? `min-width:` : `max-width:`} ${size}px)`

export const DEVICE = {
  MIN: {
    MOBILE: getMedia(SIZE.MIN.MOBILE, true),
    TABLET: getMedia(SIZE.MIN.TABLET, true),
    LAPTOP: getMedia(SIZE.MIN.LAPTOP, true),
    DESCTOP: getMedia(SIZE.MIN.DESCTOP, true),
    DESCTOP_L: getMedia(SIZE.MIN.DESCTOP_L, true),
  },
  MAX: {
    MOBILE: getMedia(SIZE.MAX.MOBILE, false),
    TABLET: getMedia(SIZE.MAX.TABLET, false),
    LAPTOP: getMedia(SIZE.MAX.LAPTOP, false),
    DESCTOP: getMedia(SIZE.MAX.DESCTOP, false)
  },
};
