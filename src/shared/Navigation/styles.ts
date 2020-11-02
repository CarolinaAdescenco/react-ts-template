import styled from 'styled-components';
import { device } from '../../styles/devices';

export const Navigation = styled.div`
  display: flex;
  overflow: scroll;
  margin-top: 16px;

  @media ${device.md} {
    flex-direction: column;
    margin-top: 0;
  }
`;
