import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    overflow-x: hidden;
  }
  *{
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
  }
  img{
    max-width: 100%;
    vertical-align: top;
  }
  a {
    color: #333;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

`;
