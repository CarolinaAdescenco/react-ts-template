import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/shared';
import { device } from '../../styles/devices';

interface HeaderProps {
  open: boolean;
}

interface SidebarProps {
  open: boolean;
}

export const Hamburguer = styled.div`
  cursor: pointer;
  margin-left: auto;
  z-index: 2;

  @media ${device.lg} {
    margin-left: 15px;
  }

  .line {
    width: 25px;
    height: 3px;
    border-radius: 5px;
    background-color: #ecf0f1;
    display: block;
    margin: 7px auto;
    -webkit-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }

  &.is-active {
    align-self: baseline;
    -webkit-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
    -webkit-transition-delay: 0.1s;
    -o-transition-delay: 0.1s;
    transition-delay: 0.1s;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);

    @media ${device.lg} {
      align-self: center;
    }
  }

  &.is-active .line:nth-child(2) {
    width: 0px;
  }

  &.is-active .line:nth-child(1),
  &.is-active .line:nth-child(3) {
    -webkit-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    transition-delay: 0.2s;
    background: var(--dark-pink);
  }

  &.is-active .line:nth-child(1) {
    -webkit-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }

  &.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-10px) rotate(90deg);
    -ms-transform: translateY(-10px) rotate(90deg);
    -o-transform: translateY(-10px) rotate(90deg);
    transform: translateY(-10px) rotate(90deg);
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    color: var(--dark-pink);
    font-size: 32px;
  }

  span {
    font-family: 'Advent Pro', sans-serif;
    display: none;
    color: #fff;
  }

  @media ${device.lg} {
    display: flex;
    height: 80px;
    font-size: 36px;

    svg {
      font-size: 36px;
      margin-right: 8px;
    }

    span {
      display: block;
    }
  }
`;

export const HeaderWrapper = styled.header<HeaderProps>`
  padding: 10px 0;
  background: var(--gray);

  a {
    text-decoration: none;
  }
`;

export const Sidebar = styled.aside<SidebarProps>`
  background: var(--gray);
  top: 0;

  width: 100%;
  height: 100%;
  position: absolute;

  z-index: 3;
  transition: all 0.3s;

  display: ${props => (props.open ? 'flex' : 'none')};
  z-index: 1;

  @media ${device.lg} {
    display: flex;
    width: 500px;
    right: ${props => (props.open ? '0px' : '-500px')};
    z-index: -1;
    margin-top: 100px;
    padding: 30px 20px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const Item = styled(Link)`
  font-size: 18px;
  margin-bottom: 15px;
  color: #fff;
`;

export const NavContent = styled(Container)`
  margin: 0 auto;
  display: flex;
  align-items: center;

  a {
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Profile = styled.div`
  display: none;
  align-items: center;
  margin-right: auto;

  @media ${device.lg} {
    display: flex;
    margin-left: auto;
    margin-right: 15px;
  }

  a {
    display: flex;
    align-items: center;
  }

  img {
    width: 56px;
    height: auto;
    border-radius: 50%;
    margin-left: 24px;
  }

  strong {
    display: none;

    @media ${device.lg} {
      display: block;
      color: var(--light-blue);
    }
  }
`;

export const SignOut = styled.button`
  background: transparent;
  border: 0;
  margin: 30px 10px;

  @media ${device.lg} {
    margin: 0 10px;
  }

  svg {
    color: #999591;
    width: 20px;
    height: 20px;
  }
`;
