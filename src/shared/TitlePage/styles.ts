import styled from 'styled-components';
import { device } from '../../styles/devices';

export const Container = styled.h2`
  font-weight: 300;
  font-size: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-direction: column;
  margin-top: 30px;

  @media ${device.md} {
    flex-direction: row;
    font-size: 24px;
    align-items: center;
  }

  strong {
    margin-right: 8px;
  }

  span {
    display: flex;
    align-items: center;
  }
`;

export const Icon = styled.div`
  svg {
    margin-right: 10px;
  }
`;
