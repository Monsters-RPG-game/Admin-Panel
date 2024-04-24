import type { ENpcRace } from '../enums';

export interface INpc {
  _id: string;
  name: string;
  race: ENpcRace;
  lvl: number;
  inventory: string;
  stats: string;
  party: string;
}
