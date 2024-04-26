import type { DefaultTheme } from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    background: ${(props): string => props.theme.background.default};
    font-family: "JetBrains Mono ExtraLight", serif;
  }
`;

const Theme: React.FC<{
  children: React.ReactNode;
  theme: DefaultTheme;
}> = ({ children, theme }) => {
  const th = { ...theme };
  return <ThemeProvider theme={th}>{children}</ThemeProvider>;
};

export default Theme;
