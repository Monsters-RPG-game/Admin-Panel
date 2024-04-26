import React from 'react';
import { motion } from 'framer-motion';
import * as animation from '../style/animations';
import { ContainerBody, Header } from '../styled';
import * as icons from '../styled/icons';

const Loading: React.FC = () => {
  return (
    <motion.div variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody>
        <>
          <Header>Loading</Header>
          <icons.LoadingCircle />
        </>
      </ContainerBody>
    </motion.div>
  );
};

export default Loading;
