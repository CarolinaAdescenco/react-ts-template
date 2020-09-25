import styled from 'styled-components';

import { device } from '../../styles/devices';

interface SelectorProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  overflow: scroll;
  margin-top: 36px;
`;

export const Selector = styled.div<SelectorProps>`
  display: flex;
  align-items: center;
  border-radius: 5px;;
  background: ${props => (props.selected ? '#ff9000' : '#3e3b47')};
  color: ${props => (props.selected ? '#28262e' : '#f4ede8')};
  margin: 16px 0;
  padding: 16px;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;
  min-width: 240px;
  margin-right: 15px;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  > img {
    width: 32px;
    height: 32px;
    height: auto;
    border-radius: 50%;
    margin-right: 16px;
  }

  @media ${device.md} {
    min-width: 250px;
    margin-right: 16px;
  }
`;
