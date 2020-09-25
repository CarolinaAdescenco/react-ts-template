import styled, { css } from 'styled-components';

import Tooltip from '../../shared/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 5px;
  padding: 16px;
  width: 100%;
  height: 60px;
  margin: 10px 0;
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
      color: var(--dark-blue);
      border: 2px solid var(--dark-blue);
    `}

  display: flex;
  align-items: center;

  select {
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
        color: var(--dark-blue);
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
