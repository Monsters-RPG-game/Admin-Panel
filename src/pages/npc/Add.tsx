import React from 'react';
import { Button, OverlayContainer, OverlayContainerBody } from '../../styled';
import { Form, Input, Label } from '../../styled/form';
import type { IAddNpcForm } from '../../types/forms';
import { addNpc } from './controller';
import { ExitIcon } from '../../styled/icons';

const AddNpc: React.FC<{ setAdd: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setAdd }) => {
  return (
    <OverlayContainer>
      <OverlayContainerBody>
        <ExitIcon onClick={() => setAdd(false)}>X</ExitIcon>
        <Form onSubmit={(e: React.FormEvent<IAddNpcForm>): void => addNpc(e, setAdd)}>
          <Label>Name</Label>
          <Input name="npcName" id="npcName" type="string" placeholder="Name" required />

          <Label>Race</Label>
          <Input name="race" id="race" type="string" placeholder="Race" required />

          <Label>Lvl</Label>
          <Input name="lvl" id="lvl" type="number" placeholder="Lvl" max={1000} min={0} required />

          <Button type="submit">Add</Button>
        </Form>
      </OverlayContainerBody>
    </OverlayContainer>
  );
};

export default AddNpc;
