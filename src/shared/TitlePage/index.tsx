import React from 'react';

import { Container, Icon } from './styles';

interface TitleProps {
  text: string;
  icon?: any;
}

const TitlePage: React.FC<TitleProps> = ({ text, icon }) => {
  return (
    <Container>
      {text} {icon ? <Icon>{icon}</Icon> : ''}
    </Container>
  );
};

export default TitlePage;
