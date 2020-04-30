import { createGlobalStyle } from 'styled-components';
/* prettier-ignore */
export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{ box-sizing: border-box; }
  :root{
    --clr-header-white: #FEFEFE;
    --clr-table-alt-row: #DEEEEE;
    /* --clr-whiteish: #F0F0F0; */
    /* --clr-other: #FFF7F0; */
    --clr-light: #DDDDDD;
    --clr-gray: #777777;
    --clr-body-bkg: #F0F8FF;
    --header-red: #d3425f;
    --header-green: #41933c;
    --boxshadow: 0px 2px 3px 0px rgba(50,50,50,0.5);

    --col-interior-side-pad: 4px;
    --col-border: 1px solid #BBB;
    --center-col-border: 3px double #000;
    --blk-border: 1px solid #000000;
    --row-border: 1px solid #777777;
    --tbody-border: 1px solid rgba(50,50,50,0.5);

    --body-font-size: 1rem;
    --supertitle-line-height: 0.9;
    --supertitle-font-size: 0.8rem;
    --supertitle-padding: 0;
    --tr_header-font-size: 130%;
    --tr_header-margin-bottom: -0.2em;
    --col-th-font-size: 1em;

    @media screen and (min-width: 480px){
      --body-font-size: 1.1rem;
      --tr_header-margin-bottom: -0.1em;
      --supertitle-line-height: 1.1;
      --supertitle-font-size: 0.9rem;
      --supertitle-padding: unset;
    }
    @media screen and (min-width: 720px){ /* Setup VERTICAL Tablet */
      --body-font-size: 1.3rem;
      --tr_header-font-size: 140%;
      --tr_header-margin-bottom: -0.2em;
    }
    @media screen and (min-width: 840px){ /* Back to Desktop HORIZONTAL layout */
      --col-th-font-size: 0.8em;
      --tr_header-font-size: 130%;
      --body-font-size: 1.2rem;
    }
    /* @media screen and (min-width: 960px){ --body-font-size: 1.3rem; } */
  }

  html,body{ height:100%; margin:0; padding:0;}
  body {
    background: var(--clr-body-bkg);
    font-family: 'Roboto Condensed', sans-serif;
    font-size: var(--body-font-size);
    font-style: italic;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
/***
Material Design
xs: [0/360px] - 4 col
sm, small: 600px - 8 col
(840px - shift from 8 to 12 col)
md, medium: 960px - 12col
lg, large: 1280px - 12col
xl, extra-large: 1920px - 12col
***/