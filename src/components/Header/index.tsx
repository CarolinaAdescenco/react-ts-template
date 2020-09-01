import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { HeaderWrapper, HeaderContent, Profile } from './styles';

import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <HeaderWrapper>
      <HeaderContent>
        <img src={logo} alt="" />

        <Profile>
          <img src={user.avatar_url} alt={user.name} />

          <div>
            <span>Bem vindo,</span>
            <Link to="/profile">
              <strong>{user.name}</strong>
            </Link>
          </div>
        </Profile>

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
