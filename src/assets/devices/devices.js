const SIZE = {
  min: {
    MOBILE_DEVICES: 320,
    TABLETS: 481,
    SMALL_SCREENS_AND_LAPTOPS: 769,
    DESCTOPS_AND_LARGE_SCREENS: 1025,
    EXTRA_LARGE_SCREENS_AND_TV: 1201,
  },
  max: {
    MOBILE_DEVICES: 480,
    TABLETS: 768,
    SMALL_SCREENS_AND_LAPTOPS: 1024,
    DESCTOPS_AND_LARGE_SCREENS: 1200,
  },
};

const getMedia = (size, min) => `@media screen and (${min ? `min-width:` : `max-width:`} ${size}px)`

export const DEVICE = {
  min: {
    MOBILE_DEVICES: getMedia(SIZE.min.MOBILE_DEVICES, true),
    TABLETS: getMedia(SIZE.min.TABLETS, true),
    SMALL_SCREENS_AND_LAPTOPS: getMedia(SIZE.min.SMALL_SCREENS_AND_LAPTOPS, true),
    DESCTOPS_AND_LARGE_SCREENS: getMedia(SIZE.min.DESCTOPS_AND_LARGE_SCREENS, true),
    EXTRA_LARGE_SCREENS_AND_TV: getMedia(SIZE.min.EXTRA_LARGE_SCREENS_AND_TV, true),
  },
  max: {
    MOBILE_DEVICES: getMedia(SIZE.MOBILE_DEVICES_MAX, false),
    TABLETS: getMedia(SIZE.max.TABLETS, false),
    SMALL_SCREENS_AND_LAPTOPS: getMedia(SIZE.max.SMALL_SCREENS_AND_LAPTOPS, false),
    DESCTOPS_AND_LARGE_SCREENS: getMedia(SIZE.max.DESCTOPS_AND_LARGE_SCREENS, false)
  },
};
