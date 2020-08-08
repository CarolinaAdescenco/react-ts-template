import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  height: 60px;

  border: 2px solid #232129;
  color: #666360;

  ${props =>
    props.isErrored &&
    css`
      border-color: red;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border: 2px solid #ff9000;
    `}

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;

    ${props =>
      props.isFilled &&
      css`
        color: #ff9000;
      `}
  }
`;

export const Error = styled(Tooltip)`
  margin: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: red;
    color: #fff;

    &:before {
      border-color: #c53030 transparent;
    }
  }
`;
