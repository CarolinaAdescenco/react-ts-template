import styled from 'styled-components';
import { shade } from 'polished';
import { device } from '../../../styles/devices';

export const Header = styled.header`
  height: 120px;
  background: #28262e;
  display: flex;
  align-items: center;

  svg {
    color: #999591;
    transition: all 0.2s;
    width: 20px;
    height: 20px;

    &:hover {
      opacity: 0.7;
    }
  }

  @media ${device.lg} {
    height: 145px;
  }
`;

export const ContentWrapper = styled.div`
  @media ${device.md} {
    min-width: 400px;
  }
`;

export const Content = styled.div`
  form {
    margin: 50px auto;
    width: 95%;
    text-align: center;
    display: flex;
    flex-direction: column;

    @media ${device.md} {
      flex-direction: row;
      align-items: flex-start;
      width: 340px;
    }

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
  position: relative;

  @media ${device.md} {
    margin-right: 42px;
  }

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;

    @media ${device.s} {
      width: 185px;
      height: 185px;
    }
  }

  label {
    width: 46px;
    height: 46px;
    background: var(--blue);
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
      color: #fff;
    }

    input {
      display: none;
    }

    &:hover {
      background: ${shade(0.2, '#4ca7d4')};
    }
  }
`;
