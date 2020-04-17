import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* prettier-ignore */
  *,*::before,*::after{ box-sizing: border-box; }
  /* prettier-ignore */
  :root{
    --header-white: #fefefe;
    --clr-light: #dddddd;
    --clr-gray: #777777;
    --clr-1: #f0f8ff;
    --clr-2: #deeeee;
    --col-border: 1px solid #bbb;
    --row-border: 1px solid var(--clr-gray);
    --center-col-border: 3px double #000;
    --tbody-border: 1px solid rgba(50,50,50,0.5);
    --boxshadow: 0px 2px 3px 0px rgba(50,50,50,0.5);
    --col-interior-side-pad: 5px;
  }
  /* prettier-ignore */
  html,body{ height:100%; margin:0; padding:0;}
  body {
    background: var(--clr-1);
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
    font-style: italic;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }



  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
