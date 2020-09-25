import React from 'react';

import image from '../../images/404.png';

import { Wrapper, ImageWrapper, MessageWrapper, AlertWrapper } from './styles';

interface Props {
  message?: string;
}

const Page404: React.FC<Props> = ({ message }) => {
  return (
    <Wrapper>
      <AlertWrapper>Ops...</AlertWrapper>
      <MessageWrapper>
        {message || 'Você não tem permissão para acessar essa página!'}
      </MessageWrapper>
      <ImageWrapper src={image} alt={`404 - ${message}`} />
    </Wrapper>
  );
};

export default Page404;
