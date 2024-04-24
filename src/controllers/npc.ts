import type { IFullError } from '../types';
import type { INpc } from '../types/npc';

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
