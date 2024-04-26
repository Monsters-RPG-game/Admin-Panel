import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IContainerProps } from '../types';

/**
 * Container of elements used to cover space
 */
// eslint-disable-next-line import/prefer-default-export
export const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
`;

/**
 * Container's body user to center elements inside
 */
export const ContainerBody = styled(Container)<IContainerProps>`
  display: flex;
  flex-direction: ${(props): string => props.$direction ?? 'column'};
  justify-content: ${(props): string => props.$justify ?? 'center'};
  align-items: ${(props): string => props.$align ?? 'center'};
  flex-wrap: ${(props): string => props.$wrap ?? 'wrap'};
  overflow-y: ${(props): string => (props.$noScroll ? 'hidden' : 'auto')};
  overflow-x: hidden;
  background: ${(props): string => props.theme.background.default};
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.semiSlow};
`;

export const App = styled(motion.div)`
  background: ${(props): string => props.theme.background.default};
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.slow};
  width: 100%;
`;

export const OverlayContainer = styled(Container)`
  width: 100%;
  height: 100vh;
  background: rgba(100, 100, 100, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 7;

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (max-width: 767px) {
    align-items: flex-start;
  }
`;

export const OverlayContainerBody = styled('div')`
  position: relative;
  border-left: 1px solid grey;
  background: ${(props): string => props.theme.background.semiTransparent};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  transition: ${(props): string => props.theme.transition.semiSlow};

  * {
    margin: 10px auto;
  }

  @media (min-width: 768px) {
    min-height: 300px;
    height: fit-content;
    width: 500px;
    border-radius: 20px;
  }

  @media (max-width: 767px) {
    height: 100%;
    width: 100%;
  }
`;
