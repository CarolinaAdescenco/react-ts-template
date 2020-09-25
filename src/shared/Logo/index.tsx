import React from 'react';

import { FiBarChart2 } from 'react-icons/fi';

import { LogoWrapper } from './styles';

const Logo: React.FC = () => {
  return (
    <LogoWrapper to="/">
      <FiBarChart2 /> <span>control</span>
    </LogoWrapper>
  );
};

export default Logo;
