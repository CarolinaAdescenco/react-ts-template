import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--light-pink);
  height: 60px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 700;
  margin: 5px 0;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  &:hover {
    background: ${shade(0.2, '#f25870')};
  }

  svg {
    font-size: 20px;
    margin-right: 10px;
  }
`;
