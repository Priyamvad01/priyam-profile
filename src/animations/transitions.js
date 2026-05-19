import { easings } from './easings'

export const transitions = {
  base: {
    duration: 0.54,
    ease: easings.cinematic,
  },
  reveal: {
    duration: 0.62,
    ease: easings.premium,
  },
  slow: {
    duration: 0.74,
    ease: easings.soft,
  },
  quick: {
    duration: 0.22,
    ease: easings.precise,
  },
  hover: {
    duration: 0.2,
    ease: easings.cinematic,
  },
  menu: {
    duration: 0.26,
    ease: easings.premium,
  },
}
