import { useAccountStore } from '../zustand/store';
import Cookies from '../tools/cookies';
import { ETokenNames } from '../enums';
import type { IFullError, IUser, IUserTokens } from '../types';
import { generateRandomName } from '../tools';

export const getUserLogin = async (): Promise<IUser> => {
  const accessToken = new Cookies().getToken(ETokenNames.Access);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const server = import.meta.env.VITE_API_BACKEND as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const home = import.meta.env.VITE_API_HOME as string;

  // eslint-disable-next-line compat/compat
  const res = await fetch(`${server}/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': home,
    },
  });
  if (res.ok) {
    return (await res.json()) as IUser;
  }
  const err = (await res.json()) as IFullError;
  throw err;
};

// eslint-disable-next-line import/prefer-default-export
export const loginUser = async (): Promise<void> => {
  const { setAccount } = useAccountStore.getState();

  const data = await getUserLogin();
  setAccount({ sub: data.sub, login: data.login });
};

const dec2hex = (dec: string): string => {
  return `0${dec.toString()}`.substring(-2);
};

export const generateCodeVerifier = (): string => {
  const array = new Uint32Array(56 / 2);
  window.crypto.getRandomValues(array);
  return Array.from(array as unknown as string[], dec2hex)
    .join('')
    .slice(0, 128);
};

export const sha256 = async (plain: string): Promise<ArrayBuffer> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
};

export const base64urlencoded = (a: ArrayBuffer): string => {
  let str = '';
  const bytes = new Uint8Array(a);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    str += String.fromCharCode(bytes[i] as number);
  }
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

export const generateCodeChallengeFromVerifier = async (val: string): Promise<string> => {
  const hashed = await sha256(val);
  return base64urlencoded(hashed);
};

export const sendToLoginPage = async (): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const redirectUrl = import.meta.env.VITE_API_REDIRECT_LOGIN_URL as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const clientId = import.meta.env.VITE_API_CLIENT_ID as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const server = import.meta.env.VITE_API_BACKEND as string;
  const verifier = generateCodeVerifier();
  const challenge = await generateCodeChallengeFromVerifier(verifier);
  sessionStorage.setItem('verifier', verifier);

  // eslint-disable-next-line compat/compat
  const queryParams = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUrl,
    nonce: generateRandomName(),
    scope: 'openid',
    code_challenge_method: 'S256',
    code_challenge: challenge,
  }).toString();
  window.location.href = `${server}/auth?${queryParams}`;
};

export const login = async (code: string): Promise<IUserTokens> => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const server = import.meta.env.VITE_API_BACKEND as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const redirectUrl = import.meta.env.VITE_API_REDIRECT_LOGIN_URL as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const clientId = import.meta.env.VITE_API_CLIENT_ID as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const home = import.meta.env.VITE_API_HOME as string;
  const verifier = sessionStorage.getItem('verifier') as string;
  sessionStorage.removeItem('verifier');

  // eslint-disable-next-line compat/compat
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: redirectUrl,
    code_verifier: verifier,
  });

  // eslint-disable-next-line compat/compat
  const res = await fetch(`${server}/token`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': home,
    },
    body,
  });
  if (res.ok) {
    return (await res.json()) as IUserTokens;
  }
  const err = (await res.json()) as IFullError;
  throw err;
};

export const handleLogin = async (code: string): Promise<void> => {
  const data = await login(code);
  new Cookies().addLoginToken(data.access_token, data.expires_in);
  new Cookies().addRefreshToken(data.refresh_token, data.expires_in * 2);

  await loginUser();
};
