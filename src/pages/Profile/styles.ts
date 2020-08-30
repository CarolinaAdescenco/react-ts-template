import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  height: 144px;
  background: #28262e;
  display: flex;
  align-items: center;

  svg {
    color: #999591;
    margin-left: 100px;
    transition: all 0.2s;
    width: 20px;
    height: 20px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: -120px auto 0 auto;

  form {
    margin: 50px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    .container-password {
      margin-top: 32px;
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  align-self: center;
  position: relative;

  img {
    width: 185px;
    height: 185px;
    border-radius: 50%;
  }

  label {
    width: 46px;
    height: 46px;
    background: #ff9000;
    border: none;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    transition: background 0.2s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    input {
      display: none;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
