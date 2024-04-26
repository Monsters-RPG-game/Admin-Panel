import styled from 'styled-components';
import { motion } from 'framer-motion';

// eslint-disable-next-line import/prefer-default-export
export const Navbar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background: ${(props): string => props.theme.background.default};
  border: 1px solid ${(props): string => props.theme.colors.default};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 1px 1px 1px ${(props): string => props.theme.shadows.black};
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;
