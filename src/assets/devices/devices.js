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

const getMedia = (size, min = true) => `@media screen and (${min ? `min-width:` : `max-width:`} ${size}px)`

export const DEVICE = {
  MIN: {
    MOBILE: getMedia(SIZE.MIN.MOBILE),
    TABLET: getMedia(SIZE.MIN.TABLET),
    LAPTOP: getMedia(SIZE.MIN.LAPTOP),
    DESCTOP: getMedia(SIZE.MIN.DESCTOP),
    DESCTOP_L: getMedia(SIZE.MIN.DESCTOP_L),
  },
  MAX: {
    MOBILE: getMedia(SIZE.MAX.MOBILE, false),
    TABLET: getMedia(SIZE.MAX.TABLET, false),
    LAPTOP: getMedia(SIZE.MAX.LAPTOP, false),
    DESCTOP: getMedia(SIZE.MAX.DESCTOP, false)
  },
};
