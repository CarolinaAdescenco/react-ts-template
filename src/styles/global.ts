import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

import { device } from './devices';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@300&display=swap');

  :root{
    --dark: #121214;
    --gray: #28262e;
    --blue: #4ca7d4;
    --dark-blue: #7cceef;
    --light-blue: #cde9f6;
    --dark-pink: #d43f64;
    --light-pink: #f25870;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    color: #FFF;
    background: var(--dark);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 400;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  main{
    display: flex;
    flex-direction: column;
    margin: 24px 0;

    @media ${device.md} {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  h1 {
    font-size: 24px;
    margin-bottom: 8px;
    text-align: left;

    @media ${device.md} {
      font-size: 36px;
      margin-bottom: 16px;
    }
  }

  .container{
    width: 90%;
    max-width: 1200px;
    padding: 0 15px;
    margin: auto;
  }

  .DayPicker {
    border-radius: 5px;
    margin-top: 50px;

    @media ${device.md}{
      margin-top: 0;
    }
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 5px;
  }

  .DayPicker,
  .DayPicker-Month {
    max-width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 5px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 5px;
    color: #232129 !important;
  }
`;
