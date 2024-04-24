import React, { useEffect, useState } from 'react';
import type { DefaultTheme } from 'styled-components';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Cookies from './tools/cookies';
import { EThemes, ETokenNames } from './enums';
import AppRouter from './router';
import * as themes from './style/theme';
import Loading from './components/Loader';
import { App, Button, ContainerBody, Link, Navbar, NavIcon } from './styled';
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
      <Link to="/">Home</Link>
      <span>
        <Link to="/npc">Npc</Link>
      </span>
      <NavIcon onClick={() => changeTheme(setTheme, theme)} className="icon-cog" />
    </Navbar>
  );
};

const ViewsController: React.FC<{ setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>> }> = ({ setTheme }) => {
  const [ready, setReady] = useState<boolean>(false);
  const account = useAccountStore((state) => state.account);
  const navigate = useNavigate();

  useEffect(() => {
    setTheme(themes.lightTheme);
  }, [setTheme]);

  useEffect(() => {
    const accessToken = new Cookies().getToken(ETokenNames.Access);
    if (accessToken) {
      loginUser()
        .then((): void => setReady(true))
        .catch(() => {
          setReady(true);
        });
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line compat/compat
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      handleLogin(code)
        .then((): void => {
          setReady(true);
          return navigate('/');
        })
        .catch((err) => {
          setReady(true);
          navigate('/');
          console.log('Got err while logging in', err);
        });
    }
  }, [navigate]);

  if (!ready) {
    return <Loading />;
  }

  return (
    <App>
      {account?.sub ? (
        <>
          <StaticHandlers setTheme={setTheme} />
          <AppRouter />
        </>
      ) : (
        <ContainerBody>
          <Button
            onClick={() => {
              sendToLoginPage().catch((err) => console.log('Could not send to login page', err));
            }}
          >
            <h4>Log in</h4>
          </Button>
        </ContainerBody>
      )}
    </App>
  );
};

export default ViewsController;
