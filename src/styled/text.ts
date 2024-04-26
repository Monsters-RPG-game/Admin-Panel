import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as ReactLink } from 'react-router-dom';

export const Icon = styled(motion.i)`
  font-size: 1.5rem;
`;

export const NavIcon = styled(Icon)`
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Link = styled(ReactLink)`
  font-size: 1.5rem;
  text-decoration: none;
  color: ${(props): string => props.theme.colors.purple};

  &:hover {
    cursor: pointer;
  }
`;

export const Header = styled(motion.header)`
  text-align: center;
  font-size: 2rem;
  font-weight: lighter;
  letter-spacing: 0.9px;
  padding: 1rem;
  color: ${(props): string => props.theme.colors.default};
`;
