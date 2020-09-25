import styled from 'styled-components';

import { device } from '../../styles/devices';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin: 100px 0;

  @media ${device.lg} {
    margin: 50px 0;
  }
`;

export const AlertWrapper = styled.span`
  font-weight: 700;
  display: block;
  font-size: 32px;
  margin-bottom: 40px;

  @media ${device.md} {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

export const MessageWrapper = styled.p`
  color: #fff;
  font-weight: 400;
  text-align: center;

  @media ${device.lg} {
    font-size: 18px;
  }
`;

export const ImageWrapper = styled.img`
  margin: 50px auto;
  width: 50%;

  @media ${device.md} {
    margin: 30px auto;
  }

  @media ${device.lg} {
    width: 35%;
  }
`;
