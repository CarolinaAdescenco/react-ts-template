import styled from 'styled-components';
import { shade } from 'polished';

import { device } from '../../styles/devices';

export const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;;
  background: #3e3b47;
  margin: 16px 0;
  padding: 20px;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  > img {
    width: 72px;
    height: 72px;
    height: auto;
    border-radius: 50%;
    margin-right: 24px;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      color: #f4ede8;
      font-size: 18px;
      margin-bottom: 8px;
    }

    span {
      color: #999591;
      font-size: 16px;
    }

    svg {
      margin-right: 8px;
      color: #ff9000;
    }
  }

  @media ${device.md} {
    width: 48%;
  }

  @media ${device.lg} {
    width: 32%;
    margin-right: 10px;
  }
`;
