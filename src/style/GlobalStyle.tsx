import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *::after, *::before {
    font-family: 'Josefin Sans', sans-serif;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1.6rem;
    background-attachment: fixed;
    background-color: rgba(14,22,40,1);
    color: white;
    /* background-image: radial-gradient(
    circle,
    #a2a0c8,
    #a7a5cc,
    #acabcf,
    #b1b0d3,
    #b6b6d6,
    #bcbcd9,
    #c1c1dc,
    #c7c7df,
    #cecfe3,
    #d6d7e7,
    #dddeeb,
    #e5e6ef
  ); */
  /* background-image: radial-gradient(circle, rgba(14,22,40,1) 30%, rgba(20,54,111,1) 100%); */
  background-image: linear-gradient(
      217deg,
      rgb(255 0 0 / 80%),
      rgb(255 0 0 / 0%) 70.71%
    ), linear-gradient(127deg, rgb(0 255 0 / 80%), rgb(0 255 0 / 0%) 70.71%),
    linear-gradient(336deg, rgb(0 0 255 / 80%), rgb(0 0 255 / 0%) 70.71%);
  }

  a, button {
    font-family: 'Josefin Sans', sans-serif;
  }
`;
