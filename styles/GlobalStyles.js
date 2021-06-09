import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body{
    font-size: 62.5%;
    color: #23242a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }  

  p{
    font-size: 1.1rem;
    line-height: 2rem;
  font-weight: 400;
  }
`;

export default GlobalStyle;
