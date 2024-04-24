import type * as types from '../types';

export interface IAccountStore {
  account: types.IUser | undefined;
  setAccount: (data: types.IUser) => void;
}
