import { keyframes } from 'styled-components';

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const moveAround = keyframes`
  0% {
    left: 0;
  }
  50% {
    left: 80%;
  }
  100% {
    left: 0;
  }
`;

export const slowSlideRight = {
  init: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      delay: 0,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
  exit: {
    x: '-120vw',
    transition: {
      delay: 0,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};
