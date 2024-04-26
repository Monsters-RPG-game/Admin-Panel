import type { IFullError } from '../types';
import type { IAddNpc, INpc, IUpdateNpc } from '../types/npc';
import Cookies from '../tools/cookies';
import { ETokenNames } from '../enums';

export const removeNpc = async (id: string): Promise<void> => {
  const accessToken = new Cookies().getToken(ETokenNames.Access);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const server = import.meta.env.VITE_API_BACKEND as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const home = import.meta.env.VITE_API_HOME as string;

  // eslint-disable-next-line compat/compat
  const res = await fetch(`${server}/npc`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': home,
    },
    body: JSON.stringify({ id }),
  });
  if (res.ok) {
    return;
  }
  const err = (await res.json()) as IFullError;
  throw err;
};

export const addNpc = async (body: IAddNpc): Promise<void> => {
  const accessToken = new Cookies().getToken(ETokenNames.Access);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const server = import.meta.env.VITE_API_BACKEND as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const home = import.meta.env.VITE_API_HOME as string;

  // eslint-disable-next-line compat/compat
  const res = await fetch(`${server}/npc`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': home,
    },
    body: JSON.stringify(body),
  });
  if (res.ok) {
    return;
  }
  const err = (await res.json()) as IFullError;
  throw err;
};

export const editNpc = async (body: IUpdateNpc): Promise<void> => {
  const accessToken = new Cookies().getToken(ETokenNames.Access);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const server = import.meta.env.VITE_API_BACKEND as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const home = import.meta.env.VITE_API_HOME as string;

  // eslint-disable-next-line compat/compat
  const res = await fetch(`${server}/npc`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': home,
    },
    body: JSON.stringify(body),
  });
  if (res.ok) {
    return;
  }
  const err = (await res.json()) as IFullError;
  throw err;
};

export const getNpcs = async (page: number): Promise<{ data: INpc[] }> => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const server = import.meta.env.VITE_API_BACKEND as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const home = import.meta.env.VITE_API_HOME as string;

  // eslint-disable-next-line compat/compat
  const queryParams = new URLSearchParams({
    page: page.toString(),
  }).toString();

  // eslint-disable-next-line compat/compat
  const res = await fetch(`${server}/npc?${queryParams}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': home,
    },
  });
  if (res.ok) {
    return (await res.json()) as { data: INpc[] };
  }
  const err = (await res.json()) as IFullError;
  throw err;
};

export const refreshNpc = async (page: number): Promise<{ data: INpc[] }> => {
  const data: { data: INpc[] } = { data: [] };
  const promises: Promise<{ data: INpc[] }>[] = [];

  for (let i = 0; i < page; i++) {
    promises.push(getNpcs(i));
  }

  // eslint-disable-next-line compat/compat
  const results = await Promise.all(promises);
  results.forEach((e) => {
    data.data.push(...e.data);
  });
  return data;
};
