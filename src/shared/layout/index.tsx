import React from 'react';

import { MainContainer, Wrapper } from '../../styles/shared';
import Header from '../../components/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Wrapper>{children}</Wrapper>
      </MainContainer>
    </>
  );
};

export default Layout;
