import type React from 'react';
import {
  addNpc as sendNpc,
  editNpc as sendEditNpc,
  getNpcs as fetchNpc,
  refreshNpc as refreshAllNpc,
  removeNpc as sendRemoveNpc,
} from '../../controllers/npc';
import type { IAddNpc, INpc, IUpdateNpc } from '../../types/npc';
import type { IAddNpcForm } from '../../types/forms';
import type { ENpcRace } from '../../enums';

export const refreshNpc = (
  page: number,
  replace: (data: INpc[]) => void,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  setLoading(true);
  refreshAllNpc(page)
    .then(({ data }): void => {
      setLoading(false);
      return replace(data);
    })
    .catch((err) => {
      setLoading(false);
      console.log('Could not refresh npc', err);
    });
};

export const getNpcs = (
  page: number,
  add: (data: INpc[]) => void,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  setLoading(true);
  fetchNpc(page)
    .then(({ data }): void => {
      setLoading(false);
      return add(data);
    })
    .catch((err) => {
      setLoading(false);
      console.log('Got err while fetching npcs', err);
    });
};

export const addNpc = (
  e: React.FormEvent<IAddNpcForm>,
  setAdd: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  e.preventDefault();
  const target = e.target as IAddNpcForm;
  const data: IAddNpc = {
    race: target.race.value as ENpcRace,
    lvl: Number(target.lvl.value as string),
    name: target.npcName.value,
  };

  sendNpc(data)
    .then((): void => {
      return setAdd(false);
    })
    .catch((err) => {
      console.log('Got err while adding npcs', err);
    });
};

export const editNpc = (
  e: React.FormEvent<IAddNpcForm>,
  id: string,
  setAdd: React.Dispatch<React.SetStateAction<INpc | undefined>>,
): void => {
  e.preventDefault();
  const target = e.target as IAddNpcForm;
  const data: IUpdateNpc = {
    race: target.npcRace.value as ENpcRace,
    lvl: target.npcLvl.valueAsNumber,
    name: target.npcName.value,
    id,
  };

  sendEditNpc(data)
    .then((): void => {
      return setAdd(undefined);
    })
    .catch((err) => {
      console.log('Got err while editing npcs', err);
    });
};

export const removeNpc = (id: string): void => {
  sendRemoveNpc(id).catch((err) => {
    console.log('Got err while removing npcs', err);
  });
};
