import type { ENpcRace } from '../enums';

export interface ICharacterStats {
  intelligence: number;
  strength: number;
}

export interface IStats extends ICharacterStats {
  _id: string;
}

export interface INpc {
  _id: string;
  name: string;
  race: ENpcRace;
  lvl: number;
  inventory: string;
  stats: IStats;
  party: string;
}

export interface IAddNpc {
  name: string;
  race: ENpcRace;
  lvl: number;
}

export interface IUpdateNpc extends IAddNpc {
  id: string;
}
