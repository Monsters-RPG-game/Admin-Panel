import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IInputProps } from '../types';

export const Input = styled(motion.input)<IInputProps>`
  border: none;
  outline: none;
  width: 90%;
  max-width: ${(props): string => (props.$full ? '100%' : '200px')};
  font-size: 1.1em;
  background: none;
  color: ${(props): string => props.theme.colors.default};
  border-bottom: 1px solid ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.semiSlow};

  &::placeholder {
    color: ${(props): string => props.theme.colors.semiDefault};
    transition: ${(props): string => props.theme.transition.semiSlow};
  }

  &:focus {
    width: ${(props): string => (props.$full ? '100%' : '90%')};
    max-width: ${(props): string => (props.$full ? '100%' : '220px')};
    border-bottom: 1px solid ${(props): string => props.theme.colors.purple};
    transition: ${(props): string => props.theme.transition.semiSlow};

    &::placeholder {
      color ${(props): string => props.theme.colors.purple};
      transition: ${(props): string => props.theme.transition.semiSlow};
    }
  }
`;

export const Label = styled(motion.h2)`
  font-size: 1.1rem;
  display: inline-block;
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  width: fit-content;
  min-width: 350px;
  max-width: 500px;

  input {
    margin: 1rem;
  }
`;
