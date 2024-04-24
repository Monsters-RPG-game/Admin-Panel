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

  &::-webkit-scrollbar {
    width: 15px;
    border-radius: 50px;
    background: ${(props): string => props.theme.background.opposite};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props): string => props.theme.colors.purple};
    border-radius: 50px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const App = styled(motion.div)`
  background: ${(props): string => props.theme.background.default};
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.slow};
  width: 100%;
`;
