import type * as types from '../types';
import type { INpc } from '../types/npc';

export interface IAccountStore {
  account: types.IUser | undefined;
  setAccount: (data: types.IUser) => void;
}

export interface INpcStore {
  npc: INpc[];
  add: (data: INpc[]) => void;
  replace: (data: INpc[]) => void;
  update: (data: INpc, id: string) => void;
  remove: (id: string) => void;
}
