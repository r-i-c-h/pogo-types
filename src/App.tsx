import React from 'react';
import styled from 'styled-components/macro';
import SVGSymbols from './components/SVGSymbols';
import Table from './components/Table';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  & h1, h2, h5 {
    text-align: center;
    margin: 0;
    padding: 0;
    /* font-size: 1.2rem; */
  }
`;

function App() {
  return (<>
    <SVGSymbols />
    <AppWrapper>
      <h1>POKEMON GO <em>TYPE INTERACTIONS</em></h1>
      <h5>(AKA &quot;Type Effectiveness&quot;)</h5>
      <Table />
    </AppWrapper>
  </>);
};

export default App;

/* ~~~~~ Mini CSS-Reset ~~~~~~ */