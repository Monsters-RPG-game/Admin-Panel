import React, { useEffect, useState } from 'react';
import { EditIcon, NpcCard, NpcContainer, NpcController, NpcInnerContainer, RemoveIcon } from './styled';
import { Button, Icon } from '../../styled';
import { useNpcStore } from '../../zustand/store';
import { getNpcs, refreshNpc, removeNpc } from './controller';
import Loading from '../../components/Loader';
import AddNpc from './Add';
import EditNpc from './Edit';
import type { INpc } from '../../types/npc';

const Npc: React.FC = () => {
  const [add, setAdd] = useState<boolean>(false);
  const [toEdit, setToEdit] = useState<INpc | undefined>(undefined);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const npc = useNpcStore((state) => state.npc);
  const addNpc = useNpcStore.getState().add;
  const replaceNpc = useNpcStore.getState().replace;

  useEffect(() => {
    setPage(1);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <NpcContainer>
      {add ? <AddNpc setAdd={setAdd} /> : null}
      {toEdit ? <EditNpc setToEdit={setToEdit} data={toEdit} /> : null}
      <NpcController>
        <Button title="Refresh current data" onClick={(): void => refreshNpc(page, replaceNpc, setLoading)}>
          Refresh data
        </Button>
        <Button title="Refresh current data" onClick={(): void => setAdd(true)}>
          Add new
        </Button>
        <Button title="Fetch new data" onClick={(): void => getNpcs(page, addNpc, setLoading)}>
          Get data
        </Button>
      </NpcController>
      <NpcInnerContainer $direction="row" $justify="space-around">
        {npc.map((n) => (
          <NpcCard key={n._id}>
            <EditIcon title="edit" className="icon-pencil" onClick={() => setToEdit(n)} />
            <RemoveIcon title="remove" onClick={() => removeNpc(n._id)}>
              X
            </RemoveIcon>
            <span>Name: {n.name}</span>
            <span>Race: {n.race}</span>
            <span>Lvl: {n.lvl}</span>
            <span>
              <Icon title="strenght" className="icon-shield" /> {n.stats.strength}
              <Icon title="inteligence" className="icon-hand-grab-o" /> {n.stats.intelligence}
            </span>
          </NpcCard>
        ))}
      </NpcInnerContainer>
    </NpcContainer>
  );
};

export default Npc;
