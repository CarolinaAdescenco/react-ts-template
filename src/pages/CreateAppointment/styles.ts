import styled from 'styled-components';

import { device } from '../../styles/devices';

interface CardProviderProps {
  selected: boolean;
}

interface HourProps {
  available: boolean;
  selected: boolean;
}

export const ContainerProviders = styled.div`
  display: flex;
  overflow: scroll;
  margin-top: 36px;
`;

export const CardProvider = styled.div<CardProviderProps>`
  display: flex;
  align-items: center;
  border-radius: 5px;
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

export const ScheduleWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 24px;
    font-weight: 500;
  }

  @media ${device.md} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Calendar = styled.aside`
  width: 380px;
`;

export const HourWrapper = styled.aside`
  width: 100%;
  margin-top: 36px;
  width: 350px;

  hr {
    margin: 24px 0;
    border-color: #3e3b47;
  }

  @media ${device.md} {
    margin-left: 36px;
    margin-top: 0;
  }
`;

export const HourItem = styled.button<HourProps>`
  padding: 12px;
  border-radius: 5px;
  margin-right: 8px;
  width: 100%;
  min-width: 80px;
  max-width: 80px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  border: none;

  cursor: ${props => (props.available ? 'pointer' : 'not-allowed')};
  color: ${props => (props.selected ? '#233139' : '#f4ede8')};
  background: ${props => (props.selected ? '#ff9000' : '#3e3b47')};
  opacity: ${props => (props.available ? '1' : '0.3')};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  h3 {
    margin-bottom: 36px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 25px;
      height: 3px;
      background: #ff9000;
      bottom: -15px;
    }
  }

  div {
    display: flex;
    overflow: scroll;
    max-width: 350px;
  }
`;
