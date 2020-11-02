import styled from 'styled-components';
import { device } from '../../styles/devices';

export const Sidebar = styled.aside`
  width: 100%;

  @media ${device.md} {
    max-width: 300px;
  }
`;
