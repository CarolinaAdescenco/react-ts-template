import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../styles/devices';

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;

  svg {
    color: var(--dark-pink);
    font-size: 32px;
  }

  span {
    font-family: 'Advent Pro', sans-serif;
    display: none;
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
