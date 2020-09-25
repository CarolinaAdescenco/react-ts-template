import styled from 'styled-components';
import { shade } from 'polished';
import { device } from '../../styles/devices';

export const ContainerFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 24px 0 36px 0;
  flex-direction: column;

  @media ${device.md} {
    align-items: center;
    flex-direction: row;
  }
`;

export const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 24px;

  @media ${device.md} {
    width: 350px;
    margin-top: 0px;
  }

  input {
    height: 56px;
    margin-bottom: 0px;
    padding: 0 15px;
    border-radius: 10px 0 0 10px;
    border: none;
    background: #f4ede8;
    border: 2px solid #f4ede8;

    width: 100%;

    @media ${device.lg} {
      flex: 1;
    }

    &:focus {
      border: 2px solid #ff9000;
    }
  }

  button {
    margin: 0;
    border-radius: 0 10px 10px 0;
    width: auto;
  }
`;

export const CardProvider = styled.div`
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
