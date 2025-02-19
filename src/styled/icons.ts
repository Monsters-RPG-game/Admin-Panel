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

export const ExitIcon = styled(motion.header)`
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  font-size: 2rem;
  font-weight: lighter;
  letter-spacing: 0.9px;
  color: red !important;
  padding: 0.5rem;
  margin: 0;
  color: ${(props): string => props.theme.colors.default};

  &:hover {
    cursor: pointer;
  }
}`;
