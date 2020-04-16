import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* prettier-ignore */
  *,*::before,*::after{ box-sizing: border-box; }
  /* prettier-ignore */
  :root{
    --header-white: #fefefe;
    --clr-gray: #999999;
    --clr-light: #dddddd;
    --col-border: 1px solid #bbb;
    --row-border: 1px solid #999;
    --center-col-border: 3px double #000;
    --boxshadow: 0px 2px 3px 0px rgba(50,50,50,0.5);
  }
  /* prettier-ignore */
  html,body{ height:100%; margin:0; padding:0;}
  body {
  background: #F0F8FF;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }



  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
