import styled from 'styled-components';
import { device } from '../../../styles/devices';

interface SelectorProps {
  selected: boolean;
}

export const Selector = styled.div<SelectorProps>`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: ${props => (props.selected ? '#4ca7d4' : '#3e3b47')};
  color: ${props => (props.selected ? '#232129' : '#f4ede8')};
  margin: 5px 0;
  height: 50px;
  padding: 0 20px;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;
  min-width: 200px;
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
