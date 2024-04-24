import styled from 'styled-components';
import { motion } from 'framer-motion';

const BaseButton = styled(motion.button)`
  background: linear-gradient(
    140deg,
    ${(props): string => props.theme.background.opposite} 0.5%,
    ${(props): string => props.theme.background.default} 0.5%
  );
  background-size: 100% 100%;
  color: ${(props): string => props.theme.colors.default};
  padding: 3px;
  margin: 10px 0;
  border: 2px solid ${(props): string => props.theme.colors.default};
  border-radius: 5%;
  box-shadow: 1px 1px 1px ${(props): string => props.theme.shadows.black};
  width: 80%;
  transition: ${(props): string => props.theme.transition.default};
  font-weight: 200;
  letter-spacing: 0.9px;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    transition: ${(props): string => props.theme.transition.default};
    background-size: 30000% 100%;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const Button = styled(BaseButton)`
  font-size: 1.5em;
  width: 80%;
  min-width: 150px;
  max-width: fit-content;
  height: 45px;
`;
