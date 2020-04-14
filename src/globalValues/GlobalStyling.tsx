import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* prettier-ignore */
  *,*::before,*::after{ box-sizing: border-box; }
  /* prettier-ignore */
  :root{
    font-family: sans-serif;
    margin: 1rem;
    --foo: 123px;
    --center-col-border: 3px double #000;
    --col-border: 1px solid #bbb;
    --row-border: 1px solid #999;
  }
  /* prettier-ignore */
  html,body{ height:100%; margin:0;padding:0;}
  body {
    background: lightblue;
    font-family: 'Oswald', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;