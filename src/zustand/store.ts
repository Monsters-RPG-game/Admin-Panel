import { create } from 'zustand';
import type * as types from './types';

export const useAccountStore = create<types.IAccountStore>((set) => ({
  account: undefined,
  setAccount: (user): void => set({ account: user }),
}));

export const useNpcStore = create<types.INpcStore>((set) => ({
  npc: [],
  replace: (npcs): void => set({ npc: npcs }),
  add: (npcs): void => {
    set((base) => {
      const newIds = npcs.map((n) => n._id);
      const filtered = base.npc.filter((e) => !newIds.includes(e._id));
      return { npc: [...filtered, ...npcs] };
    });
  },
  update: (npc, id): void => {
    set((base) => {
      const target = base.npc.findIndex((e) => e._id === id);
      if (target !== -1) {
        base.npc[target] = npc;
      }
      return base;
    });
  },
  remove: (id): void => {
    set((base) => {
      base.npc.filter((e) => e._id !== id);
      return base;
    });
  },
}));
