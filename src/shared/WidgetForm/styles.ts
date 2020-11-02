import styled from 'styled-components';
import { device } from '../../styles/devices';

export const Container = styled.div`
  @media ${device.md} {
    width: 100%;
    max-width: 65%;
  }
`;
