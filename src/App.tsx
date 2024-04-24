import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import type { DefaultTheme } from 'styled-components';
import * as themes from './style/theme';
import Theme, { GlobalStyle } from './style/component';
import Controller from './Controller';
import './style/fontello/css/fontello.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.lightTheme);

  return (
    <Theme theme={theme}>
      <Router>
        <GlobalStyle />
        <Controller setTheme={setTheme} />
      </Router>
    </Theme>
  );
};

export default App;
