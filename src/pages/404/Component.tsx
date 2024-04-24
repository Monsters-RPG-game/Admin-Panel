import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBody } from '../../styled';

const FourOhFour: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ContainerBody>
      <h1>Something went wrong...</h1>
      <button type="button" onClick={() => navigate('/')}>
        Go home
      </button>
    </ContainerBody>
  );
};

export default FourOhFour;
