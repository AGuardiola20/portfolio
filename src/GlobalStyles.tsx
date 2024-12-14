import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
  }

 h1,h2,h3,
 h4, 
 h5, 
 p,
 a{
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: "Manrope", sans-serif;
  }
h1,
h2{
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
    
  }
`;

export default GlobalStyles;
