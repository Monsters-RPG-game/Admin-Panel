import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IContainerProps } from '../../types';
import { Container, ContainerBody, Icon } from '../../styled';

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
  position: relative;
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

export const EditIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
`;

export const RemoveIcon = styled(motion.header)`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  font-size: 2rem;
  font-weight: lighter;
  letter-spacing: 0.9px;
  color: red !important;
  padding: 0 0 0 0.25em;
  margin: 0;
  color: ${(props): string => props.theme.colors.default};

  &:hover {
    cursor: pointer;
  }
`;
