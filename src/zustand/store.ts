import { create } from 'zustand';
import type * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export const useAccountStore = create<types.IAccountStore>((set) => ({
  account: undefined,
  setAccount: (user): void => set({ account: user }),
}));
