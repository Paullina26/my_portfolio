import { createGlobalStyle } from 'styled-components';

//FONTS
//Anonymous Pro
//Petit Formal Script
//Niramit

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *::after, *::before {
    font-family: 'Jura', sans-serif;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  a, button {
    font-family: 'Niramit', sans-serif;
  }

  body {
    overflow-x: hidden;
    font-size: 1.6rem;
    background-attachment: fixed;
    background-color: rgba(14,22,40,1);
    color: white;
/*
rgb(91, 20, 111) 91 20 111
rgb(255, 0, 156) 255 0 156
rgba(14,22,40,1) 14 22 40
rgba(20,54,111,1) 20 54 111
rgb(41, 111, 249) 41 111 249
rgb(99, 229, 197) 99 229 197
*/
  background-image:
  linear-gradient(25deg, rgb(91 20 111 / 70%), rgb(14 22 40 / 30%) 50.71%),
  linear-gradient(50deg, rgb(20 54 111 / 70%), rgb(14 22 40 / 30%) 50.71%),
  linear-gradient(100deg, rgb(20 54 111 / 70%), rgb(14 22 40 / 30%) 50.71%),
  linear-gradient(150deg, rgb(20 54 111 / 70%), rgb(14 22 40 / 30%) 50.71%),
  linear-gradient(200deg, rgb(255 0 156 / 70%), rgb(14 22 40 / 30%) 50.71%),
  linear-gradient(250deg, rgb(20 54 111 / 70%), rgb(14 22 40 / 30%) 50.71%),
  linear-gradient(300deg, rgb(20 54 111 / 70%), rgb(14 22 40 / 30%) 50.71%),
  linear-gradient(360deg, rgb(91 20 111 / 70%), rgb(14 22 40 / 30%) 50.71%);
  }
`;
