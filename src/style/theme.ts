import type { DefaultTheme } from 'styled-components';
import * as enums from '../enums';

const theme = {
  colors: {
    purple: 'rgb(91, 33, 182)',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  transition: {
    fast: '0.3s all ease-in-out',
    default: '0.5s all ease-in-out',
    semiSlow: '0.75s all ease-in-out',
    slow: '1s all ease-in-out',
  },
  shadows: {
    default: '#888888',
    black: '#000000',
  },
};

export const lightTheme: DefaultTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    default: '#1e1e1e',
    semiDefault: 'rgba(30, 30, 30, 0.7)',
    opposite: '#ffffff',
  },
  background: {
    default: 'rgb(255,255,255)',
    opposite: 'rgb(95, 95, 95)',
  },
  themeState: enums.EThemes.Light,
};

export const darkTheme: DefaultTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    default: '#ffffff',
    semiDefault: 'rgba(255, 255, 255, 0.7)',
    opposite: '#1e1e1e',
  },
  background: {
    default: 'rgb(95, 95, 95)',
    opposite: 'rgb(255,255,255)',
  },
  themeState: enums.EThemes.Dark,
};

export default theme;
