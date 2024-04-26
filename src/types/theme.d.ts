import 'styled-components';
import type * as enums from '../enums';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface DefaultTheme {
    themeState: enums.EThemes;
    colors: {
      purple: string;
      default: string;
      semiDefault: string;
      opposite: string;
    };
    background: {
      default: string;
      semiTransparent: string;
      opposite: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    transition: {
      fast: string;
      default: string;
      semiSlow: string;
      slow: string;
    };

    shadows: {
      default: string;
      black: string;
    };
  }
}
