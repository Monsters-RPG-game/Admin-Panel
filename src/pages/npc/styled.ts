import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IContainerProps } from '../../types';
import { Container, ContainerBody } from '../../styled';

export const NpcContainer = styled(Container)<IContainerProps>`
  padding-top: 75px;
`;

export const NpcController = styled(motion.div)`
  width: 100%;
  padding: 0 15px 0 15px;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
`;

export const NpcInnerContainer = styled(ContainerBody)<IContainerProps>`
  margin: 0 auto;
  max-width: 1000px;
`;

export const NpcCard = styled(motion.div)`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  border: 1px solid grey;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
  box-shadow: 0 1px 2px ${(props): string => props.theme.shadows.black};
  margin: 15px;
`;
