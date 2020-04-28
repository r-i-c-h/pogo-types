import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* prettier-ignore */
  *,*::before,*::after{ box-sizing: border-box; }
  /* prettier-ignore */
  :root{
    --clr-header-white: #FEFEFE;
    /* --clr-whiteish: #F0F0F0; */
    --clr-light: #DDDDDD;
    --clr-gray: #777777;
    --clr-body-bkg: #F0F8FF;
    /* --clr-other: #FFF7F0; */
    --header-red: #d3425f;
    --header-green: #41933c;
    --clr-table-alt-row: #DEEEEE;
    --col-interior-side-pad: 4px;
    --col-border: 1px solid #BBB;
    --blk-border: 1px solid #000000;
    --row-border: 1px solid #777777;
    --center-col-border: 3px double #000;
    --tbody-border: 1px solid rgba(50,50,50,0.5);
    --boxshadow: 0px 2px 3px 0px rgba(50,50,50,0.5);
  }
  /* prettier-ignore */
  html,body{ height:100%; margin:0; padding:0;}
  body {
    background: var(--clr-body-bkg);
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
    font-style: italic;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @media screen and (min-width: 400px){
      font-size: 1.1rem;
    }
    @media screen and (min-width: 639px){
      font-size: 1.3rem;
    }
    @media screen and (min-width: 719px){
      font-size: 1.4rem;
    }
    @media screen and (min-width: 769px){
      font-size: 1.5rem;
    }
    @media screen and (min-width: 799px){
      font-size: 1.6rem;
    }
    @media screen and (min-width: 999px){
      font-size: 1.7rem;
    }
    @media screen and (min-width: 1100px){ /* scale back down for horizontal lappy/desktop display */
      font-size: 1rem;
    }

  }

`;
