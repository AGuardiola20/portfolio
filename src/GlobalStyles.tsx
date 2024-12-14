import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }
  h1, h2, h3,h4, h5, p{
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

`;

export default GlobalStyles;
