import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Back } from './styles';

const BackButton: React.FC = () => {
  const history = useHistory();

  const back = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Back onClick={() => back()}>
      <FiChevronLeft />
      <span>Voltar</span>
    </Back>
  );
};

export default BackButton;
