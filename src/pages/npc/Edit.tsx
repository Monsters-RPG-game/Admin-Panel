import React, { useEffect } from 'react';
import { Button, OverlayContainer, OverlayContainerBody } from '../../styled';
import { Form, Input, Label } from '../../styled/form';
import type { IAddNpcForm } from '../../types/forms';
import { editNpc } from './controller';
import { ExitIcon } from '../../styled/icons';
import type { INpc } from '../../types/npc';

const EditNpc: React.FC<{
  data: INpc;
  setToEdit: React.Dispatch<React.SetStateAction<INpc | undefined>>;
}> = ({ setToEdit, data }) => {
  useEffect(() => {
    (document.querySelector('#npcName') as HTMLInputElement).value = data.name;
    (document.querySelector('#npcRace') as HTMLInputElement).value = data.race;
    (document.querySelector('#npcLvl') as HTMLInputElement).valueAsNumber = data.lvl;
  });

  return (
    <OverlayContainer>
      <OverlayContainerBody>
        <ExitIcon onClick={() => setToEdit(undefined)}>X</ExitIcon>
        <Form onSubmit={(e: React.FormEvent<IAddNpcForm>): void => editNpc(e, data._id, setToEdit)}>
          <Label>Name</Label>
          <Input name="npcName" id="npcName" type="string" placeholder="Name" required />

          <Label>Race</Label>
          <Input name="race" id="npcRace" type="string" placeholder="Race" required />

          <Label>Lvl</Label>
          <Input name="lvl" id="npcLvl" type="number" placeholder="Lvl" max={1000} min={0} required />

          <Button type="submit">Update</Button>
        </Form>
      </OverlayContainerBody>
    </OverlayContainer>
  );
};

export default EditNpc;
