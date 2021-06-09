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
    background: ${({ theme }) => theme.colors.bodyBgColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }  

  p{
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 1.1rem;
    line-height: 2rem;
    font-weight: 400;
  }

  h1, h2, h3{
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default GlobalStyle;
