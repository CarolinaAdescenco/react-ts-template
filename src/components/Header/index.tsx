import React, { useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import BackButton from '../../shared/BackButton';
import AvatarPlaceholder from '../../images/user-placeholder.png';

import Logo from '../../shared/Logo';
import { useAuth } from '../../hooks/auth';
import {
  HeaderWrapper,
  NavContent,
  Profile,
  Hamburguer,
  Sidebar,
  SignOut,
  List,
  Item,
} from './styles';

const menu = [
  {
    path: '/dashboard',
    label: 'Home',
  },
  {
    path: '/providers',
    label: 'Prestadores',
  },
];

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  const path = window.location.pathname;

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper open={open}>
      <NavContent>
        <Logo />

        {path !== '/dashboard' && <BackButton />}

        <Sidebar open={open}>
          <List>
            {menu.map((item, i) => (
              <Item key={i} to={item.path}>
                {item.label}
              </Item>
            ))}
          </List>

          <SignOut type="button" onClick={signOut}>
            <FiPower />
          </SignOut>
        </Sidebar>

        {path !== '/profile' && (
          <Profile>
            <Link to="/profile">
              <strong>{user.name}</strong>
              <img src={user.avatar_url || AvatarPlaceholder} alt={user.name} />
            </Link>
          </Profile>
        )}

        <Hamburguer
          onClick={handleOpenMenu}
          className={`${open === true ? 'is-active' : ''}`}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </Hamburguer>
      </NavContent>
    </HeaderWrapper>
  );
};

export default Header;
