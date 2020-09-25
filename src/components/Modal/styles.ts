import styled from 'styled-components';
import { device } from '../../styles/devices';

export const Wrapper = styled.div`
  background: #121214c9;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;

  @media ${device.lg} {
    width: 600px;
  }
`;
