import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0 {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(0, 5px);
    opacity: 0.5;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  background-color: transparent;

  .line {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 15px;
    background-color: #fff;
    margin: 2px;
  }

  .line:nth-last-child(1) {
    animation: ${loading} 0.6s 0.1s linear infinite;
  }
  .line:nth-last-child(2) {
    animation: ${loading} 0.6s 0.2s linear infinite;
  }
  .line:nth-last-child(3) {
    animation: ${loading} 0.6s 0.3s linear infinite;
  }
`;
