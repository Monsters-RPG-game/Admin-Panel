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

    &::-webkit-scrollbar {
      width: 15px;
      border-radius: 50px;
      background: ${(props): string => props.theme.background.opposite};
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props): string => props.theme.colors.purple};
      border-radius: 50px;

      &:hover {
        cursor: pointer;
      }
    }
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
