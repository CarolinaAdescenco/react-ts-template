import React from 'react';

import { Wrapper, Modal } from './styles';

const WidgetModal: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Modal>{children}</Modal>
    </Wrapper>
  );
};

export default WidgetModal;
