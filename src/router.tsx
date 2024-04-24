import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as pages from './pages';

const Routers: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<pages.Home />} />
        <Route path="*" element={<pages.FourOhFour />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routers;
