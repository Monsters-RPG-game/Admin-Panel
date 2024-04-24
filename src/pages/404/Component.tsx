import React from 'react';
import { useNavigate } from 'react-router-dom';

const FourOhFour: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong...</h1>
      <button type="button" onClick={() => navigate('/')}>
        Go home
      </button>
    </div>
  );
};

export default FourOhFour;
