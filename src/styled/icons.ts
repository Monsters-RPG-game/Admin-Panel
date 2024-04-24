import styled from 'styled-components';
import { motion } from 'framer-motion';
import { rotate } from '../style/animations';

// eslint-disable-next-line import/prefer-default-export
export const LoadingCircle = styled(motion.div)`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid ${(props): string => props.theme.colors.default};
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid transparent;
    border-right-color: ${(props): string => props.theme.colors.purple};
    animation: ${rotate} 2s linear infinite;
  }
`;
