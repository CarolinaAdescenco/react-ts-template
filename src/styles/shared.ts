import styled from 'styled-components';
import { device } from './devices';

export const MainContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  padding: 0 15px;
  margin: auto;
  position: relative;
`;

export const Wrapper = styled.div`
  position: absolute;
  z-index: -5;
  width: 90%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;

  @media ${device.md} {
    width: 100%;
    padding: 80px 0;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  padding: 0 15px;
  margin: auto;
`;
