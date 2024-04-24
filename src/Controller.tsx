import React, { useEffect } from 'react';
import type { DefaultTheme } from 'styled-components';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Cookies from './tools/cookies';
import { EThemes, ETokenNames } from './enums';
import { App, Container, ContainerBody } from './components/containers';
import AppRouter from './router';
import * as themes from './style/theme';
import { Navbar } from './components/navbar';
import { Button } from './components';
import { useAccountStore } from './zustand/store';
import { handleLogin, loginUser, sendToLoginPage } from './controllers/account';

const changeTheme = (setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>, theme: DefaultTheme): void => {
  if (theme.themeState === EThemes.Light) return setTheme(themes.darkTheme);
  return setTheme(themes.lightTheme);
};

const StaticHandlers: React.FC<{
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}> = ({ setTheme }) => {
  const theme = useTheme();

  return (
    <Navbar>
      <Button type="button" onClick={() => changeTheme(setTheme, theme)}>
        <i className="icon-cog" />
      </Button>
    </Navbar>
  );
};

const ViewsController: React.FC<{ setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>> }> = ({ setTheme }) => {
  const account = useAccountStore((state) => state.account);
  const navigate = useNavigate();

  useEffect(() => {
    setTheme(themes.lightTheme);
  }, [setTheme]);

  useEffect(() => {
    const accessToken = new Cookies().getToken(ETokenNames.Access);
    if (accessToken) {
      loginUser().catch(() => {
        // ignored
      });
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line compat/compat
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      handleLogin(code)
        .then(() => navigate('/'))
        .catch((err) => {
          navigate('/');
          console.log('Got err while logging in', err);
        });
    }
  }, []);

  return (
    <App>
      {account?.sub ? (
        <>
          <StaticHandlers setTheme={setTheme} />
          <AppRouter />
        </>
      ) : (
        <Container>
          <ContainerBody>
            <Button
              onClick={() => {
                sendToLoginPage().catch((err) => console.log('Could not send to login page', err));
              }}
            >
              <h4>Log in</h4>
            </Button>
          </ContainerBody>
        </Container>
      )}
    </App>
  );
};

export default ViewsController;
