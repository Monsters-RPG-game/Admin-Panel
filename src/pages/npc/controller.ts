import { getNpcs as fetchNpc, refreshNpc as refreshAllNpc } from '../../controllers/npc';
import type { INpc } from '../../types/npc';

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
