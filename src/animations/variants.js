import { easings } from './easings'
import { transitions } from './transitions'

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: transitions.reveal,
  },
}

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.reveal,
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.065,
    },
  },
}

export const viewportReveal = {
  once: true,
  margin: '0px 0px 8% 0px',
  amount: 0.08,
}

export const cardHover = {
  y: -2,
}

export const cardTap = {
  y: 0,
}

export const navMenu = {
  closed: {
    opacity: 0,
    y: -6,
    scale: 0.985,
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.menu,
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.985,
    transition: transitions.quick,
  },
}

export const subtleFloat = {
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 8,
      ease: easings.soft,
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
}
