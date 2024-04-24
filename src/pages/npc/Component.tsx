import React, { useEffect, useState } from 'react';
import { NpcCard, NpcContainer, NpcController, NpcInnerContainer } from './styled';
import { Button, Icon } from '../../styled';
import { useNpcStore } from '../../zustand/store';
import { getNpcs, refreshNpc } from './controller';
import Loading from '../../components/Loader';

const Npc: React.FC = () => {
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
      <NpcController>
        <Button onClick={(): void => refreshNpc(page, replaceNpc, setLoading)}>Refresh data</Button>
        <Button onClick={(): void => getNpcs(page, addNpc, setLoading)}>Get data</Button>
      </NpcController>
      <NpcInnerContainer $direction="row" $justify="space-around">
        {npc.map((n) => (
          <NpcCard key={n._id}>
            <span>Name: {n.name}</span>
            <span>
              <Icon title="strenght" className="icon-shield" /> 1
              <Icon title="inteligence" className="icon-hand-grab-o" /> 2
            </span>
          </NpcCard>
        ))}
      </NpcInnerContainer>
    </NpcContainer>
  );
};

export default Npc;
