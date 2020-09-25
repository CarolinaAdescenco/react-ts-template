import styled from 'styled-components';
import { device } from '../../styles/devices';

export const Back = styled.div`
  cursor: pointer;
  background: transparent;
  margin: 24px 0;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  margin-left: 35px;

  svg {
    color: #ff9000;
    margin-right: 12px;
    font-size: 14px;
  }

  span {
    color: #f4ede8;
    font-size: 14px;
    display: none;

    @media ${device.lg} {
      display: flex;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;
