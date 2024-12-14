import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }
  h1,
  h2{
    margin: 0;
    padding: 0;
    font-family: "Bebas Neue", sans-serif;
  }
 h3,
 h4, 
 h5, 
 p{
    margin: 0;
    padding: 0;
    font-family: "Manrope", sans-serif;
  }

`;

export default GlobalStyles;
