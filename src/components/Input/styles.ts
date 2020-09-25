import styled, { css } from 'styled-components';

import Tooltip from '../../shared/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  invisible?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 5px;
  padding: 16px;
  width: 100%;
  height: 60px;

  border: 2px solid #232129;
  color: #666360;
  align-items: center;
  margin: 10px 0;

  ${props =>
    props.isErrored &&
    css`
      border-color: red;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #7bceef;
      border: 2px solid #7bceef;
    `}



  display: ${props => (props.invisible ? 'none' : 'flex')} ;


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
        color: #7bceef;
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
