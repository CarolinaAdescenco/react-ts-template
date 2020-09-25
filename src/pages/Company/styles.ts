import styled from 'styled-components';
import { device } from '../../styles/devices';

export const TitleWidget = styled.h3`
  height: 90px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-direction: column;
  text-align: center;
  margin: auto;

  svg {
    margin-bottom: 30px;
  }
`;

export const TitlePage = styled.h3`
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

  svg {
    margin-right: 10px;
  }
`;
